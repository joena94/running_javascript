$(function(){
    (function(){
        // _$depth1Title = $(".depth1");
        // _$depth1Title = $(".gnb > .gnb_top > li");
        
        // _$depth1Title.mouseenter(function(e){            
        //     e.preventDefault();
        //     $("header").addClass("active");     // 백그라운드 
        //     $(".depth2").addClass("active");    // depth 오픈

        //     $(e.target).addClass("on");         // top Nav 가상선택자 효과
        //     $(e.target).next().addClass("on")   // depth 오픈

        //     console.log(e.target)
        // })
        // _$depth1Title.mouseleave(function(e){
        //     e.preventDefault();
        //     $("header").removeClass("active")
        //     $(".depth2").removeClass("active")

        //     $(e.target).removeClass("on")
        //     $(e.target).next().removeClass("on")
        // })
        
        $(".gnb > .gnb_top > li").on("focusin mouseenter click", function(e){
            $("header").addClass("active");     // 백그라운드 
        });
        $(".gnb > .gnb_top > li").on("mouseleave", function(e){
            $("header").removeClass("active");     // 백그라운드 
        });
    })();
});