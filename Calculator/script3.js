//(made in대장님)
(function($){

    $.fn.myCalc = function(){
        //// 인풋 생성    
        let $calWraper = $("<div/>").attr("id", "calc");
        let $finalNumber = $("<input/>").attr({"id":"final", "type":"number"});
        let $calcResult = $("<input/>").addClass("calc_result").attr({"type":"text", "id": "calcResult"});
        let $calcSymbol = $("<input/>").addClass("calc_symbols").attr({"type":"text", "id": "calcSymbol"});
        let $calcSecondResult = $("<input/>").addClass("calc_result").attr({"type":"text", "id": "calcSecondResult"});

        // 계산기 바디 생성
        let $calcBody = $("<div/>").addClass("calc_body");
        let $operator = $("<div/>").addClass("operators");

        // 연산자 생성
        let optSymbols = ["+", "-", "X", "÷"];
        for(let os in optSymbols){
            let btn = $("<button/>").addClass("symbols").text(optSymbols[os]);
            btn.click(function(){
                $("#calcSymbol").val(optSymbols[os]);
            });

            $operator.append(btn);
        }

        $calcBody.append($operator);
        
        // 숫자 키패드 생성
        let $numberPad = $("<div/>").addClass("left_calc");
        let numberArr = [7,8,9,4,5,6,1,2,3,0];
        
        let $numberGroup = null;
        for(var i = 0; i < numberArr.length; i++){
            let num = numberArr[i];

            if(null == $numberGroup){
                $numberGroup = $("<div/>").addClass("numbers");
            }
            let $btn = $("<button/>").text(num);
            //$btn.data("num", num);
            $btn.click(function(){
                //let thisNum = $(this).data("num");
                let thisNum = num;
                
                let $targetResult = $("#calcResult");
                if("" !== $("#calcSymbol").val()){
                    $targetResult = $("#calcSecondResult");
                }

                $targetResult.val($targetResult.val() + thisNum);
            });
            $numberGroup.append($btn);

            if(2 == i % 3 || i + 1 == numberArr.length){
                $numberPad.append($numberGroup);
                $numberGroup = $("<div/>").addClass("numbers");
            }
        }
        //리셋 버튼
        let $btnClear = $("<button/>").text("C").click(function(){
            $("#calcResult, #calcSymbol, #calcSecondResult").val('');
        });
        $numberPad.find(".numbers:last-child").append($btnClear);

        $calcBody.append($numberPad);

        $calWraper.append($finalNumber, $calcResult, $calcSymbol, $calcSecondResult);
        $calWraper.append($calcBody);

        // 계산버튼
        let $rightCalc = $("<div/>").addClass("right_calc");
        let $calcBtn = $("<div class=\"equl\">=</div>").click(function(){
            let firstVal = Number($("#calcResult").val());
            let secVal = Number($("#calcSecondResult").val());
            let optVal = $("#calcSymbol").val();

            let calcFunctionDic = {};
            calcFunctionDic["+"] = function(f, s){
                return f + s;
            };
            calcFunctionDic["-"] = function(f, s){
                return f - s;
            };
            calcFunctionDic["X"] = function(f, s){
                return f * s;
            };
            calcFunctionDic["÷"] = function(f, s){
                return f / s;
            };
    /*
            let a = {
                "a": "1111"
            };
            
            let a = {};
            a.a = "1111";

            let a = {};
            a["a"] = "1111";

            eval("a." + sdf); // 사용하면 안되는 예제
    */
            let func = calcFunctionDic[optVal];
            $("#final").val(func(firstVal, secVal));
        });

        $calcBody.append($rightCalc.append($calcBtn));
        $(this).append($calWraper);
    };

    

    // 최종 바디에 어펜드
    $(function(){
        $("body").myCalc();
    });
})($);

