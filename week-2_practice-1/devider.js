function divisibleByThreeAndFive() {
    let result = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(divisibleByThreeAndFive()); // Output: [15, 30, 45]
