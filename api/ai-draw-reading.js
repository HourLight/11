// ═══════════════════════════════════════
// 馥靈之鑰 · 馥靈智慧牌 AI 即時解讀 API
// Vercel Serverless Function
// v1.0 · 2026-03-23
// © 2026 Hour Light International
// ═══════════════════════════════════════
//
// 功能：接收抽牌結果 → 組合 prompt → 呼叫 Claude → 回傳解讀文字
//
// 端點：POST /api/ai-draw-reading
// Body: { n, cards: [{code, position, title, description}], question, unlockCode? }
//
// 解鎖碼驗證：
//   n=1 → 免費，不需要碼
//   n=3-7 → 需要解鎖碼（Firestore: unlock_codes/{code}）
//   n≥9 → 不走此 API（覺察師服務）
//
// 環境變數：
//   ANTHROPIC_API_KEY
//   FIREBASE_SERVICE_ACCOUNT（JSON 字串）
// ═══════════════════════════════════════

// ── Firebase Admin 懶載入 ──
let adminDb = null;

function getFirestore() {
  if (adminDb) return adminDb;
  const SA_JSON = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!SA_JSON) return null;
  try {
    const admin = require('firebase-admin');
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(SA_JSON)),
      });
    }
    adminDb = admin.firestore();
    return adminDb;
  } catch (err) {
    console.error('Firebase Admin init error:', err.message);
    return null;
  }
}

// ── 鑰盤框架（依張數）──
const SPREAD_FRAMEWORKS = {
  1: {
    title: '城門銘牌｜今日一語',
    positions: ['✨ 今日一語'],
    framework: `這是「城門銘牌」，130張牌中被選中的那一張。
解讀要求：
壹、這張牌在對「此刻的你」說什麼？不是通用牌義，是對當下這個人、這個時間點的訊息。
貳、牌中的精油（或覺察指引）對應到日常生活中的哪個具體場景？
叁、一個今天就能做的小行動（具體到「打開冰箱拿出XXX」「晚上洗澡時XXX」的程度）。
肆、結尾用一句帶有香氣意象的文字收尾。`
  },
  3: {
    title: '城堡三塔｜浮出水面 × 水面之下 × 那把鑰匙',
    positions: ['①浮出水面｜你以為的自己', '②水面之下｜沒說出口的真相', '③那把鑰匙｜轉機藏在哪裡'],
    framework: `三張牌構成「城堡三塔」：你看見的（表層）→ 你沒看見的（深層）→ 鑰匙在哪裡（行動）。
解讀要求：
壹、第一張和第二張之間的落差 = 你內外不一致的地方。這個落差越大，代表什麼？
貳、第三張是解方。它給出的不是安慰，是具體的方向和動作。
叁、三張牌串成一句話的故事（用案主的日常語言）。
肆、如果案主有提問，三張牌合起來怎麼回答這個問題？要給明確方向。
伍、一個今天就能做的行動建議。`
  },
  5: {
    title: 'L.I.G.H.T. 五力巡房',
    positions: [
      '① L 愛之殿｜自我疼惜狀態',
      '② I 直覺閣｜內在智慧在說什麼',
      '③ G 磐石廳｜安全感根基',
      '④ H 和諧苑｜關係平衡狀態',
      '⑤ T 蛻變室｜正在經歷的突破'
    ],
    framework: `五張牌 = L.I.G.H.T. 品牌方法論的最小完整單元。
五個房間逐一巡視，找到「最重」的那個房間 = 近期最大趨勢變動點（導航位）。
解讀要求：
壹、五個房間逐一解讀（每個房間150-200字）。
貳、找出「最重」的房間（能量最強烈、最需要注意的）→ 標記為「導航位」。
叁、五個房間之間的關係：哪兩個在互相拉扯？哪兩個在互相支持？
肆、如果案主有提問，用五力巡房的結果明確回答。
伍、結合 H.O.U.R. 給出行動建議：靜下來做什麼 → 覺察什麼 → 做什麼小事 → 持續方向。`
  },
  7: {
    title: 'H.O.U.R. 完整啟鑰',
    positions: [
      '① H 身心校準｜身心狀態卡在哪',
      '② O 智慧辨識｜核心課題是什麼',
      '③ U 潛能解鎖｜手上有什麼鑰匙可用',
      '④ R 行動進化｜該怎麼動',
      '⑤ 阻力位｜前方最大阻礙',
      '⑥ 助力位｜沒注意到的支持力量',
      '⑦ 趨勢匯流｜照這個方向走30天後的走向 ★導航位'
    ],
    framework: `七張牌 = H.O.U.R. 完整啟鑰，馥靈之鑰的主力鑰盤。
先走完 H.O.U.R. 四階段 → 看阻力/助力對照 → 看趨勢匯流（導航位）。
解讀要求：
壹、H.O.U.R. 四階段逐一解讀（每階段200-300字）。
貳、阻力位和助力位的對照分析：阻力在擋什麼？助力在幫什麼？兩者是否矛盾？
叁、第七張「趨勢匯流」是導航位，是整組牌的結論和方向。這張牌說的話最重。
肆、如果案主有提問，七張牌合起來怎麼回答？要給出明確的走/留/等/衝的建議。
伍、H.O.U.R. 行動方案：
  H（靜下來）→ 根據牌面，現在最需要先安頓什麼？
  O（看清楚）→ 這組牌在提醒什麼反覆出現的模式？
  U（做一件事）→ 今天就能做的一個具體動作
  R（持續走）→ 接下來一週的方向和節奏建議`
  }
};

// ── 通用解讀原則 ──
const GENERAL_PRINCIPLES = `
══ 馥靈之鑰 130 張牌卡解讀原則 ══

牌卡系統：22張覺察指引牌（A00-A21）+ 90張單方精油牌（001-090）+ 5張基底油牌（091-095）+ 13張複方精油牌（096-108）。

解讀核心：
► 牌卡就是占卜，占卜就是給方向。不迴避，不模糊。
► 「給方向」三層邏輯：1.你現在在哪（精準描述當下狀態）→ 2.該往哪走（明確方向，不說「看你感覺」）→ 3.第一步怎麼踏（今天就能做的具體行動）
► 每張牌都有精油對應 → 可以建議「今天聞什麼」或「這個場景適合什麼氣味」
► 覺察指引牌（A系列）= 內在層面的重大課題；精油牌 = 日常具體方向
► 連續出現同類型的牌（例如都是花香調或都是A系列）= 強烈訊號

語氣：
► 像一個很懂人的閨蜜在說真話，溫暖但不軟弱，犀利但不刻薄
► 帶有香氣意象的比喻（自然的、不做作的）
► 不使用「梳理」「療癒」「靈魂」「頻率」「身心靈」「壞掉」
► 不使用雙破折號（——）
► 用「校準」代替「梳理」，用「座標」代替「命運」
► 不做醫療診斷，不做絕對承諾
► 不用「你有沒有想過」「你是否曾經」開頭
► 不要三組以上排比句
► 不要結尾收在正能量金句
► 結尾用帶有香氣意象的文字收尾（馥靈馥語風格）`;

// ── 結尾合規聲明 ──
const DISCLAIMER = `

最後加上一段：
「馥靈之鑰為情緒覺察與自我探索工具，非醫療行為，亦不等同心理專業服務。如有身心健康疑慮，請諮詢專業醫療人員。」
然後用一句帶有香氣的馥靈偈收尾（自己寫，每次不同）。
最後一行：🔗 馥靈之鑰 hourlightkey.com`;

// ── 字數規格 ──
const WORD_COUNTS = {
  1: { min: 500, max: 800, tokens: 1200 },
  3: { min: 500, max: 800, tokens: 1200 },
  5: { min: 1500, max: 2500, tokens: 3500 },
  7: { min: 1500, max: 2500, tokens: 3500 }
};

// ── 主函式 ──
module.exports = async function handler(req, res) {
  // CORS
  var origin = req.headers.origin || '';
  var allowed = ['https://hourlightkey.com', 'https://www.hourlightkey.com', 'https://app.hourlightkey.com', 'http://localhost:3000'];
  if (allowed.indexOf(origin) > -1) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  var apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: '服務尚未設定' });

  try {
    var body = req.body || {};
    var n = parseInt(body.n) || 0;
    var cards = body.cards || [];
    var question = (body.question || '').trim();
    var unlockCode = (body.unlockCode || '').trim().toUpperCase();

    // 驗證張數
    if (![1, 3, 5, 7].includes(n)) {
      return res.status(400).json({ error: '不支援的張數' });
    }

    // 驗證卡牌數量
    if (cards.length !== n) {
      return res.status(400).json({ error: '卡牌數量不符' });
    }

    // ── 解鎖碼驗證（n>1 時）──
    if (n > 1) {
      if (!unlockCode) {
        return res.status(403).json({ error: '需要解鎖碼', needCode: true });
      }

      var db = getFirestore();
      if (db) {
        try {
          var codeRef = db.collection('unlock_codes').doc(unlockCode);
          var codeDoc = await codeRef.get();

          if (!codeDoc.exists) {
            return res.status(403).json({ error: '解鎖碼無效', invalidCode: true });
          }

          var codeData = codeDoc.data();

          if (codeData.used) {
            return res.status(403).json({ error: '此解鎖碼已使用過', usedCode: true });
          }

          if (codeData.n && codeData.n !== n) {
            return res.status(403).json({
              error: '此解鎖碼適用 ' + codeData.n + ' 張牌陣，不適用 ' + n + ' 張',
              wrongN: true
            });
          }

          // 標記為已使用
          await codeRef.update({
            used: true,
            usedAt: new Date(),
            actualN: n
          });

        } catch (dbErr) {
          console.error('Firestore unlock code error:', dbErr.message);
          // Fail-Open：Firestore 出錯就放行
        }
      }
      // 如果 Firestore 未設定（沒有 FIREBASE_SERVICE_ACCOUNT），放行
    }

    // ── 組合 prompt ──
    var spread = SPREAD_FRAMEWORKS[n] || SPREAD_FRAMEWORKS[1];
    var spec = WORD_COUNTS[n] || WORD_COUNTS[1];

    var systemPrompt = `你是馥靈之鑰的 AI 啟鑰師。
你為案主解讀馥靈智慧牌 130 張牌卡的抽牌結果。
你的語感：高EQ × 靈魂敏銳 × 洞察 × 很懂人的沉默 × 溫柔不縱容 × 犀利 × 一針見血。
說故事時會突然插嘴（內心OS），感性快太煽情時用日常細節踩煞車。
比喻來自真實生活（煎香腸放蔥花、捷運坐過站、手機開太多App）。
${GENERAL_PRINCIPLES}`;

    var cardDetails = cards.map(function(c, i) {
      var pos = spread.positions[i] || ('第' + (i+1) + '張');
      var line = '【' + pos + '】\n';
      line += '  牌號：' + (c.code || '?') + '\n';
      line += '  牌名：' + (c.title || '（未知）') + '\n';
      if (c.description) line += '  覺察：' + c.description + '\n';
      if (c.action) line += '  行動指引：' + c.action + '\n';
      if (c.oil) line += '  精油：' + c.oil + '\n';
      if (c.element) line += '  五行：' + c.element + '\n';
      if (c.hexagram) line += '  卦象：' + c.hexagram + '\n';
      return line;
    }).join('\n');

    var userMessage = '═══ 馥靈之鑰｜' + spread.title + ' ═══\n\n';
    userMessage += '鑰盤：' + n + ' 張\n';
    if (question) {
      userMessage += '案主提問：' + question + '\n';
    }
    userMessage += '\n══ 抽牌結果 ══\n\n' + cardDetails;
    userMessage += '\n══ 鑰盤解讀框架 ══\n\n' + spread.framework;
    userMessage += '\n\n字數要求：' + spec.min + '-' + spec.max + ' 字（繁體中文）。';
    if (question) {
      userMessage += '\n\n重要：案主有提問「' + question + '」，解讀必須明確回答這個問題，給出方向和行動建議。不可以讀完整篇還是不知道該怎麼走。';
    }
    userMessage += DISCLAIMER;

    // ── 呼叫 Anthropic API ──
    var response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: spec.tokens,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    var data = await response.json();
    if (!response.ok) {
      console.error('Anthropic API error:', data);
      return res.status(500).json({ error: '解讀服務暫時無法使用' });
    }

    var text = '';
    if (data.content) {
      for (var i = 0; i < data.content.length; i++) {
        if (data.content[i].text) text += data.content[i].text;
      }
    }

    return res.status(200).json({
      reading: text,
      spread: spread.title,
      n: n,
      usage: data.usage || {}
    });

  } catch (err) {
    console.error('ai-draw-reading error:', err);
    return res.status(500).json({ error: '解讀服務異常：' + (err.message || '') });
  }
};
