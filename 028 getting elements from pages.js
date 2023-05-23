"use strict";
//  створюємо вместилище информации
// інколи для пошуку елементу потрібно вказати #


const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]);


const circles = document.getElementsByClassName('circle');
console.log(circles);


const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('div');
console.log(oneHeart);