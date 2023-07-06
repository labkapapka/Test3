'use strict';

//filter  повертають новий масив а foreach просто перебирає

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map
// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());
    
// console.log(answers);

// every/some

// const some = [4, 5, 7];

// // console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

// reduce схлопивать масив в едино число

// const arr = [ 4, 5, 1, 3, 2, 6];
// const result = arr.reduce((sum, current) => sum + current);
// console.log(result);

// const arr = [ 'apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArray = Object.entries(obj)            //переводим обьект в массив
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArray);



