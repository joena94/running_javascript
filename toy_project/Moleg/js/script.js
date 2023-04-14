$(function(){
    // THIS: PC header
    function desktopNav(){
        let nav = $(".gnb > .gnbTopmenu > li");
        let navA = $(".gnb > .gnbTopmenu > li > a");

        nav.on("focusin mouseenter", function(){
            $(".wrap").addClass("back");
            $(this).find(".submenuWrap > .submenu").addClass("on");
        })

        nav.on("mouseleave", function(){
            $(".wrap").removeClass("back");
            $(this).find(".submenuWrap > .submenu").removeClass("on");
        })
    }
    
    function mobileNav(){

    }
    

    // $(window).on("resize", function(){
    //     clearTimeout(timer);
    //     timer = setTimeout(function(){
    //         if($(window).width() >= 1024){
    //             header();
    //         }
    //         if($(window).width() <= 1024){
    //             $("nav > .gnbTopmenu > li").on("click", function(e){
    //                 $(".submenuWrap > .submenu").addClass("on");
    //             });
    //         }
    //     }, delay)
    // });
});