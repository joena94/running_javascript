# running_javascript
📖 뚜따뚜따 javascript 숙제하기

FE로 Jump up 하기 위해 javascript로 PM님에게 채찍질 당하는 중인 과정을 담습니다(재밌는데 죽을맛)<br>
사업기간 중간중간에 짬나는 틈을나 슈루룩 숙제를 하지만 업무 폭발의 날에는 ~~숙제고 자바스크립트고 뭐고....ㅎㅎ.....~~

1. 구구단 구현
2. 계산기 구현
   1. Vanilla JS 컨펌 완료!
   2. jQuery
      1. 엉망진창 코드로 인하여 대장님 출동 script.3 작성해주심 흑흑
      2. script.2 제작(100% 이해하라고 하셨지만... 이해 안되는 부분은 ~~내 코드 썼음~~)
   
3. layer popup
4. 달력 구현
   1. DOM 구조 만들기
   2. 기능 구현 ~~어려워어어어어어~~
<hr>

- 변수는 명사+명사로 이름짓기

- 함수(메소드)는 동사+명사+부사(option)로 이름짓기

- 디자이너, 퍼블리셔가 Class을 건드리면 스크립트가 꼬이기때문에 __id, name__ 을 사용하기

- 아래와 같은 코드는 class를 추가하거나 변경해버리면 우당탕탕 꼬이고 난리나기 때문에.. ~~(내가 사용한 코드임)~~

```javascript
let display_1 = document.getElementsByClassName("calc_result")[0]; // 결과값_1을 보여주는 창
let display_2 = document.getElementsByClassName("calc_symbols")[0]; // 연산기호
let display_3 = document.getElementsByClassName("calc_result")[1]; // 결과값_2
```
