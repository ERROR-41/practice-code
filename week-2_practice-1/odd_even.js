function checkNumber(num) {
    if (num % 2 === 0) {
        return `${num} is even.`;
    } else {
        return `${num} is odd.`;
    }
}

console.log(checkNumber(7)); // Output: 7 is odd.
console.log(checkNumber(12)); // Output: 12 is even.
