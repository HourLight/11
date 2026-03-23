/**
 * 馥靈之鑰 AI 指令計次門控 v1.1
 *
 * 收費邏輯（逸君確認 2026/3/23）：
 * ► 免費（不計次）：命理資料複製、寄信、馥靈抽牌
 * ► 每日計次：AI 深度解讀指令的複製（單人/雙人/完整版/塔羅都算）
 * ► 每天沒用完就歸零重計，不累計
 *
 * 每日限額：
 *   free  → 每天 3 次
 *   plus  → 每天 15 次（$399/月）
 *   pro   → 無每日上限（$999/月）
 *
 * 啟用時間：2026/03/26 00:00 (UTC+8)
 * 啟用前：所有 AI 指令複製不限次、不計次
 * 啟用後：自動開始計次
 *
 * Firestore 結構：
 *   users/{uid}/ai_daily/{YYYY-MM-DD} → { count: N, lastUsed: timestamp }
 *   每天一個新 doc，隔天自然歸零（不需要清除舊資料）
 *
 * 設計原則：
 * - 只管「AI 指令複製」動作
 * - 資料複製（cp-main / copyResult）完全不經過此模組
 * - Firebase 沒載入 → 放行
 * - 計次失敗 → 放行（Fail-Open）
 * - 用戶未登入 → 放行但不計次
 */
(function(){
  'use strict';

  // ═══ 啟用時間 ═══
  // 2026/03/26 00:00:00 UTC+8 = 2026/03/25 16:00:00 UTC
  var GATE_START_TIME = new Date('2026-03-25T16:00:00Z').getTime();

  // ═══ 每日限額 ═══
  var DAILY_LIMITS = {
    'free': 3,
    'plus': 15,
    'pro': Infinity
  };

  // ═══ 工具函式 ═══

  // 取得台灣時間的日期 key（每天歸零的依據）
  function getDayKey(){
    var now = new Date();
    var twMs = now.getTime() + 8 * 3600000;
    var tw = new Date(twMs);
    return tw.getUTCFullYear() + '-' +
           String(tw.getUTCMonth()+1).padStart(2,'0') + '-' +
           String(tw.getUTCDate()).padStart(2,'0');
  }

  function isGateActive(){
    return Date.now() >= GATE_START_TIME;
  }

  function getUser(){
    try {
      if (typeof firebase !== 'undefined' && firebase.auth) {
        return firebase.auth().currentUser;
      }
    } catch(e){}
    return null;
  }

  function getUserPlan(uid, cb){
    try {
      firebase.firestore().collection('users').doc(uid).get()
        .then(function(doc){
          cb(doc.exists ? (doc.data().plan || 'free') : 'free');
        })
        .catch(function(){ cb('free'); });
    } catch(e){ cb('free'); }
  }

  // 取得今日已用次數
  // doc key = 台灣日期，隔天就是新 key → 自動歸零、不累計
  function getDailyUsage(uid, cb){
    var dk = getDayKey();
    try {
      firebase.firestore()
        .collection('users').doc(uid)
        .collection('ai_daily').doc(dk)
        .get()
        .then(function(doc){
          cb(doc.exists ? (doc.data().count || 0) : 0);
        })
        .catch(function(){ cb(0); });
    } catch(e){ cb(0); }
  }

  // 記錄一次使用（寫入當日 key）
  function recordUsage(uid){
    var dk = getDayKey();
    try {
      firebase.firestore()
        .collection('users').doc(uid)
        .collection('ai_daily').doc(dk)
        .set({
          count: firebase.firestore.FieldValue.increment(1),
          lastUsed: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    } catch(e){ void 0; }
  }

  // ═══ 主函式：AI 複製前的檢查 ═══
  // 用法：hlAIGateCheck(function(){ 原本的複製動作 })
  window.hlAIGateCheck = function(callback){

    // 時間還沒到 → 全部放行，不計次
    if (!isGateActive()) {
      if (callback) callback();
      return;
    }

    var user = getUser();

    // 未登入 → 放行，不計次
    if (!user) {
      if (callback) callback();
      return;
    }

    // 已登入 → 查方案 + 今日用量
    getUserPlan(user.uid, function(plan){
      var limit = DAILY_LIMITS[plan] || DAILY_LIMITS['free'];

      // 無限方案 → 直接放行 + 記錄
      if (limit === Infinity) {
        recordUsage(user.uid);
        if (callback) callback();
        return;
      }

      getDailyUsage(user.uid, function(count){
        if (count < limit) {
          recordUsage(user.uid);
          if (callback) callback();
          showRemainingHint(count + 1, limit);
        } else {
          showUpgradeModal(plan, count, limit);
        }
      });
    });
  };

  // ═══ 剩餘次數提示（快用完時才出現）═══
  function showRemainingHint(used, limit){
    var remaining = limit - used;
    if (remaining > 3) return;
    var old = document.getElementById('hl-ai-hint');
    if (old) old.remove();
    var el = document.createElement('div');
    el.id = 'hl-ai-hint';
    el.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);'
      + 'background:rgba(10,6,18,.92);border:1px solid rgba(240,212,138,.25);'
      + 'color:#f0d48a;padding:8px 18px;border-radius:20px;font-size:.8rem;'
      + 'z-index:99998;pointer-events:none;opacity:1;transition:opacity .5s';
    el.textContent = '今日 AI 指令剩餘 ' + remaining + ' 次';
    document.body.appendChild(el);
    setTimeout(function(){ el.style.opacity = '0'; }, 2500);
    setTimeout(function(){ el.remove(); }, 3200);
  }

  // ═══ 額度用完彈窗 ═══
  function showUpgradeModal(plan, used, limit){
    var old = document.getElementById('hl-ai-upgrade-modal');
    if (old) old.remove();

    var m = document.createElement('div');
    m.id = 'hl-ai-upgrade-modal';
    m.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;'
      + 'align-items:center;justify-content:center;'
      + 'background:rgba(0,0,0,.7);backdrop-filter:blur(8px)';

    var pn = plan === 'free' ? '免費會員' : '馥靈鑰友';
    var np = plan === 'free'
      ? '馥靈鑰友（$399/月，每天15次）'
      : '馥靈大師（$999/月，無限次）';

    m.innerHTML = '<div style="max-width:420px;padding:32px 24px;background:#0a0612;'
      + 'border:1px solid rgba(240,212,138,.2);border-radius:20px;text-align:center;color:#f0e8d8;max-height:90vh;overflow-y:auto">'
      + '<div style="font-size:2rem;margin-bottom:12px">🔒</div>'
      + '<div style="font-size:1rem;color:#f0d48a;font-weight:700;margin-bottom:8px">'
      + '今日 AI 指令次數已用完</div>'
      + '<div style="font-size:.85rem;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:16px">'
      + '您的 ' + pn + ' 方案每天可使用 ' + limit + ' 次 AI 深度解讀指令。<br>'
      + '今日已使用 ' + used + ' 次。明天 00:00 自動歸零重計。</div>'
      + '<div style="text-align:left;font-size:.82rem;color:rgba(255,255,255,.5);line-height:2;margin-bottom:16px;padding:14px 16px;border-radius:12px;background:rgba(240,212,138,.04);border:1px solid rgba(240,212,138,.1)">'
      + '<div style="color:rgba(240,212,138,.8);font-weight:700;margin-bottom:8px">📋 方案一覽</div>'
      + '► 免費會員：AI 指令每天 3 次<br>'
      + '► 馥靈鑰友 $399/月：AI 指令每天 15 次<br>'
      + '► 馥靈大師 $999/月：AI 指令無每日上限<br>'
      + '<div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(240,212,138,.08)">'
      + '以上皆不影響：命理資料複製（免費不限次）、寄信（免費不限次）、馥靈抽牌（1張免費）</div>'
      + '<div style="margin-top:8px;color:rgba(240,212,138,.6)">馥靈抽牌：1張免費｜3-7張AI自助$199起｜9張+覺察師$1,800起</div>'
      + '</div>'
      + '<a href="pricing.html" style="display:block;padding:14px;'
      + 'background:linear-gradient(135deg,#c9a044,#f0d48a);color:#0a0612;'
      + 'font-weight:700;border-radius:12px;text-decoration:none;margin-bottom:10px">'
      + '✦ 升級到 ' + np + '</a>'
      + '<button onclick="this.closest(\'#hl-ai-upgrade-modal\').remove()" '
      + 'style="display:block;width:100%;padding:10px;background:transparent;'
      + 'border:1px solid rgba(240,212,138,.2);border-radius:10px;'
      + 'color:rgba(255,255,255,.5);font-size:.85rem;cursor:pointer">'
      + '明天再來</button></div>';

    m.addEventListener('click', function(e){ if (e.target === m) m.remove(); });
    document.body.appendChild(m);
  }

  // ═══ 全域標記 ═══
  window.HL_AI_GATE_ACTIVE = isGateActive();
  window.HL_AI_DAILY_LIMITS = DAILY_LIMITS;

})();

// ═══ 全域自動攔截 ═══
// 頁面載入完成後，自動包裝 copyText / copyAI
// 不需要改每一頁的程式碼
(function(){
  'use strict';

  // 等頁面 JS 都載入完（copyText/copyAI 才會存在）
  window.addEventListener('load', function(){

    // 包裝 copyText（destiny-engine / destiny-match / 其他14頁）
    // copyText = AI 指令複製 → 需要計次
    if (typeof window.copyText === 'function') {
      var _origCopyText = window.copyText;
      window.copyText = function(){
        var args = arguments;
        var self = this;
        hlAIGateCheck(function(){
          _origCopyText.apply(self, args);
        });
      };
    }

    // 包裝 copyAI（27 個獨立計算器頁面）
    // copyAI = AI 指令複製 → 需要計次
    if (typeof window.copyAI === 'function') {
      var _origCopyAI = window.copyAI;
      window.copyAI = function(){
        var args = arguments;
        var self = this;
        hlAIGateCheck(function(){
          _origCopyAI.apply(self, args);
        });
      };
    }

    // copyResult 不包裝！它是資料複製，永遠免費
    // cpText 也不包裝（destiny-match 的別名，已被 copyText 覆蓋）

  });
})();
