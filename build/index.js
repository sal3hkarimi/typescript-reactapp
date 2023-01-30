"use strict";
// Types
let num;
num = 123;
const str = 'string';
const bool = false;
function sum(firstNum, secondNum, flag) {
    if (flag) {
        console.log(`result: ${firstNum + secondNum}`);
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
