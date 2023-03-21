
// 주요 method 2개
// 값 저장 --> localStorage.setItem(key, value)
// 값 가져오기 --> localStorage.getItem(key)
// 값 삭제하기 --> localStorage.removeItem(key)
// 키를 그대로 놓고 새로운 값을 저장하면 덮어쓰기가 되면서 기존 로컬 데이터 정보가 수정.


window.onload = () => {

    //set Data 버튼
    const btnSLD = document.querySelector(".btnSetLocalData");

    // Input 텍스트 값
    const input = document.querySelector("input");

    //set Data 버튼 클릭시
    btnSLD.addEventListener("click", () => {
        
        //할일처리 --> 입력한 텍스트 값 가져오기
        const inputValue = input.value;
        console.log(inputValue);

        //localStorage에 저장하기
        localStorage.setItem("userid", inputValue);
        input.value = "";
    })

    // get Data 버튼 클릭시
    const btnGLD = document.querySelector(".btnGetLocalData");

    btnGLD.addEventListener("click", () => {
        
        //할일 처리 --> 해당 키의 로컬데이터가 있으면 가져오기
        const getData = localStorage.getItem("userid")
        
        if(!getData)
            alert('해당 키로 로컬에 저장된 데이터가 없네요');
        else
            input.value = getData; // input 텍스트 박스에 삽입.
    });

    // remove 버튼 클릭시
    
    const btnRLD = document.querySelector(".btnRemoveLocalData");

    btnRLD.addEventListener("click", () => {
        
        // 할일 처리 --> 해당 키의 로컬 데이터 삭제
        localStorage.removeItem("userid");
        // alert("삭제 완료")
    })

}