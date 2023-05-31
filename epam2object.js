function Tag(name, age, male) {
    this.name = name;
    this.age = age;
    this.male = male;
}

let tag = new Tag('Post', 30, 'female');
let n = new Tag('Anna', 50, 'male');

console.log(tag);
console.log(n);


const w = new Object();
w.x = "test";
this.y = 1234;
console.log(w);

const a = {
    x: 10,
    calculate: function (z) {
        return this.x + this.y + z;
    }
};

const b = {
    y: 20,
    __proto__: a
};

const c = {
    y: 30,
    __proto__: a
};

console.log(b.calculate(30));
console.log(c.calculate(40));
console.log(a.calculate(20));

console.log(a);
console.log(b);
console.log(c.x, c.y, c.calculate);

const x = 10;
console.log(this.x);



const actor = {
    name : 'John',
    lastname : 'Connor',
    getFullName: function(){
        console.log(this.name + ' ' + this.lastname);
        console.log(user.name + ' ' + user.lastname);
    }
};

user.getFullName();

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for(let key in user) {
    console.log(key);
    console.log(user[key]);
};










