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

// console.log(obj);
// console.log(copy);

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// результат { a: 10, b: 1 }
//           { a: 10, b: 1 } 

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

// const newNumbers =  copy(numbers);

// newNumbers.a = 10;
// console.log(numbers);
// console.log(newNumbers);

// newNumbers.c.x = 10;
// console.log(numbers);
// console.log(newNumbers);

//есть глубокие и поверхностніе копии, више поверхностная копия.

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// console.log(add);
// console.log(clone);

// clone.d = 20;


// console.log(add);
// console.log(clone);

const oldArray = ['a', 'd', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'dfdfdfefef';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo','rutybe'],
      blogs = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"]

const newArray = [...array];
console.log(array);
console.log(newArray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(q);
console.log(newObj);













