function reverseString(Value) {
    const reversedValue = Value.split('').reverse().join('')
    return reversedValue;
}

console.log(reverseString("Hello JavaScript"));
