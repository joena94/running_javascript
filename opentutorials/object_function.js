let kim = {name : "kim", first : 10, second : 20}
let lee = {name : "lee", first : 10, second : 10}

function sum(prefix){
    // this = kim
    return prefix + (this.first + this.second);
}

console.log("sum.call(kim)" + sum.call(kim, " => ")); // sum이라는 객체를 실행시킨다 = sum()과 같음
console.log("sum.call(lee)" + sum.call(lee, " : "));


https://www.youtube.com/watch?v=wOiteGyan-I