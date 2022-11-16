// 함수기반, 리팩토링, 계단 밟듯이 한단계씩 목표설정하기
// DOM에 박힌 onclick은 반복문이나, data attribute를 사용해 리팩토링할수있따.

let final = document.getElementById("final"); // 최종 계산값
let display_1 = document.getElementsByClassName("calc_result")[0]; // 결과값_1을 보여주는 창
let display_2 = document.getElementsByClassName("calc_symbols")[0]; // 연산기호
let display_3 = document.getElementsByClassName("calc_result")[1]; // 결과값_2

// 숫자를 누르면 clac_result에 나타내기
function add(char){
    if(display_2.value === ""){
        display_1.value += char;
    } else {
        display_3.value += char;
    }
}

// 연산기호 한개만 넣기
function calc_symbols(char){
    display_2.value = display_2.value + char;
    display_1.disabled = true;
    if(display_2.value !== ""){
        display_3.focus();
        display_2.disabled = true;
    }
}

// =을 누르면 연산하기
function calc_operate(){
    display_3.disabled = true;

    let result_num1 = Number(display_1.value);
    let result_symbol = display_2.value;
    let result_num3 = Number(display_3.value);
    
    if(result_symbol === "+"){
        let answer = result_num1 + result_num3;
        final.value = answer;
    } else if (result_symbol === "-") {
        let answer = result_num1 - result_num3;
        final.value = answer;
    } else if (result_symbol === "X") {
        let answer = result_num1 * result_num3;
        final.value = answer;
    } else if (result_symbol === "÷") {
        let answer = result_num1 / result_num3;
        final.value = answer;
    }
}

// 리셋하기
function reset(){
    display_1.value = "";
    display_2.value = "";
    display_3.value = "";
    final.value = "";
}

// eval is evil이라고 해서 보안에 취약함.
// new Function() 이라는 애를 사용해보자.
// 기본 문법
// var sum = new Function('a', 'b', 'return a + b');
// console.log(sum(1, 2)); // 3
