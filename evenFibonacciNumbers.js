function evenFibonacciNumbers() {
    let nMinus2 = 0;
    let nMinus1 = 1;
    let n = nMinus2 + nMinus1;
    let sumEven = 0;

    while(n < 4000000) { // 4 million
        if (n % 2 === 0) {
            sumEven += n;
        }
        nMinus2 = nMinus1;
        nMinus1 = n;
        n = nMinus2 + nMinus1;
    }
    console.log('sum', sumEven);
}

evenFibonacciNumbers();