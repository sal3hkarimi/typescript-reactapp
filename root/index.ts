// Types
let num: Number;
num = 123
const str: string = 'string'
const bool: boolean = false

function sum(firstNum: number, secondNum: number, flag: boolean) {
    if (flag) {
        return `result: ${firstNum + secondNum}`
    }
}

const sumNumber = sum(12, 32, true)
/* 
console.log(sumNumber); // 44
*/

const person: {
    name: string;
    age: Number;
    x: {
        y: string;
        z: boolean
    }
} = {
    name: 'Mohammad',
    age: 24,
    x: {
        y: 'y',
        z: false
    }
}


let listStr: string[] = ['a', 'b', 'c']
let listStrOrNum: (string | number)[] = ['string', 23]
let listAny: any[] = ['str', 123, true]


let listOtherDefind: Array<number | string> = ['str', 23, 'abcd', 'efg']


const listTuple: [string, number, boolean, {
    name: string,
    age: number
}] = ['string', 2, false, {
    name: 'Ahmad',
    age: 45
}]

listTuple.push('Qasem')
/*
console.log(listTuple); // [ "string", 2, false, { name: "Ahmad", age: 45 }, "Qasem" ]
*/
listTuple[0] = 'NewStr'
/*
console.log(listTuple); // [ "newStr", 2, false, { name: "Ahmad", age: 45 }, "Qasem" ]
*/


let valueDefaultAny; // --> type = any
valueDefaultAny = 'str'
valueDefaultAny = 123

let valueDefAny: any;
valueDefAny = 'str'
valueDefAny = 123



enum Personal {
    NAME = "Mostafa",
    MALE = 0,
    FEMALE = 1
}


const prs: {
    name: Personal;
    age: number;
    gender: Personal
} = {
    name: Personal.NAME,
    age: 24,
    gender: Personal.MALE
}

if (prs.gender === Personal.MALE) {
    console.log('he is Male');
} else {
    console.log('she is Female');
}


/* Lesson 10 */

const nullType: null = null;
const undefinedType: undefined = undefined;
const unionType: undefined | null | string = 'str'
const userName: "Montazer" = "Montazer" // -> literal type
const userNames: "Mohammad" | "Vahid" | "Qasem" | "Ali" | "Fattah" = "Mohammad"; // literal and union

/* Lesson 11 Aliases */
type WAliases = string | number | boolean;

const w1: WAliases = 23
const w2: WAliases = 'str'
const w3: WAliases = false

type func = (firstNum: number, secondNum: number) => number;

let f: func = (num1, num2) => {
    return num1 + num2
}
console.log(`f: ${f(23, 6)}`); // f: 29


/* Episode 12 function type : void and callback */

let Add: (a: number, b: number) => number = (a, b) => {
    return a + b
}

let Print: (res: number) => void = (n) => {
    console.log(n);
}
Print(Add(2, 34))

type callback = (a: number, b: number, ab: (num: number) => void) => void;

let addCallBack: callback = (a, b, ab) => {
    const result = a + b;
    ab(result);
}

addCallBack(10, 50, (res) => {
    console.log(res);
})

/* Episode 13 unknown type */

let unknownType: unknown;
let dataStr: string;

unknownType = 12;
unknownType = true;
unknownType = "ali"

if (typeof unknownType === 'string') {
    dataStr = unknownType
    console.log(dataStr);
}

/* Episode 15 class */

class User {
    firstName: string;
    userGender: string;
    userAge: number;
    constructor(name: string, gen: string, age: number) {
        this.firstName = name
        this.userGender = gen
        this.userAge = age
    }

    gender() {
        console.log('user gender: ' + this.userGender);
    }

    age() {
        console.log(`${this.firstName} is ${this.userAge}`);

    }
}

const ur = new User('Sadeq', 'Male', 24)
console.log(ur); // { firstName: "Sadeq", userGender: "Male", userAge: 24 }


const negar = {
    firstName: 'Negar',
    userGender: 'Famale',
    userAge: 26,
    gender: ur.gender,
    age: ur.age
}
negar.gender() // user gender: Famale
negar.age() // Negar is 26


/* Episode 16 encapsulation */


class Course {
    protected title: string;
    public description: string;
    price: number;
    constructor(title: string, description: string, price: number,) {
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


const crs = new Course('TypeScript', 'this is a new course', 3205)
const prCourse = new PrintCourse('ts', 'this is ts', 25)

prCourse.printCourse()

crs.price = 256
prCourse.printCourse()

/* Episode 17 readonly and static */

class News {
    static title: string;
    description: string;
    constructor(news: string, des: string) {
        News.title = news
        this.description = des
    }
    printNews() {
        console.log(News.title);
        console.log(this.description);

    }
}

const bbc = new News('corona virus', 'this virus find in 2021')
bbc.printNews()

News.title = 'Vaba'
bbc.printNews()

/* Episode 18 Inheritance and shorthand for class property */

class Profile {
    // public name: string;
    // public age: number;
    constructor(public name: string, public age: number) { }

    printResult() {
        console.log(`my name is ${this.name}, I'm ${this.age} years old`);
    }
}


class Favorite extends Profile {
    constructor(public name: string, public age: number, public fav: string[]) {
        super(name, age)
    }

    addFavorite(text: string) {
        this.fav.push(text)
    }

    printFavorite() {
        super.printResult()
        console.log(this.fav);
    }

}

const fav = new Favorite('Ali', 25, [])
fav.addFavorite('sports')
fav.printFavorite()

/* Episode 19 getter and setter */

class GetAndSet {
    constructor(private number: number) { }

    get getNumber() {
        return this.number
    }

    set setNumber(num: number) {
        this.number = num
    }
}

class PrintValue extends GetAndSet {

    printValue() {
        console.log(this.getNumber);
    }
}

const logValue = new PrintValue(102)
logValue.printValue()
logValue.setNumber = 125
logValue.printValue()



/* Episode 20 abstract class */

abstract class AbsClass {
    constructor() { }
    abstract setValue(): string

    printValue() {
        console.log(this.setValue());

    }
}

class AbsChidlClass extends AbsClass {
    setValue(): string {
        return 'Ali'
    }
}

const ab = new AbsChidlClass()

ab.printValue()


/* Episode 21 interface class */

interface CourseJs {
    title?: string;
    description: string;
    price: number;

}

interface Print {
    printInfo(): void
}

class Courses implements CourseJs, Print {
    title: string;
    description: string;
    price: number;

    constructor(title: string, desc: string, price: number) {
        this.title = title
        this.description = desc;
        this.price = price
    }

    printInfo() {
        console.log(`title: ${this.title} and price: ${this.price}`);

    }
}


const crsJs = new Courses('javascript', 'superset for js', 256)
crsJs.printInfo()
/* Episode 22 readonly option and interface as function */

interface FuncInterface {
    // readonly firstNumber: number;
    // secondNumber: number
    (firstNumber: number, secondNumber: number): number
}

// let numbers: FuncInterface = { firstNumber: 25, secondNumber: 4 }
// numbers.firstName = 89;


let func: FuncInterface = (a, b) => {
    return a + b
}
console.log(func(25, 3));

/* Episode 23 indexing in (interface or type optional) */

interface INFO {
    [index: string]: string
}

let e1: INFO = {
    name: 'ali',
    lastName: 'Karimi',
    age: '23'
}


/* Episode 24 Generics */

const arrayAny: any[] = ['str', 123, true]
const arrayGen: Array<any> = ['str', 3435, false, { name: 'azim', lastname: 'karimi' }]
console.log(arrayAny);
console.log(arrayGen);



/* Episode 25 Generics in functions */


function fun<T>(fn: T[]): T[] {
    return fn
}

console.log(fun<string>(['45435']));



/* Episode 26 Generics in functions 2 */


// function fullname(fn: object, ln: object) {
//     return Object.assign(fn, ln)
// }
// const fl = fullname({ name: 'Ahmad' }, { family: 'Qasemi' })
// console.log(fl);

function fullname<ST, STR2>(fn: ST, ln: STR2) {
    return Object.assign({}, fn, ln)
}
const fl = fullname({ name: 'Ahmad', fav: ['sport'] }, { family: 'Qasemi' })
const fl2 = fullname({ fav: ['sport'] }, { family: 'Qasemi' })
const fl3 = fullname<{ name: string, fav: string[] }, { family: string }>({ name: 'Ahmad', fav: ['sport'] }, { family: 'Qasemi' })
console.log(fl);
console.log(fl2);
console.log(fl3);

/* Episode 27 Constraints in Generics */


function product<N extends object, P extends number | string>(name: N, price: P) {
    return Object.assign({}, name, price)
}

// <{ name: string }, number | string[]>
const pen = product({ name: 'pen' }, 5454)
console.log(pen);


/* Episode 28 Keyof in Constraints */

function library<N extends object, A extends keyof N>(book: N, key: A) {
    return book[key];
}

const quran = library({ name: 'Quran', another: 'God' }, 'another')
console.log(quran);



/* Episode 29 Generics in class */



class Members<T> { // -> class Members<T extends string>
    data: T[] = []
    addUser(item: T) {
        this.data.push(item)
    }
    removeUser(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
    printMember() {
        console.log(this.data);

    }
}

const tb = new Members<string>()

tb.addUser('Ali')
tb.addUser('Vahid')
tb.addUser('Hashem')
tb.addUser('Kazem')
tb.printMember()
tb.removeUser('Ali')
tb.printMember()

const ageMember = new Members<number>()
ageMember.addUser(12)
ageMember.addUser(34)
ageMember.addUser(56)
ageMember.printMember()



/* Episode 30 Generics in Type and interface */


// type FG = <T>(a: T, b: T) => T
interface FG<T> {
    (a: T, b: T): T
}

let FUNG: FG<number> = function (a: number, b: number) {
    const result = a + b
    return result
}

FUNG(12, 23)


/* Episode 31 decorators in class */


function CarName<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log(constructor);
    return class extends constructor {
        name = '206'
    }
}

@CarName
class Car {
    model: string;
    constructor(param: string) {
        this.model = param
    }
    print() {
        console.log(`my car is: ${this.model}`);

    }
}

const perid = new Car('Perid')
console.log(perid);

perid.print()



/* Episode 32 multi decorators */


function SmartPhone<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log(constructor);
    return class extends constructor {
        name = 'samsung'
    }
}

function Laptop<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log(constructor);
    return class extends constructor {
        nameLaptop = 'hp'
    }
}

@Laptop
@SmartPhone
class Mobile {
    model: string;
    constructor(param: string) {
        this.model = param
    }
    print() {
        console.log(`my phone is: ${this.model}`);

    }
}

const iphone = new Mobile('iphone')
console.log(iphone);

iphone.print()

/* Episode 33 decorators factories */


function users(name: String) {
    return function (constructor: Function) {
        console.log(name);

    }
}
@users('Mousa')
class Student {
    name = 'Ali'
    constructor() {
        console.log(`my name is ${this.name}`);
    }
}


const vahid = new Student()
console.log(users);



/* Episode 34 decorators method */


function print(str: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);

        descriptor.writable = false
    }
}


class Article {
    title: string
    constructor(title: string) {
        this.title = title
    }

    @print('article')
    getArticle() {
        return this.title
    }
}

const newArticle = new Article('Typescript')
// newArticle.getArticle = ()=>'js'
// console.log(newArticle.getArticle());


/* Episode 35 parameter and property decorators */

// property
function blog(title: string) {
    return function (target: any, propertyKey: string | symbol) {
        console.log(target);
        console.log(propertyKey);
    }
}

class SubjectBlog {
    @blog('AI')
    title: string
    constructor(title: string) {
        this.title = title
    }

    printInfo() {
        return this.title
    }
}

const technology = new SubjectBlog('ChatGPT')
console.log(technology.printInfo());

// parameter
function blogSite(target: Object, methodKey: string | symbol, parameterIndex: number) {
    console.log(target);
    console.log(methodKey);
    console.log(parameterIndex);

}

class SubjectBlogSite {

    title: string
    constructor(title: string) {
        this.title = title
    }

    printInfo(@blogSite description: string) {
        return this.title
    }
}

const updatePhone = new SubjectBlog('iphone 14')
// console.log(updatePhone.printInfo('ali'));

console.log('-------------------------------------------------');
/* Episode 36 namespace */

/// <reference path="NameSpace.ts"/>
const newLable = new Lable.Pre()
// console.log(newLable.title);
