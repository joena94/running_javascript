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
let containerItem = $(".containerItem");
let slideImg = $(".slideImg");
let imgLeng = $(".slideImg").length-1; // 현재 3
let moveWidth = -100;
let nowImg = 0;

// 이미지 클론
function doClone(){
    let firstImg = slideImg.eq(0);
    let lastImg = slideImg.eq(imgLeng + 1);
    
    slideImg.append("firstImg")
    slideImg.prepend("lastImg")
}

doClone();

function doNext(){
    if(nowImg < imgLeng){
        containerItem.css({"transform":"translateX("+ moveWidth +"vw)"})
        moveWidth -= 100;
        nowImg += 1;
    } else if (nowImg >= imgLeng){
        containerItem.css({"transform":"translateX(0vw)"})
        moveWidth = -100;
        nowImg = 0;
    }
    console.log("nowImg -> " + nowImg, "imgLeng -> " + imgLeng)
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