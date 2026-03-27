const characters = [
{ name:"에일로이", id:"Yu16299"},
{ name:"엠버", id:"J9w3lyd" },
{ name:"케이아", id:"X9mcD2j" },
{ name:"리사", id:"NLajqOD" },
{ name:"바바라", id:"d70e3sh" },
{ name:"레이저", id:"6EyZlNE" },
{ name:"향릉", id:"xwlqc6J" },
{ name:"북두", id:"R2KB9qM"},
{ name:"행추", id:"rMDzswO"},
{ name:"응광", id:"UdKaWJE"},
{ name:"피슬", id:"rQtnw8y"},
{ name:"베넷", id:"R6T0ra8"},
{ name:"노엘", id:"9Wtc5hY"},
{ name:"중운", id:"jCdopJ0"},
{ name:"설탕", id:"evdzFk9"},
{ name:"진", id:"7ucJfI2"},
{ name:"다이루크", id:"ZDP06d5"},
{ name:"치치", id:"kE1EbVO"},
{ name:"모나", id:"LifrGo8"},
{ name:"각청", id:"5BOwxOW"},
{ name:"벤티", id:"qIaaNhf"},
{ name:"클레", id:"pmP3prQ"},
{ name:"디오나", id:"JrQGaxX"},
{ name:"타르탈리아", id:"MdAUqD6"},
{ name:"신염", id:"afpXLyN"},
{ name:"종려", id:"gEBKVCC"},
{ name:"알베도", id:"FAXrM5l"},
{ name:"감우", id:"vlflc3Q"},
{ name:"소", id:"OVcn31d"},
{ name:"호두", id:"0NGyqhl"},
{ name:"로자리아", id:"XLIAcs5"},
{ name:"연비", id:"ZpINy87"},
{ name:"유라", id:"PMPHnqh"},
{ name:"카즈하", id:"3N0BrJO"},
{ name:"아야카", id:"dOZ0p1X"},
{ name:"사유", id:"JVUnyab"},
{ name:"요이미야", id:"RrbGWdT"},
{ name:"쿠죠 사라", id:"XKrWrlE"},
{ name:"라이덴쇼군", id:"YsYtUJ8"},
{ name:"코코미", id:"0Ri7e55"},
{ name:"토마", id:"imxLyOr"},
{ name:"고로", id:"9nq1wIN"},
{ name:"이토", id:"RpQUcEf"},
{ name:"운근", id:"iDPF1aR"},
{ name:"신학", id:"LEIV0SC"},
{ name:"야에 미코", id:"86c3NuQ"},
{ name:"아야토", id:"Wkj04Ht"},
{ name:"야란", id:"ooaJrgm"},
{ name:"쿠키시노부", id:"eulYxOo"},
{ name:"헤이조", id:"xfcyi8w"},
{ name:"콜레이", id:"nCrt9Zh"},
{ name:"타이나리", id:"QJ4UXNS"},
{ name:"도리", id:"kgkTEOx"},
{ name:"캔디스", id:"o7LIgNi"},
{ name:"사이노", id:"ArcNBRl"},
{ name:"닐루", id:"hr4aGVn"},
{ name:"나히다", id:"bhjGBVR"},
{ name:"레일라", id:"MwnEvim"},
{ name:"파루잔", id:"VEbkJaX"},
{ name:"방랑자", id:"mhT613t"},
{ name:"요요", id:"mEfAhVK"},
{ name:"알하이탐", id:"w50r9kS"},
{ name:"데히야", id:"L5AU59P"},
{ name:"미카", id:"JG9Guht"},
{ name:"카베", id:"nd6acOs"},
{ name:"백출", id:"1RAaUXS"},
{ name:"키라라", id:"iF9Oy2M"},
{ name:"리넷", id:"w6zywx7"},
{ name:"리니", id:"zaVGuR7"},
{ name:"프레미네", id:"PHDiqgU"},
{ name:"느비예트", id:"1vzAlRe"},
{ name:"라이오슬리", id:"q28YDlX"},
{ name:"샤를로트", id:"SVOoJrO"},
{ name:"푸리나", id:"YK3G3GJ"},
{ name:"나비아", id:"aRwuMTt"},
{ name:"슈브르즈", id:"PzL7hTu"},
{ name:"가명", id:"dPKFZat"},
{ name:"한운", id:"rhmF9mZ"},
{ name:"치오리", id:"PvFPY3t"},
{ name:"아를레키노", id:"zAs5XQZ"},
{ name:"세토스", id:"aGYt4Lw"},
{ name:"클로린드", id:"jgwqUX5"},
{ name:"시그윈", id:"tGyXueE"},
{ name:"에밀리", id:"T0S831g"},
{ name:"카치나", id:"nNcoimG"},
{ name:"말라니", id:"4lFuKOd"},
{ name:"키니치", id:"xWeP1HG"},
{ name:"실로닌", id:"keXoecd"},
{ name:"올로룬", id:"CdRJF5q"},
{ name:"차스카", id:"JIlJM1j"},
{ name:"시틀라리", id:"vqQTNRH"},
{ name:"마비카", id:"NuztLMi"},
{ name:"남연", id:"bgYxmff"},
{ name:"미즈키", id:"bGSuMSz"},
{ name:"얀사", id:"uEIHkSB"},
{ name:"바레사", id:"eFO8uU7"},
{ name:"이파", id:"Kyz7gno"},
{ name:"에스코피에", id:"tq8YCyM"},
{ name:"달리아", id:"t6THZMd"},
{ name:"스커크", id:"aEWEGMg"},
{ name:"이네파", id:"vdDrVfB"},
{ name:"아이노", id:"gtya18w"},
{ name:"라우마", id:"THwWkLV"},
{ name:"플린스", id:"bYqWNHm"},
{ name:"네페르", id:"pge29TE"},
{ name:"야호다", id:"M8wCSTX"},
{ name:"두린", id:"hgYfKPn"},
{ name:"콜롬비나", id:"J2TvTNB"},
{ name:"일루가", id:"sE0gaby"},
{ name:"자백", id:"EUHuxTe"},
{ name:"바르카", id:"YVTm9rF"},
{ name:"바람행자", id:"zhTJiTj"},
{ name:"바위행자", id:"izk0r7T"},
{ name:"번개행자", id:"4br4o2Z"},
{ name:"풀행자", id:"l6MqlPf"},
{ name:"물행자", id:"uKzs8Bn"},
{ name:"불행자", id:"0X6GvuG"},
{ name:"바람별인형", id:"FiUDZLv"},
{ name:"바위별인형", id:"EfMSM70"},
{ name:"번개별인형", id:"UZcOdtq"},
{ name:"풀 별인형", id:"oaSzohO"},
{ name:"물 별인형", id:"9DfloEc"},
{ name:"불 별인형", id:"6hl73l5"}
];

const bosses = [
{ name:"무상의 뇌전", id:"7fqCJr4" },
{ name:"무상의 바람", id:"VhNzLrv" },
{ name:"무상의 바위", id:"6xvHv2O" },
{ name:"무상의 얼음", id:"6eUT7J3" },
{ name:"무상의 불", id:"E6gLgh7"},
{ name:"무상의 물", id:"wa1DWeC"},
{ name:"무상의 풀", id:"nJ66lED"},
{ name:"물의 정령", id:"B7KxRiQ"},
{ name:"뇌음의 권현", id:"ptMGZ3c"},
{ name:"물의 환인간", id:"iLCBkAE"},
{ name:"서리밤 하늘 영주", id:"1njupav"},
{ name:"황금 늑대왕", id:"9FzFF9M"},
{ name:"죄 깊은 침례자", id:"6Jkfp7Y"},
{ name:"그윽한 의태 식물", id:"vOgmykU"},
{ name:"초대형 기갑 전함", id:"1S1KV9z"},
{ name:"꼭두각시 검귀", id:"ddo41br"},
{ name:"영구 장치 진영", id:"n67bqlQ"},
{ name:"유적의 뱀", id:"4cEciMk"},
{ name:"영겁의 드레이크", id:"vKt6o1m"},
{ name:"반영구 제어 매트릭스", id:"wz06bZU"},
{ name:"「얼음 바람 모음곡」", id:"IUK6FAJ"},
{ name:"실험성 역장 발생 장치", id:"i9KGcUm"},
{ name:"비밀근원기계 구축기", id:"RCHcxhG"},
{ name:"비밀근원기계 통솔기", id:"rSqRQai"},
{ name:"강펀치 오리", id:"9mD7eIY"},
{ name:"수수께끼의 영력 수행자", id:"CRSiZHn"},
{ name:"얼음 나무", id:"k7IdMVB"},
{ name:"폭염 나무", id:"aWRWZ7B"},
{ name:"번개 나무", id:"b5SFtZJ"},
{ name:"고대 바위 용 도마뱀", id:"GdZCb4R"},
{ name:"심해 용 도마뱀 무리", id:"VVSSryh"},
{ name:"바람 침식 모래 벌레", id:"3cEkwTx"},
{ name:"공포의 취령 버섯", id:"Vbyrfj1"},
{ name:"용암철갑 제왕", id:"qlAAzMv"},
{ name:"천년 묵은 진주 기린", id:"JvDIUPr"},
{ name:"은둔 산예", id:"LtTtTcc"},
{ name:"골렘 군단장", id:"c9L9ELK"},
{ name:"식탐의 숲룡 산왕", id:"VVEEdZd"},
{ name:"황금불꽃의 깃룡 폭군", id:"LmXqiZY"},
{ name:"용암룡 형상", id:"qghIn54"},
{ name:"달빛 환영 나비", id:"7Sha5t2"},
{ name:"달빛 바위 도마뱀붙이", id:"ttSTRyj"},
{ name:"어둠의 악몽 영주", id:"32FDaXr"}
];

// imgur 링크 생성
function getImage(id){
 return `https://i.imgur.com/${id}.png`;
}

const charactersContainer = document.getElementById("characters");

const defaultCharacters = [
   "엠버",
   "케이아",
   "리사",
   "바바라",
   "향릉",
   "노엘",
   "카치나",
   "아이노",
   "리넷",
   "바람행자",
   "바위행자",
   "번개행자",
   "풀행자",
   "물행자",
   "불행자",
   "바람별인형",
   "바위별인형",
   "번개별인형",
   "풀 별인형",
   "물 별인형",
   "불 별인형",
];

const presets = {
   키미: [
      "에일로이",
      "엠버",
      "케이아",
      "리사",
      "바바라",
      "레이저",
      "향릉",
      "북두",
      "행추",
      "응광",
      "피슬",
      "베넷",
      "노엘",
      "중운",
      "설탕",
      "진",
      "다이루크",
      "치치",
      "모나",
      "각청",
      "벤티",
      "디오나",
      "신염",
      "종려",
      "알베도",
      "소",
      "로자리아",
      "연비",
      "카즈하",
      "사유",
      "쿠죠 사라",
      "라이덴쇼군",
      "토마",
      "고로",
      "운근",
      "야에 미코",
      "야란",
      "쿠키시노부",
      "헤이조",
      "콜레이",
      "타이나리",
      "도리",
      "캔디스",
      "사이노",
      "닐루",
      "나히다",
      "레일라",
      "파루잔",
      "방랑자",
      "요요",
      "데히야",
      "미카",
      "카베",
      "리넷",
      "프레미네",
      "느비예트",
      "샤를로트",
      "푸리나",
      "슈브르즈",
      "가명",
      "세토스",
      "카치나",
      "키니치",
      "올로룬",
      "차스카",
      "시틀라리",
      "남연",
      "얀사",
      "바레사",
      "이파",
      "달리아",
      "아이노",
      "플린스",
      "야호다",
      "두린",
      "콜롬비나",
      "일루가",
      "자백",
      "바르카",
      "바람행자",
      "바위행자",
      "번개행자",
      "풀행자",
      "물행자",
      "불행자",
      "바람별인형",
      "바위별인형",
      "번개별인형",
      "풀 별인형",
      "물 별인형",
      "불 별인형"
   ],
   제이: [
      "엠버",
      "케이아",
      "리사",
      "바바라",
      "레이저",
      "향릉",
      "북두",
      "행추",
      "응광",
      "피슬",
      "베넷",
      "노엘",
      "중운",
      "설탕",
      "진",
      "다이루크",
      "치치",
      "모나",
      "디오나",
      "신염",
      "소",
      "로자리아",
      "연비",
      "카즈하",
      "사유",
      "쿠죠 사라",
      "토마",
      "고로",
      "운근",
      "콜레이",
      "타이나리",
      "도리",
      "캔디스",
      "사이노",
      "레일라",
      "파루잔",
      "방랑자",
      "요요",
      "데히야",
      "미카",
      "리넷",
      "리니",
      "프레미네",
      "느비예트",
      "라이오슬리",
      "샤를로트",
      "슈브르즈",
      "가명",
      "세토스",
      "카치나",
      "키니치",
      "올로룬",
      "차스카",
      "시틀라리",
      "남연",
      "미즈키",
      "얀사",
      "이파",
      "달리아",
      "스커크",
      "이네파", 
      "아이노",
      "플린스",
      "야호다",
      "두린",
      "콜롬비나",
      "일루가",
      "바르카",
      "바람행자",
      "바위행자",
      "번개행자",
      "풀행자",
      "물행자",
      "불행자",
      "바람별인형",
      "바위별인형",
      "번개별인형",
      "풀 별인형",
      "물 별인형",
      "불 별인형"
   ],
   서리: [
      "엠버",
      "케이아",
      "리사",
      "바바라",
      "레이저",
      "향릉",
      "북두",
      "행추",
      "응광",
      "피슬",
      "베넷",
      "노엘",
      "중운",
      "설탕",
      "진",
      "다이루크",
      "모나",
      "각청",
      "벤티",
      "클레",
      "디오나",
      "신염",
      "종려",
      "알베도",
      "소",
      "로자리아",
      "연비",
      "카즈하",
      "아야카",
      "사유",
      "요이미야",
      "쿠죠 사라",
      "라이덴쇼군",
      "토마",
      "고로",
      "운근",
      "야란",
      "쿠키시노부",
      "헤이조",
      "콜레이",
      "타이나리",
      "도리",
      "레일라",
      "파루잔",
      "방랑자",
      "요요",
      "카베",
      "리넷",
      "느비예트",
      "푸리나",
      "슈브르즈",
      "가명",
      "세토스",
      "카치나",
      "남연",
      "얀사",
      "이파",
      "이네파",
      "달리아",
      "아이노",
      "플린스",
      "야호다",
      "두린",
      "콜롬비나",
      "일루가",
      "자백",
      "바람행자",
      "바위행자",
      "번개행자",
      "풀행자",
      "물행자",
      "불행자",
      "바람별인형",
      "바위별인형",
      "번개별인형",
      "풀 별인형",
      "물 별인형",
      "불 별인형",
      "샤를로트",
      "올로룬",
      "에스코피에"
   ],
}

let isDragging = false;
let dragMode = null; //add or remove

// 캐릭터 UI 생성
const characterList = document.getElementById("characterList");

characters.forEach(character => {

    const btn = document.createElement("button");
    btn.className = "character";
    btn.textContent = character.name;
    btn.dataset.name = character.name;
    btn.dataset.img = getImage(character.id);

    //일반클릭
    btn.onclick = () => {
      if(btn.classList.contains("locked")) return;
        btn.classList.toggle("selected");
    };

    //드래그시작
    btn.onmousedown = (e) => {
      isDragging = true;

      if(btn.classList.contains("selected")){
         dragMode = "remove";
      }else{
         dragMode = "add";
      }
      e.preventDefault();//텍스트 드래그 방지
    };

    //드래그 중 지나가면
    btn.onmouseenter = () => {
      if(!isDragging) return;
      if(btn.classList.contains("locked")) return;
      if(dragMode === "add"){
         btn.classList.add("selected");
      }
      if(dragMode === "remove"){
         btn.classList.remove("selected");
      }
    };

    characterList.appendChild(btn);

});
document.onmouseup = () => {
   isDragging = false;
};

// 랜덤 버튼
const rollButton = document.getElementById("roll");

rollButton.onclick = () => {

 const selected = document.querySelectorAll(".character.selected");

 const list = Array.from(selected).map(el => ({
  name: el.dataset.name,
  img: el.dataset.img
 }));

 if(list.length < 4){
  alert("캐릭터를 4명 이상 선택해주세요.");
  return;
 }

 const party = [];
 
 for (let i = 0; i < 4; i++) {

    const randomindex = Math.floor(Math.random() * list.length);
    const randomCharacter = list[randomindex];

    party.push(randomCharacter);
    
 }

 const slots = document.querySelectorAll(".slot");

 slots.forEach((slot,i)=>{

  if(!party[i]) return;

  slot.innerHTML = `
  <div class="character-box">
   <img src="${party[i].img}" width="80" height="80">
   <div class="character-name">${party[i].name}</div>
  </div>
  `;

 });

 // 보스 랜덤
 const boss = bosses[Math.floor(Math.random()*bosses.length)];

 const bossSlot = document.querySelector(".boss");

 bossSlot.innerHTML = `
 <div class="character-box">
  <img src="${getImage(boss.id)}" width="80" height="80">
  <div class="character-name">${boss.name}</div>
 </div>
 `;

};


// 검색 기능
const search = document.getElementById("search");

search.addEventListener("input", () => {

 const value = search.value.toLowerCase();

 document.querySelectorAll(".character").forEach(btn => {

  const name = btn.textContent.toLowerCase();

  if(name.includes(value)){
   btn.style.display = "";
  }else{
   btn.style.display = "none";
  }

 });

});

//프리셋
search.addEventListener("keydown", (e) => {
   if(e.key !== "Enter") return;
   const value = search.value.trim();
   if(!presets[value]) return;
   const characters = document.querySelectorAll(".character");
   characters.forEach(btn => {
      if(presets[value].includes(btn.dataset.name)){
         btn.classList.add("selected");
      }
   });
   search.value = "";
   document.querySelectorAll(".character").forEach(btn=>{
      btn.style.display = "";
   });
});

//전체 선택 및 해제 버튼
const selectAllBtn = document.getElementById("selectAll");

selectAllBtn.onclick = () => {

   const characters = document.querySelectorAll(".character");

   const allSelected = [...characters].every(c =>
      c.classList.contains("selected") || c.classList.contains("locked")
   );
   if(allSelected){
      characters.forEach(c => {
         if(!c.classList.contains("locked")){
            c.classList.remove("selected");
         }
      });
      selectAllBtn.textContent = "전체 선택";
   } else {
      characters.forEach(c => {
         c.classList.add("selected");
      });
      selectAllBtn.textContent = "전체 해제";
   }

};

defaultPick.onchange = () => {
   const characters = document.querySelectorAll(".character");
   if(defaultPick.checked){
      characters.forEach(c => {
         if(defaultCharacters.includes(c.dataset.name)){
            c.classList.add("selected");
            c.classList.add("locked"); 
         }
      });
   } else {
      characters.forEach(c => {
         if(c.classList.contains("locked")){
            c.classList.remove("locked");
            c.classList.remove("selected");
         }
      });
   }
};
