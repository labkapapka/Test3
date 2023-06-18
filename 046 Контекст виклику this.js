'use strict';
// 1
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

// 2
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum(); //буде undefined тому що це не метод об"єкту, це функція що запускається всередині методу об"єкту. тому контекст виклику влна функція вжк загубила

// 3
// function User (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     };

// }
// let Ivan = new User ('Ivan', 23);
// Ivan.hello();

// 4

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num){
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));



// 1) звичайна функція: this = window, але якщо стоїть 'use strict' то буде undefined
// 2) контекст у методов об"єкта - сам об"єкт
// 3) this в конструкторах і класас - це новий екземпляр об"єкту
// 4) ручна привязка this: call, apply, bind

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

const double = (a) => a * 2; //скорочений записа бо стрілкова функція якщо приймає один аргумент то може бути записана без { }



