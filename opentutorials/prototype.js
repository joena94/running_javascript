let superObj = {superVal : "super"}

// let subObj = {subVal : "sub"}
// subObj.__proto__ = superObj;

let subObj = Object.create(superObj);
subObj.subVal = 'sub';

debugger;

console.log("subObj.subVal => ", subObj.subVal);
console.log("subObj.superVal => ", subObj.superVal);

subObj.superVal = "sub";
console.log("superObj.superVal => ", superObj.superVal);

let kim = {
    name : 'kim',
    first : 10, second : 20,
    sum : function(){
        return this.first + this.second
    }
}

let lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this.second) / 2;
}

console.log("kim.sum() =>", kim.sum())
console.log("lee.avg() =>", lee.avg())