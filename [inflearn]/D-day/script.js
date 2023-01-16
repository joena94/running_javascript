(function($){

    $.fn.Dday = function(data){
        let _$this = $(this);
        var siv = "";

        // 계산 함수
        function diff(pThis, returnX){

            _$this =  $.extend(true, _$this , pThis);

            let today = new Date();

            let _$inputVal = new Date($(".year").val(), $(".month").val()-1, $(".day").val())
            let _$diffVal = _$inputVal - today;

            let diffDay = Math.floor(_$diffVal / (1000*60*60*24));
            let diffHour = Math.floor((_$diffVal / (1000*60*60)) % 24);
            let diffMin = Math.floor((_$diffVal / (1000*60)) % 60);
            let diffSec = Math.floor(_$diffVal / 1000 % 60);

            // remain에 남은 시간 넣기
            let _$remain = $("<p />").addClass("pRemain").text(`${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`)
            
            // 남은 시간 append
            _$this.empty();
            _$this.append(_$remain);

            siv = setTimeout(function(){
                diff(_$this);
            }, 1000)
            
        };

        

        data.countdown.click(function(){
            diff(_$this);
            
        });
        
        data.reset.click(function(){
            clearTimeout(siv)
            _$this.empty();

            //return;
        })
    };
    

    $(function(){
        $(".remain").Dday({
            "countdown" : $(".countdown")
            ,"reset" : $(".reset")

        });
    });
})($);