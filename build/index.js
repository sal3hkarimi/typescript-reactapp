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
console.log(sumNumber); // 44
