class ClassA {
    constructor (name){
        this.name = name;
    }

    printMSG(){
        return 'Hi';
    }
}
class ClassB extends ClassA {
    constructor(name, age){
        super(name);
        this.age = age;
    }
}

class ClassC extends ClassB {
    constructor(name, age, city){
        super(name, age);
        this.city = city;
    }
}

let myClass = new ClassC('Orlin', 28, 'Ruse');
console.log(myClass);
console.log(myClass.printMSG());