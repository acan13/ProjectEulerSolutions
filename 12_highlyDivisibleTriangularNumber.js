function getHighlyDivisibleTriangleNumber() {
    let n = 0;
    let triangleNumber = 0;
    let factors = [];
    
    while (factors.length <= 500) {
        n++;
        triangleNumber += n;
        factors = getFactors(triangleNumber);
    }
    
    return triangleNumber;
}

function getFactors(n) {
    let squareN = Math.floor(Math.sqrt(n));
    let factors = [];
    for (let i = 1; i <= squareN; i++) {
        if (n % i === 0) {
            if (i * i === n) {
                factors.push(i);
            } else {
                factors.push(i, n/i);
            }
        }
    }
    return factors;
}

console.log('answer', getHighlyDivisibleTriangleNumber());