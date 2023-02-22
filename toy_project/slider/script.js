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
let _$containerItem = $(".containerItem");
let _$imgLeng = $(".slideImg").length-1; // 현재 3


// transform 사용
// function doNext(){
//   let moveWidth = -100;
//   let nowImg = 0;
//     if(nowImg < _$imgLeng){
//         _$containerItem.css({"transform":"translateX("+ moveWidth +"vw)"})
//         moveWidth -= 100;
//         nowImg += 1;
//     } else if (nowImg >= _$imgLeng){
//         _$containerItem.css({"transform":"translateX(0vw)"})
//         moveWidth = -100;
//         nowImg = 0;
//     }
//     console.log("nowImg -> " + nowImg, "imgLeng -> " + _$imgLeng)
// }

function getSlideImg(){
    let _$slideImg = $(".slideImg");
    return _$slideImg;
}

// paganation array 짜기


// nav 변화주기
// data num이 마지막꺼면, 처음껄로 돌리기, 처음꺼면, 마지막껄로 돌리기(무한으로 돌려)
let num = 0;
function moveNav(){
    if(num < _$imgLeng ){
        $(".btn").eq(num).removeClass("btnOn");
        $(".btn").eq(num+1).addClass("btnOn")

        num += 1;
    } else if(num > _$imgLeng){ 
        $(".btn").eq(_$imgLeng).removeClass("btnOn");
        $(".btn").eq(0).addClass("btnOn")

        num = 0
    }
    
    console.log("num -> " + num + " / _$imgLeng -> " + _$imgLeng)
}

//doPrev
$(".prev").click(function(){
    let _$getSlideImg = getSlideImg();
    $(_$getSlideImg[_$imgLeng]).prependTo($("ul"))
    

})

//다음
$(".next").on("click", function(){
    let _$getSlideImg = getSlideImg();
    $(_$getSlideImg[0]).appendTo($("ul"));

    moveNav();
});

// $(".next").click(function(){
//     let _$getSlideImg = getSlideImg();
//     $(_$getSlideImg[0]).appendTo($("ul"));

//     moveNav();
// })

});