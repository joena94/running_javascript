function openLayerPop(){
    // 기본 dom 생성
    let $mask = $("<div/>").addClass("mask");
    let $layerWrap = $("<div/>").addClass("layer");
    let $layerHead = $("<div/>").addClass("layerHead");
    let $layerBody = $("<div/>").addClass("layerBody");

    $layerHead
        .append(
            $("<h3/>")
            .css({
                "color" : "#fff",
                "text-align" : "left"
            })
            .text("게시물 결재관리")
        )
        .append(
            $("<div/>")
            .addClass("closeBtn")
            .text("X")
            .click(function(){
                $mask.remove();
            })
        )
    
    $layerBody.append(
        $("<div/>")
        .addClass("calendar")
    )
        
    
    // 얘만 쓰면 위에 얹어져 있는 친구들도 다 먹어요
    $mask.click(function(){
        this.remove();
    });

    // 버블링 막기ㅋㅋ
    $layerWrap.click(function(){
        return false;
    });

    $layerWrap.append($layerHead, $layerBody);
    $mask.append($layerWrap);
    $("body").append($mask);
};

function layer_calendar(){
    let $calendar = {
        calOption :{
            calDateInfo :{
                startYear : "1980"
                , nextYear : new Date().getFullYear+1
                , prevYear : new Date().getFullYear-1
            }
        }
    };

    let $month = $("<span/>").attr("class", "month");
    let $year = $("<span/>").attr("class", "year");
    let $prevBtn = $("<a/>").attr("class", "prev");
    let $nextBtn = $("<a/>").attr("class", "next");
    
