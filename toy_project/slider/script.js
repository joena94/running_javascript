$(document).ready(function(){


    // $(".btn1").click(function(){
    //     $(".containerItem").css({"transform":"translateX(0vw)"})
    // });
    // $(".btn2").click(function(){
    //     $(".containerItem").css({"transform":"translateX(-100vw)"})
    // });
    // $(".btn3").click(function(){
    //     $(".containerItem").css({"transform":"translateX(-200vw)"})
    // });
    // $(".btn4").click(function(){
    //     $(".containerItem").css({"transform":"translateX(-300vw)"})
    // });



// 리팩토링 하자
// 이전
let containerItem = $(".containerItem")
let imgLeng = $(".slideImg").length-1; // 현재 4개
let moveWidth = -100;
let nowImg = 0;


function doNext(){
    if(nowImg < imgLeng){
        containerItem.css({"transform":"translateX("+ moveWidth +"vw)"})
        moveWidth -= 100;
        nowImg += 1;
    } else if (nowImg >= imgLeng){
        containerItem.css({"transform":"translateX(0vw)"})
        nowImg = 0;
    }
    console.log(nowImg)
}

function doPrev(){

}



$(".prev").click(function(){
    doPrev();
})

//다음
$(".next").click(function(){
    doNext();
})

});