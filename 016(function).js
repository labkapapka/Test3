"use strict";
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello pidary");
console.log(num);


console.log(calc(4, 3));
console.log(calc(5, 5));
console.log(calc(10, 4));

function calc(a, b){
    return (a + b);
    console.log // 'цей код не виконується після return;
}


function ret () {
    let num = 50
    // , багато коду, якісь розрахунки
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//function expression 
const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => {return a + b};

const calc = (a, b) =>  a + b; // один з варіантів запису

const calc = (a, b) => {
    console.log(num);
    return a + b};            //one more varient how input arrow functions


