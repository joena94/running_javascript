$(document).ready(function () {
    // 로그인, 가입 nav 토글
    $("#signIn").click(function(){
        $("#signIn").addClass("signOn");
        $("#signUp").removeClass("signOn");
        $("#upBox").addClass("displayNone");
        $("#inBox").removeClass("displayNone");
    })

    $("#signUp").click(function(){
        $("#signUp").addClass("signOn");
        $("#signIn").removeClass("signOn");
        $("#inBox").addClass("displayNone");
        $("#upBox").removeClass("displayNone");
    })

    

    

    // signup 클릭 시, 회원가입 정보 로컬스토리지에 넘기기
    function inAccoutInfo(){
        let joinIdVal = $("#joinId").val();
        let joinPwVal = $("#joinPw").val();
        
        // 로컬스토리지에 넣기
        localStorage.setItem(joinIdVal, joinPwVal);
    };

    $(".btnSignUp").click(function(){
        inAccoutInfo();
    });

    // 로컬스토리지 값과 비교해 로그인 허용하기
    function checkAccount(){
        let loginIdVal = $("#logInId").val();
        let loginPwVal = $("#logInPw").val();

        // 로컬스토리지 값과 비교
        if(localStorage.getItem(loginIdVal) === loginPwVal){
            alert("✔ 로그인 되었습니다")
        } else {
            alert("❌ 아이디 또는 비밀번호가 일치하지 않습니다")
        };
    
        // 왜이렇게 어렵게 생각했을꼬?
        // for(i = 0; i < localStorage.length; i++){
        //     let localId = localStorage.key(i);
        //     let localPw = localStorage.getItem(localId);

        //     if(loginIdVal === localId && loginPwVal === localPw){
        //         console.log("✌")
        //         break;
        //     } else {
        //         console.log("❌")
        //     }
        // }
        
    }

    $(".btnLogIn").click(function(){
        checkAccount();
    })
});