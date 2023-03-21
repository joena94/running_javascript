window.onload = () => {

    const panelFaqContainer = document.querySelectorAll(".panel-faq-container");
    const btnAllClose = document.getElementById("btn-all-close");
    let panelFaqAnswer = document.querySelectorAll(".panel-faq-answer");

    console.log(btnAllClose)

    //반복문 순회하면서 해당 faq 제목 클릭시 콜백처리
    for(let i = 0; i < panelFaqContainer.length; i++){
        panelFaqContainer[i].addEventListener("click", function(){
            // 클릭 시 처리할일
            console.log('나 클릭했엉' + i)

            // faq 제목 클릭시 --> 본문이 보이게끔 --> add active class
            panelFaqAnswer[i].classList.add("active");
        });
    };

    btnAllClose.addEventListener("click", function(){
        console.log("다 닫기")
        // 버튼 클릭시 처리
        for(let i = 0; i < panelFaqAnswer.length; i++){
            panelFaqAnswer[i].classList.remove("active")
        }
    });
};