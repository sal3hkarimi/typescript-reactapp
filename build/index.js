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
/**/ 
