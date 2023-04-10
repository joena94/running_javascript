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

        // $(".gnb > .gnb_top > li").on("focusin mouseenter click", function(e){
        //     $(this).find("a").addClass("on");
        //     $(this).find(".depth2").addClass("on");
        //     $(".depth2").addClass("active");
        //     $("header").addClass("active");     // 백그라운드 
        // });
        // $(".gnb > .gnb_top > li").on("mouseleave", function(e){
        //     $(this).find("a").removeClass("on");
        //     $(this).find(".depth2").removeClass("on");
        //     $(".depth2").removeClass("active");
        //     $("header").removeClass("active");     // 백그라운드 
        // });

        // let ww = $(window).width();
        // let timer = null;
        // let sec = 300;;

        // $(window).on("resize", function(){
        //     clearTimeout(timer);
        //     timer = setTimeout(function(){
        //         ww = $(window).width();
        //         if(ww < 1023){
        //             let _$responsiveDepth1 = $(".depth1");
        //             console.log()
        //             _$responsiveDepth1.children().first().addClass("active");
        //             _$responsiveDepth1.children(".depth2").first().addClass("active");
        //             _$responsiveDepth1.on("click", function(e){
        //                 _$responsiveDepth1.find("a").removeClass("active");
        //                 _$responsiveDepth1.children(".depth2").removeClass("active");
        //                 $(this).children("a").addClass("active");
        //                 $(this).children(".depth2").addClass("active");

                        
        //             })
                    
        //         }
        //     })
        // });

    })();
});