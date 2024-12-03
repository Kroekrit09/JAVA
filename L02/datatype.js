const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello W";
const b = true;
const employee = {
    FirstName: "MMMM",
    LastName: "LLLL"
};

function sayHello(person) {
    console.log("hello " + person.FirstName);
}

console.log(typeof people);
console.log(typeof sayHello)
console.log(employee instanceof Array);
sayHello(employee);


