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
    this.lastScrollTop = 0; // 바로 이전 스크롤 위치
    this.xPos = info.xPos;
    this.speed = info.speed;
    this.direction;
    this.runningState = false;  // 좌우 이동 중인지 아닌지 판별하는 속성
    this.rafId; // requestAnimationFrameId의 리턴값을 받는 속성
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
            clearTimeout(self.scrollState);     // self.scrollState을 클리어해버림.

            if(!self.scrollState){
                self.mainElem.classList.add("running");
            }

            self.scrollState = setTimeout(function(){   // setTimeout 값 리턴은 지연시간 관계 없이 바로 실행
                self.scrollState = false;
                self.mainElem.classList.remove("running");
            }, 500);
            
            // 이전 스크롤 위치와 현재 스크롤 위치를 비교
            if(self.lastScrollTop > scrollY){
                //이전 스크롤 위치가 크다면 : 스크롤 올림
                self.mainElem.setAttribute("data-direction", "backward");
            } else {
                // 현재 스크롤 위치가 크다면 : 스크롤 내림
                self.mainElem.setAttribute("data-direction", "forward");
            }

            self.lastScrollTop = scrollY;
        });

        window.addEventListener("keydown", function(e){
            if(self.runningState) return;

            if(e.key === "ArrowLeft"){
                self.direction = "left";
                self.mainElem.setAttribute("data-direction", "left");
                self.mainElem.classList.add("running");
                self.run(self);
                self.runningState = true;
            } else if (e.key === "ArrowRight"){
                self.direction = "right";
                self.mainElem.setAttribute("data-direction", "right");
                self.mainElem.classList.add("running");
                self.run(self);
                self.runningState = true;
            }
        });
        window.addEventListener("keyup", function(e){
            self.mainElem.classList.remove("running");
            cancelAnimationFrame(self.rafId);
            self.runningState = false;
        });
    },

    run: function(self){
        if (self.direction == "left"){
            self.xPos -= self.speed;
        } else if (self.direction == "right"){
            self.xPos += self.speed;
        };

        // 걸어갈 수 있는 범위 제한
        if (self.xPos < 2){
            self.xPos = 2;
        }
        if (self.xPos > 88){
            self.xPos = 88
        }

        self.mainElem.style.left = self.xPos + "%";

        self.rafId = requestAnimationFrame(function(){
            self.run(self);
        }); // requestAnimationFrame 얘 때문에 this 값이 바뀜. 그래서 매개변수에 self 넣어서 우회
    }

    // run: function(){
    //     const self = this;

    //     if (self.direction == "left"){
    //         self.xPos -= self.speed;
    //     } else if (self.direction == "right"){
    //         self.xPos += self.speed;
    //     };

    //     if (self.xPos < 2){
    //         self.xPos = 2;
    //     }
    //     if (self.xPos > 88){
    //         self.xPos = 88
    //     }

    //     self.mainElem.style.left = slef.xPos + "%";

    //     self.rafId = requestAnimationFrame(self.run.bind(self)); // requestAnimationFrame 얘 때문에 this 값이 바뀜. 그래서 바인드 씀.
    // }
};
