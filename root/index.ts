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

if(prs.gender === Personal.MALE){
    console.log('he is Male');    
}else{
    console.log('she is Female');
}



/**/