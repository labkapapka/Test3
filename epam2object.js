// function Tag(name, age, male) {
//     this.name = name;
//     this.age = age;
//     this.male = male;
// }

// let tag = new Tag('Post', 30, 'female');
// let n = new Tag('Anna', 50, 'male');

// console.log(tag);
// console.log(n);


// const w = new Object();
// w.x = "test";
// x.y = 1234;
// console.log(w);

// const a = {
//     x: 10,
//     calculate: function (z){
//         return this.x + this .y + z;
//     }
// };

// const b = {
//     y: 20,
//     __proto__: a
// };

// // функції
// // створння функції за допомогою function declaration

// let userName = 'John';
//     function showMessage() {
//         userName = "Bob";
//         let message = 'Hello, ' + userName;
//         console.log(message);
//     };
// console.log(userName);
// showMessage();
// console.log(userName);

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Got a permission from the parents?');
    }
};

let age = prompt('How old are you?' ,  );
if (checkAge(age)) {
    alert ('Access granted');
}else {
    alert('Access denied');
};

// методи call() и apply() можуть стати в нагоді при встановленні значення "this".
const person = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName, + city + " ", + country;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");
console.log(person);