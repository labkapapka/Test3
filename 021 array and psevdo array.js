"use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0 ;

// console.log(arr.length); //свойство lenght состоит из последнего индекса +1
// console.log(arr);
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//arr.pop(); // видаляє останній елемент в кінці масиву

// arr.push(10); // додає елемент в кінець масиву

// console.log(arr);

// for (let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr){ //тут можна використовувати brake та continue
//     console.log(value);
// }

const str = prompt("Напиши перечень товаров", "");
const produce = str.split(", ");                     // формує масив на основі строк
produce.sort()                         //сортує все по алфавіту як строки а якщо цифри то по першій цифрі потім по другій
console.log(produce.join('; '));  // вивели обратно строку з масиву


// що таке псевдомасиви? Коли ми працюємо з елементами на сторінці то ми якраз і будемо отримувати псевдомасиви, бо 
// це такий об"ект який так само виглядає, і його структкра співпадає з масивом, точно такі самі [] , такі самі 
// елементи  але там не буде ніяких методів (push, join  і т .д.)
