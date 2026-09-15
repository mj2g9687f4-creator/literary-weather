(function(){
'use strict';
const axes=['feel','imagine','agency','order','balance','relate'];
const axisNames=['情绪韧性','开放想象','独立表达','计划执行','现实协调','共情关怀'];
const bands={
mist:{name:'温带海洋性气候',weather:'清晨薄雾',traits:'先理解感受 · 再作判断 · 温和表达',color:'#778980',colorName:'雾松灰绿',mechanism:'海洋调节让温差趋缓，西风持续送来湿润空气。',metaphor:'你像温暖湿润的西风，从海面携来水汽，以克制而持续的方式软化寒冷。'},
rain:{name:'亚热带季风气候',weather:'长夏热雨',traits:'主动交流 · 快速回应 · 带动关系',color:'#76866f',colorName:'苔雨深绿',mechanism:'海陆热力差异塑造季风，夏季高温多雨，能量与水汽集中抵达。',metaphor:'你像盛夏季风，把积蓄的热量与水汽送进关系，让沉默重新生长。'},
wind:{name:'高原山地气候',weather:'初夏山风',traits:'接受变化 · 独立判断 · 尝试新路',color:'#908b9d',colorName:'山风淡紫',mechanism:'海拔与地形迅速改变温度、风向和降水，同一座山也有不同天气。',metaphor:'你像越过山脊的风，从不同高度重新观看问题，也愿意为新道路改变方向。'},
sun:{name:'温带大陆性气候',weather:'晴光疏林',traits:'明确立场 · 直接行动 · 守住边界',color:'#a58758',colorName:'晒谷金褐',mechanism:'远离海洋使温差扩大，空气较干燥，季节与边界都更加清晰。',metaphor:'你像穿过疏林的晴光，让选择接受光照，也让边界保持清楚。'},
snow:{name:'苔原气候',weather:'静夜初雪',traits:'慎重投入 · 长久坚持 · 守护承诺',color:'#8497a2',colorName:'雪原蓝灰',mechanism:'漫长寒季与短促夏季限制生长，生命把热量保存于低矮而坚韧的形态中。',metaphor:'你像雪线边缘缓慢生长的苔原，不喧哗地保存热量，也把承诺留得很久。'},
season:{name:'温带季风气候',weather:'晚春换风',traits:'观察变化 · 调整节奏 · 协调分歧',color:'#a98673',colorName:'季风陶褐',mechanism:'冬夏季风交替，冷暖与干湿随季节转换，变化拥有清楚的节律。',metaphor:'你像晚春正在换向的季风，在靠近与退让之间调整距离，为新的季节让路。'},
dusk:{name:'地中海气候',weather:'花园暮光',traits:'活跃气氛 · 体察他人 · 挫折后重整',color:'#b68169',colorName:'暮光陶金',mechanism:'夏季炎热干燥、冬季温和多雨，植物在克制与复苏之间完成循环。',metaphor:'你像旧城花园的暮光，在干燥季节保存创造力，又在雨季让感受重新发芽。'},
desert:{name:'热带沙漠气候',weather:'沙海星夜',traits:'减少干扰 · 独立思考 · 集中投入',color:'#917955',colorName:'星砂深金',mechanism:'副热带高压控制下空气下沉，降水稀少，昼夜温差与地平线都格外鲜明。',metaphor:'你像沙海入夜后显现的星空，删去不必要的声音，把有限的水留给真正相信的方向。'}
};
const C=(q,a)=>({q,a:a.map(([label,key])=>[label,key,null])});
const D=(q,a)=>({q,a:a.map(([label,v])=>[label,null,Object.fromEntries(axes.map((k,i)=>[k,v[i]/100]))])});
const questions=[
C('一个完全空下来的周六下午，你自然会走向哪里？',[['窗边安静的小店，慢慢观察来往的人','mist'],['约熟悉的人吃饭，让近况重新流动','rain'],['去没走过的街区，不预设路线','wind'],['留在家里，完成拖了很久的事情','sun']]),
C('如果独自旅行一天，你更期待哪一种风景？',[['寒冷海岸上安静而漫长的天光','snow'],['四季分明、生活有节律的小城','season'],['旧建筑、花园和傍晚的暖光','dusk'],['视野尽头没有遮挡的旷野与星空','desert']]),
C('面对一场意见冲突，你通常先做什么？',[['先听清没有被直接说出的部分','mist'],['提出一个大家尚未想到的角度','wind'],['暂时退开，让情绪自然降温','snow'],['寻找分歧背后的价值与历史原因','dusk']]),
C('搬进一个空房间，你最先添置什么？',[['能留下生活痕迹的照片与旧物','rain'],['采光好、可以专心做事的桌子','sun'],['会随季节变化的植物和织物','season'],['独处时照亮一小块空间的灯','desert']]),
C('收到语气模糊、令人不舒服的消息，你会先？',[['重读上下文，确认是否遗漏了暗示','mist'],['直接询问对方真正的意思','sun'],['放下手机，等自己恢复平静','snow'],['出去走远一点，从更大的尺度思考','desert']]),
C('朋友临时取消期待已久的见面，你会？',[['想起彼此过去留下的普通日常','rain'],['把空档变成一次意外的新体验','wind'],['确认彼此没事，再约合适的时间','season'],['一个人走进展览、剧场或旧街','dusk']]),
C('整理相册时，哪类照片最舍不得删除？',[['光线模糊却很有气氛的随手拍','mist'],['重要的人共同度过的普通一天','rain'],['旅行中遇见的艺术、建筑与旧城','dusk'],['道路、地平线以及孤独的远景','desert']]),
C('面对一个全新的机会，你通常先考虑？',[['它是否让我看见新的可能','wind'],['它是否符合真正想走的方向','sun'],['现在是不是合适的时机','snow'],['它会如何改变我与身边人的节奏','season']]),
D('第一次来到几乎没有熟人的聚会，前十分钟你会？',[['先观察气氛，再和一位合拍的人交谈',[82,62,48,42,76,58]],['主动和身边的人交换近况',[52,44,62,46,58,92]],['走向话题最有趣的一组陌生人',[38,86,84,28,42,70]],['找到一件能帮上忙的具体事务',[40,30,60,90,82,62]]]),
D('朋友向你倾诉烦心事，你最先会？',[['完整听完，确认真正难受的地方',[94,58,32,38,72,95]],['梳理事情如何发生以及关键节点',[58,34,54,86,90,67]],['提供一种没有想过的解释',[64,94,70,34,58,62]],['一起决定下一步可以做什么',[43,40,88,87,74,70]]]),
D('选择一本陌生的书，什么最吸引你？',[['恰好翻到的一句细微而准确的话',[90,82,42,32,50,50]],['可信任的人写下的真诚推荐',[68,52,38,50,66,90]],['从未接触过的题材和结构',[48,96,82,30,44,36]],['清楚、有力量并迅速展开的故事',[42,54,78,88,70,40]]]),
D('原定计划被大雨打乱，你会？',[['安静留在室内，做一件自己的事',[88,65,44,50,80,30]],['联系同行者，共同换一个安排',[56,50,56,58,82,90]],['去附近临时发现的新地方',[42,88,88,24,54,50]],['确认还能完成哪些原定事项',[34,30,72,94,78,38]]]),
D('当个人愿望与家人的期待冲突，你更可能？',[['先弄清自己究竟想要什么',[94,60,76,40,62,54]],['寻找双方都能接受的新方案',[66,70,56,68,96,86]],['明确说明决定，并承担后果',[52,44,97,74,68,46]],['暂缓决定，先履行眼下的责任',[56,34,34,90,74,76]]]),
D('团队陷入停滞时，你通常贡献什么？',[['指出大家忽略的情绪或顾虑',[90,68,45,42,82,90]],['重新定义问题，打开另一条路径',[55,96,84,36,66,55]],['拆解任务，确定顺序和负责人',[35,42,82,98,80,60]],['调和分歧，让每个人重新参与',[62,52,58,62,94,96]]]),
D('一项长期任务终于完成，当晚你更想？',[['静音手机，留一段独处时间',[92,60,55,54,78,25]],['和一路支持自己的人认真吃饭',[70,40,44,50,70,98]],['趁着兴奋立刻尝试新事物',[45,90,94,20,38,52]],['整理成果，正式为它画上句号',[40,30,74,98,82,35]]]),
D('当规则与你认为正确的事情冲突，你会？',[['先理解规则为何存在',[60,55,42,74,95,62]],['与相关的人讨论它造成的影响',[68,62,58,46,82,95]],['遵从自己的判断并公开说明',[58,54,98,62,60,42]],['寻找不破坏目标的替代做法',[46,90,80,68,90,55]]]),
D('面对一个重要但信息不足的决定，你会？',[['等待感受沉淀，再辨认真正担忧',[96,66,44,48,78,38]],['询问不同立场的人如何看待',[64,72,42,45,90,94]],['先选一个方向，在行动中修正',[38,65,96,58,55,42]],['列出条件、风险与截止时间',[40,38,70,98,86,34]]]),
D('看到一张旧照片，你最先想到？',[['当时没有说出口的感受',[97,80,30,25,62,70]],['照片里的人现在过得怎样',[78,55,35,35,65,97]],['如果重来，会不会走另一条路',[62,94,78,28,50,48]],['它证明自己完成了哪些改变',[50,42,83,86,72,40]]]),
D('如果必须放弃一个投入很久的计划，你会？',[['允许自己先为失去的部分难过',[98,58,38,40,74,62]],['和重要的人商量这会影响什么',[70,50,40,54,88,96]],['迅速把能量转向新的目标',[34,76,95,72,52,38]],['复盘原因，为下一次留下方法',[46,52,68,96,88,40]]]),
D('生活走到新的路口，你最想提醒自己？',[['不必急着回答，先听见真实感受',[99,70,54,34,72,46]],['别忘记一路支持过自己的人',[72,46,40,50,74,99]],['允许自己选择一条陌生的路',[50,94,98,24,48,40]],['决定之后，就认真走下去',[42,40,86,98,78,42]]])
];
const P=(name,work,origin,archetype,v,desc)=>({name,work,origin,archetype,v,desc});
const personas={
mist:[P('薛宝钗','《红楼梦》','中国文学','沉静的建构者',[76,55,48,88,92,79],'你能在复杂关系中保存分寸，也能让混乱重新获得秩序。你的温和并非退让，而是一种审慎的稳定力量。'),P('翠翠','《边城》','中国文学','温柔的维系者',[92,67,42,48,72,94],'你敏锐地感受人情与时间，并愿意为重要的人保留位置。你的温柔也值得被表达，而不只是等待别人猜到。'),P('伊丽莎白·班纳特','《傲慢与偏见》','外国文学','清醒的观察者',[78,79,82,55,76,68],'你重视独立的目光，也拥有在理解加深后修正判断的勇气。清醒并不意味着固守最初的结论。'),P('加布里埃尔·康罗伊','《都柏林人·死者》','外国文学','迟来的理解者',[94,82,48,55,88,72],'你能够让坚硬的自我边界慢慢消融，并从他人未曾展开的过去重新理解关系。理解不必总在错过之后才发生。')],
rain:[P('王熙凤','《红楼梦》','中国文学','敏锐的建构者',[66,62,91,97,86,80],'她反应迅速，能读懂复杂人情，并把庞杂事务重新组织起来。你的锋芒若与体谅同行，就能成为可靠的领导力。'),P('黄蓉','《射雕英雄传》','中国文学','灵动的开拓者',[69,96,94,66,78,82],'她聪敏、机变，又会用行动守护重要的人。你常在变化中找到新解法，让创造力与责任彼此照亮。'),P('乔·马奇','《小妇人》','外国文学','热烈的开拓者',[73,94,96,58,61,74],'她渴望写作和自主生活，也在成长中学会接受联结。你有打开新篇章的力量，不必用拒绝帮助来证明独立。'),P('安妮·雪莉','《绿山墙的安妮》','外国文学','明亮的维系者',[86,58,70,78,94,98],'她总能在风雨和失误之后重新发现生活的可能。你的热情会带动关系，而真正的韧性来自允许今天结束、让明天重新开始。')],
wind:[P('孙悟空','《西游记》','中国文学','无畏的开拓者',[48,85,100,42,57,54],'他不轻易接受既定边界，也总能在绝境中找到变化。你的自由感很有力量，成熟的自由也包括辨认值得守护的同行者。'),P('花木兰','《木兰诗》','中国文学','果敢的建构者',[67,61,94,88,91,76],'她在责任到来时迅速行动，又始终知道自己为何出发。你能在变化中建立秩序，把勇气落实成长期承担。'),P('海蒂','《海蒂》','外国文学','明亮的维系者',[83,78,72,48,79,96],'她以开放和真诚让封闭的人重新感受生活。你也能把流动的生命力带进关系，使陌生环境慢慢变得可亲近。'),P('简·爱','《简·爱》','外国文学','独立的观察者',[88,73,99,79,82,64],'她珍视尊严，也拒绝用自我消失交换爱情。你的边界保护内在完整，同时仍可以为可信任的关系留一扇门。')],
sun:[P('愚公','《列子·汤问》','中国文学','坚韧的建构者',[72,42,78,86,90,91],'他不因路远山高而放弃行动，把不可能交给一代又一代人的坚持。你更相信长期投入，也愿意让今天的行动为未来开路。'),P('鲁智深','《水浒传》','中国文学','磊落的开拓者',[64,53,98,58,68,82],'他直率、勇敢，对不公有立即行动的冲动。你拥有清楚的是非感，而力量在看见后果时会更加完整。'),P('圣地亚哥','《老人与海》','外国文学','坚毅的建构者',[79,52,91,94,84,48],'他以技术、耐心和尊严面对失败。你也愿意让行动证明选择，并能在结果之外保存自我价值。'),P('阿蒂克斯·芬奇','《杀死一只知更鸟》','外国文学','正直的观察者',[74,59,89,90,97,80],'他在群体压力中仍依据原则行动，也努力理解不同处境。你的坚定若保留同理，就不会变成僵硬。')],
snow:[P('郭靖','《射雕英雄传》','中国文学','忠实的建构者',[66,34,84,98,90,91],'他凭专注、诚信和长久练习建立力量。你也相信缓慢而确定的积累，并愿意守住承诺。'),P('程英','《神雕侠侣》','中国文学','克制的观察者',[94,72,60,74,91,69],'她细腻、自持，在复杂情感中仍保持体面与善意。你的沉静能保护关系，也值得为自己的需要留下声音。'),P('格尔达','《冰雪女王》','外国文学','勇敢的维系者',[87,68,88,82,86,100],'她穿过寒冷寻找朋友，靠的不是征服，而是持续的爱与行动。你也能把柔软保存为抵达远方的力量。'),P('山姆·甘姆齐','《指环王》','外国文学','可靠的守护者',[78,55,76,96,91,100],'他在最艰难的路上守住日常、忠诚与希望。你擅长保存队伍的热量，让宏大目标不忘具体的人。')],
season:[P('史湘云','《红楼梦》','中国文学','爽朗的开拓者',[73,86,84,51,68,92],'她明快、真率，即使身处变化仍保有生命热度。你会用开放回应无常，让关系不被沉重完全覆盖。'),P('刘姥姥','《红楼梦》','中国文学','通达的协调者',[69,62,75,82,100,95],'她懂现实尺度，也能以幽默穿行于不同规则之间。你善于调节局面，让务实与人情彼此成全。'),P('达西','《傲慢与偏见》','外国文学','自省的建构者',[76,57,82,93,88,61],'他从固有秩序中学习看见自己的偏见，并用行动修正。你重视原则，而成长来自让原则接受现实检验。'),P('小王子','《小王子》','外国文学','纯真的观察者',[96,98,72,38,70,94],'他用简单的问题重新照亮关系与责任。你也能穿过习惯看见本质，并愿意为所珍视的一切负责。')],
dusk:[P('杜丽娘','《牡丹亭》','中国文学','深情的观察者',[100,96,82,42,58,87],'她相信真实感受能够唤醒被压抑的生命。你愿意追随内心，也会在想象与现实之间寻找可以共同生活的形状。'),P('贾宝玉','《红楼梦》','中国文学','共情的维系者',[96,93,68,35,62,98],'他对人的处境和情感格外敏锐，也本能地怀疑僵硬等级。你珍视鲜活的人，只需让关怀不止停留在感受。'),P('奥德修斯','《奥德赛》','外国文学','机敏的建构者',[58,92,96,82,94,66],'他靠机智、忍耐与目标感穿越漫长归途。你能在复杂环境里改换方法，同时不忘最终想回到哪里。'),P('贝特丽丝','《无事生非》','外国文学','锋利的开拓者',[68,88,94,56,77,81],'她以语言、判断和勇气保护自我，也敢于为重要的人行动。你的聪慧在真诚介入现实后最有光泽。')],
desert:[P('李陵','《汉书·苏武传》','中国文学','清醒的观察者',[65,42,68,96,94,86],'他在荒远边地看见人生短促与处境艰难。你能在寂静中辨认现实，也会把有限的力量留给真正重要的选择。'),P('唐僧','《西游记》','中国文学','执着的维系者',[76,72,86,92,79,88],'他以信念穿过诱惑与荒凉，并努力让同行者不偏离方向。你的理想感坚定，也需要容纳现实中的复杂灰度。'),P('圣地亚哥','《牧羊少年奇幻之旅》','外国文学','求索的开拓者',[72,96,98,58,70,54],'他追随反复出现的召唤，把远行变成认识自己的过程。你愿意亲自验证答案，也能从沿途关系中学习。'),P('山鲁佐德','《一千零一夜》','外国文学','智慧的建构者',[88,100,91,87,98,83],'她用故事延缓暴力，也让封闭的权力重新接触人性。你的想象并非逃离现实，而是改变现实秩序的方法。')]
};
const weatherImages={mist:'薄雾',rain:'热雨',wind:'山风',sun:'晴光',snow:'初雪',season:'晚春风',dusk:'暮光',desert:'星夜'};
const cardIllustrations={mist:'assets/morning-mist-poster-v1.png',rain:'assets/summer-rain-poster-v1.png',wind:'assets/mountain-wind-poster-v1.png',sun:'assets/open-sun-poster-v1.png',snow:'assets/tundra-snow-poster-v1.png',season:'assets/spring-shift-poster-v1.png',dusk:'assets/garden-twilight-poster-v1.png',desert:'assets/desert-stars-postcard-main-v2.png'};
const postcardStampImages={mist:'assets/postcard-stamp-morning-mist-transparent.png',rain:'assets/postcard-stamp-summer-rain-transparent.png',wind:'assets/postcard-stamp-mountain-wind-transparent.png',sun:'assets/postcard-stamp-sunlit-grove-transparent.png',snow:'assets/postcard-stamp-first-snow-transparent.png',season:'assets/postcard-stamp-turning-wind-transparent.png',dusk:'assets/postcard-stamp-garden-twilight-transparent.png',desert:'assets/postcard-stamp-desert-stars-transparent.png'};
const stampSources={mist:'assets/stamp-source-morning-mist.png',rain:'assets/stamp-source-summer-rain.png',wind:'assets/stamp-source-mountain-wind.png',sun:'assets/stamp-source-sunlit-grove.png',snow:'assets/stamp-source-first-snow.png',season:'assets/stamp-source-turning-wind.png',dusk:'assets/stamp-source-garden-twilight.png',desert:'assets/stamp-source-desert-stars.png'};
const stampCrops={
 mist:[.13,.22,.74,.58],rain:[.10,.15,.80,.68],wind:[.07,.15,.86,.68],sun:[.08,.10,.84,.72],
 snow:[.08,.14,.84,.67],season:[.07,.14,.86,.70],dusk:[.08,.14,.84,.70],desert:[.08,.14,.84,.69]
};
const cardEnglish={mist:'MORNING MIST',rain:'SUMMER RAIN',wind:'MOUNTAIN WIND',sun:'SUNLIT GROVE',snow:'FIRST SNOW',season:'TURNING WIND',dusk:'GARDEN TWILIGHT',desert:'DESERT STARS'};
const cardTitleColors={mist:'#37443f',rain:'#f3efe4',wind:'#414b56',sun:'#41392c',snow:'#f4f0e8',season:'#4a493d',dusk:'#f3eee4',desert:'#f2e9d7'};
const literaryQuotes={
 mist:{original:'Till this moment I never knew myself.',translation:'直到这一刻，我才真正认识自己。',credit:'——伊丽莎白·班纳特｜《傲慢与偏见》'},
 rain:{original:'I like good strong words that mean something.',translation:'我喜欢有力量、真正有意义的词。',credit:'——乔·马奇｜《小妇人》'},
 wind:{original:'I am no bird; and no net ensnares me.',translation:'我不是鸟，也没有罗网能够困住我。',credit:'——简·爱｜《简·爱》'},
 sun:{original:'Dear old world, you are very lovely, and I am glad to be alive in you.',translation:'亲爱的世界，你如此美好，我很庆幸自己活在其中。',credit:'——安妮·雪莉｜《绿山墙的安妮》'},
 snow:{original:'Jeg vil gå ud i den vide Verden!',translation:'我要到广阔的世界里去！',credit:'——格尔达｜《冰雪女王》'},
 season:{original:'On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.',translation:'只有用心才能看得清楚，真正重要的东西用眼睛是看不见的。',credit:'——小王子｜《小王子》'},
 dusk:{original:'Kill Claudio.',translation:'杀了克劳狄奥。',credit:'——贝特丽丝｜《无事生非》'},
 desert:{original:'Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.',translation:'当你真心渴望某样东西时，整个宇宙都会来帮助你。',credit:'——圣地亚哥｜《牧羊少年奇幻之旅》'}
};
const momentMap={
'《红楼梦》|薛宝钗':'她面对大观园纷繁人情，仍以周全与克制安顿局面的时刻','《边城》|翠翠':'她守在渡口，等待一段尚未被说清的未来的时刻','《傲慢与偏见》|伊丽莎白·班纳特':'她读完达西的来信，第一次重新审视自己判断的时刻','《都柏林人·死者》|加布里埃尔·康罗伊':'他望向窗外的雪，突然意识到自己从未真正理解妻子过去的时刻',
'《红楼梦》|王熙凤':'她第一次走进厅堂，尚未现身便以笑声改变全场气氛的时刻','《射雕英雄传》|黄蓉':'她在危急处境中凭机敏打开困局，又回身守护郭靖的时刻','《小妇人》|乔·马奇':'她伏在阁楼书桌前，把渴望独立的热情写进故事的时刻','《绿山墙的安妮》|安妮·雪莉':'她经历一天的失误与懊恼后，仍相信明天可以重新开始的时刻',
'《西游记》|孙悟空':'他面对压在头顶的既定秩序，决定以行动重新打开边界的时刻','《木兰诗》|花木兰':'她听见父亲被征召，决定买下鞍马、替父出征的时刻','《海蒂》|海蒂':'她把阿尔卑斯山的空气与生命力带进克拉拉封闭生活的时刻','《简·爱》|简·爱':'她拒绝以失去尊严为代价留在桑菲尔德，独自走向荒原的时刻',
'《列子·汤问》|愚公':'他面对挡住去路的太行、王屋二山，决定率领家人日日挖山的时刻','《水浒传》|鲁智深':'他在钱塘江听见潮信，于圆寂前忽然明白自身的时刻','《老人与海》|圣地亚哥':'他独自在海上与大鱼周旋，即使疲惫仍没有放开绳索的时刻','《杀死一只知更鸟》|阿蒂克斯·芬奇':'他顶着小镇的偏见走进法庭，仍选择为汤姆·鲁滨逊辩护的时刻',
'《射雕英雄传》|郭靖':'他一次次重复看似笨拙的练习，终于把诚实与坚持变成力量的时刻','《神雕侠侣》|程英':'她理解一段无法抵达的感情，仍以体面和善意面对相逢与别离的时刻','《冰雪女王》|格尔达':'她穿过漫长严寒寻找凯伊，不让爱被冰雪封住的时刻','《指环王》|山姆·甘姆齐':'他在通往魔多的荒凉道路上，仍守在疲惫的佛罗多身边的时刻',
'《红楼梦》|史湘云':'她醉卧芍药花间，在无常生活中仍保存爽朗与天真的时刻','《红楼梦》|刘姥姥':'她第一次走进大观园，以幽默和通达穿过陌生规矩的时刻','《傲慢与偏见》|达西':'他经历伊丽莎白的拒绝，开始看见自己的傲慢并用行动修正的时刻','《小王子》|小王子':'他从狐狸那里理解驯养，又重新认识自己对玫瑰责任的时刻',
'《牡丹亭》|杜丽娘':'她在游园惊梦中第一次听见内心被礼法压抑的渴望的时刻','《红楼梦》|贾宝玉':'他在大观园里看见那些被礼法忽略的感受，愿意认真珍惜的时刻','《奥德赛》|奥德修斯':'他在漫长海上归途中不断改变方法，却始终记得伊萨卡方向的时刻','《无事生非》|贝特丽丝':'她在希罗遭受羞辱后收起玩笑，以锋利语言明确表明立场的时刻',
'《汉书·苏武传》|李陵':'他在北地劝说苏武时，说出人生短促与长久困守之间矛盾的时刻','《西游记》|唐僧':'他经历诱惑、怀疑与险阻，仍决定继续向西而行的时刻','《牧羊少年奇幻之旅》|圣地亚哥':'他离开熟悉的羊群，走进沙漠亲自验证远方召唤的时刻','《一千零一夜》|山鲁佐德':'她在必须继续讲述的夜晚，把一个故事接向另一个故事的时刻'
};
const echoMap={
'薛宝钗':['好风凭借力，送我上青云。','《红楼梦》· 薛宝钗'],'翠翠':['这个人也许永远不回来了，也许明天回来。','《边城》'],'伊丽莎白·班纳特':['直到此刻，我才真正认识自己。','《傲慢与偏见》· 伊丽莎白'],'加布里埃尔·康罗伊':['雪落在每一个黑暗的中央平原，也落在每一处教堂墓地。','《都柏林人·死者》'],
'王熙凤':['机关算尽太聪明，反算了卿卿性命。','《红楼梦》· 判词'],'黄蓉':['活，你背着我；死，你背着我。','《射雕英雄传》· 黄蓉'],'乔·马奇':['我喜欢有力量、真正有意义的词。','《小妇人》· 乔'],'安妮·雪莉':['明天又是崭新的一天，还没有犯过任何错误。','《绿山墙的安妮》· 安妮·雪莉'],
'孙悟空':['皇帝轮流做，明年到我家。','《西游记》· 孙悟空'],'花木兰':['愿为市鞍马，从此替爷征。','《木兰诗》'],'海蒂':['我要回到爷爷那里去。','《海蒂》· 海蒂'],'简·爱':['我不是鸟，也没有罗网能够困住我。','《简·爱》· 简·爱'],
'愚公':['虽我之死，有子存焉；子又生孙，孙又生子。','《列子·汤问》· 愚公'],'鲁智深':['今日方知我是我。','《水浒传》· 鲁智深'],'圣地亚哥':['人可以被毁灭，却不能被打败。','《老人与海》· 圣地亚哥'],'阿蒂克斯·芬奇':['你得先钻进他的皮肤，像他一样走上一段路。','《杀死一只知更鸟》· 阿蒂克斯'],
'郭靖':['侠之大者，为国为民。','《射雕英雄传》'],'程英':['你的沉默可以保存善意，但不必藏起全部的自己。','文学天气寄语 · 写给你'],'格尔达':['你的柔软并不畏惧漫长的冰雪。','文学天气寄语 · 写给你'],'山姆·甘姆齐':['这世上仍有美好的事，值得我们坚持。','《指环王》· 山姆'],
'史湘云':['是真名士自风流。','《红楼梦》· 史湘云'],'刘姥姥':['老刘老刘，食量大如牛。','《红楼梦》· 刘姥姥'],'达西':['请允许我告诉你，我多么热烈地爱慕你。','《傲慢与偏见》· 达西'],'小王子':['重要的东西，用眼睛是看不见的。','《小王子》'],
'杜丽娘':['情不知所起，一往而深。','《牡丹亭》'],'贾宝玉':['女儿是水作的骨肉。','《红楼梦》· 贾宝玉'],'奥德修斯':['漫长归途不会使你真正的方向消失。','文学天气寄语 · 写给你'],'贝特丽丝':['杀了克劳狄奥。','《无事生非》· 贝特丽丝'],
'李陵':['人生如朝露，何久自苦如此！','《汉书·苏武传》· 李陵'],'唐僧':['贫僧从东土大唐而来，往西天取经。','《西游记》· 唐僧'],'山鲁佐德':['只要你的故事尚未结束，黎明便仍有可能。','文学天气寄语 · 写给你']
};
echoMap['《牧羊少年奇幻之旅》|圣地亚哥']=['当你真心渴望某样东西时，整个宇宙都会来帮助你。','《牧羊少年奇幻之旅》'];
const originalQuoteMap={
'《傲慢与偏见》|伊丽莎白·班纳特':literaryQuotes.mist,
'《都柏林人·死者》|加布里埃尔·康罗伊':{original:'His soul swooned slowly as he heard the snow falling faintly through the universe.',translation:'他听见雪花轻轻落遍宇宙，灵魂也慢慢融化。',credit:'——加布里埃尔·康罗伊｜《死者》'},
'《小妇人》|乔·马奇':literaryQuotes.rain,
'《绿山墙的安妮》|安妮·雪莉':{original:"Tomorrow is always fresh, with no mistakes in it yet.",translation:'明天又是崭新的一天，还没有犯过任何错误。',credit:'——安妮·雪莉｜《绿山墙的安妮》'},
'《海蒂》|海蒂':{original:'Ich will zum Großvater zurück.',translation:'我要回到爷爷那里去。',credit:'——海蒂｜《海蒂》'},
'《简·爱》|简·爱':literaryQuotes.wind,
'《老人与海》|圣地亚哥':{original:'A man can be destroyed but not defeated.',translation:'人可以被毁灭，却不能被打败。',credit:'——圣地亚哥｜《老人与海》'},
'《杀死一只知更鸟》|阿蒂克斯·芬奇':{original:'You never really understand a person until you consider things from his point of view.',translation:'只有从别人的角度看问题，你才能真正理解他。',credit:'——阿蒂克斯·芬奇｜《杀死一只知更鸟》'},
'《冰雪女王》|格尔达':literaryQuotes.snow,
'《指环王》|山姆·甘姆齐':{original:"There's some good in this world, Mr. Frodo, and it's worth fighting for.",translation:'这世上仍有美好的事，值得我们为之坚持。',credit:'——山姆·甘姆齐｜《指环王》'},
'《傲慢与偏见》|达西':{original:'You must allow me to tell you how ardently I admire and love you.',translation:'请允许我告诉你，我多么热烈地爱慕你。',credit:'——达西｜《傲慢与偏见》'},
'《小王子》|小王子':literaryQuotes.season,
'《奥德赛》|奥德修斯':{original:'Ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον.',translation:'告诉我吧，缪斯，那位历经漂泊、足智多谋的人。',credit:'——奥德修斯｜《奥德赛》'},
'《无事生非》|贝特丽丝':literaryQuotes.dusk,
'《牧羊少年奇幻之旅》|圣地亚哥':literaryQuotes.desert,
'《一千零一夜》|山鲁佐德':{original:'بلغني أيها الملك السعيد، ذو الرأي الرشيد…',translation:'幸福而睿智的国王啊，我听说……',credit:'——山鲁佐德｜《一千零一夜》'}
};
function quoteForPersona(p){const key=`${p.work}|${p.name}`;if(originalQuoteMap[key])return originalQuoteMap[key];const [original,rawCredit]=echoMap[key]||echoMap[p.name];return{original,translation:'',credit:`——${p.name}｜${p.work}`}}
const preservedVerticalCards={
 '《红楼梦》|史湘云':'assets/card-preserved-xiangyun.png',
 '《红楼梦》|薛宝钗':'assets/card-preserved-baochai.png',
 '《西游记》|孙悟空':'assets/card-preserved-wukong.png',
 '《木兰诗》|花木兰':'assets/card-preserved-mulan.png',
 '《列子·汤问》|愚公':'assets/card-preserved-yugong.png',
 '《牡丹亭》|杜丽娘':'assets/card-preserved-duliniang.png',
 '《汉书·苏武传》|李陵':'assets/card-preserved-liling.png',
 '《水浒传》|鲁智深':'assets/card-preserved-luzhishen-v3.png'
};
const allPersonas=Object.values(personas).flat();
if(Object.values(personas).some(list=>list.length!==4)||new Set(allPersonas.map(p=>p.work+p.name)).size!==32)throw new Error('人物数据必须为 32 个唯一结果');
if(allPersonas.some(p=>!momentMap[`${p.work}|${p.name}`]))throw new Error('每个人物都必须配置文学故事时刻');
if(allPersonas.some(p=>!echoMap[`${p.work}|${p.name}`]&&!echoMap[p.name]))throw new Error('每个人物都必须配置卡片摘句或用户寄语');
if(Object.values(echoMap).some(([text,credit])=>credit.includes('文学天气寄语')&&(!text.includes('你')||credit!=='文学天气寄语 · 写给你')))throw new Error('原创寄语必须明确写给用户');
const $=s=>document.querySelector(s),views=[...document.querySelectorAll('[data-view]')],climateScore=Object.fromEntries(Object.keys(bands).map(k=>[k,0])),dimensionSum=Object.fromEntries(axes.map(k=>[k,0]));
let dimensionCount=0,index=0,answers=[],bandKey='mist',currentResult=null,currentBand=null,advancing=false;
const show=name=>views.forEach(v=>v.hidden=v.dataset.view!==name);
function updateProgress(){const n=Math.min(index+1,questions.length);$('[data-progress]').style.width=`${n/questions.length*100}%`;$('[data-progress-text]').textContent=`${n} / ${questions.length}`;$('[data-stage-label]').textContent=index<8?'寻找气候带':'辨认人物气质'}
function applyDimensions(detail,direction){if(!detail)return;axes.forEach(k=>dimensionSum[k]+=detail[k]*direction);dimensionCount+=direction}
function dimensionVector(){return Object.fromEntries(axes.map(k=>[k,Math.round((dimensionCount?dimensionSum[k]/dimensionCount:.5)*100)]))}
function render(){advancing=false;show('question');updateProgress();const item=questions[index];$('[data-question-context]').textContent=index<8?'选择更像你平时真实会做的事':'没有理想答案，选择最接近你的反应';$('[data-question]').textContent=item.q;const box=$('[data-answers]');box.innerHTML='';box.classList.add('suppress-hover');box.onpointermove=()=>{box.classList.remove('suppress-hover');box.onpointermove=null};item.a.forEach(([label,key,detail],i)=>{const b=document.createElement('button');b.className='answer-button';b.dataset.letter=String.fromCharCode(65+i);b.textContent=label;b.onclick=()=>choose(key,detail);box.appendChild(b)});$('[data-back]').hidden=index===0;document.activeElement?.blur()}
function resolveBand(){const high=Math.max(...Object.values(climateScore)),tied=Object.keys(climateScore).filter(k=>climateScore[k]===high);if(tied.length===1)return tied[0];for(let i=7;i>=0;i--)if(tied.includes(answers[i]?.key))return answers[i].key;return tied[0]}
const transitionPalettes={
rain:['#e9ded2','#aeb7b0','#607864','#f1c95a','#f4dea2'],
season:['#eee1d8','#c9a99b','#8d5e63','#4c2c45','#644454'],
mist:['#e8e5df','#bac8c7','#758d91','#273f4a','#365762'],
sun:['#f0dfc2','#d1aa73','#aa7045','#553622','#6f482c'],
snow:['#e9edf0','#b6c4d0','#6d7e98','#253653','#334765'],
wind:['#e8e0e8','#bda9c2','#7f718d','#3f314e','#594567'],
dusk:['#f3decf','#d5a58d','#a86d62','#5b302b','#724039'],
desert:['#ddd8cb','#9b907d','#4f5768','#f0d27f','#e3c787']
};
function choose(key,detail){if(advancing)return;advancing=true;answers[index]={key,detail};if(index<8)climateScore[key]++;else applyDimensions(detail,1);index++;if(index===8){bandKey=resolveBand();const band=bands[bandKey];$('[data-band-name]').textContent=band.name;$('[data-band-traits]').textContent=band.traits;$('[data-band-copy]').textContent=band.mechanism;const card=$('[data-transition-card]');const palette=transitionPalettes[bandKey];['sky','haze','ground','ink','sub'].forEach((name,i)=>card.style.setProperty(`--card-${name}`,palette[i]));const view=card.closest('[data-view]');view.classList.remove('is-printing');show('transition');void card.offsetWidth;view.classList.add('is-printing');advancing=false;return}if(index>=questions.length)finish();else render()}
function choosePersona(){const vector=dimensionVector(),ranked=personas[bandKey].map(persona=>({persona,distance:axes.reduce((s,k,i)=>s+(vector[k]-persona.v[i])**2,0)})).sort((a,b)=>a.distance-b.distance),similarity=Math.max(60,Math.min(96,Math.round(100-Math.sqrt(ranked[0].distance/axes.length))));return{result:ranked[0].persona,alternate:ranked[1].persona,similarity,vector}}
function node(name,attrs={},text=''){const n=document.createElementNS('http://www.w3.org/2000/svg',name);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));if(text)n.textContent=text;return n}
function drawRadar(vector,band){const svg=$('[data-radar]');[...svg.querySelectorAll('g')].forEach(g=>g.remove());const g=node('g'),cx=180,cy=151,r=88,coord=(i,v)=>{const a=-Math.PI/2+i*Math.PI/3,rr=r*v/100;return[cx+Math.cos(a)*rr,cy+Math.sin(a)*rr]},poly=values=>values.map((v,i)=>coord(i,v).join(',')).join(' ');for(let l=20;l<=100;l+=20)g.appendChild(node('polygon',{points:poly(Array(6).fill(l)),fill:'none',stroke:'rgba(39,49,45,.14)','stroke-width':'1'}));axes.forEach((k,i)=>{const[x,y]=coord(i,100),[lx,ly]=coord(i,125),anchor=Math.abs(lx-cx)<10?'middle':lx>cx?'start':'end';g.appendChild(node('line',{x1:cx,y1:cy,x2:x,y2:y,stroke:'rgba(39,49,45,.14)','stroke-width':'1'}));g.appendChild(node('text',{x:lx,y:ly+4,'text-anchor':anchor,fill:'#6c746f','font-size':'11','letter-spacing':'.8'},axisNames[i]))});const values=axes.map(k=>vector[k]);g.appendChild(node('polygon',{points:poly(values),fill:`${band.color}28`,stroke:band.color,'stroke-width':'2','stroke-linejoin':'round'}));values.forEach((v,i)=>{const[x,y]=coord(i,v);g.appendChild(node('circle',{cx:x,cy:y,r:'3',fill:'#f4f0e7',stroke:band.color,'stroke-width':'1.6'}))});svg.appendChild(g);revealRadar(svg)}
function storyFor(p){const moment=momentMap[`${p.work}|${p.name}`];return moment?`你的${weatherImages[bandKey]}落进${p.work}，落在${p.name}${moment.replace(/^[他她]/,'')}。`:`你的天气落进${p.work}，在${p.name}的故事中留下新的变化。`}
function echoFor(p){return echoMap[`${p.work}|${p.name}`]||echoMap[p.name]||['你的天气进入故事，改变便有了开始。','文学天气寄语 · 写给你']}
function secondPerson(p){if(p.desc.startsWith('你'))return p.desc;const sentences=p.desc.split('。').filter(Boolean),personal=sentences.filter(s=>s.startsWith('你'));return personal.length?`${personal.join('。')}。`:`你拥有“${p.archetype}”的倾向，会让这种天气在故事里留下自己的方向。`}
function narrativeFor(p,band){return `你属于${band.name}。${band.mechanism}${storyFor(p)}${secondPerson(p)}`}
function evidence(chosen){const ranking=Object.entries(climateScore).sort((a,b)=>b[1]-a[1]),top=ranking[0][1],p=chosen.result;$('[data-band-score]').textContent=`由 ${top} 次关键选择共同形成`;$('[data-band-reason]').textContent=`你的选择更接近“${bands[bandKey].traits.replaceAll(' · ','、')}”的应对节律。`;$('[data-literary-title]').textContent=p.work;$('[data-literary-reason]').textContent=storyFor(p);$('[data-alternate-copy]').textContent=`如果这场天气改变一点方向，它也可能进入${chosen.alternate.work}中${chosen.alternate.name}的故事。`;$('[data-radar-climate]').textContent=`${bands[bandKey].weather} · ${bands[bandKey].name}`;drawRadar(chosen.vector,bands[bandKey])}
function setShareArt(band){$('[data-result-hex]').style.setProperty('--result-swatch',band.color);const stamp=$('[data-result-stamp]');if(stamp){stamp.src=postcardStampImages[bandKey];stamp.alt=`${band.weather}纪念邮票`;}const src=cardIllustrations[bandKey],art=$('[data-weather-art]');if(art){art.src=src;art.alt=`${band.weather}天气插画`}}
function finish(){const chosen=choosePersona(),p=chosen.result,band=bands[bandKey];currentResult=p;currentBand=band;show('result');$('[data-result-weather]').textContent=band.weather;$('[data-result-band]').textContent=band.name;$('[data-result-narrative]').textContent=narrativeFor(p,band);$('[data-result-color]').textContent=band.colorName;$('[data-result-hex]').textContent=band.color.toUpperCase();evidence(chosen);setShareArt(band);document.fonts.ready.then(()=>drawCard(p,band));advancing=false;$('[data-restart]').hidden=false}
function wrap(x,text,left,top,width,line,max=99){let row='',lines=0;for(const ch of text){if(x.measureText(row+ch).width>width&&row){x.fillText(row,left,top);row=ch;top+=line;lines++;if(lines>=max-1)break}else row+=ch}if(row&&lines<max)x.fillText(row,left,top)}
function loadImage(src){return new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=src})}
function drawCoverImage(x,image,left,top,width,height){const scale=Math.max(width/image.width,height/image.height),sw=width/scale,sh=height/scale,sx=(image.width-sw)/2,sy=(image.height-sh)/2;x.drawImage(image,sx,sy,sw,sh,left,top,width,height)}
function drawStampSource(x,image,crop,left,top,width,height){const[sx,sy,sw,sh]=crop;x.drawImage(image,image.width*sx,image.height*sy,image.width*sw,image.height*sh,left,top,width,height)}
async function drawPoster(p,band){const c=$('[data-poster-canvas]'),x=c.getContext('2d'),echo=echoFor(p),issue=String(Object.keys(bands).indexOf(bandKey)+1).padStart(2,'0');x.clearRect(0,0,c.width,c.height);x.fillStyle='#f7f3ea';x.fillRect(0,0,1080,1920);x.fillStyle='#626b66';x.font='20px Garamond,"Times New Roman",serif';x.letterSpacing='3px';x.textAlign='left';x.fillText(`${issue}  /  LITERARY WEATHER`,108,120);x.textAlign='right';x.fillText(cardEnglish[bandKey],972,120);x.textAlign='left';x.letterSpacing='0px';x.fillStyle=band.color;x.font='500 74px "Noto Serif SC","Songti SC",serif';x.fillText(band.weather,108,245);x.fillStyle='#303934';x.font='400 40px "Noto Serif SC","Songti SC",serif';wrap(x,`“${echo[0]}”`,108,375,864,62,3);x.fillStyle='#737a76';x.font='300 23px "Noto Serif SC","Songti SC",serif';x.textAlign='right';x.fillText('—— '+echo[1],972,555);x.strokeStyle=band.color;x.lineWidth=2;x.beginPath();x.moveTo(108,640);x.lineTo(972,640);x.stroke();let image=null;try{image=await loadImage(cardIllustrations[bandKey])}catch(error){console.warn('完整海报插画加载失败',error)}if(image)drawCoverImage(x,image,108,690,864,1030);else{x.fillStyle=band.color;x.fillRect(108,690,864,1030)}x.textAlign='left';x.fillStyle='#5f6963';x.font='400 21px "Noto Serif SC","Songti SC",serif';x.fillText(`${band.name}  ·  ${band.colorName}  ${band.color.toUpperCase()}`,108,1805);x.textAlign='right';x.fillStyle='#69716d';x.font='17px Garamond,"Times New Roman",serif';x.letterSpacing='2px';x.fillText('THE WIND COMES FROM THE PAGE',972,1805)}
function drawWordLines(x,text,left,top,width,lineHeight,maxLines=3){const words=text.split(' '),lines=[];let line='';for(const word of words){const next=line?`${line} ${word}`:word;if(x.measureText(next).width>width&&line){lines.push(line);line=word;if(lines.length===maxLines-1)break}else line=next}if(line)lines.push(line);lines.slice(0,maxLines).forEach((value,i)=>x.fillText(value,left,top+i*lineHeight));return top+lines.length*lineHeight}
function punchStampEdge(x,left,top,width,height,paper){x.save();x.fillStyle=paper;const radius=11,step=31;for(let px=left+15;px<left+width;px+=step){x.beginPath();x.arc(px,top,radius,0,Math.PI*2);x.fill();x.beginPath();x.arc(px,top+height,radius,0,Math.PI*2);x.fill()}for(let py=top+15;py<top+height;py+=step){x.beginPath();x.arc(left,py,radius,0,Math.PI*2);x.fill();x.beginPath();x.arc(left+width,py,radius,0,Math.PI*2);x.fill()}x.restore()}
function drawArcText(x,text,cx,cy,r,start,end){const chars=[...text],step=(end-start)/Math.max(chars.length-1,1);x.save();x.textAlign='center';x.textBaseline='middle';chars.forEach((ch,i)=>{const angle=start+step*i;x.save();x.translate(cx+Math.cos(angle)*r,cy+Math.sin(angle)*r);x.rotate(angle+Math.PI/2);x.fillText(ch,0,0);x.restore()});x.restore()}
function drawSnowCrystal(x,cx,cy,r,color='rgba(245,242,229,.9)'){x.save();x.translate(cx,cy);x.strokeStyle=color;x.lineWidth=1.8;for(let arm=0;arm<6;arm++){x.save();x.rotate(arm*Math.PI/3);x.beginPath();x.moveTo(0,0);x.lineTo(0,-r);for(const d of [.38,.58,.76]){const y=-r*d,branch=r*.18;x.moveTo(0,y);x.lineTo(-branch,y+branch);x.moveTo(0,y);x.lineTo(branch,y+branch)}x.stroke();x.restore()}x.beginPath();x.arc(0,0,3.5,0,Math.PI*2);x.stroke();x.restore()}
const radarObservers=new WeakMap();
function revealRadar(svg){
 radarObservers.get(svg)?.disconnect();svg.classList.remove('radar-revealing','radar-pending');
 const reveal=()=>{svg.classList.remove('radar-pending');svg.classList.add('radar-revealing')};
 if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){reveal();return}
 const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){reveal();observer.disconnect()}},{threshold:0});radarObservers.set(svg,observer);observer.observe(svg);
}
function hexRgb(hex){const value=hex.replace('#','');return[parseInt(value.slice(0,2),16),parseInt(value.slice(2,4),16),parseInt(value.slice(4,6),16)]}
function drawArchiveFrame(x,hex){const[r,g,b]=hexRgb(hex);x.save();x.lineCap='round';for(let i=0;i<72;i++){const alpha=.025+(i%7)*.006,offset=(i%18)*6;x.strokeStyle=`rgba(${r},${g},${b},${alpha})`;x.lineWidth=3+(i%5);x.beginPath();if(i%4===0){x.moveTo(42,105+offset);x.quadraticCurveTo(270,82+offset,1035,112+offset)}else if(i%4===1){x.moveTo(1018-offset,95);x.quadraticCurveTo(1042-offset,820,1015-offset,1820)}else if(i%4===2){x.moveTo(1035,1810-offset);x.quadraticCurveTo(720,1840-offset,45,1815-offset)}else{x.moveTo(62+offset,1815);x.quadraticCurveTo(35+offset,1040,68+offset,105)}x.stroke()}x.restore()}
async function drawCard(p,band){
 const c=$('[data-card-canvas]'),x=c.getContext('2d'),key=`${p.work}|${p.name}`,preserved=preservedVerticalCards[key];
 if(preserved){const image=await loadImage(preserved);c.width=image.width;c.height=image.height;x.clearRect(0,0,c.width,c.height);x.drawImage(image,0,0);c.dataset.cardStyle='preserved';return}
 const quote=quoteForPersona(p),echo=echoFor(p),issue=String(Object.keys(bands).indexOf(bandKey)+1).padStart(2,'0'),[r,g,b]=hexRgb(band.color),zh='"Noto Serif SC","Songti SC","STSong",serif',hand='"STKaiti","KaiTi","Noto Serif SC",serif';
 c.width=1080;c.height=1920;c.dataset.cardStyle='archive';x.clearRect(0,0,c.width,c.height);
 const backdrop=x.createLinearGradient(0,0,1080,1920);backdrop.addColorStop(0,`rgba(${r},${g},${b},.40)`);backdrop.addColorStop(.5,'#eee9df');backdrop.addColorStop(1,`rgba(${r},${g},${b},.48)`);x.fillStyle=backdrop;x.fillRect(0,0,1080,1920);drawArchiveFrame(x,band.color);
 x.fillStyle='rgba(249,246,238,.96)';x.fillRect(105,175,870,1500);for(let i=0;i<2600;i++){x.fillStyle=i%9?'rgba(65,61,55,.025)':'rgba(255,255,255,.11)';x.fillRect(105+(i*83)%870,175+(i*149)%1500,1.2,1.2)}
 x.textAlign='left';x.fillStyle='#55534e';x.font=`28px ${zh}`;x.fillText('你的文学天气',165,265);x.font=`30px ${zh}`;x.fillText(band.name,165,325);x.fillStyle=band.color;x.font=`500 70px ${zh}`;x.fillText(band.weather,165,430);
 const isCJK=/[\u3400-\u9fff]/.test(quote.original);
 const splitLines=(text,width)=>{const tokens=/\s/.test(text)?text.split(/\s+/):Array.from(text),spaced=/\s/.test(text),rows=[];let row='';for(const token of tokens){const next=row?row+(spaced?' ':'')+token:token;if(row&&x.measureText(next).width>width){rows.push(row);row=token}else row=next}if(row)rows.push(row);return rows};
 let size=64,originalRows,translationRows,blockHeight;
 do{x.font=isCJK?`${size}px ${zh}`:`italic ${size}px Georgia,"Times New Roman",serif`;originalRows=splitLines(quote.original,720);x.font=`${Math.round(size*.64)}px ${zh}`;translationRows=quote.translation?splitLines(quote.translation,720):[];blockHeight=originalRows.length*size*1.5+(translationRows.length?64+translationRows.length*size*.96:0);if(blockHeight<=740||size<=38)break;size-=2}while(true);
 let y=940-blockHeight/2;x.textAlign='center';x.textBaseline='top';x.fillStyle='#45423d';x.font=isCJK?`${size}px ${zh}`:`italic ${size}px Georgia,"Times New Roman",serif`;for(const row of originalRows){x.fillText(row,540,y);y+=size*1.5}
 if(translationRows.length){y+=64;x.fillStyle=band.color;x.font=`${Math.round(size*.64)}px ${zh}`;for(const row of translationRows){x.fillText(row,540,y);y+=size*.96}}x.textBaseline='alphabetic';
 x.textAlign='right';x.fillStyle='#66625b';x.font=`27px ${zh}`;x.fillText(`${p.work} 中的${p.name}`,910,1410);
 x.textAlign='left';x.fillStyle=band.color;x.font=`27px ${zh}`;x.fillText(`${band.colorName}  ${band.color.toUpperCase()}`,165,1575);x.textAlign='right';x.font=`28px ${hand}`;x.fillText(band.traits.replaceAll(' · ',' / '),915,1568);x.font='italic 22px Georgia,"Times New Roman",serif';x.fillText(cardEnglish[bandKey].toLowerCase().replaceAll(' ','-'),915,1610);
}
function restart(){index=0;answers=[];bandKey='mist';currentResult=null;currentBand=null;advancing=false;dimensionCount=0;Object.keys(climateScore).forEach(k=>climateScore[k]=0);axes.forEach(k=>dimensionSum[k]=0);updateProgress();if(document.body.classList.contains('quiz-flow-page'))render();else show('intro');$('[data-restart]').hidden=true}
$('[data-start]')?.addEventListener('click',render);$('[data-continue]').onclick=render;$('[data-back]').onclick=()=>{if(index<=0)return;index--;const a=answers[index];if(index<8)climateScore[a.key]--;else applyDimensions(a.detail,-1);render()};document.querySelectorAll('[data-restart]').forEach(b=>b.onclick=restart);$('[data-download]').onclick=async()=>{const t=$('[data-toast]');try{await window.saveResultPage({root:$('[data-view="result"]'),filename:`文学天气-完整结果页-${currentBand.weather}-${currentResult.name}.png`,button:$('[data-download]'),ready:()=>drawCard(currentResult,currentBand)});t.textContent='完整结果页长图已生成'}catch(error){console.error('结果页保存失败',error);t.textContent='保存失败，请稍后重试'}t.classList.add('is-visible');setTimeout(()=>t.classList.remove('is-visible'),3500)};updateProgress();
const previewBand=new URLSearchParams(location.search).get('preview')?.replace('-card','');
if(previewBand&&bands[previewBand]){
 const previewPersonaIndex=previewBand==='dusk'?3:previewBand==='snow'?1:0;
 document.body.classList.add('card-preview-mode');bandKey=previewBand;currentBand=bands[previewBand];currentResult=personas[previewBand][previewPersonaIndex];show('result');$('[data-result-weather]').textContent=currentBand.weather;$('[data-result-band]').textContent=currentBand.name;$('[data-result-narrative]').textContent=narrativeFor(currentResult,currentBand);$('[data-result-color]').textContent=currentBand.colorName;$('[data-result-hex]').textContent=currentBand.color.toUpperCase();climateScore[previewBand]=4;evidence({result:currentResult,alternate:personas[previewBand][previewPersonaIndex?0:1],vector:Object.fromEntries(axes.map((axis,i)=>[axis,currentResult.v[i]]))});setShareArt(currentBand);document.fonts.ready.then(()=>drawCard(currentResult,currentBand));
}
else if(document.body.classList.contains('quiz-flow-page')) render();
})();
