"use strict";
// string and numeric methods and property
//свойства наприклад length

const str = "teERt";

//const arr = [1, 2, 4];
//console.log(str[0]);
//console.log(str.length);
//console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11)); // не підтримує мінусові значення

console.log(logg.substr(6, 5)); 

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
//console.log(parseInt(test));
console.log(parseFloat(test));