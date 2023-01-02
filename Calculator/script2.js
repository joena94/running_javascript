$(function(){ // document.ready 일때 바로 시작(시점)
            // css와 달리 Merge 되는 개념임.
                //시점 다름 
                // 비 권고

    // input DOM
    let $calcWrap = $("<div/>").attr("id", "calc");
    let $finalNum = $("<input/>").attr({"id":"final", "type":"number"});
    let $fristNum = $("<input/>").addClass("calc_result_first");
    let $calcSymbol = $("<input/>").addClass("calc_symbols");
    let $secNum = $("<input/>").addClass("calc_result_sec");

    // 사칙연산 버튼들
    let $calcBody = $("<div/>").addClass("calc_body");
    let $calcOperators = $("<div/>").addClass("operators");

    let operators = ["+", "-", "X", "÷"]; // 왜 얘는 앞에 $를 안붙힐까?
    for(let os in operators){
        let $symbolsBtn = $("<button/>").addClass("symbols").text(operators[os]); // val을 쓰지 않는 이유는 input만 val 사용
        $calcOperators.append($symbolsBtn);

        $symbolsBtn.click(function(){
            if($symbolsBtn.val() == ""){
                $(".calc_symbols").val(operators[os]);
            }
        })
    };

    // 숫자들
    let $leftCalc = $("<div/>").addClass("left_calc");
    let $numberArr = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]; //length 10

    let $numberGroup = null; // 빈 객체
    for (i = 0; i < $numberArr.length; i++){
        let $num = $numberArr[i];
        
        if($numberGroup == null){
            $numberGroup = $("<div/>").addClass("numbers");
        }
        let $btn = $("<button/>").text($num);
        $btn.click(function(){
            let thisNum = $num;
            let $targetResult = $(".calc_result_first");

            if($(".calc_symbols").val() !== ""){
                $targetResult = $(".calc_result_sec");
            }
            
            $targetResult.val($targetResult.val() + thisNum)
        });
        
        $numberGroup.append($btn);

        if( i % 3 == 2 || i + 1 == $numberArr.length){
            $leftCalc.append($numberGroup);
            $numberGroup = $("<div/>").addClass("numbers");
        };
    }
    
    // C
    let $resetBtn = $("<button/>").addClass("equl").text("C");
    $leftCalc.find(".numbers:last-child").append($resetBtn);

    $resetBtn.click(function(){
        $("#final, .calc_result_first, .calc_symbols, .calc_result_sec").val("");
    })

    // =
    let $rightCalc = $("<div/>").addClass("right_calc");
    let $equl = $("<div/>").addClass("equl").text("=");
    $equl.click(function(){
        $fristVal = Number($(".calc_result_first").val());
        $operSymbols = $(".calc_symbols").val();
        $secVal = Number($(".calc_result_sec").val());

        if($operSymbols == "+"){
            $("#final").val($fristVal + $secVal);
        } else if ($operSymbols == "-"){
            $("#final").val($fristVal - $secVal);
        } else if ($operSymbols == "X"){
            $("#final").val($fristVal * $secVal);
        } else if ($operSymbols == "÷"){
            $("#final").val($fristVal / $secVal);
        }
    })
    

    $rightCalc.append($equl);

    $calcBody.append($calcOperators, $leftCalc, $rightCalc);
    $calcWrap.append($finalNum, $fristNum, $calcSymbol, $secNum, $calcBody);
    $("body").append($calcWrap);
});
