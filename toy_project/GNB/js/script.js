$(function(){
    (function(){
        let _$header = $("header")

        console.log(_$header.scrollTop())

        $(".gnb > .gnb_top > li").on("focusin mouseenter click", function(e){
            $(this).find("a").addClass("on");
            $(this).find(".depth2").addClass("on");
            $(".depth2").addClass("active");
            $("header").addClass("active");     // 백그라운드 
        });
        $(".gnb > .gnb_top > li").on("mouseleave", function(e){
            $(this).find("a").removeClass("on");
            $(this).find(".depth2").removeClass("on");
            $(".depth2").removeClass("active");
            $("header").removeClass("active");     // 백그라운드 
        });
    })();
});