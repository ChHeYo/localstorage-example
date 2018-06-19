class Person {
    constructor(name, age = 0){
        this.name = name;
        this.age = age;
    }
    getAge(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getAge(){
        if (this.homeLocation) {
            return super.getAge() + `I am visiting from ${this.homeLocation}.`
        } else {
            return super.getAge(); 
        }
    }
}


const person = new Person("Jason", 26);
// console.log(person.getAge());

const traveler = new Traveler("Chloe", 22);
console.log(traveler.getAge());