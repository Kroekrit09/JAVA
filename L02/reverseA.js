function reverseString(Value) {
    let reversedValue = "";

    Value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    });

    return reversedValue;
}

console.log(reverseString("Reverse Me"));
