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

/**/