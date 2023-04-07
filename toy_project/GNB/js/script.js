$(function(){
    (function(){
        let _$header = $("header")

        $(window).scroll(function(){
            let height = $(document).scrollTop();
            if(height > 170){
                $("header").addClass("fixed");
            } else if(height < 170) {
                $("header").removeClass("fixed");
            }
        })

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

        $(window).resize(function(){
            if(window.innerWidth < 1023){
                // $(".gnb > .gnb_top > li").find("a").removeClass("on");
                // $(".gnb > .gnb_top > li").find(".depth2").removeClass("on");
            }   
        })
    })();
});