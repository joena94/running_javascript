(function($){

    $.fn.Dday = () => {
        const TODAY = new Date();

        let _$year = $(".year")
        let _$month = $(".month");
        let _$day = $(".day");

        $(".countdown").click( () => {
            console.log(_$year.val())

        } );
        
        
    }
    




    $(function(){
        $(".container").Dday();
    });
})($);