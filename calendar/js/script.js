function calendar(){
    // 캘린더 info
    let $date = new Date();
    let $year = new Date().getFullYear();
    let $month = new Date().getMonth();
    let $string_month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    // 기본 DOM 구조 만들기
    let $calendar = $("<div/>").addClass("calendar");
    let $calendar_wrap = $("<div/>").addClass("calendar_wrap");
    let $calendar_content = $("<div/>").addClass("calendar_content");
    let $calendar_body = $("<div/>").addClass("calendar_body");

    // 캘린더 상단부분
    let $calendar_top = $("<div/>").addClass("calendar_top");
    let $prev_btn = $("<a/>").addClass("prev");
    let $next_btn = $("<a/>").addClass("next");
    let $now_month = $("<span/>").addClass("month").text($string_month[$month].toUpperCase());
    let $now_year = $("<span/>").addClass("year").text($year);

    //  상단부분 <>
    $calendar_top.append( 
        $prev_btn
        .append(
            $("<i/>").addClass("ri-arrow-left-s-fill")
        ),
        $now_month,
        $now_year,
        $next_btn
        .append(
            $("<i/>").addClass("ri-arrow-right-s-fill")
        )
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
        // render_calendar();
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

    // loop로 1~31일
    let $day_ul = $("<ul/>").addClass("month_day");

    function render_calendar(){
        let $first_date = new Date($year, $month, 1).getDate(); // 시작날
        let $first_day = new Date($year, $month, 1).getDay(); //1st의 요일
        let $last_date = new Date($year, $month, 0).getDate(); //마지막날

        for (i = 1; i <= $last_date; i++){
            let $plus_date = new Date($year, $month, i).getDay(); // 요일 출력
            
            if($plus_date < 7){
                $day_ul.append(
                    $("<a/>").append(
                        $("<li/>").text(i)
                    ).attr(
                        "href", "#"
                    )
                )
            };
        };

        // day click
        $(".month_day > a").click(function(){
            console.log("aaa")
        })

        $calendar_date.append($day_ul);
    };

    render_calendar();

    // 캘린더 상단부분 < > 이벤트
    // prev
    $prev_btn.click(function(){
        $(".month_day").remove();
        $date = new Date($date.getFullYear, $date.getMonth()-1, $date.getDate());
    })

    // next
    $next_btn.click(function(){
        $(".date > ul").remove();
        $date = new Date($date.getFullYear, $date.getMonth()+1, $date.getDate());
        render_calendar();
    })

    // calendar_content
    let $content_ul = $("<ul/>")
    let $cal_content_title = $("<div/>").addClass("cal_content_title");
    let $cal_content_wrap = $("<div/>").addClass("cal_content_wrap");
    
    $cal_content_title.append(
        $("<span/>").addClass("select_day_name").text("SUNDAY")
    ).append(
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
    // $("body").append($calendar);
};
