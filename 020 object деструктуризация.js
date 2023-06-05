"use strict";

// const obj = new Object; застарілий спосіб створення об"єктів

// створюємо об"єкт. (ключ, властивість, значення)

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}

// console.log(options.name);

// delete options.name;

//console.log(options["colors"]["border"]);

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
// }


// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key] ){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);        
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
//     }   

// let counter = 0;    
// for (let key in options) {
//     // if (typeof(options[key]) === 'object') {
//     //     for (let i in options[key] ){
//     //         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            
//     //     }
//     // } else {
//     //     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    

//     console.log(counter);
    
// console.log(Object.keys(options).length);

//створюємо методи самостійно
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
makeTest: function() {
    console.log("Test");
    }
};

// options.makeTest();

const {border, bg} = options.colors;
console.log(border, bg);

//JS об"єктно орієнтована мова програмування, все що є зводиться до об"єктів. Правильніше взагалі казати що JS 
//прототипно орієнтована мова