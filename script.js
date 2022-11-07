const TH_LENGTH = document.getElementsByTagName("th").length; // 9

for(i = 1; i <= TH_LENGTH; i++){
    var result = "";
    for(j = 1; j <= TH_LENGTH; j++){
        result += i + "X" + j + "=" + i*j + "<br>";
    }
    var temp = document.getElementsByClassName("inner_table")[i-1];
    temp.innerHTML =  temp.innerHTML + "<br><br>" + result ;
}