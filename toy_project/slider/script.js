$(document).ready(function(){
    let _$containerItem = $(".containerItem");
    let _$imgLeng = $(".slideImg").length-1; // 현재 3

    function getSlideImg(){
        let _$slideImg = $(".slideImg");
        return _$slideImg;
    }

    // pagination 만들기
    for(i = 1; i <= _$imgLeng+1; i++){
        $("<button />").addClass("btn").attr("data-pag-num", i).appendTo($(".barBtn"));
    };
        // 첫번째 pagaination은 btnOn class 추가하기
    $(".btn:first-child").addClass("btnOn")


    // pagination click event
    function selectBarBtn(){
        $(".btn").on("click", function(e){
            e.preventDefault();
            // 해당 data-pagNum과 data-num이 같으면, data-num 이미지 보여주기
            let now = $(this).data("pagNum");
            let _$getSlideImg = getSlideImg();
            if(now != $(".slideImg").data("num")){
                console.log(now, $(".slideImg").data("num"), $(_$getSlideImg[now-1]), $(this));
                $(_$getSlideImg[now-1]).prependTo($("ul"));
                $(".btn").removeClass("btnOn")
                $(this).addClass("btnOn");
            } else if (){

            };
        })
    }

    selectBarBtn();


    // data num이 마지막꺼면, 처음껄로 돌리기, 처음꺼면, 마지막껄로 돌리기(무한으로 돌려)
    //doPrev
    $(".prev").click(function(){
        let _$getSlideImg = getSlideImg();
        $(_$getSlideImg[_$imgLeng]).prependTo($("ul"))
        
        function doPrevPagination(){
            if($(_$getSlideImg[3]).data("num") == 4){
                $("[data-pag-num=1]").removeClass("btnOn");
                $("[data-pag-num=4]").addClass("btnOn");
            } else if($(_$getSlideImg[3]).data("num") == 3){
                $("[data-pag-num=4]").removeClass("btnOn");
                $("[data-pag-num=3]").addClass("btnOn");
            } else if($(_$getSlideImg[3]).data("num") == 2){
                $("[data-pag-num=3]").removeClass("btnOn");
                $("[data-pag-num=2]").addClass("btnOn");
            } else if($(_$getSlideImg[3]).data("num") == 1){
                $("[data-pag-num=2]").removeClass("btnOn");
                $("[data-pag-num=1]").addClass("btnOn");
            }
            // if($(_$getSlideImg[0]).data("num") == 4){
            //     $("[data-pag-num=1]").removeClass("btnOn");
            //     $("[data-pag-num=4]").addClass("btnOn");
            // }
        }

        doPrevPagination();

    });

    //다음
    $(".next").on("click", function(){
        let _$getSlideImg = getSlideImg();
        $(_$getSlideImg[0]).appendTo($("ul"));

        function doNextPagination(){
            if($(_$getSlideImg[1]).data("num") == 2){
                $("[data-pag-num=1]").removeClass("btnOn");
                $("[data-pag-num=1]").next().addClass("btnOn");
            } else if($(_$getSlideImg[1]).data("num") == 3){
                $("[data-pag-num=2]").removeClass("btnOn");
                $("[data-pag-num=2]").next().addClass("btnOn");
            } else if($(_$getSlideImg[1]).data("num") == 4){
                $("[data-pag-num=3]").removeClass("btnOn");
                $("[data-pag-num=3]").next().addClass("btnOn");
            } else if($(_$getSlideImg[1]).data("num") == 1){
                $("[data-pag-num=4]").removeClass("btnOn");
                $("[data-pag-num=1]").addClass("btnOn");
            }
        }

        doNextPagination();

    });
});


// function setTimeout 1000 걸기 재귀호출하기 계속 돌아랑