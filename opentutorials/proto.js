function person(name, first, second, third){
  this.name = name;
  this.first = first;
  this.second = second;
}

person.prototype.sum = function(){
  return this.first * this.second;
}

let kim = new person("kim", 10, 20);  // new 를 붙히는 순간 객체를 return 해 줌
kim.sum = function(){
  return "this : " + (this.first + this.second);
}

let lee = new person("lee", 10, 10);


console.log("kim.sum()" + kim.sum());
console.log("lee.sum()" + lee.sum());