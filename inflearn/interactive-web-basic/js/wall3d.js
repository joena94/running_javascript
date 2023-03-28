// 전역변수는 최대한 줄이자. 충돌 가능성 크다
// 그래서 즉시 실행 함수 쓰는거
(function(){

    const houseElem = document.querySelector(".house");
    const stageElem = document.querySelector(".stage");
    const barElem = document.querySelector(".progress-bar");
    const mousePos = {x: 0, y: 0};
    // body.offsetHeight = body 전체의 높이
    // window.innerHeight = 윈도우 현재 창의 높이
    // 전체 문서 높이에서 - 창 높이를 빼준다 = 전체 스크롤 할 수 있는 범위
    // 문제는 창 사이즈가 변하면 window.innerHeight 값도 변하면서 창크기가 바뀔때 로드 높이에서만 의도대로 움직임

    // window의 사이즈가 변할때마다 maxScrollValue가 갱신 될 필요가 있음.
    let maxScrollValue;

    function resizeHandler(){
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    };

    window.addEventListener("scroll", function(){
        //console.log(scrollY) // 스크롤을 수치화 하는것, wiwndow 객체의 scrollY
        // 얼마나 스크롤을 했는지 비율로 알기
        // console.log(scrollY / maxScrollValue)

        // 젤 처음 house style의 transform: translateZ(-490vw);를 적용했으니 빼주기
        const scrollPer = scrollY / maxScrollValue; // 비율 계산하는애
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = `translateZ(${zMove}vw)`;

        // ---------progress bar---------
        barElem.style.width = `${scrollPer * 100}%`;
    });

    // 마우스로 흔들흔들
    window.addEventListener("mousemove", function(e){
        //console.log(e.clientX, e.clientY)   // 마우스 움직일때마다 마우스의 위치가 나옴.
        // 가운데가 0이 되도록 하는 계산식
        mousePos.x = -1 + (e.clientX / this.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / this.innerHeight) * 2;
        stageElem.style.transform = `rotateX(${mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg)`;
    })


    // 리사이즈 될떄마다 리사이즈 핸들러 발생.
    // maxScrollValue 갱신됨
    window.addEventListener("resize", resizeHandler);

    stageElem.addEventListener("click", function(e){
        new Character({     // 생성자 함수 실행
            xPos: e.clientX / window.innerWidth * 100   // 매개변수가 한개(객체)인 생성자 함수. 우리가 필요한 옵션들은 이 객체의 속성에 계속 추가할거임.
        });    

        //console.log(e.clientX)    // 내가 클릭한 위치
        //console.log(e.clientX / window.innerWidth * 100)    // 내가 클릭한 위치를 1~100%로 표현하기
    });

    resizeHandler();
    

})();