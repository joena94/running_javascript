# running_javascript
📖 뚜따뚜따 javascript 숙제하기

FE로 Jump up 하기 위해 javascript로 PM님에게 채찍질 당하는 중인 과정을 담습니다(재밌는데 죽을맛)<br>
사업기간 중간중간에 짬나는 틈을나 슈루룩 숙제를 하지만 업무 폭발의 날에는 ~~숙제고 자바스크립트고 뭐고....ㅎㅎ.....~~

1. 구구단 구현
2. 계산기 구현
   1. Vanilla JS 컨펌 완료!
   2. jQuery 진행중

<hr>
- 변수는 명사+명사로 이름짓기 <br>
- 함수(메소드)는 동사+명사+부사(option)로 이름짓기 <br>
- 디자이너, 퍼블리셔가 Class을 건드리면 스크립트가 꼬이기때문에 <b>id, name</b> 을 사용하기 <br>
- 아래와 같은 코드는 class를 추가하거나 변경해버리면 우당탕탕 꼬이고 난리나기 때문에.. ~~(내가 사용한 코드임)~~ <br>

```javascript
let display_1 = document.getElementsByClassName("calc_result")[0]; // 결과값_1을 보여주는 창
let display_2 = document.getElementsByClassName("calc_symbols")[0]; // 연산기호
let display_3 = document.getElementsByClassName("calc_result")[1]; // 결과값_2
```
