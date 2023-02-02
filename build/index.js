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
class Courses {
    constructor(title, desc, price) {
        this.title = title;
        this.description = desc;
        this.price = price;
    }
    printInfo() {
        console.log(`title: ${this.title} and price: ${this.price}`);
    }
}
const crsJs = new Courses('javascript', 'superset for js', 256);
crsJs.printInfo();
// let numbers: FuncInterface = { firstNumber: 25, secondNumber: 4 }
// numbers.firstName = 89;
let func = (a, b) => {
    return a + b;
};
console.log(func(25, 3));
let e1 = {
    name: 'ali',
    lastName: 'Karimi',
    age: '23'
};
/* Episode 24 Generics */
const arrayAny = ['str', 123, true];
const arrayGen = ['str', 3435, false, { name: 'azim', lastname: 'karimi' }];
console.log(arrayAny);
console.log(arrayGen);
/* Episode 25 Generics in functions */
function fun(fn) {
    return fn;
}
console.log(fun(['45435']));
/* Episode 26 Generics in functions 2 */
// function fullname(fn: object, ln: object) {
//     return Object.assign(fn, ln)
// }
// const fl = fullname({ name: 'Ahmad' }, { family: 'Qasemi' })
// console.log(fl);
function fullname(fn, ln) {
    return Object.assign({}, fn, ln);
}
const fl = fullname({ name: 'Ahmad', fav: ['sport'] }, { family: 'Qasemi' });
const fl2 = fullname({ fav: ['sport'] }, { family: 'Qasemi' });
const fl3 = fullname({ name: 'Ahmad', fav: ['sport'] }, { family: 'Qasemi' });
console.log(fl);
console.log(fl2);
console.log(fl3);
/* Episode 27 Constraints in Generics */
function product(name, price) {
    return Object.assign({}, name, price);
}
// <{ name: string }, number | string[]>
const pen = product({ name: 'pen' }, 5454);
console.log(pen);
/* Episode 28 Keyof in Constraints */
function library(book, key) {
    return book[key];
}
const quran = library({ name: 'Quran', another: 'God' }, 'another');
console.log(quran);
/* Episode 29 Generics in class */
class Members {
    constructor() {
        this.data = [];
    }
    addUser(item) {
        this.data.push(item);
    }
    removeUser(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    printMember() {
        console.log(this.data);
    }
}
const tb = new Members();
tb.addUser('Ali');
tb.addUser('Vahid');
tb.addUser('Hashem');
tb.addUser('Kazem');
tb.printMember();
tb.removeUser('Ali');
tb.printMember();
const ageMember = new Members();
ageMember.addUser(12);
ageMember.addUser(34);
ageMember.addUser(56);
ageMember.printMember();
/* Episode 30 Generics in Type and interface */
console.log('-------------------------------------------------');
let fu = function (a, b) {
    console.log(a + b);
};
fu(12, 23);
