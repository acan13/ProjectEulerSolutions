function prime(n) {
    let primes = [2,3,5,7,11,13];
    if (n < 7) {
        return primes[n-1];
    }
    let newPrime = 13;
    let stepPattern = [4,2,2,2]; // // only test odd numbers, skip divisible by 5
    let stepIndex = 0;
    while (primes.length !== n) {
        newPrime += stepPattern[stepIndex];
        stepIndex === stepPattern.length - 1 ? stepIndex = 0 : stepIndex++;

        let i = 1;
        while (newPrime % primes[i] !== 0) {
            i++;
            if (i === primes.length) {
                primes.push(newPrime);
            }
        }
    }
    return primes[primes.length - 1];
}

console.log(prime(10001));