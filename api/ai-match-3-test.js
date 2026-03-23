// api/ai-match-3-test.js
// 雙人合盤 AI 解讀框架倉庫 Group 3（8大系統 × 13種關係）
// 版本：2026-03-23
// 狀態：骨架版，待逐一上網查證加豐
//
// 系統：宿曜 / 梅花 / 基因天命 / 彩虹 / 撲克 / 居爾特 / 鐵板 / 太乙

const XIUYAO = {
"love":{
"title":"宿曜占星合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"spouse":{
"title":"宿曜占星合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"ambig":{
"title":"宿曜占星合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"ex":{
"title":"宿曜占星合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"parent":{
"title":"宿曜占星合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"sibling":{
"title":"宿曜占星合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"inlaw_mw":{
"title":"宿曜占星合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"inlaw_fi":{
"title":"宿曜占星合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"boss":{
"title":"宿曜占星合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"biz":{
"title":"宿曜占星合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"colleague":{
"title":"宿曜占星合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"friend":{
"title":"宿曜占星合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
"any":{
"title":"宿曜占星合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、本命宿配對：甲方本命宿 vs 乙方本命宿的關係類型（榮/親/友/衰/危/成）\n貳、二十七宿的性格原型交叉\n叁、七曜直日的能量影響\n肆、宿曜經的合婚/合事判斷\n伍、宿與十二宮的對應分析\n陸、流年宿曜運勢的同步度"],
"books":"▍《宿曜經》（不空三藏譯）\n▍《文殊師利菩薩及諸仙所說吉凶時日善惡宿曜經》\n▍密教占星術相關文獻"
},
};

const MEIHUA = {
"love":{
"title":"梅花易數合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"spouse":{
"title":"梅花易數合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"ambig":{
"title":"梅花易數合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"ex":{
"title":"梅花易數合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"parent":{
"title":"梅花易數合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"sibling":{
"title":"梅花易數合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"inlaw_mw":{
"title":"梅花易數合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"inlaw_fi":{
"title":"梅花易數合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"boss":{
"title":"梅花易數合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"biz":{
"title":"梅花易數合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"colleague":{
"title":"梅花易數合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"friend":{
"title":"梅花易數合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
"any":{
"title":"梅花易數合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、體卦用卦的關係比對：甲方體卦 vs 乙方體卦的五行生剋\n貳、互卦（隱藏的中間過程）交叉分析\n叁、變卦（最終發展方向）的合盤意義\n肆、數字起卦的時空能量\n伍、卦象在關係中的具體應事\n陸、年月日時四層卦的動態追蹤"],
"books":"▍邵雍《梅花易數》\n▍《皇極經世書》\n▍黃鑑《易魂》系列"
},
};

const GENEKEYS = {
"love":{
"title":"基因天命合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"spouse":{
"title":"基因天命合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"ambig":{
"title":"基因天命合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"ex":{
"title":"基因天命合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"parent":{
"title":"基因天命合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"sibling":{
"title":"基因天命合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"inlaw_mw":{
"title":"基因天命合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"inlaw_fi":{
"title":"基因天命合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"boss":{
"title":"基因天命合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"biz":{
"title":"基因天命合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"colleague":{
"title":"基因天命合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"friend":{
"title":"基因天命合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
"any":{
"title":"基因天命合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、64 閘門的陰暗面/天賦/悉地三層次配對\n貳、甲方核心閘門 vs 乙方核心閘門的交互\n叁、編程夥伴（反密碼子）的關係意義\n肆、Venus Sequence（金星序列）的親密關係解碼\n伍、Pearl Sequence（珍珠序列）的事業合作解碼\n陸、64 卦與易經原型的合盤應用"],
"books":"▍Richard Rudd《Gene Keys》\n▍Richard Rudd《The Art of Contemplation》\n▍易經六十四卦相關經典"
},
};

const RAINBOW = {
"love":{
"title":"彩虹數字合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"spouse":{
"title":"彩虹數字合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"ambig":{
"title":"彩虹數字合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"ex":{
"title":"彩虹數字合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"parent":{
"title":"彩虹數字合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"sibling":{
"title":"彩虹數字合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"inlaw_mw":{
"title":"彩虹數字合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"inlaw_fi":{
"title":"彩虹數字合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"boss":{
"title":"彩虹數字合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"biz":{
"title":"彩虹數字合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"colleague":{
"title":"彩虹數字合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"friend":{
"title":"彩虹數字合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
"any":{
"title":"彩虹數字合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、陽性數字（外在行為）配對：甲方展現 vs 乙方展現的互動\n貳、陰性數字（內在動機）交叉：看不見的拉扯在哪裡\n叁、五大階段數的人生節奏比對\n肆、連線格網圖的互補分析\n伍、先天與後天數字的雙軌交叉\n陸、關係動力學：兩人數字組合的化學反應"],
"books":"▍Tad / 麗子《麗子の彩虹數字學》\n▍藍寧仕《新生命密碼》系列\n▍Numerology 數字學國際文獻"
},
};

const CARDOLOGY = {
"love":{
"title":"撲克牌命理合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"spouse":{
"title":"撲克牌命理合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"ambig":{
"title":"撲克牌命理合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"ex":{
"title":"撲克牌命理合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"parent":{
"title":"撲克牌命理合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"sibling":{
"title":"撲克牌命理合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"inlaw_mw":{
"title":"撲克牌命理合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"inlaw_fi":{
"title":"撲克牌命理合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"boss":{
"title":"撲克牌命理合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"biz":{
"title":"撲克牌命理合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"colleague":{
"title":"撲克牌命理合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"friend":{
"title":"撲克牌命理合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
"any":{
"title":"撲克牌命理合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、出生牌配對：52 張牌 + Joker 的原型交叉\n貳、行星牌陣位置比對：甲方在乙方牌陣中的位置\n叁、業力牌和業力對手的關係意義\n肆、七年週期的同步度\n伍、靈性牌陣（Life Spread）的合盤\n陸、宇宙牌陣（Grand Solar Spread）的年度動態"],
"books":"▍Robert Lee Camp《Cards of Your Destiny》\n▍Olney Richmond《The Mystic Test Book》\n▍Sharon Jeffers《Cards of Illumination》"
},
};

const CELTIC = {
"love":{
"title":"居爾特樹曆合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"spouse":{
"title":"居爾特樹曆合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"ambig":{
"title":"居爾特樹曆合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"ex":{
"title":"居爾特樹曆合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"parent":{
"title":"居爾特樹曆合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"sibling":{
"title":"居爾特樹曆合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"inlaw_mw":{
"title":"居爾特樹曆合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"inlaw_fi":{
"title":"居爾特樹曆合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"boss":{
"title":"居爾特樹曆合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"biz":{
"title":"居爾特樹曆合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"colleague":{
"title":"居爾特樹曆合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"friend":{
"title":"居爾特樹曆合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
"any":{
"title":"居爾特樹曆合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、守護樹配對：甲方守護樹 vs 乙方守護樹的元素關係\n貳、樹木性格原型的互補與衝突\n叁、歐甘字母（Ogham）的符號交叉\n肆、四季能量（春分/夏至/秋分/冬至）的節奏比對\n伍、守護樹的花語和精油對應\n陸、居爾特節慶與關係的季節性"],
"books":"▍Liz & Colin Murray《The Celtic Tree Oracle》\n▍John Michael Greer《The Celtic Golden Dawn》\n▍Peter Berresford Ellis《Celtic Myths and Legends》"
},
};

const TIEBAN = {
"love":{
"title":"鐵板神數合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"spouse":{
"title":"鐵板神數合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"ambig":{
"title":"鐵板神數合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"ex":{
"title":"鐵板神數合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"parent":{
"title":"鐵板神數合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"sibling":{
"title":"鐵板神數合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"inlaw_mw":{
"title":"鐵板神數合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"inlaw_fi":{
"title":"鐵板神數合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"boss":{
"title":"鐵板神數合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"biz":{
"title":"鐵板神數合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"colleague":{
"title":"鐵板神數合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"friend":{
"title":"鐵板神數合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
"any":{
"title":"鐵板神數合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、先天卦數配對：甲方卦數 vs 乙方卦數的交叉\n貳、鐵板條文的關係應用\n叁、六親定位在合盤中的角色\n肆、大運流年的同步度分析\n伍、六十甲子納音的配對意義\n陸、鐵板與紫微/八字的三角驗證"],
"books":"▍邵雍《皇極經世》\n▍董慕節鐵板神數體系\n▍陳巃羽《鐵板神數》系列"
},
};

const TAIYI = {
"love":{
"title":"太乙神數合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"spouse":{
"title":"太乙神數合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"ambig":{
"title":"太乙神數合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"ex":{
"title":"太乙神數合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"parent":{
"title":"太乙神數合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"sibling":{
"title":"太乙神數合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"inlaw_mw":{
"title":"太乙神數合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"inlaw_fi":{
"title":"太乙神數合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"boss":{
"title":"太乙神數合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"biz":{
"title":"太乙神數合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"colleague":{
"title":"太乙神數合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"friend":{
"title":"太乙神數合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
"any":{
"title":"太乙神數合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、太乙九宮配置比對\n貳、十六神的位置交叉分析\n叁、太乙數的年運同步度\n肆、文昌計神的合盤影響\n伍、太乙與奇門遁甲的交叉驗證\n陸、國運層面到個人層面的縮放應用"],
"books":"▍《太乙金鏡式經》\n▍《太乙數統宗大全》\n▍王力之《太乙神數精解》"
},
};

const SYSTEMS = {
  xiuyao: XIUYAO,
  meihua: MEIHUA,
  genekeys: GENEKEYS,
  rainbow: RAINBOW,
  cardology: CARDOLOGY,
  celtic: CELTIC,
  tieban: TIEBAN,
  taiyi: TAIYI,
};

module.exports = function handler(req, res) {
  var origin = req.headers.origin || '';
  var allowed = ['https://hourlightkey.com', 'https://www.hourlightkey.com'];
  if (allowed.indexOf(origin) > -1) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  var system = req.query.system || '';
  var relation = req.query.relation || '';

  if (req.query.action === 'list') {
    var available = {};
    Object.keys(SYSTEMS).forEach(function(sys) {
      available[sys] = Object.keys(SYSTEMS[sys]);
    });
    return res.status(200).json({ available: available, count: Object.keys(available).length });
  }

  if (!system) return res.status(400).json({ error: '需要 system 參數' });
  var sysData = SYSTEMS[system];
  if (!sysData) return res.status(404).json({ error: system + ' 不在 Group 3' });

  if (!relation) {
    return res.status(200).json({ system: system, relations: Object.keys(sysData) });
  }

  var relData = sysData[relation];
  if (!relData) return res.status(404).json({ error: relation + ' 不存在' });

  return res.status(200).json(relData);
};