
var currentCombinationName = "" // 현재 조합의 이름을 저장하는 변수
// 미리 정의된 조합들
var defaultCombinations = {
    "이탈리안 비엠티 1": {
        "menu": "이탈리안 비엠티",
        "size": "15",
        "bread": "플랫브레드",
        "toasting": "Yes",
        "cheese": "슈레드 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "에그마요": true,
            "랜치": true, 
            "스위트 어니언": true, 
            "스위트 칠리": true
        }
    },
    
    "이탈리안 비엠티 2": {
        "menu": "이탈리안 비엠티",
        "size": "15",
        "bread": "파마산 오레가노",
        "toasting": "Yes",
        "cheese": "모짜렐라 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "피망": true, "오이": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "아보카도": true,
            "랜치": true, 
            "스위트 어니언": true, 
            "핫 칠리": true
        }
    },
    
    "비엘티 1": {
        "menu": "비엘티",
        "size": "15",
        "bread": "허니오트",
        "toasting": "Yes",
        "cheese": "슈레드 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "에그마요": true,
            "스위트 칠리": true, 
            "스위트 어니언": true, 
            "랜치": true
        }
    },
    
    "비엘티 2": {
        "menu": "비엘티",
        "size": "15",
        "bread": "플랫브레드",
        "toasting": "Yes",
        "cheese": "모짜렐라 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "피클": true, "양파": true, "올리브": true, "할라피뇨": true,
            "오믈렛": true,
            "홀스래디쉬": true, 
            "랜치": true
        }
    },

    "비엘티 3": {
        "menu": "비엘티",
        "size": "15",
        "bread": "화이트",
        "toasting": "Yes",
        "cheese": "아메리칸 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "피클": true, "양파": true, "올리브": true, "할라피뇨":true,
        }
    },

    "햄 1": {
        "menu": "햄",
        "size": "15",
        "bread": "허니오트",
        "toasting": "Yes",
        "cheese": "아메리칸 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "사우스웨스트_치폴레": true, 
            "랜치": true, 
            "스위트_어니언": true
        }
    },
    
    "햄 2": {
        "menu": "햄",
        "size": "15",
        "bread": "화이트",
        "toasting": "Yes",
        "cheese": "슈레드 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "랜치": true, 
            "올리브_오일": true
        }
    },
    
    "참치 1": {
        "menu": "참치",
        "size": "15",
        "bread": "허니오트",
        "toasting": "Yes",
        "cheese": "아메리칸 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "랜치": true, 
            "스위트_어니언": true
        }
    },
    
    "참치 2": {
        "menu": "참치",
        "size": "15",
        "bread": "허니오트",
        "toasting": "Yes",
        "cheese": "아메리칸 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "스위트_어니언": true, 
            "후추": true
        }
    },
    
    "에그마요 1": {
        "menu": "에그마요",
        "size": "15",
        "bread": "허니오트",
        "toasting": "Yes",
        "cheese": "아메리칸 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "랜치": true, 
            "스위트_칠리": true
        }
    },
    
    "에그마요 2": {
        "menu": "에그마요",
        "size": "15",
        "bread": "플랫브레드",
        "toasting": "Yes",
        "cheese": "슈레드 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "랜치": true, 
            "스위트_어니언": true, 
            "핫칠리": true
        }
    },
    
    "치킨 슬라이스 1": {
        "menu": "치킨 슬라이스",
        "size": "15",
        "bread": "화이트",
        "toasting": "Yes",
        "cheese": "슈레드 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "사우스웨스트_치폴레": true, 
            "스위트_칠리": true
        }
    },
    
    "치킨 슬라이스 2": {
        "menu": "치킨 슬라이스",
        "size": "15",
        "bread": "허니오트",
        "toasting": "Yes",
        "cheese": "아메리칸 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "레드와인_식초": true, 
            "소금": true, 
            "후추": true, 
            "오믈렛": true
        }
    },
    
    "써브웨이 클럽 1": {
        "menu": "써브웨이 클럽",
        "size": "15",
        "bread": "허니오트",
        "toasting": "Yes",
        "cheese": "아메리칸 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "스위트_어니언": true, 
            "랜치": true
        }
    },
    
    "써브웨이 클럽 2": {
        "menu": "써브웨이 클럽",
        "size": "15",
        "bread": "허니오트",
        "toasting": "Yes",
        "cheese": "모짜렐라 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "허니머스타드": true, 
            "마요네즈": true
        }
    },
    
    "쉬림프 1": {
        "menu": "쉬림프",
        "size": "15",
        "bread": "플랫브레드",
        "toasting": "Yes",
        "cheese": "아메리칸 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "랜치": true
        }
    },
    
    "쉬림프 2": {
        "menu": "쉬림프",
        "size": "15",
        "bread": "허니오트",
        "toasting": "Yes",
        "cheese": "슈레드 치즈",
        "ex_cheese": "None",
        "meat": "None",
        "checkboxes": { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "홀스래디쉬": true, 
            "스위트_칠리": true, 
            "핫칠리": true
        }
    },
    
};

var menuTexts = {
    "figure1": "재료 : 스파이시 바비큐 1스쿱, 치즈 2장 \n\n 중량 : 256g \n 열량 : 374kcal \n 단백질 : 25.2g \n 포화지방 : 7.4g \n 당류 : 15.0g \n 나트륨 : 903mg \n\n 추천 소스 : 마요네즈, 사우스웨스트 치폴레",
    "figure2": "재료 : 페퍼로니 5장, 살라미 5장, 치즈 2장 \n\n 중량 : 224g \n 열량 : 464kcal \n 단백질 : 20.7g \n 포화지방 : 9.1g \n 당류 : 8.7g \n 나트륨 : 1250g \n\n 추천 소스 : 랜치, 스위트 어니언",
    "figure3": "재료 : 스파이시 쉬림프 5마리, 치즈 2장 \n\n 중량 : 213g \n 열량 : 245kcal \n 단백질 : 16.5g \n 포화지방 : 0.9g \n 당류 : 9.1g \n 나트륨 : 570mg \n\n 추천 소스 : 랜치",
    "figure4": "재료 : 스테이크 1스쿱, 치즈 2장 \n\n 중량 : 245g \n 열량 : 355kcal \n 단백질 : 28.1g \n 포화지방 : 4.2g \n 당류 : 8.8g \n 나트륨 : 780mg \n\n 추천 소스 : 사우스웨스트 치폴레, 마요네즈",
    "figure5": "재료 : 치킨 브레스트 햄 3장, 베이컨 2장, 아보카도 1스쿱, 치즈 2장 \n\n 중량 : 256g \n 열량 : 374kcal \n 단백질 : 25.2g \n 포화지방 : 7.4g \n 당류 : 15.0g \n 나트륨 : 903mg \n\n 추천 소스 : 랜치, 홀스래디쉬",
    "figure19": "재료 : 새우 5마리, 치즈 2장 \n\n 중량 : 209g \n 열량 : 241kcal \n 단백질 : 16.3g \n 포화지방 : 0.6g \n 당류 : 7.9g \n 나트륨 : 415mg \n\n 추천 소스 : 랜치, 스위트 칠리",
    "figure6": "재료 : 치킨 브레스트 1장, 치즈 2장 \n\n 중량 : 237g \n 열량 : 300kcal \n 단백질 : 26g \n 포화지방 : 1.3g \n 당류 : 8.7g \n 나트륨 : 605mg \n\n 추천 소스 : 스위트 어니언, 올리브오일",
    "figure7": "재료 : 로티세리 치킨 1스쿱, 치즈 2장 \n\n 중량 : 249g \n 열량 : 327kcal \n 단백질 : 29.1g \n 포화지방 : 2.5g \n 당류 : 7.8g \n 나트륨 : 542mg \n\n 추천 소스 : 스위트칠리, 랜치",
    "figure8": "재료 : K-바비큐 1스쿱, 치즈 2장 \n\n 중량 : 256g \n 열량 : 372kcal \n 단백질 : 25.6g \n 포화지방 : 2.1g \n 당류 : 14.7g \n 나트륨 : 899mg \n\n 추천 소스 : 올리브오일, 후추",
    "figure9": "재료 : 풀드포크 바비큐 1스쿱, 치즈 2장 \n\n 중량 : 235g \n 열량 : 327kcal \n 단백질 : 24.8g \n 포화지방 : 2.1g \n 당류 : 7.8g \n 나트륨 : 689mg \n\n 추천 소스 : 스모크 바비큐, 랜치",
    "figure10": "재료 : 치킨 브레스트  햄 2장, 햄 1장, 베이컨 2장, 치즈 2장 \n\n 중량 : 216g \n 열량 : 299kcal \n 단백질 : 19.8g \n 포화지방 : 2.4g \n 당류 : 8.53g \n 나트륨 : 853mg \n\n 추천 소스 : 랜치, 스위트 어니언",
    "figure11": "재료 : 치킨 데리야끼 1스쿱, 치즈 2장 \n\n 중량 : 255g \n 열량 : 314kcal \n 단백질 : 26.5g \n 포화지방 : 1.2g \n 당류 : 10.1g \n 나트륨 : 698mg \n\n 추천 소스 : 스모크 바비큐, 마요네즈",
    "figure12": "재료 : 페퍼로니 3장, 살라미 3장, 햄 2장, 치즈 2장 \n\n 중량 : 228g \n 열량 : 388kcal \n 단백질 : 21g \n 포화지방 : 5.9g \n 당류 : 8.6g \n 나트륨 : 1064mg \n\n 추천 소스 : 스위트 어니언, 랜치",
    "figure13": "재료 : 베이컨 4장, 치즈 2장 \n\n 중량 : 182g \n 열량 : 300kcal \n 단백질 : 15.9g \n 포화지방 : 3.7g \n 당류 : 7.9g \n 나트륨 : 666mg \n\n 추천 소스 : 마요네즈, 사우스웨스트 치폴레",
    "figure14": "재료 : 치킨 브레스트 햄 4장, 치즈 2장 \n\n 중량 : 221g \n 열량 : 265kcal \n 단백질 : 18.6g \n 포화지방 : 0.9g \n 당류 : 8.7g \n 나트륨 : 751mg \n\n 추천 소스 : 스위트 칠리, 사우스웨스트 치폴레",
    "figure15": "재료 : 참치 2스쿱, 치즈 2장 \n\n 중량 : 238g \n 열량 : 316kcal \n 단백질 : 26.9g \n 포화지방 : 1.4g \n 당류 : 7.6g \n 나트륨 : 535mg \n\n 추천 소스 : 핫칠리, 스위트칠리",
    "figure16": "재료 : 햄 4장, 치즈 2장 \n\n 중량 : 220g \n 열량 : 262kcal \n 단백질 : 19g \n 포화지방 : 1g \n 당류 : 8.4g \n 나트륨 : 680mg \n\n 추천 소스 : 마요네즈, 홀스래디쉬",
    "figure17": "재료 : 에그마요 2스쿱, 치즈 2장 \n\n 중량 : 238g \n 열량 : 416kcal \n 단백질 : 16.4g \n 포화지방 : 4.8g \n 당류 : 7.7g \n 나트륨 : 554mg \n\n 추천 소스 : 랜치, 스위트 칠리",
    "figure18": "재료 : 각종 야채, 치즈 2장 \n\n 중량 : 164g \n 열량 : 209kcal \n 단백질 : 9.2g \n 포화지방 : 0.6g \n 당류 : 7.6g \n 나트륨 : 262mg \n\n 추천 소스 : 레드와인식초, 올리브오일"
    
};


// 미리 정의된 조합을 초기화하는 함수
function initializeDefaultCombinations() {
    Object.keys(defaultCombinations).forEach(function(key) {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify(defaultCombinations[key]));
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeDefaultCombinations();
    updateCombinationList(); // 조합 목록 갱신
    currentCombinationName = ""; // 초기 조합 이름 비움
});

// 조합의 이름을 설정하는 함수
function setCombinationName() {
    var newName = prompt("새로운 조합의 이름을 입력하세요:");
    if (!newName) {
        alert("조합 이름은 비워둘 수 없습니다.");
        return;
    }

    // 현재 조합 이름이 없으면 함수 종료
    if (!currentCombinationName) {
        alert("선택된 조합이 없습니다.");
        return;
    }

    // 새 이름으로 조합 데이터를 저장하고, 기존 이름의 조합을 삭제
    var combinationData = localStorage.getItem(currentCombinationName);
    localStorage.setItem(newName, combinationData);
    localStorage.removeItem(currentCombinationName);

    // 현재 조합 이름 업데이트
    currentCombinationName = newName;
    updateCombinationList();
    alert("조합 이름이 '" + newName + "'(으)로 변경되었습니다.");
}

document.getElementById('makeNew').addEventListener('click', function() {
    var newName = prompt("새 조합의 이름을 입력하세요:");
    if (!newName) {
        alert("조합 이름은 비워둘 수 없습니다.");
        return;
    }

    // 새 조합 객체 생성
    var newCombination = {
        menu: "",
        size: "",
        bread: "",
        toasting: "",
        cheese: "",
        ex_cheese: "",
        checkboxes: {
            "양상추": false,
            "토마토": false,
            "오이": false,
            "피망": false,
            "양파": false,
            "피클": false,
            "올리브": false,
            "할라피뇨": false,
            "랜치": false,
            "스위트_어니언": false,
            "마요네즈": false,
            "스위트_칠리": false,
            "스모크_바베큐": false,
            "핫_칠리": false,
            "허니_머스타드": false,
            "사우스웨스트_치폴레": false,
            "홀스래디쉬": false,
            "머스타드": false,
            "올리브_오일": false,
            "레드_와인_식초": false,
            "소금": false,
            "후추": false,
            "에그마요": false,
            "페퍼로니": false,
            "베이컨": false,
            "아보카도": false,
            "오믈렛": false
            
        }
    };

    // 새 조합 저장
    localStorage.setItem(newName, JSON.stringify(newCombination));
    alert("새 조합이 생성되었습니다.");

    // 조합 목록 갱신
    updateCombinationList();

    // 생성된 조합 이름을 현재 조합 이름으로 설정
    currentCombinationName = newName;
    loadCombination();
});
// 조합을 localStorage에 저장하는 함수
function saveCombination() {
    // 소스 체크박스 확인
    var selectedSourcesCount = 0;
    var sauceCheckboxes = ["랜치", "스위트_어니언", "마요네즈", "스위트_칠리", "스모크_바베큐", "핫_칠리", "허니_머스타드", "올리브_오일", "레드_와인_식초", "소금", "후추"]; // 체크박스 ID를 나타내는 배열

    sauceCheckboxes.forEach(function(id) {
        if (document.getElementById(id) && document.getElementById(id).checked) {
            selectedSourcesCount++;
        }
    });

    // 선택된 소스 체크박스가 3개를 초과하는 경우
    if (selectedSourcesCount > 3) {
        alert("소스는 최대 3개까지만 선택할 수 있습니다. 다시 선택해주세요.");
        return; // 저장 중지
    }

    var combination = {
        menu: document.getElementById('menu').value,
        size: document.getElementById('size').value,
        bread: document.getElementById('bread').value,
        toasting: document.getElementById('toasting').value,
        cheese: document.getElementById('cheese').value,
        ex_cheese: document.getElementById('ex_cheese').value,
        meat: document.getElementById('meat').value,
        checkboxes: {}
    };
    
    document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
        combination.checkboxes[checkbox.id] = checkbox.checked;
    });

    localStorage.setItem(currentCombinationName, JSON.stringify(combination));
    alert("저장되었습니다.");

    updateCombinationList();
    // 현재 조합 이름 초기화
    currentCombinationName = "";
}

// 저장된 조합을 불러오기 위한 함수 (옵션 목록 갱신)
function updateCombinationList() {
    var select = document.getElementById('save');
    select.innerHTML = ''; // 기존 옵션을 비웁니다.

    // 빈 옵션 추가
    var emptyOption = document.createElement('option');
    emptyOption.textContent = "조합을 선택하세요";
    emptyOption.value = "";
    select.appendChild(emptyOption);

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var option = document.createElement('option');
        option.value = option.textContent = key;
        select.appendChild(option);
    }
}


// 저장된 조합을 불러와서 폼에 설정하는 함수
function loadCombination() {
    var combinationName = document.getElementById('save').value;
    currentCombinationName = combinationName; // 현재 조합 이름을 업데이트
    var combination = JSON.parse(localStorage.getItem(combinationName));

    if (combination) {
        document.getElementById('menu').value = combination.menu;
        document.getElementById('size').value = combination.size;
        document.getElementById('bread').value = combination.bread;
        document.getElementById('toasting').value = combination.toasting;
        document.getElementById('cheese').value = combination.cheese;
        document.getElementById('ex_cheese').value = combination.ex_cheese;
        document.getElementById('meat').value = combination.meat;

        // 체크박스 상태 초기화
        document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
            checkbox.checked = false;
        });

        // 체크박스 상태 복원
        if (combination.checkboxes) {
            Object.keys(combination.checkboxes).forEach(function(id) {
                var checkbox = document.getElementById(id);
                if (checkbox) {
                    checkbox.checked = combination.checkboxes[id];
                }
            });
        }
    }
}

function showImage(figureId) {
    var image = document.getElementById(figureId).getElementsByTagName('img')[0];
    var caption = document.getElementById(figureId).getElementsByTagName('figcaption')[0];
    var text = menuTexts[figureId].replace(/\n/g, '<br>'); // 줄바꿈 문자를 <br> 태그로 변환
    


    var imageAside = document.getElementById('menuAside');
    var asideImage = document.getElementById('asideImage');
    var asideText = document.getElementById('asideText');
    var additionalTextElement = document.getElementById('additionalText');

    asideImage.src = image.src;
    asideImage.alt = image.alt;
    asideText.textContent = caption.textContent;
    additionalTextElement.innerHTML = text.replace(/\n/g, '<br>');
    imageAside.classList.add('show');
}

function showSauce() {
    var sauceAside = document.getElementById('sauceAside');
    if(sauceAside.classList.contains('show')) {
        sauceAside.classList.remove('show');
    } else {
        sauceAside.classList.add('show');
    }
}

function closeMenuAside() {
    var menuAside = document.getElementById('menuAside');
    menuAside.classList.remove('show'); // 'show' 클래스를 제거합니다.
}
function closeSauceAside() {
    var sauceAside = document.getElementById('sauceAside');
    sauceAside.classList.remove('show');
}

document.getElementById('setNameButton').addEventListener('click', setCombinationName);
document.getElementById('save').addEventListener('change', loadCombination);
document.getElementById('saveButton').addEventListener('click', saveCombination);

// 페이지 로드 시 조합 목록 갱신
document.addEventListener('DOMContentLoaded', updateCombinationList);
