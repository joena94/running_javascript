// 로컬 스토리지 데이터 값들 출력하기
window.onload = () => {
    //버튼 가져오기
    const btnAllView = document.querySelector(".btnAllView");

    // 버튼 클릭 시 --> 할일 처리
    btnAllView.addEventListener("click", () => {
        
        //할 일 처리 --> 로컬 스토리지 데이터 값들을 가져와서 출력하기
        // const getData = localStorage.getItem("background-color");
        // console.log(getData);

        // 키만 출력하기 (Value 없이)
        // console.log(localStorage.key(0))

        /*
        //배열 정보를 동적으로 테이블 생성하여 삽입하기 tbody-----------------
        let arr = new Array();
        let result = "";

        arr.push({name : '홍길동', email:'hong@hong.com', age:25, pastime:'음악감상'});
        arr.push({name : '이순신', email:'lee@hong.com', age:45, pastime:'걷기'});
        arr.push({name : '강감찬', email:'gang@hong.com', age:37, pastime:'영화보기'});
        arr.push({name : '김유신', email:'kim@hong.com', age:65, pastime:'야식먹기'});
        arr.push({name : '광개토', email:'kwang@hong.com', age:15, pastime:'독서'});


        // 반복문 순회하면서 배열의 정보를 result 변수에 누적
        for (const i in arr){
            
            result += "<tr>"
            result += "<td>" +arr[i].name+ "</td>"
            result += "<td>" +arr[i].email+ "</td>"
            result += "<td>" +arr[i].age+ "</td>"
            result += "<td>" +arr[i].pastime+ "</td>"
            result += "</tr>"
            
        }

        let hTbody = document.getElementById("htmlTbody");
        hTbody.empty();
        hTbody.innerHTML = result;
        */
        
        console.log("로컬 스토리지 길이" + localStorage.length)
        
        let result2 = "";

        for (let i=0; i < localStorage.length; i++){
            let key = localStorage.key(i) // key만 출력하기
            console.log(`${key} : ${localStorage.getItem(key)}`);

            // 결과 변수
            result2 += "<tr>"
            result2 += "<td class='align-middle' width='30%'>" + key + "</td>"
            result2 += "<td class='align-middle'>" + localStorage.getItem(key) + "</td>"
            result2 += "<td> <button class='btnRemove btn'> Remove </button></td>"
            result2 += "</td>"

            // append
            $("#htmlTbody").empty()
            $("#htmlTbody").append(result2)
        }
    });

    
}