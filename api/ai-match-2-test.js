// api/ai-match-2-test.js
// 雙人合盤 AI 解讀框架倉庫 Group 2（8大系統 × 13種關係）
// 版本：2026-03-23
// 狀態：骨架版，待逐一上網查證加豐
//
// 系統：三角秘碼 / 六壬 / 九星 / 色彩 / 凱龍 / 吠陀 / 姓名 / 卡巴拉

const TRIANGLE = {
"love":{
"title":"馥靈三角秘碼合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"spouse":{
"title":"馥靈三角秘碼合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"ambig":{
"title":"馥靈三角秘碼合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"ex":{
"title":"馥靈三角秘碼合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"parent":{
"title":"馥靈三角秘碼合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"sibling":{
"title":"馥靈三角秘碼合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"inlaw_mw":{
"title":"馥靈三角秘碼合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"inlaw_fi":{
"title":"馥靈三角秘碼合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"boss":{
"title":"馥靈三角秘碼合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"biz":{
"title":"馥靈三角秘碼合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"colleague":{
"title":"馥靈三角秘碼合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"friend":{
"title":"馥靈三角秘碼合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
"any":{
"title":"馥靈三角秘碼合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、身分證三角秘碼配對（V/W/X 三組數字交叉）\n貳、先天數 vs 後天數的互動：一個人的天生設定遇到另一個人的社會面具\n叁、缺數互補：A 缺的數字是否在 B 的強數裡？\n肆、父親基因 vs 母親基因的代際傳遞交叉\n伍、三段人生時間軸（21-40/41-60/61+）的同步度\n陸、外心數與人際吸引力的方向\n柒、流年數的節奏同步度"],
"books":"▍王逸君《藏在農曆生日裡的秘碼》ISBN 978-626-01-5769-2\n▍Dan Millman《生命數字全書》"
},
};

const LIUREN = {
"love":{
"title":"大六壬合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"spouse":{
"title":"大六壬合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"ambig":{
"title":"大六壬合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"ex":{
"title":"大六壬合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"parent":{
"title":"大六壬合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"sibling":{
"title":"大六壬合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"inlaw_mw":{
"title":"大六壬合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"inlaw_fi":{
"title":"大六壬合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"boss":{
"title":"大六壬合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"biz":{
"title":"大六壬合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"colleague":{
"title":"大六壬合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"friend":{
"title":"大六壬合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
"any":{
"title":"大六壬合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天地盤配置比對：甲方日干上神 vs 乙方日干上神的五行生剋\n貳、四課交叉：雙方一課到四課的能量流向互動\n叁、三傳五行走勢比對：初傳→中傳→末傳的方向是否同步\n肆、天將配置的交叉影響\n伍、十二神將在對方命盤中的角色\n陸、德合鬼墓的關係應用"],
"books":"▍《大六壬大全》（明代郭御青編）\n▍《壬學瑣記》（清代程樹勛）\n▍《六壬辨疑》（民國袁樹珊）"
},
};

const NINESTAR = {
"love":{
"title":"九星氣學合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"spouse":{
"title":"九星氣學合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"ambig":{
"title":"九星氣學合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"ex":{
"title":"九星氣學合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"parent":{
"title":"九星氣學合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"sibling":{
"title":"九星氣學合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"inlaw_mw":{
"title":"九星氣學合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"inlaw_fi":{
"title":"九星氣學合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"boss":{
"title":"九星氣學合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"biz":{
"title":"九星氣學合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"colleague":{
"title":"九星氣學合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"friend":{
"title":"九星氣學合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
"any":{
"title":"九星氣學合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、年星五行配對：甲方本命年星 vs 乙方本命年星的生剋關係\n貳、三星配置（年/月/日）的交叉比對\n叁、吉方位與凶方位的交集：兩人共處時的最佳和最差方位\n肆、九星性格原型配對（一白水→九紫火）\n伍、後天八卦方位的居住環境建議\n陸、流年九星對合盤的動態影響"],
"books":"▍《紫白訣》（清代蔣大鴻傳）\n▍《玄空飛星》系列\n▍園田真次郎《九星氣學》"
},
};

const COLOR = {
"love":{
"title":"生日色彩能量合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"spouse":{
"title":"生日色彩能量合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"ambig":{
"title":"生日色彩能量合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"ex":{
"title":"生日色彩能量合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"parent":{
"title":"生日色彩能量合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"sibling":{
"title":"生日色彩能量合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"inlaw_mw":{
"title":"生日色彩能量合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"inlaw_fi":{
"title":"生日色彩能量合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"boss":{
"title":"生日色彩能量合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"biz":{
"title":"生日色彩能量合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"colleague":{
"title":"生日色彩能量合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"friend":{
"title":"生日色彩能量合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
"any":{
"title":"生日色彩能量合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、四色配置（生命色/日色/月色/年色）的互動\n貳、主色系的吸引力：同色系=共振但缺互補，互補色=張力但激發\n叁、色彩五行對應的能量平衡\n肆、穿搭建議：兩人一起出現時的最佳配色\n伍、色彩心理學在關係中的應用\n陸、四季色彩節奏的同步度"],
"books":"▍Carol Jackson《Color Me Beautiful》色彩季節理論\n▍Leatrice Eiseman《Color: Messages and Meanings》\n▍Faber Birren《Color Psychology and Color Therapy》"
},
};

const CHIRON = {
"love":{
"title":"凱龍莉莉絲合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"spouse":{
"title":"凱龍莉莉絲合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"ambig":{
"title":"凱龍莉莉絲合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"ex":{
"title":"凱龍莉莉絲合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"parent":{
"title":"凱龍莉莉絲合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"sibling":{
"title":"凱龍莉莉絲合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"inlaw_mw":{
"title":"凱龍莉莉絲合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"inlaw_fi":{
"title":"凱龍莉莉絲合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"boss":{
"title":"凱龍莉莉絲合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"biz":{
"title":"凱龍莉莉絲合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"colleague":{
"title":"凱龍莉莉絲合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"friend":{
"title":"凱龍莉莉絲合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
"any":{
"title":"凱龍莉莉絲合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、凱龍星座配對：甲方的核心傷口 vs 乙方的核心傷口是否互觸\n貳、莉莉絲星座交叉：甲方的叛逆面 vs 乙方的控制面\n叁、凱龍×莉莉絲的合盤相位（合相/對分/四分/三分）\n肆、凱龍在對方哪個宮位→你能覺察到對方的傷口嗎\n伍、莉莉絲在對方哪個宮位→你觸動了對方什麼禁忌\n陸、凱龍回歸（49-51歲）對關係的中年影響"],
"books":"▍Melanie Reinhart《Chiron and the Healing Journey》\n▍M. Kelley Hunter《Black Moon Lilith》\n▍Demetra George《Asteroid Goddesses》"
},
};

const VEDIC = {
"love":{
"title":"吠陀占星合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"spouse":{
"title":"吠陀占星合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"ambig":{
"title":"吠陀占星合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"ex":{
"title":"吠陀占星合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"parent":{
"title":"吠陀占星合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"sibling":{
"title":"吠陀占星合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"inlaw_mw":{
"title":"吠陀占星合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"inlaw_fi":{
"title":"吠陀占星合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"boss":{
"title":"吠陀占星合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"biz":{
"title":"吠陀占星合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"colleague":{
"title":"吠陀占星合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"friend":{
"title":"吠陀占星合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
"any":{
"title":"吠陀占星合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、月亮星座（Rashi）配對：吠陀以月亮為核心，兩人月亮的相容度\n貳、Nakshatra（二十七星宿）配對：傳統 Kuta 分數系統\n叁、Dasha 大運系統的同步度\n肆、第七宮（婚姻宮）交叉分析\n伍、Manglik（火星效應）的合盤影響\n陸、Navamsha（九分盤）的婚姻層面交叉"],
"books":"▍B.V. Raman《Muhurtha: Electional Astrology》\n▍K.N. Rao《Astrology, Destiny and the Wheel of Time》\n▍David Frawley《Astrology of the Seers》"
},
};

const NAMEOLOGY = {
"love":{
"title":"姓名學合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"spouse":{
"title":"姓名學合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"ambig":{
"title":"姓名學合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"ex":{
"title":"姓名學合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"parent":{
"title":"姓名學合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"sibling":{
"title":"姓名學合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"inlaw_mw":{
"title":"姓名學合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"inlaw_fi":{
"title":"姓名學合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"boss":{
"title":"姓名學合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"biz":{
"title":"姓名學合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"colleague":{
"title":"姓名學合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"friend":{
"title":"姓名學合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
"any":{
"title":"姓名學合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、天格/人格/地格/外格/總格的五行交叉比對\n貳、人格（自我）vs 對方人格的五行生剋\n叁、地格（基礎運）的相容度\n肆、外格（社交運）的交叉影響\n伍、姓名筆劃吉凶組合在關係中的共振或衝突\n陸、改名建議：如果合盤不佳，哪些筆劃調整最有效"],
"books":"▍熊崎健翁《姓名之神秘》\n▍白惠文《姓名學》\n▍黃友輔《天乙乾坤姓名學》"
},
};

const KABBALAH = {
"love":{
"title":"卡巴拉生命之樹合盤（交往中版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"spouse":{
"title":"卡巴拉生命之樹合盤（夫妻版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"ambig":{
"title":"卡巴拉生命之樹合盤（曖昧版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"ex":{
"title":"卡巴拉生命之樹合盤（前任版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"parent":{
"title":"卡巴拉生命之樹合盤（親子版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"sibling":{
"title":"卡巴拉生命之樹合盤（手足版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"inlaw_mw":{
"title":"卡巴拉生命之樹合盤（婆媳版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"inlaw_fi":{
"title":"卡巴拉生命之樹合盤（翁婿版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"boss":{
"title":"卡巴拉生命之樹合盤（主管下屬版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"biz":{
"title":"卡巴拉生命之樹合盤（事業合夥版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"colleague":{
"title":"卡巴拉生命之樹合盤（同事版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"friend":{
"title":"卡巴拉生命之樹合盤（朋友版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
"any":{
"title":"卡巴拉生命之樹合盤（全面版）",
"desc":"骨架框架，待上網查證後加豐。",
"focus":["壹、生命之樹路徑數配對：甲方路徑 vs 乙方路徑的交叉\n貳、十個質點（Sephiroth）的能量平衡比對\n叁、三根柱子（嚴厲/慈悲/平衡）的偏重方向\n肆、22條路徑對應大秘儀的合盤意義\n伍、靈魂課題數的交叉\n陸、生命之樹在關係動態中的應用"],
"books":"▍Dion Fortune《The Mystical Qabalah》\n▍Z\'ev ben Shimon Halevi《Kabbalah and Psychology》\n▍Robert Wang《The Qabalistic Tarot》"
},
};

const SYSTEMS = {
  triangle: TRIANGLE,
  liuren: LIUREN,
  ninestar: NINESTAR,
  color: COLOR,
  chiron: CHIRON,
  vedic: VEDIC,
  nameology: NAMEOLOGY,
  kabbalah: KABBALAH,
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
  if (!sysData) return res.status(404).json({ error: system + ' 不在 Group 2' });

  if (!relation) {
    return res.status(200).json({ system: system, relations: Object.keys(sysData) });
  }

  var relData = sysData[relation];
  if (!relData) return res.status(404).json({ error: relation + ' 不存在' });

  return res.status(200).json(relData);
};