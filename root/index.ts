// Types
let num: Number;
num = 123
const str: string = 'string'
const bool: boolean = false

function sum(firstNum: number, secondNum: number, flag: boolean) {
    if (flag) {
        console.log(`result: ${firstNum + secondNum}`);
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
