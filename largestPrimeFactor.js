function largestPrimeFactor(n) {
    if (n < 0) {
        throw "n must be greater than 0;"
    }
    if (n < 4) {
        return n;
    }
    
    let i = 2;
    let step = 1;
    while (i <= n / 2) {
        if (n % i === 0) {
            let largestPrimeRemainder = largestPrimeFactor(n / i);
            if (i > largestPrimeRemainder) {
                return i;
            }
            return largestPrimeRemainder;
        }
        i += step;
    }
    return n;
}

let test = largestPrimeFactor(100000000001);
// let test = largestPrimeFactor(600851475143);
console.log('test', test);