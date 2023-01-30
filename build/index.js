"use strict";
// Types
let num;
num = 123;
const str = 'string';
const bool = false;
function sum(firstNum, secondNum, flag) {
    if (flag) {
        return `result: ${firstNum + secondNum}`;
    }
}
const sumNumber = sum(12, 32, true);
/*
console.log(sumNumber); // 44
*/
const person = {
    name: 'Mohammad',
    age: 24,
    x: {
        y: 'y',
        z: false
    }
};
let listStr = ['a', 'b', 'c'];
let listStrOrNum = ['string', 23];
let listAny = ['str', 123, true];
let listOtherDefind = ['str', 23, 'abcd', 'efg'];
const listTuple = ['string', 2, false, {
        name: 'Ahmad',
        age: 45
    }];
listTuple.push('Qasem');
/*
console.log(listTuple); // [ "string", 2, false, { name: "Ahmad", age: 45 }, "Qasem" ]
*/
listTuple[0] = 'NewStr';
/*
console.log(listTuple); // [ "newStr", 2, false, { name: "Ahmad", age: 45 }, "Qasem" ]
*/
let valueDefaultAny; // --> type = any
valueDefaultAny = 'str';
valueDefaultAny = 123;
let valueDefAny;
valueDefAny = 'str';
valueDefAny = 123;
var Personal;
(function (Personal) {
    Personal["NAME"] = "Mostafa";
    Personal[Personal["MALE"] = 0] = "MALE";
    Personal[Personal["FEMALE"] = 1] = "FEMALE";
})(Personal || (Personal = {}));
const prs = {
    name: Personal.NAME,
    age: 24,
    gender: Personal.MALE
};
if (prs.gender === Personal.MALE) {
    console.log('he is Male');
}
else {
    console.log('she is Female');
}
/* Lesson 10 */
const nullType = null;
const undefinedType = undefined;
const unionType = 'str';
const userName = "Montazer"; // -> literal type
const userNames = "Mohammad"; // literal and union
const w1 = 23;
const w2 = 'str';
const w3 = false;
let f = (num1, num2) => {
    return num1 + num2;
};
console.log(`f: ${f(23, 6)}`); // f: 29
/* Episode 12 function type : void and callback */
let Add = (a, b) => {
    return a + b;
};
let Print = (n) => {
    console.log(n);
};
Print(Add(2, 34));
let addCallBack = (a, b, ab) => {
    const result = a + b;
    ab(result);
};
addCallBack(10, 50, (res) => {
    console.log(res);
});
/* Episode 13 unknown type */
let unknownType;
let dataStr;
unknownType = 12;
unknownType = true;
unknownType = "ali";
if (typeof unknownType === 'string') {
    dataStr = unknownType;
    console.log(dataStr);
}
/* Episode 15 class */
class User {
    constructor(name, gen, age) {
        this.firstName = name;
        this.userGender = gen;
        this.userAge = age;
    }
    gender() {
        console.log('user gender: ' + this.userGender);
    }
    age() {
        console.log(`${this.firstName} is ${this.userAge}`);
    }
}
const ur = new User('Sadeq', 'Male', 24);
console.log(ur); // { firstName: "Sadeq", userGender: "Male", userAge: 24 }
const negar = {
    firstName: 'Negar',
    userGender: 'Famale',
    userAge: 26,
    gender: ur.gender,
    age: ur.age
};
negar.gender(); // user gender: Famale
negar.age(); // Negar is 26
/* Episode 16 encapsulation */
class Course {
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
    }
}
class PrintCourse extends Course {
    printCourse() {
        console.log(`course: ${this.title}, description:${this.description}, price: ${this.price}`);
    }
}
const crs = new Course('TypeScript', 'this is a new course', 3205);
const prCourse = new PrintCourse('ts', 'this is ts', 25);
prCourse.printCourse();
crs.price = 256;
prCourse.printCourse();
/* Episode 17 readonly and static */
class News {
    constructor(news, des) {
        News.title = news;
        this.description = des;
    }
    printNews() {
        console.log(News.title);
        console.log(this.description);
    }
}
const bbc = new News('corona virus', 'this virus find in 2021');
bbc.printNews();
News.title = 'Vaba';
bbc.printNews();
/* Episode 18 Inheritance and shorthand for class property */
class Profile {
    // public name: string;
    // public age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printResult() {
        console.log(`my name is ${this.name}, I'm ${this.age} years old`);
    }
}
class Favorite extends Profile {
    constructor(name, age, fav) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.fav = fav;
    }
    addFavorite(text) {
        this.fav.push(text);
    }
    printFavorite() {
        super.printResult();
        console.log(this.fav);
    }
}
const fav = new Favorite('Ali', 25, []);
fav.addFavorite('sports');
fav.printFavorite();
/* Episode 19 getter and setter */
class GetAndSet {
    constructor(number) {
        this.number = number;
    }
    get getNumber() {
        return this.number;
    }
    set setNumber(num) {
        this.number = num;
    }
}
class PrintValue extends GetAndSet {
    printValue() {
        console.log(this.getNumber);
    }
}
const logValue = new PrintValue(102);
logValue.printValue();
logValue.setNumber = 125;
logValue.printValue();
/* Episode 20 abstract class */
console.log('-------------------------------------------------');
class AbsClass {
    constructor() { }
    printValue() {
        console.log(this.setValue());
    }
}
class AbsChidlClass extends AbsClass {
    setValue() {
        return 'Ali';
    }
}
const ab = new AbsChidlClass();
ab.printValue();
