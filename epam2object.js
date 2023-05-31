function Tag(name, age, male) {
    this.name = name;
    this.age = age;
    this.male = male;
}

let tag = new Tag('Post', 30, 'female');
let a = new Tag('Anna', 50, 'male');

console.log(tag);
console.log(a);


const w = new Object();
w.x = "test";
this.y = 1234;
console.log(w);