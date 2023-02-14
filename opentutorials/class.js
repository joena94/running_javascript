class Person{
    constructor(name, first, second){ 
        this.name = name;
        this.first = first;
        this.second = second;
    }
    // 방법 2 (권장)
    sum(){
        return this.first + this.second;
    }
}

class PersonPlus extends Person{
    constructor(name, first, second, third){ 
        super(name, first, second);
        this.third = third;
    }
    // 방법 2 (권장)
    sum(){
        return super.sum() + this.third;
    }
    avg(){
        return (this.first + this.second + this.third) / 3;
    }
}

let kim = new PersonPlus("kim", 10, 20, 30);
console.log("kim.sum()" + kim.sum());
console.log("kim.sum()" + kim.avg());
