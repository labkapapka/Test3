'use strict';
//regular expression

// new RegExp('pattern', 'flags')                              ;
// /pattern/f

// const ans = prompt('Введите ваше имя');

// const reg = /\d/g;
// console.log(ans.match(reg));


const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

//обратние класи
//W            не букви
//D            не цифри



// \d                digits ищем цифри
// \w             все букви
// \s            space пробели

// //флаги
// // i
// // g
// // m

// // console.log(ans.search(reg));
// // console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));
// console.log('12-34-56'.replace(/-/g, ':'));
