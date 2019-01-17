function sumSquareDifference() {
    let squareSum = 0;
    let sum = 0;
    for (let i = 1; i !== 101; i++) {
        squareSum += i * i;
        sum += i;
    }
    let sumSquared = sum * sum;
    return sumSquared - squareSum;
}

console.log(sumSquareDifference());