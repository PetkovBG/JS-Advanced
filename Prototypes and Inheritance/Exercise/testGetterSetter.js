

class Cat {
    constructor(catName){
        this.catName = catName; //we can do the following: this._catName = catName and this will skip the first check through the setter
        //if we have a getter we can do this._catName = catName;
    }
    get catName() {
        return this._catName;
    }
    set catName(value){
        this._catName = value;
        //here we can check if the value matches certain criteria
    }
}



let myCat = new Cat ('Garfield')
console.log(myCat);
console.log(myCat.catName); //we call the getter here myCat.catName(), just no need for the brackets
myCat.catName = 'Teddy'; //we call the setter here and change the value of catName
console.log(myCat);

