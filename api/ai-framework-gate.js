// api/ai-framework-gate.js
// 馥靈之鑰 AI 框架閘門 API
// 框架文字是核心知識產權，只有登入會員且有額度才能取得
// POST { system: "bazi" } + Authorization: Bearer <firebase_token>

var admin = null;
function getAdmin() {
  if (admin) return admin;
  var a = require('firebase-admin');
  if (!a.apps.length) {
    var sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
    a.initializeApp({ credential: a.credential.cert(sa) });
  }
  admin = a;
  return a;
}

// 從同目錄的 ai-prompt-test.js 取框架（server 端，不進前端）
var _cachedSystems = null;
function getSystems() {
  if (_cachedSystems) return _cachedSystems;
  var fs = require('fs');
  var path = require('path');
  var code = fs.readFileSync(path.join(__dirname, 'ai-prompt-test.js'), 'utf8');
  var defsEnd = code.indexOf('module.exports');
  var defs = code.substring(0, defsEnd);
  try {
    var fn = new Function(defs + '\nreturn SYSTEMS;');
    _cachedSystems = fn();
  } catch (e) { _cachedSystems = {}; }
  return _cachedSystems;
}

var PLAN_LIMITS = { free: 3, plus: 15, pro: 999999 };

module.exports = async function handler(req, res) {
  var origin = req.headers.origin || '';
  var allowed = ['https://hourlightkey.com', 'https://www.hourlightkey.com'];
  if (allowed.indexOf(origin) > -1) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  try {
    var authHeader = req.headers.authorization || '';
    if (!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: '需要登入才能使用 AI 指令', code: 'AUTH_REQUIRED' });
    }
    var fb = getAdmin();
    var decoded;
    try {
      decoded = await fb.auth().verifyIdToken(authHeader.substring(7));
    } catch (e) {
      return res.status(401).json({ error: '登入已過期，請重新登入', code: 'TOKEN_INVALID' });
    }
    var uid = decoded.uid;
    var db = fb.firestore();
    var userDoc = await db.collection('users').doc(uid).get();
    var plan = (userDoc.exists && userDoc.data().plan) || 'free';
    var limit = PLAN_LIMITS[plan] || 3;

    var today = new Date();
    var dateKey = new Date(today.getTime() + 8 * 3600000).toISOString().split('T')[0];
    var dailyRef = db.collection('users').doc(uid).collection('ai_daily').doc(dateKey);
    var dailyDoc = await dailyRef.get();
    var count = (dailyDoc.exists && dailyDoc.data().count) || 0;

    if (count >= limit) {
      return res.status(429).json({
        error: '今日 AI 額度已用完',
        code: 'QUOTA_EXCEEDED',
        plan: plan, used: count, limit: limit
      });
    }

    var body = req.body || {};
    var system = body.system || '';
    if (!system) return res.status(400).json({ error: '需要 system 參數' });

    var systems = getSystems();
    var sysData = systems[system];
    if (!sysData || !sysData.framework) {
      return res.status(404).json({ error: system + ' 框架不存在' });
    }

    await dailyRef.set({
      count: count + 1,
      lastUsed: fb.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    var fw = '';
    if (sysData.framework) fw += sysData.framework;
    if (sysData.books) fw += '\n\n' + sysData.books;
    if (sysData.navigation) fw += '\n\n' + sysData.navigation;

    return res.status(200).json({
      ok: true,
      framework: fw,
      quota: { used: count + 1, limit: limit, plan: plan }
    });
  } catch (e) {
    console.error('ai-framework-gate error:', e);
    return res.status(500).json({ error: '伺服器錯誤' });
  }
};
