"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);



const obj = {
    a: 5,
    b: 1

};

// const copy = obj; // передається ссилка на уже существующий об"єкт

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// результат { a: 10, b: 1 }
//           { a: 10, b: 1 } 

function copy(mainObj) {
    let objCopy {};

    let key;
    for (key in );

}