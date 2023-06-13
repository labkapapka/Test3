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

// let str = 'наближається ранок.';
// console.log(str.slice(1));                 //ок.
// console.log(str.substring(1));
// // console.log(str.slice(-3, -1));             //ок
// // console.log(str.slice(0, -1));              //наближається ранок

// // console.log(str.substring(-1, 12));            //наближається         відображаэться елементи 0-12
// // between start and and
// // console.log("substringString2=", str.substring(12,0)); //наближається    відображаэться елементи 0-12
// console.log(str.substring(str.length - 7));

// // localeCompare, повертаэ число яке вказуэ де повинен знаходитися рядок при сортуванні: до, після чи на своєму місці.
// console.log('a'.charCodeAt(0));
// console.log('c'.charCodeAt(0));
// console.log('c'.localeCompare('a'));
// console.log('check'.localeCompare('against'));

// масиви, array
// let arr = new Array(1, true, "element2", 'element3');
// console.log(arr);

// let arr = Array(1, true, "element2", 'element3');
// console.log(arr);

// let arr = [1, true, "element2", 'element3'];
// console.log(arr);

// let arr = new Array(42);
// console.log(arr.length);

// let arr = [42];
// console.log(arr.length);

// array.from
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// console.log(Array.from(obj));
// console.log(obj.a);

// array.of
// let arr1 = new Array(2);
// console.log(arr1);          //[ <2 empty items> ]

// let arr2 = Array.of(2); 
// console.log(arr2);          //[ 2 ]

// //  властивість length
// let cats = ['Dusty', 'Misty', 'Twiggy'];
// console.log(cats.length);
// cats.length = 2;
// console.log(cats);
// cats.length = 3;
// console.log(cats);      //[ 'Dusty', 'Misty', <1 empty item> ]

// map - повертає новий масив не змінюючи старий
// const arr = [1, 2, 3];
// const newArr = arr.map((element, index, thisArray) => {
//     return 'element '+element+'; index: '+ index +'array: ' + thisArray
//     });
// console.log(newArr);

// const numbers = [1, 4, 9];
// const roots = numbers.map(Math.sqrt);
// console.log(numbers);
// console.log(roots);

// filter повертає новий масив з усіма елементами, які проходять тест, реалізований наданою функцією.
// const arr = [1, 2, 3, 4, 5, 6, 7,];
// const filteredArray = arr.filter((element, index, thisArray) => {
//     return element < (thisArray[0] +thisArray[thisArray.length - 1])/2
// });
// console.log(filteredArray); //[ 1, 2, 3 ]

// find поаертаэ значення першого елементу у наданому масиві, що задовольняє надагій функції тестування.
// const arr = [1, 2, 3, 4, 5, 6, 7,];
// const fifthElement = arr.find((element, index, thisArray) => {
//     return index === 4
// });
// console.log(fifthElement); //5

// sort()
// const arr = [2, 3, 1, 5, 4, 6, 7];
// console.log(arr);
// arr.sort();
// console.log(arr);

// const arr = [2, 3, 1, 5, 4, 6, 7];
// arr.sort((a, b) => b - a);
// console.log(arr);

// for
// let arr = ["Apple", "Orange", "Pear"];
// for (let i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for.of
// let fruits = ["Apple", "Orange", "Pear"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

