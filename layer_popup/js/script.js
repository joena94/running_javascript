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
        calendar()
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

function calendar(){
    // 캘린더 info
    let date = new Date();
    let year = new Date().getFullYear();
    let end_year = new Date().getFullYear()+1;
    let month = new Date().getMonth();

    let string_month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    // 기본 DOM 구조 만들기
    let $calendar = $("<div/>").addClass("calendar");
    let $calendar_wrap = $("<div/>").addClass("calendar_wrap");
    let $calendar_content = $("<div/>").addClass("calendar_content");
    let $calendar_body = $("<div/>").addClass("calendar_body");

    // 캘린더 상단부분
    let $calendar_top = $("<div/>").addClass("calendar_top");
    let $prev_btn = $("<a/>").addClass("prev");
    let $next_btn = $("<a/>").addClass("next");
    let $now_month = $("<span/>").addClass("month").text(string_month[month].toUpperCase());
    let $now_year = $("<span/>").addClass("year").text(year);

    //  상단부분 <>
    $calendar_top.append(
        $prev_btn.append($("<i/>").addClass("ri-arrow-left-s-fill")),
        $now_month,
        $now_year,
        $next_btn.append($("<i/>").addClass("ri-arrow-right-s-fill"))
    )

    // 캘린더 상단부분 < > 이벤트
    // prev
    $prev_btn.click(function(){
        $(".date ul").remove();
        // $date = new Date($date.getFullYear, $date.getMonth()-1, $date.getDate());
        // render_calendar();
    })

    // next
    $next_btn.click(function(){
        $(".date ul").remove();
        // $date = new Date($date.getFullYear, $date.getMonth()+1, $date.getDate());
        // render_calendar(2022, 02);
    })

    // calendar body
    let $calendar_week = $("<div/>").addClass("day_week");
    let $calendar_date = $("<div/>").addClass("date");
    let $week_ul = $("<ul/>")
    let $day_of_week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    // loop로 월화수목금토일
    $.each($day_of_week, function(index, item){
        let $week_name = $("<li/>").text(item);
        
        $week_ul.append($week_name)
    })

    // 공백 1~31일 공백 만들기
    function render_calendar(y, m){
        let _$day_ul = $("<ul/>").addClass("month_day");

        let start_week = new Date(y, m-1, 1).getDay(); // 그 달의 시작 요일
        let last_day = new Date(y, m, 0).getDate(); //그 달의 마지막날
        let prev_last_day = new Date(y, m-1, 0).getDate(); //전달의 마지막 날
        
        console.log(start_week, last_day, prev_last_day);

        let li_count = start_week + last_day;
        let limit_loop = 35;

        if(li_count > limit_loop){
            limit_loop = 42;
        };

        for(i = 0; i < limit_loop; i++){
            let _$day_li = $("<li/>")
            let nowNum = i-(start_week-1); // 이게 뭐지

            console.log(nowNum)

            if(nowNum <= 0){
                _$day_li.addClass("empty_day")
            } else if(nowNum <= last_day){
                _$day_li.text(nowNum)
            } else{
                _$day_li.addClass("empty_day")
            }

            _$day_ul.append(_$day_li);    
        }
        
        $calendar_date.append(_$day_ul);
    };

    render_calendar(2023, 2);

    // 캘린더 상단부분 < > 이벤트
    // prev
    $prev_btn.click(function(){
        $(".month_day").remove();
        date = new Date(date.getFullYear, date.getMonth()-1, date.getDate());
    })

    // next
    $next_btn.click(function(){
        $(".month_day").remove();
        date = new Date(date.getFullYear, date.getMonth()+1, date.getDate());
        render_calendar();
    })

    // calendar_content
    let $content_ul = $("<ul/>")
    let $cal_content_title = $("<div/>").addClass("cal_content_title");
    let $cal_content_wrap = $("<div/>").addClass("cal_content_wrap");
    
    $cal_content_title.append(
        $("<span/>").addClass("select_day_name").text("SUNDAY")).append(
        $("<span/>").addClass("select_date").text("15th January 2023")
        )


    for(i = 0; i < 2; i++){
        $content_ul.append(
            $("<li/>").addClass("on_day")
            .text("TEDx Talk")
            .append($("<br>"))
            .append(
                $("<span/>").addClass("time").text("14:00PM - 16:30PM")
            )
        )
        $content_ul.append(
            $("<li/>").addClass("off_day")
            .text("TEDx Talk")
            .append($("<br>"))
            .append(
                $("<span/>").addClass("time").text("14:00PM - 16:30PM")
            )
        )
    }
    
    $cal_content_wrap.append(
        $("<div/>").addClass("cal_content_box").append($content_ul)
    )


    $calendar_content.append($cal_content_title, $cal_content_wrap);

    $calendar_week.append($week_ul)
    $calendar_body.append($calendar_week, $calendar_date);

    $calendar_wrap.append($calendar_top, $calendar_body);
    $calendar.append($calendar_wrap, $calendar_content);
    $(".layerBody").append($calendar);

    return;
};