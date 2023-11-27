
var currentCombinationName = "" // 현재 조합의 이름을 저장하는 변수
// 미리 정의된 조합들
var defaultCombinations = {
    "BMT 1" : {
        menu: "이탈리안 비엠티",
        size: "15",
        bread: "화이트",
        toasting: "Yes",
        cheese: "슈레드 치즈",
        ex_cheese: "None",
        meat: "None",
        checkboxes: {
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true, 
            "랜치": true, "스위트 어니언": true, "핫 칠리": true
        }
    },
    "BMT 2" : {
        menu: "이탈리안 비엠티",
        size: "15",
        bread: "위트",
        toasting: "Yes",
        cheese: "아메리칸 치즈",
        ex_cheese: "None",
        meat: "None",
        checkboxes: { 
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,    
            "랜치": true, "핫 칠리": true
        }
    },
    "에그마요 1" : {
        menu: "에그마요",
        size: "15",
        bread: "화이트",
        toasting: "Yes",
        cheese: "아메리칸 치즈",
        ex_cheese: "None",
        meat: "None",
        checkboxes: {
            "양상추": true, "토마토": true, "오이": true, "피망": true, "양파": true, "피클": true, "올리브": true, "할라피뇨": true,
            "랜치": true, "핫 칠리": true, "베이컨": true
        }
    },
    "서브웨이 클럽 2" : {
        menu: "서브웨이 클럽",
        size: "15",
        bread: "위트",
        toasting: "Yes",
        cheese: "슈레드 치즈",
        ex_cheese: "None",
        meat: "None",
        checkboxes: { 
            "양상추": true, "토마토": true, "피망": true, "양파": true, "올리브": true, "할라피뇨": true,    
            "스위트 어니언": true, "스위트 칠리": true,
            "아보카도" : true
        }
    },
    // 여기에 더 많은 미리 정의된 조합들을 추가할 수 있습니다
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
            "스위트 어니언": false,
            "마요네즈": false,
            "스위트 칠리": false,
            "스모크 바베큐": false,
            "핫 칠리": false,
            "허니 머스타드": false,
            "올리브 오일": false,
            "레드 와인 식초": false,
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
    var sauceCheckboxes = ["랜치", "스위트 어니언", "마요네즈", "스위트 칠리", "스모크 바베큐", "핫 칠리", "허니 머스타드", "올리브 오일", "레드 와인 식초", "소금", "후추"]; // 체크박스 ID를 나타내는 배열

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

document.getElementById('setNameButton').addEventListener('click', setCombinationName);
document.getElementById('save').addEventListener('change', loadCombination);
document.getElementById('saveButton').addEventListener('click', saveCombination);

// 페이지 로드 시 조합 목록 갱신
document.addEventListener('DOMContentLoaded', updateCombinationList);
