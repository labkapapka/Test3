"use strict"

//to string

//1

console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2
console.log(typeof(5 + ''));

const num = 5;
console.log("http://vk.com/catalog/" + num);

const fontSize = 26 + 'px';


//to number
//1
console.log(typeof(Number('4')));

//2
console.log(typeof((+'4')));

//3
console.log(typeof(parseInt("15px", 10)))

let answ = +prompt("Hello", "");

//To boolean

//1
0, '', undefined, NaN; // все что false

let switcher = null;

if (switcher){
    console.log('Working');
}
switcher = 1;
if (switcher){
    console.log('Working');
}

//2
console.log(typeof(Boolean('4')));


//3
console.log(typeof(!!("44444")));

