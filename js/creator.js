(function(){
  const bands={mist:{name:'海洋雾雨带',copy:'你习惯在含蓄与观察中理解世界，重要的感受不急于被命名。',color:'#87948d'},rain:{name:'长夏丰雨带',copy:'你的情感具有丰沛的生命力，记忆会在不同时间里反复生长。',color:'#798c73'},wind:{name:'山地变天气候',copy:'你对变化保持敏锐，常从意想不到的角度重新理解一件事。',color:'#9d9bad'},sun:{name:'大陆晴旱带',copy:'你重视清楚的边界和真正的行动，愿意让选择接受光线。',color:'#b69a63'},snow:{name:'高纬风雪带',copy:'你以克制保存热量，安静并不等于疏离，而是一种长久的专注。',color:'#91a1ad'},season:{name:'温带季风带',copy:'你相信变化有自己的次序，在靠近和退让之间寻找适当的位置。',color:'#ae8c78'},dusk:{name:'地中海暮光带',copy:'你愿意从历史、艺术与人的创造中重新获得力量，让回望成为一种出发。',color:'#c58f73'},desert:{name:'荒漠星夜带',copy:'你在辽阔与寂静中寻找意义，不急于被理解，却始终愿意向内心真正的方向前行。',color:'#9a845f'}};
  const questions=[
    {q:'周六下午没有安排，你最可能临时去哪里？',a:[['找一家安静的小店坐在窗边','mist'],['约熟悉的朋友吃饭聊天','rain'],['坐上车去没走过的街区','wind'],['完成一件拖了很久的事','sun']]},
    {q:'旅行时突然多出半天空档，你会怎么安排？',a:[['独自散步，避开最热闹的路线','snow'],['看看天气和距离，再慢慢调整行程','season'],['走进当地的美术馆或老建筑','dusk'],['去城外看开阔的地平线','desert']]},
    {q:'群聊里出现了不同意见，你通常会怎么做？',a:[['先读完大家的消息，再决定要不要说话','mist'],['提出一个大家没考虑过的新角度','wind'],['暂时不回应，等情绪平静下来','snow'],['试着理解每个人为什么会这样想','dusk']]},
    {q:'搬进一个空房间，你最先会添置什么？',a:[['能留下生活痕迹的照片和旧物','rain'],['一张采光很好、方便做事的桌子','sun'],['可以随季节更换的床品和植物','season'],['一盏适合独处时使用的小灯','desert']]},
    {q:'收到一条让你不太舒服的消息，你第一步通常是？',a:[['多看两遍，确认自己有没有误解','mist'],['直接问清楚对方真正的意思','sun'],['先放下手机，让自己冷静一会儿','snow'],['离开熟悉环境，边走边想','desert']]},
    {q:'朋友临时取消了期待很久的见面，你更可能？',a:[['有点失落，也会想起以前一起经历的事','rain'],['马上为自己安排另一件有趣的事','wind'],['理解计划会变化，重新约一个时间','season'],['去看展、看电影或逛一处旧建筑','dusk']]},
    {q:'整理手机相册时，哪类照片最舍不得删除？',a:[['光线模糊但很有氛围的随手拍','mist'],['和重要的人一起度过的普通日常','rain'],['冬夜、空房间或独自走路的画面','snow'],['旅行中看见的艺术、建筑与旧城','dusk']]},
    {q:'面对一个全新的机会，你通常先考虑什么？',a:[['它能不能让我看到新的可能','wind'],['它是否符合我真正想做的方向','sun'],['现在是不是合适的时机','season'],['它会把我带向怎样的远方','desert']]},
    {q:'第一次来到陌生聚会，你通常会？',a:[['先观察现场，再找合适的人聊天','mist',{energy:-1,info:-1}],['主动和身边的人交换近况','rain',{energy:1,value:1}],['跟最有趣的陌生人聊聊','wind',{energy:1,info:1}],['先找到自己可以参与的事情','sun',{pace:-1,info:-1}]]},
    {q:'朋友向你倾诉一件烦心事，你最先会？',a:[['先完整听完，再确认TA真正介意什么','snow',{energy:-1,value:1}],['陪TA梳理事情具体怎样发生','season',{info:-1,value:1}],['提供一个以前没想过的角度','dusk',{info:1,pace:1}],['一起列出接下来可以做的事','desert',{value:-1,pace:-1}]]},
    {q:'选择一本没读过的书时，什么最容易吸引你？',a:[['翻开后恰好读到的一段文字','mist',{energy:-1,info:1}],['朋友读过后认真写下的推荐','rain',{energy:1,value:1}],['从未接触过的题材或写法','wind',{info:1,pace:1}],['清楚、有力量的故事开端','sun',{info:-1,pace:-1}]]},
    {q:'原定计划被大雨打乱，你会怎么度过这一天？',a:[['留在室内，安静做一件自己的事','snow',{energy:-1,pace:1}],['联系同行的人，一起换个安排','season',{energy:1,value:1}],['去附近临时发现的新地方','dusk',{info:1,pace:1}],['快速确认还能完成哪些事情','desert',{value:-1,pace:-1}]]},
    {q:'完成一项很费力的任务后，你最想怎样庆祝？',a:[['给自己留一段不被打扰的时间','mist',{energy:-1,value:-1}],['和一路支持自己的人吃顿饭','rain',{energy:1,value:1}],['立刻去尝试一件新的事情','wind',{info:1,pace:1}],['把成果整理好，正式画上句号','sun',{info:-1,pace:-1}]]},
    {q:'与朋友一起旅行时，你更自然地承担哪件事？',a:[['留意谁累了、谁需要一点安静','snow',{energy:-1,value:1}],['协调大家的时间与不同偏好','season',{energy:1,value:1}],['发现临时值得绕路去看的地方','dusk',{info:1,pace:1}],['确认交通、预约和关键时间点','desert',{info:-1,pace:-1}]]},
    {q:'看到一张旧照片时，你最先想到什么？',a:[['照片里当时没有注意到的细节','mist',{energy:-1,info:-1}],['那天陪在身边的人现在怎么样','rain',{energy:1,value:1}],['如果重来一次，会不会走另一条路','wind',{info:1,pace:1}],['它提醒我已经完成了哪些改变','sun',{value:-1,pace:-1}]]},
    {q:'当生活走到新的路口，你最想提醒自己什么？',a:[['先弄清真实感受，不急着回答','snow',{energy:-1,value:1}],['别忘记一路支持过自己的人','season',{energy:1,value:1}],['允许自己选择一条陌生的路','dusk',{info:1,pace:1}],['决定之后，就认真走下去','desert',{value:-1,pace:-1}]]}
  ];
  const results={mist:{weather:'清晨薄雾',character:'《傲慢与偏见》中的伊丽莎白·班纳特',desc:'你像她一样清醒、独立，也相信自己的判断。但敏锐有时会让你过早形成结论，把防备误认为洞察；真正困难的不是看穿别人，而是承认自己也可能看错。',color:'雾松灰绿',hex:'#87948D',id:'雾中彭伯里',slug:'mist-at-pemberley',quote:'Till this moment, I never knew myself.',translation:'直到这一刻，我才真正认识自己。',note:'你的判断力保护你，也可能遮住尚未被理解的部分。'},rain:{weather:'长夏热雨',character:'《红楼梦》中的林黛玉',desc:'你像她一样能捕捉细微的情感，也格外珍惜真心。只是敏感有时会变成反复揣测：越在意，越难直接确认，甚至先用疏离保护自己。',color:'苔雨深绿',hex:'#74816B',id:'潇湘雨痕',slug:'rain-at-xiaoxiang',quote:'质本洁来还洁去，强于污淖陷渠沟。',translation:'',note:'你听得见别人忽略的情绪，也容易被没有说出口的话困住。'},wind:{weather:'初夏山风',character:'《小妇人》中的乔·马奇',desc:'你像她一样有创造欲和行动感，不愿照着别人安排的篇章生活。但对自由的渴望也可能使你急躁、抗拒依赖，在别人靠近时下意识证明自己不需要帮助。',color:'风信淡紫',hex:'#9D96AA',id:'阁楼来风',slug:'wind-in-the-attic',quote:'I like good strong words that mean something.',translation:'我喜欢有力量、真正有意义的词。',note:'你擅长打开新的一页，却不总擅长留在原地处理失望。'},sun:{weather:'旷野晴日',character:'《简·爱》中的简·爱',desc:'你像她一样重视尊严与边界，不愿用自我牺牲交换关系。但坚定有时也会变成拒绝示弱：宁愿独自承受，也不肯让别人看见自己的需要。',color:'晒谷金褐',hex:'#B49460',id:'荒原向光',slug:'light-over-the-moor',quote:'I am no bird; and no net ensnares me.',translation:'我不是鸟，也没有罗网能够困住我。',note:'边界让你保持完整，也可能让真正关心你的人停在门外。'},snow:{weather:'静夜初雪',character:'《城堡》中的K',desc:'你像他一样能在不确定中持续追问，不轻易被含糊的规则说服。但坚持可能悄悄滑向执念：越得不到答案，越难允许自己停下，最终把生活缩成唯一的问题。',color:'雪原蓝灰',hex:'#91A1AD',id:'雪线以北',slug:'north-of-the-snowline',quote:'There is a goal, but no way.',translation:'目标确实存在，却未必有现成的道路。',note:'并不是所有关闭的门，都值得耗尽自己去证明它应该打开。'},season:{weather:'晚春换风',character:'《边城》中的翠翠',desc:'你像她一样温柔地感受时间与人情，也愿意为重要的人保留位置。但体谅有时会变成等待和沉默：害怕打破平衡，便把真正的愿望交给别人猜。',color:'季风陶褐',hex:'#AE8C78',id:'渡口候风',slug:'wind-at-the-ferry',quote:'凡事都有偶然的凑巧，结果却又如宿命的必然。',translation:'',note:'温柔不是永远等待；有些渡口，需要你先说出想去的方向。'},dusk:{weather:'佛罗伦萨暮光',character:'《月亮与六便士》中的思特里克兰德',desc:'你可能理解他对创造与真实的执着，以及摆脱既定生活的冲动。但作品并不能自动替伤害辩护：只看见远方时，人容易把责任、关系和他人的感受当成阻碍。',color:'壁画陶金',hex:'#C58F73',id:'穹顶余晖',slug:'afterglow-at-the-dome',quote:'Beauty is something wonderful and strange.',translation:'美是一种奇异而不可解释的存在。',note:'追求真实并不等于免于责任；创造也需要看见身边具体的人。'},desert:{weather:'沙海星夜',character:'《悉达多》中的悉达多',desc:'你像他一样愿意亲自验证世界，不把现成答案当作终点。但独自求索有时也会变成对他人经验的不信任，在不断离开中忽略关系留下的代价。',color:'星砂深金',hex:'#9A845F',id:'沙海听星',slug:'stars-over-the-sand',quote:'Wisdom cannot be imparted.',translation:'智慧无法由别人直接传授。',note:'亲自走过很重要，但不是所有陪伴都会妨碍你抵达自己。'}};
  results.snow={weather:'静夜初雪',character:'《局外人》中的默尔索',desc:'你可能理解他拒绝表演情绪、直面荒诞的诚实。但不愿伪装也可能变成与关系失去连接，使别人难以确认你是否在意。',color:'雪原蓝灰',hex:'#91A1AD',id:'海岸无声',slug:'silence-by-the-sea',quote:'我不愿假装拥有并不存在的感受。',translation:'',note:'诚实不只是不说谎，也包括承认沉默会怎样影响别人。'};
  results.dusk={weather:'花园暮光',character:'《牡丹亭》中的杜丽娘',desc:'你像她一样相信感受能够打开被现实封闭的生命，也愿意追随内心真正的渴望。但强烈的想象有时会先替现实写好答案。',color:'壁画陶金',hex:'#C58F73',id:'花影还魂',slug:'return-through-the-garden',quote:'情不知所起，一往而深。',translation:'',note:'想象使世界重新有光，也需要给真实的人留下不完美的位置。'};
  const alternateResults={
    mist:{weather:'午后低云',character:'《长日将尽》中的史蒂文斯',desc:'你像他一样重视职责、分寸与体面，能够把复杂情绪收进稳定的秩序里。但当“应该怎样”占据太多位置，真正想说的话可能被推迟到无法改变的傍晚。',color:'旧银灰蓝',hex:'#7E8B8E',id:'长日未尽',slug:'the-day-remains',quote:'我把许多感受留给了更合适的时刻。',translation:'',note:'克制维持了秩序，也可能让最重要的表达永远迟到。'},
    rain:{weather:'岁末寒雨',character:'《祝福》中的祥林嫂',desc:'你可能像她一样，在一段经历没有被真正听见时反复回到原处。那不是软弱，而是经验仍在寻找意义；但不断重述也可能让生活被最痛的一页占满。',color:'寒雨褐青',hex:'#6F7A70',id:'雪夜回声',slug:'echoes-before-spring',quote:'有些故事反复出现，是因为它从未被真正听见。',translation:'',note:'你的经历值得被理解，但它不必成为你唯一的名字。'},
    wind:{weather:'城中阵风',character:'《围城》中的方鸿渐',desc:'你像他一样聪明、敏感，也擅长看见处境中的荒诞。但机智有时会成为推迟选择的方法：什么都能看出问题，便很难真正把自己交给一个决定。',color:'城墙灰紫',hex:'#8B8292',id:'围城过客',slug:'wind-through-the-fortress',quote:'看清处境并不等于已经走出了处境。',translation:'',note:'幽默能化解尴尬，却不能代替你承担一次明确的选择。'},
    sun:{weather:'庭院烈日',character:'《红楼梦》中的王熙凤',desc:'你像她一样反应迅速、能看懂复杂的人情，也有把混乱局面重新组织起来的能力。但掌控一切的冲动可能让关系只剩安排、效率与输赢。',color:'丹庭赤金',hex:'#AD7854',id:'凤影当庭',slug:'phoenix-in-the-courtyard',quote:'聪明让人掌握局面，也可能让人忘记局面里还有别人。',translation:'',note:'真正的能力不只是控制结果，也包括容纳自己无法控制的部分。'},
    snow:{weather:'城堡深冬',character:'《城堡》中的K',desc:'你像他一样能在不确定中持续追问，不轻易被含糊的规则说服。但坚持可能悄悄滑向执念，把生活缩成唯一一扇始终没有打开的门。',color:'城堡铅蓝',hex:'#78879B',id:'雪门之外',slug:'outside-the-snow-gate',quote:'目标似乎存在，道路却从未真正显现。',translation:'',note:'并不是所有关闭的门，都值得耗尽自己去证明它应该打开。'},
    season:{weather:'旧巷晚春',character:'《孔乙己》中的孔乙己',desc:'你可能理解他用知识、身份和体面保护尊严的方式。但当旧有的自我解释不再适合现实，坚持它也可能变成自欺，使求助显得比困境本身更难。',color:'旧纸赭灰',hex:'#9B8578',id:'长衫旧痕',slug:'the-worn-gown',quote:'尊严需要被守护，也需要允许自己改变。',translation:'',note:'承认处境已经改变，并不会抹去你曾经相信过的自己。'},
    dusk:{weather:'古堡暮云',character:'《哈姆雷特》中的哈姆雷特',desc:'你像他一样不断追问行动是否正当，也能看见简单答案背后的矛盾。但思考如果只用来推迟承担，清醒便可能成为另一种停滞。',color:'暮云墨金',hex:'#9B755F',id:'艾尔西诺夜问',slug:'night-over-elsinore',quote:'To be, or not to be.',translation:'生存还是毁灭。',note:'思考让行动有重量，也可能让行动永远停留在开始之前。'},
    desert:{weather:'石山烈风',character:'《西游记》中的孙悟空',desc:'你像他一样不轻易服从既定秩序，遇到阻碍时更愿意行动和改变。但反抗如果只剩本能，也可能把合作误认为束缚，把提醒误认为控制。',color:'石山赤金',hex:'#A17A4D',id:'花果山风',slug:'wind-over-flower-fruit-mountain',quote:'真正的自由不仅是挣脱，也包括知道为何而战。',translation:'',note:'力量能打破旧规则，也要学会辨认哪些关系不是牢笼。'}
  };
  const personaProfiles={
    mist:[{result:results.mist,vector:{energy:.2,info:.5,value:.3,pace:-.2}},{result:alternateResults.mist,vector:{energy:-.9,info:-.5,value:-.4,pace:-.8}}],
    rain:[{result:results.rain,vector:{energy:-.8,info:.7,value:.9,pace:.2}},{result:alternateResults.rain,vector:{energy:-.3,info:-.7,value:.8,pace:-.4}}],
    wind:[{result:results.wind,vector:{energy:.5,info:.9,value:.5,pace:.7}},{result:alternateResults.wind,vector:{energy:.1,info:.4,value:-.2,pace:-.8}}],
    sun:[{result:results.sun,vector:{energy:-.5,info:.2,value:.6,pace:-.7}},{result:alternateResults.sun,vector:{energy:.8,info:-.3,value:-.5,pace:-.9}}],
    snow:[{result:results.snow,vector:{energy:-.8,info:-.8,value:-.7,pace:.5}},{result:alternateResults.snow,vector:{energy:-.5,info:.6,value:-.3,pace:-.6}}],
    season:[{result:results.season,vector:{energy:-.5,info:-.2,value:.9,pace:.4}},{result:alternateResults.season,vector:{energy:.1,info:-.7,value:.1,pace:-.7}}],
    dusk:[{result:results.dusk,vector:{energy:-.3,info:.9,value:.9,pace:.4}},{result:alternateResults.dusk,vector:{energy:-.7,info:.8,value:-.2,pace:.7}}],
    desert:[{result:results.desert,vector:{energy:-.9,info:.8,value:.2,pace:.6}},{result:alternateResults.desert,vector:{energy:.9,info:.7,value:.2,pace:.7}}]
  };
  let index=0,answers=[];const score={mist:0,rain:0,wind:0,sun:0,snow:0,season:0,dusk:0,desert:0};const dimensionScore={energy:0,info:0,value:0,pace:0},dimensionCount={energy:0,info:0,value:0,pace:0};let bandKey='mist';
  const cardTemplates={
    classic:{name:'书卷宋意',zh:'"Noto Serif SC", "Songti SC", serif',en:'"Times New Roman", Times, serif'},
    editorial:{name:'现代刊物',zh:'"Noto Sans SC", sans-serif',en:'"Geist", Arial, sans-serif'},
    poetic:{name:'诗性旧刊',zh:'"ZCOOL XiaoWei", serif',en:'"Cormorant Garamond", Georgia, serif'},
    library:{name:'典藏阅读',zh:'"Songti SC", "STSong", serif',en:'"Libre Baskerville", Georgia, serif'}
  };
  let selectedTemplate='classic',currentResult=null,currentBand=null;
  const bandTraits={mist:'含蓄 · 潮润 · 怀旧',rain:'丰沛 · 循环 · 记忆',wind:'敏锐 · 跳跃 · 自由',sun:'清醒 · 开阔 · 坚定',snow:'寂静 · 边界 · 韧性',season:'分明 · 克制 · 变化',dusk:'余晖 · 人文 · 重生',desert:'辽阔 · 寂静 · 求索'};
  const bandPalettes={mist:['#e8e5df','#bac8c7','#758d91','#273f4a'],rain:['#e9ded2','#aeb7b0','#607864','#f1c95a'],wind:['#e8e0e8','#bda9c2','#7f718d','#3f314e'],sun:['#f0dfc2','#d1aa73','#aa7045','#553622'],snow:['#e9edf0','#b6c4d0','#6d7e98','#253653'],season:['#eee1d8','#c9a99b','#8d5e63','#4c2c45'],dusk:['#f3decf','#d5a58d','#a86d62','#5b302b'],desert:['#ddd8cb','#9b907d','#4f5768','#f0d27f']};
  const $=s=>document.querySelector(s),views=[...document.querySelectorAll('[data-view]')];
  const show=name=>{views.forEach(v=>v.hidden=v.dataset.view!==name);if(name==='transition'){const view=$('[data-view="transition"]');view.classList.remove('is-printing');void view.offsetWidth;view.classList.add('is-printing')}};
  const midpoint=Math.floor(questions.length/2);
  const updateProgress=()=>{const n=Math.min(index+1,questions.length);$('[data-progress]').style.width=`${n/questions.length*100}%`;$('[data-progress-text]').textContent=`${n} / ${questions.length}`;$('[data-stage-label]').textContent=index<midpoint?'寻找气候带':'细分你的文学天气'};
  function render(){show('question');updateProgress();const item=questions[index];$('[data-question-context]').textContent=index<midpoint?'选择更像你平时会做的事':'继续选择更接近你的反应';$('[data-question]').textContent=item.q;const box=$('[data-answers]');box.innerHTML='';item.a.forEach(([label,key,detail])=>{const b=document.createElement('button');b.className='answer-button';b.dataset.answerKey=key;b.textContent=label;b.onclick=()=>choose(key,detail);box.appendChild(b)});$('[data-back]').hidden=index===0}
  function resolveBand(){const highest=Math.max(...Object.values(score)),tied=Object.keys(score).filter(key=>score[key]===highest);if(tied.length===1)return tied[0];for(let i=Math.min(index,midpoint)-1;i>=0;i--){const key=answers[i]?.key;if(tied.includes(key))return key}return tied[0]}
  function updateDimensions(vector,direction){if(!vector)return;Object.entries(vector).forEach(([axis,value])=>{dimensionScore[axis]+=value*direction;dimensionCount[axis]+=direction})}
  function dimensionVector(){return Object.fromEntries(Object.keys(dimensionScore).map(axis=>[axis,dimensionCount[axis]?dimensionScore[axis]/dimensionCount[axis]:0]))}
  function choosePersona(){const vector=dimensionVector(),candidates=personaProfiles[bandKey]||personaProfiles.mist;return candidates.reduce((best,candidate)=>{const distance=Object.keys(vector).reduce((sum,axis)=>sum+(vector[axis]-candidate.vector[axis])**2,0);return !best||distance<best.distance?{...candidate,distance}:best},null).result}
  function dimensionCopy(){const v=dimensionVector();return `这次选择中，你更偏向${v.energy<0?'向内整理':'通过交流获得能量'}、${v.info<0?'关注具体事实':'寻找潜在联系'}、${v.value<0?'依据一致性判断':'考虑关系与价值'}，并${v.pace<0?'倾向尽快确定方向':'愿意为变化保留空间'}。`}
  function choose(key,detail){answers[index]={key,detail};if(index<midpoint)score[key]++;else updateDimensions(detail,1);index++;if(index===midpoint){bandKey=resolveBand();const band=bands[bandKey],palette=bandPalettes[bandKey];$('[data-band-name]').textContent=band.name;$('[data-band-traits]').textContent=bandTraits[bandKey];$('[data-band-copy]').textContent=band.copy;const card=$('[data-transition-card]');card.style.setProperty('--card-sky',palette[0]);card.style.setProperty('--card-haze',palette[1]);card.style.setProperty('--card-ground',palette[2]);card.style.setProperty('--card-ink',palette[3]);show('transition');return}if(index>=questions.length){finish();return}render()}
  function finish(){const r=choosePersona();currentResult=r;currentBand=bands[bandKey];show('result');$('[data-result-weather]').textContent=r.weather;$('[data-result-band]').textContent=currentBand.name;$('[data-result-character]').textContent=r.character;$('[data-result-description]').textContent=`${r.desc} ${dimensionCopy()}`;$('[data-result-color]').textContent=r.color;$('[data-result-hex]').textContent=r.hex;$('[data-result-id]').textContent=r.id;$('[data-result-slug]').textContent=r.slug;document.fonts.ready.then(()=>drawCard(r,currentBand))}
  function drawWoodcut(x,key,cx,cy,scale,ink,alpha,clear){
    if(clear)x.clearRect(0,0,x.canvas.width,x.canvas.height);x.save();x.translate(cx,cy);x.scale(scale,scale);x.strokeStyle=ink;x.fillStyle=ink;x.globalAlpha=alpha;x.lineWidth=1.35;x.lineCap='round';x.lineJoin='round';
    const path=(points,close=false)=>{x.beginPath();points.forEach(([px,py],i)=>i?x.lineTo(px,py):x.moveTo(px,py));if(close)x.closePath();x.stroke()};
    const arc=(px,py,r,a=0,b=Math.PI*2)=>{x.beginPath();x.arc(px,py,r,a,b);x.stroke()};
    const star=(px,py,r=3)=>{path([[px-r,py],[px+r,py],[px,py],[px,py-r],[px,py+r]])};
    const pine=(px,base,h)=>{path([[px,base-h],[px-h*.22,base-h*.46],[px-h*.08,base-h*.5],[px-h*.28,base-h*.18],[px+h*.28,base-h*.18],[px+h*.08,base-h*.5],[px+h*.22,base-h*.46],[px,base-h]],true);path([[px,base-h],[px,base]])};
    for(let i=0;i<5;i++)path([[-112,42+i*4],[-76,34+i*2],[-30,38-i],[18,28+i],[64,35-i],[112,27+i*3]]);
    if(key==='rain'){for(let i=-96;i<100;i+=18)path([[i,-54],[i-9,-25]]);for(let i=-75;i<75;i+=30){arc(i,10,10,.15,2.8);path([[i-10,12],[i,26],[i+10,12]])}}
    if(key==='mist'){path([[-88,36],[-88,-54],[88,-54],[88,36]]);arc(0,-54,88,Math.PI,Math.PI*2);for(let i=-34;i<36;i+=17)path([[-80,i],[80,i-8]])}
    if(key==='wind'){for(let i=0;i<4;i++)path([[-100,28+i*3],[-52,-24+i*2],[-10,10+i*2],[35,-46+i*3],[96,20+i*2]]);for(let i=0;i<5;i++)arc(-35+i*27,-52+i*8,18,-2.7,-.2);path([[20,20],[42,-6],[57,20],[76,-17],[94,18]]);for(let i=0;i<11;i++){path([[-108+i*7,39],[-98+i*7,30-(i%3)*3]]);path([[108-i*7,38],[98-i*7,29-(i%4)*2]])}}
    if(key==='sun'){arc(-52,-42,25);for(let i=0;i<12;i++){const a=i*Math.PI/6;path([[-52+Math.cos(a)*31,-42+Math.sin(a)*31],[-52+Math.cos(a)*44,-42+Math.sin(a)*44]])}for(let i=-80;i<=80;i+=20)path([[i,40],[i+28,12]])}
    if(key==='snow'){for(let i=-96;i<100;i+=28)star(i,-50+(i%3)*9,4);pine(-66,38,66);pine(-12,38,48);pine(50,38,72);pine(92,38,44)}
    if(key==='season'){path([[-98,32],[-65,-12],[-30,5],[5,-35],[40,-2],[92,-44]]);for(let i=-72;i<80;i+=24){arc(i,-22+(i%4)*8,7);path([[i,-15+(i%4)*8],[i+16,-2+(i%4)*6]])}}
    if(key==='dusk'){arc(-58,-42,24);path([[-78,36],[-78,4],[-58,-12],[-38,4],[-38,36]]);arc(-58,4,20,Math.PI,Math.PI*2);path([[-10,36],[-10,-2],[18,-28],[46,-2],[46,36]]);for(let i=-100;i<105;i+=12)path([[i,42],[i+9,30]])}
    if(key==='desert'){arc(52,-40,29,.35,5.05);arc(62,-48,29,.35,5.05);for(let i=-82;i<74;i+=34)star(i,-58+(i%5)*4,3);for(let i=0;i<4;i++)path([[-112,34+i*4],[-62,8+i*5],[-5,30-i*3],[48,4+i*4],[112,28-i*2]])}
    x.restore();
  }
  function hexRgb(hex){const value=hex.replace('#','');return [parseInt(value.slice(0,2),16),parseInt(value.slice(2,4),16),parseInt(value.slice(4,6),16)]}
  function drawPencilFrame(x,hex){const [red,green,blue]=hexRgb(hex);x.save();x.lineCap='round';for(let i=0;i<84;i++){const alpha=.035+Math.random()*.055,offset=(i%21)*6;x.strokeStyle=`rgba(${red},${green},${blue},${alpha})`;x.lineWidth=3+Math.random()*7;x.beginPath();if(i%4===0){x.moveTo(35+Math.random()*35,110+offset);x.quadraticCurveTo(160+Math.random()*80,80+offset,1015-Math.random()*40,105+offset)}else if(i%4===1){x.moveTo(1010-offset,90+Math.random()*45);x.quadraticCurveTo(1045-offset,780+Math.random()*160,1005-offset,1810-Math.random()*30)}else if(i%4===2){x.moveTo(1040-Math.random()*45,1810-offset);x.quadraticCurveTo(760+Math.random()*120,1860-offset,55+Math.random()*30,1815-offset)}else{x.moveTo(65+offset,1810-Math.random()*35);x.quadraticCurveTo(25+offset,1040+Math.random()*180,70+offset,100+Math.random()*35)}x.stroke()}x.restore()}
  function drawCard(r,band){
    const c=$('[data-card-canvas]'),x=c.getContext('2d'),t=cardTemplates.classic,hand='"STKaiti","KaiTi","Noto Serif SC",serif',[red,green,blue]=hexRgb(r.hex);x.clearRect(0,0,c.width,c.height);
    const backdrop=x.createLinearGradient(0,0,1080,1920);backdrop.addColorStop(0,`rgba(${red},${green},${blue},.34)`);backdrop.addColorStop(.48,'#f0ece2');backdrop.addColorStop(1,`rgba(${red},${green},${blue},.48)`);x.fillStyle=backdrop;x.fillRect(0,0,1080,1920);drawPencilFrame(x,r.hex);
    x.fillStyle='rgba(248,245,236,.94)';x.fillRect(105,175,870,1500);for(let i=0;i<3200;i++){const dark=Math.random()>.82;x.fillStyle=dark?'rgba(68,62,55,.035)':'rgba(255,255,255,.08)';x.fillRect(105+Math.random()*870,175+Math.random()*1500,1+Math.random()*1.8,1+Math.random()*1.8)}
    x.fillStyle='#45423d';x.textAlign='left';x.font=`28px ${t.zh}`;x.fillText('你的文学天气',165,265);x.font=`30px ${t.zh}`;x.fillText(band.name,165,325);x.fillStyle=r.hex;x.font=`70px ${t.zh}`;x.fillText(r.weather,165,430);
    x.fillStyle='#45423d';wrapWords(x,`“${r.quote}”`,165,650,750,70,54,t.en);if(r.translation){x.fillStyle=`rgb(${red},${green},${blue})`;wrap(x,r.translation,165,920,750,55,35,hand)}
    x.fillStyle='#45423d';wrap(x,r.note,165,1160,750,58,38,hand);x.textAlign='right';x.font=`27px ${t.zh}`;x.fillText(r.character,910,1395);
    x.textAlign='left';x.fillStyle=`rgb(${red},${green},${blue})`;x.font=`27px ${t.zh}`;x.fillText(`${r.color}  ${r.hex}`,165,1575);x.textAlign='right';x.font=`31px ${hand}`;x.fillText(r.id,915,1568);x.font=`italic 23px ${t.en}`;x.fillText(r.slug,915,1610);
  }
  function wrap(x,text,left,top,width,line,size,family){x.font=`${size}px ${family}`;let row='',y=top;for(const ch of text){if(x.measureText(row+ch).width>width){x.fillText(row,left,y);row=ch;y+=line}else row+=ch}x.fillText(row,left,y)}
  function wrapWords(x,text,left,top,width,line,size,family){
    x.font=`italic ${size}px ${family}`;
    const hasWordSpaces=/\s/.test(text),tokens=hasWordSpaces?text.trim().split(/\s+/):[...text];
    let row='',y=top;
    const drawRow=()=>{if(row){x.fillText(row,left,y);row='';y+=line}};
    for(const token of tokens){
      const separator=hasWordSpaces&&row?' ':'';
      const next=`${row}${separator}${token}`;
      if(x.measureText(next).width<=width){row=next;continue}
      drawRow();
      if(x.measureText(token).width<=width){row=token;continue}
      for(const char of token){
        if(x.measureText(row+char).width>width)drawRow();
        row+=char;
      }
    }
    drawRow();
  }
  function restart(){index=0;answers=[];Object.keys(score).forEach(k=>score[k]=0);Object.keys(dimensionScore).forEach(k=>{dimensionScore[k]=0;dimensionCount[k]=0});show('intro');updateProgress()}
  $('[data-start]').onclick=render;$('[data-continue]').onclick=render;$('[data-back]').onclick=()=>{if(index>0){index--;const answer=answers[index];if(index<midpoint)score[answer.key]--;else updateDimensions(answer.detail,-1);render()}};document.querySelectorAll('[data-restart]').forEach(b=>b.onclick=restart);
  document.querySelectorAll('[data-card-template]').forEach(button=>button.addEventListener('click',async()=>{selectedTemplate=button.dataset.cardTemplate;document.querySelectorAll('[data-card-template]').forEach(item=>{const active=item===button;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active))});$('[data-template-status]').textContent=`当前：${cardTemplates[selectedTemplate].name}`;await document.fonts.ready;if(currentResult&&currentBand)drawCard(currentResult,currentBand)}));
  $('[data-download]').onclick=()=>{const a=document.createElement('a');a.download=`文学天气-${currentResult.weather}.png`;a.href=$('[data-card-canvas]').toDataURL('image/png');a.click();const t=$('[data-toast]');t.textContent='9:16 卡片已生成';t.classList.add('is-visible');setTimeout(()=>t.classList.remove('is-visible'),2200)};
})();
