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
/**/ 
