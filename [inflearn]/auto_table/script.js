// 테이블의 열과 줄을 동적으로 삽입하기
window.onload = () => {

    // 버튼 가져오기
    const btnCrc = document.querySelector(".btnCrc");
    console.log(btnCrc)

    // 버튼 클릭시 --> 할일 처리
    btnCrc.addEventListener("click", () => {

        // 할일 처리
        let hTbody = document.getElementById("htmlTbody");

        // table row and column
        // Using loop insert a row 
        const newRow0 = hTbody.insertRow();
        
        // append - 텍스트 노드를 생선한 새롭게 생선한 cell에 붙이기
        const newText0 = document.createTextNode('홍길동');
        newCell0.appendChild(newText0);

        // 테이블 row 구하기
        const table = document.getElementById("myTable");
        console.log(table.rows.length-1); //thead 때문에 -1 
    
        // cell이 몇개인지 알고싶다면
        const r = table.rows.length-1;
        const l = table.rows[r].cells.length;

        console.log(l); // 해당 row의 셀이 몇개인지 출력 
        console.log('테이블 row 갯수는 =' + r);

        for (let c = 0; c < l; c++){
            hTbody.rows[r-1].cells[l];
        }
    });

};