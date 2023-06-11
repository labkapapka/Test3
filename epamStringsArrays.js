// let s = 'hfjgfdgdfdfgfdgdfgfdgdf';
// console.log(s)

// s = "bar";
// console.log(s)

// let s = `ghfjgf
// dgdfdfgfdg
// dfgfd
// g
// df`;
// console.log(s)

// const s = new String("foo");
// console.log(s);
// console.log((typeof s));

// s = "bar";
// console.log(`qwert`.length);

// let str = `Hello`;
// console.log(str[0]);

// string is not changable

// let str = 'Hi';
// str[0]= 'h';
// console.log(str[0]);

// let str = 'Hi';
// str = 'h' + str[1];
// console.log(str);

// let str = "Widget with id";
// if (str.indexOf("Widget") != -1) {
//     console.log("We found it");
// }

// let str ="Widget with id";
// console.log(str.indexOf("Widget")); //0    виводить індекс з якого починається рядок який шукаємо
// console.log(str.indexOf("id"));
// console.log(str.indexOf("id", 2));
// console.log(str.indexOf("widget"));

// includes() метод визначає чи можна знайти один рядок в іншому, повертає або true або false
// let str = 'To be or not to be, that is the question.';
// console.log(str.includes('To be'));
// console.log(str.includes('question'));
// console.log(str.includes('nonexistent'));
// console.log(str.includes('To be', 1));

// startsWith, endWith;
// console.log(str.startsWith('To be'));
// console.log(str.endsWith('To be'));

//  slice(start,end) отримання підрядка, end можна не вказувати тоды вирыжеться рядок з вказаного до кінця
//  from start to end

let str = 'наближається ранок.';
console.log(str.slice(1));                 //ок.
console.log(str.substring(1));
// console.log(str.slice(-3, -1));             //ок
// console.log(str.slice(0, -1));              //наближається ранок

// console.log(str.substring(-1, 12));            //наближається         відображаэться елементи 0-12
// between start and and
// console.log("substringString2=", str.substring(12,0)); //наближається    відображаэться елементи 0-12
console.log(str.substring(str.length - 7));

// localeCompare, повертаэ число яке вказуэ де повинен знаходитися рядок при сортуванні: до, після чи на своєму місці.
console.log('a'.charCodeAt(0));
console.log('c'.charCodeAt(0));
console.log('c'.localeCompare('a'));
console.log('check'.localeCompare('against'));

// Video 49.01

