//CALL back функції це функції які повинні бути виконані після того як виконана інша функція
"use strict";

function first() {
    //do somethings
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second () {
    console.log(2)
}

first();
second();

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('Я пройшов цей урок!');
// });        - тут функція анонімна, тобто не можливо її повторно викликати, нижче варіант функції з назвою

function learnJS(lang, callback){
        console.log(`Я учу: ${lang}`);
        callback();
    }
    
function done() {
    console.log('Я прошел урок!');
}

learnJS('JavaScript', done);


