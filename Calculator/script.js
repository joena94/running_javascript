// 함수기반, 리팩토링, 계단 밟듯이 한단계씩 목표설정하기
// DOM에 박힌 onclick은 반복문이나, data attribute를 사용해 리팩토링할수있따.


let display = document.getElementsByClassName("calc_result")[0]; // 결과값을 보여주는 창

// 숫자를 누르면 clac_result에 나타내기
function add(char){
    display.value = display.value + char;  //value 값 뒤에 char 문자를 추가하는 역할
}

// =을 누르면 연산하기
function calc_operate(){
    let temp = String(display.value);
    let oper = new Function(temp);

    console.log(oper)
}

// eval is evil이라고 해서 보안에 취약함.
// new Function() 이라는 애를 사용해보자.
// 기본 문법
// var sum = new Function('a', 'b', 'return a + b');
// console.log(sum(1, 2)); // 3
