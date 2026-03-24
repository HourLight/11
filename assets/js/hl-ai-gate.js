/**
 * 馥靈之鑰 智慧解讀指令計次門控 v2.0
 *
 * 收費邏輯（逸君確認 2026/3/24）：
 * ► 免費（不計次）：命理資料複製、寄信、馥靈抽牌
 * ► 每週計次：智慧解讀指令的複製（單人/雙人/完整版/塔羅都算）
 * ► 每週一 00:00 自動歸零，不累計
 *
 * 每週限額：
 *   free  → 每週 3 次
 *   plus  → 每週 15 次（$399/月）
 *   pro   → 無上限（$999/月）
 *
 * 啟用時間：2026/03/26 00:00 (UTC+8)
 *
 * Firestore 結構：
 *   users/{uid}/ai_weekly/{YYYY-WNN} → { count: N, lastUsed: timestamp }
 *   每週一是新 key → 自動歸零
 */
(function(){
  'use strict';
  var GATE_START_TIME = new Date('2026-03-25T16:00:00Z').getTime();
  var WEEKLY_LIMITS = { 'free': 3, 'plus': 15, 'pro': Infinity };

  function getWeekKey(){
    var now=new Date();var twMs=now.getTime()+8*3600000;var tw=new Date(twMs);
    var d=new Date(Date.UTC(tw.getUTCFullYear(),tw.getUTCMonth(),tw.getUTCDate()));
    d.setUTCDate(d.getUTCDate()+4-(d.getUTCDay()||7));
    var yearStart=new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo=Math.ceil((((d-yearStart)/86400000)+1)/7);
    return d.getUTCFullYear()+'-W'+String(weekNo).padStart(2,'0');
  }
  function getDaysUntilReset(){
    var now=new Date();var twMs=now.getTime()+8*3600000;var tw=new Date(twMs);
    var day=tw.getUTCDay();return day===0?1:(8-day);
  }
  function isGateActive(){ return Date.now()>=GATE_START_TIME; }
  function getUser(){
    try{if(typeof firebase!=='undefined'&&firebase.auth)return firebase.auth().currentUser;}catch(e){}return null;
  }
  function getUserPlan(uid,cb){
    try{firebase.firestore().collection('users').doc(uid).get().then(function(doc){cb(doc.exists?(doc.data().plan||'free'):'free');}).catch(function(){cb('free');});}catch(e){cb('free');}
  }
  function getWeeklyUsage(uid,cb){
    var wk=getWeekKey();
    try{firebase.firestore().collection('users').doc(uid).collection('ai_weekly').doc(wk).get().then(function(doc){cb(doc.exists?(doc.data().count||0):0);}).catch(function(){cb(0);});}catch(e){cb(0);}
  }
  function recordUsage(uid){
    var wk=getWeekKey();
    try{firebase.firestore().collection('users').doc(uid).collection('ai_weekly').doc(wk).set({count:firebase.firestore.FieldValue.increment(1),lastUsed:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});}catch(e){}
  }

  window.hlAIGateCheck=function(callback){
    if(!isGateActive()){if(callback)callback();return;}
    var user=getUser();
    if(!user){showLoginPrompt();return;}
    getUserPlan(user.uid,function(plan){
      var limit=WEEKLY_LIMITS[plan]||WEEKLY_LIMITS['free'];
      if(limit===Infinity){recordUsage(user.uid);if(callback)callback();return;}
      getWeeklyUsage(user.uid,function(count){
        if(count<limit){recordUsage(user.uid);if(callback)callback();showRemainingHint(count+1,limit);}
        else{showUpgradeModal(plan,count,limit);}
      });
    });
  };

  function showLoginPrompt(){
    var old=document.getElementById('hl-ai-login-prompt');if(old)old.remove();
    var m=document.createElement('div');m.id='hl-ai-login-prompt';
    m.style.cssText='position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7);backdrop-filter:blur(8px)';
    m.innerHTML='<div style="max-width:400px;padding:32px 24px;background:#0a0612;border:1px solid rgba(240,212,138,.2);border-radius:20px;text-align:center;color:#f0e8d8">'
      +'<div style="font-size:2rem;margin-bottom:12px">🔑</div>'
      +'<div style="font-size:1rem;color:#f0d48a;font-weight:700;margin-bottom:8px">登入即可使用 智慧解讀指令</div>'
      +'<div style="font-size:.85rem;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:16px">免費會員每週 3 次 智慧解讀指令，登入後立即開始。</div>'
      +'<a href="member-login.html" style="display:block;padding:14px;background:linear-gradient(135deg,#c9a044,#f0d48a);color:#0a0612;font-weight:700;border-radius:12px;text-decoration:none;margin-bottom:10px">🔑 免費註冊 / 登入</a>'
      +'<button onclick="this.closest(\'#hl-ai-login-prompt\').remove()" style="display:block;width:100%;padding:10px;background:transparent;border:1px solid rgba(240,212,138,.2);border-radius:10px;color:rgba(255,255,255,.5);font-size:.85rem;cursor:pointer">← 返回</button></div>';
    m.addEventListener('click',function(e){if(e.target===m)m.remove();});
    document.body.appendChild(m);
  }

  function showRemainingHint(used,limit){
    var remaining=limit-used;if(remaining>3)return;
    var old=document.getElementById('hl-ai-hint');if(old)old.remove();
    var el=document.createElement('div');el.id='hl-ai-hint';
    el.style.cssText='position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:rgba(10,6,18,.92);border:1px solid rgba(240,212,138,.25);color:#f0d48a;padding:8px 18px;border-radius:20px;font-size:.8rem;z-index:99998;pointer-events:none;opacity:1;transition:opacity .5s';
    el.textContent='本週 智慧解讀指令剩餘 '+remaining+' 次';
    document.body.appendChild(el);
    setTimeout(function(){el.style.opacity='0';},2500);
    setTimeout(function(){el.remove();},3200);
  }

  function showUpgradeModal(plan,used,limit){
    var old=document.getElementById('hl-ai-upgrade-modal');if(old)old.remove();
    var m=document.createElement('div');m.id='hl-ai-upgrade-modal';
    m.style.cssText='position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7);backdrop-filter:blur(8px)';
    var pn=plan==='free'?'免費會員':'馥靈鑰友';
    var np=plan==='free'?'馥靈鑰友（$399/月，每週15次）':'馥靈大師（$999/月，無限次）';
    var dl=getDaysUntilReset();
    m.innerHTML='<div style="max-width:420px;padding:32px 24px;background:#0a0612;border:1px solid rgba(240,212,138,.2);border-radius:20px;text-align:center;color:#f0e8d8;max-height:90vh;overflow-y:auto">'
      +'<div style="font-size:2rem;margin-bottom:12px">🔒</div>'
      +'<div style="font-size:1rem;color:#f0d48a;font-weight:700;margin-bottom:8px">本週 智慧解讀指令次數已用完</div>'
      +'<div style="font-size:.85rem;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:16px">'
      +'您的 '+pn+' 方案每週可使用 '+limit+' 次 智慧解讀指令。<br>'
      +'本週已使用 '+used+' 次。'+dl+' 天後（下週一 00:00）自動歸零。</div>'
      +'<div style="text-align:left;font-size:.82rem;color:rgba(255,255,255,.5);line-height:2;margin-bottom:16px;padding:14px 16px;border-radius:12px;background:rgba(240,212,138,.04);border:1px solid rgba(240,212,138,.1)">'
      +'<div style="color:rgba(240,212,138,.8);font-weight:700;margin-bottom:8px">📋 方案一覽</div>'
      +'► 免費會員：智慧解讀指令每週 3 次<br>'
      +'► 馥靈鑰友 $399/月：智慧解讀指令每週 15 次<br>'
      +'► 馥靈大師 $999/月：智慧解讀指令無上限<br>'
      +'<div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(240,212,138,.08)">'
      +'以上皆不影響：命理資料複製（免費不限次）、寄信（免費不限次）、馥靈抽牌（1張免費）</div>'
      +'<div style="margin-top:8px;color:rgba(240,212,138,.6)">馥靈抽牌：1張免費｜3-7張$199起｜9張+覺察師$1,800起</div></div>'
      +'<a href="pricing.html" style="display:block;padding:14px;background:linear-gradient(135deg,#c9a044,#f0d48a);color:#0a0612;font-weight:700;border-radius:12px;text-decoration:none;margin-bottom:10px">✦ 升級到 '+np+'</a>'
      +'<button onclick="this.closest(\'#hl-ai-upgrade-modal\').remove()" style="display:block;width:100%;padding:10px;background:transparent;border:1px solid rgba(240,212,138,.2);border-radius:10px;color:rgba(255,255,255,.5);font-size:.85rem;cursor:pointer">下週再來</button></div>';
    m.addEventListener('click',function(e){if(e.target===m)m.remove();});
    document.body.appendChild(m);
  }

  window.HL_AI_GATE_ACTIVE=isGateActive();
  window.HL_AI_WEEKLY_LIMITS=WEEKLY_LIMITS;
})();

(function(){
  'use strict';
  window.addEventListener('load',function(){
    if(typeof window.copyText==='function'){
      var _orig=window.copyText;
      window.copyText=function(){var a=arguments;var s=this;hlAIGateCheck(function(){_orig.apply(s,a);});};
    }
    if(typeof window.copyAI==='function'){
      var _origAI=window.copyAI;
      window.copyAI=function(){var a=arguments;var s=this;hlAIGateCheck(function(){_origAI.apply(s,a);});};
    }
  });
})();
