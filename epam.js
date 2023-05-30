// console.log(-5/0);
// console.log(5/0);
// console.log(0/0);

// console.log(10!==20);
// console.log(10!=20);
// console.log(null == undefined);
// console.log(null===undefined);
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }
// цикл  for in для об"єктів
// цикл  for of  для масивів

const obj = {a:1, b:2, c:3};
for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`)
};

let iterible = [10, 20, 30];
for (let prop in iterible) {
    console.log(`obj.${iterible} = ${iterible[prop]}`)
};


let iterable = [10, 20, 30];
for (let value of iterable) {
    value[0] += 1;
    console.log(value);
};

const j = Symbol("I'm Symbol");
console.log('j: ', typeof j);


const l = Symbol("I'm Symbol");
console.log('l: ', typeof l);
console.log(l, j);
