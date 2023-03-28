function Character(info){
    this.mainElem = document.createElement("div")// this를 했다는건 캐릭터 생성자를 통해 만들어낼 인스턴스 객체의 속성으로 쓰겠다는 거
    this.mainElem.classList.add("character")
    this.mainElem.innerHTML = `
    <div class="character-face-con character-head">
        <div class="character-face character-head-face face-front"></div>
        <div class="character-face character-head-face face-back"></div>
    </div>
    <div class="character-face-con character-torso">
        <div class="character-face character-torso-face face-front"></div>
        <div class="character-face character-torso-face face-back"></div>
    </div>
    <div class="character-face-con character-arm character-arm-right">
        <div class="character-face character-arm-face face-front"></div>
        <div class="character-face character-arm-face face-back"></div>
    </div>
    <div class="character-face-con character-arm character-arm-left">
        <div class="character-face character-arm-face face-front"></div>
        <div class="character-face character-arm-face face-back"></div>
    </div>
    <div class="character-face-con character-leg character-leg-right">
        <div class="character-face character-leg-face face-front"></div>
        <div class="character-face character-leg-face face-back"></div>
    </div>
    <div class="character-face-con character-leg character-leg-left">
        <div class="character-face character-leg-face face-front"></div>
        <div class="character-face character-leg-face face-back"></div>
    </div>`

    document.querySelector(".stage").appendChild(this.mainElem);

    this.mainElem.style.left = info.xPos + "%";
    this.scrollState = false;   // 스크롤 중인지 아닌지를 체크하는 변수, 처음에 생성하면 false(=undefined), false 생략 가능
    this.init();
}
// 캐릭터가 움직인다는건 동작에 해당함, 캐릭터 객체의 메서드로 만들거임
// 생성자로 생성해낸 인스턴스 객체가 공통으로 사용하는 속성이나 메서드는 프로토타입 객체에 만든다.

// 공통 메서드니까 프로토타입 만든다아
// Character.prototype.xxxxxx(method) = function(){};   // 1. 이렇게도 씀   // 원래 존재하는 prototype에 메서드를 추가하는 방식
Character.prototype = {         // 2. 이렇게도 씀   //빈 객체로 재정의 하려고 constructor를 설정. prototype의 기본 속성인 constructor를 보존하려고 쓴거
    constructor : Character,    // 프로토타입 객체에 기본적인 속성인 constructor, 그거 가리키는게 생성자 함수임.
    init: function(){   // 초기화 함수
        const self = this;

        window.addEventListener("scroll", function(){
            // self.mainElem.classList.add("running"); // 여기서 this는 window임. 그러니까 이벤트 리스너 밖에서 this를 설정하고 쓰기.

            if(!self.scrollState){
                self.mainElem.classList.add("running");
            }

            self.scrollState = setTimeout(function(){
                self.scrollState = false;
                self.mainElem.classList.remove("running");
            }, 500)
        })
    }
};
