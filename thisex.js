const cat = {
    name: "Pipey",
    age: 8,
    whatName() {
        return this.age;
    },
};

console.log(cat.whatName());
cat.age = "9";
console.log(cat.whatName());
