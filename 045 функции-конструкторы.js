// по класификации типов данных функция является объектом и в нее можна записать какие то методы и свойства 

// const num = new Number(3);
// console.log(num);

// const num = new Function(3);
// console.log(num);

// ES 5
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} has left game`)
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);


ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

// ES 6. Класы

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`)
    }
    exit() {
        console.log(`User ${this.name} has left game`)
    }
}
