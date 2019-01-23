function summationOfPrimes(n) {
    let primes = _getPrimes(n);
    let primeSum = primes.reduce((acc, cur) => {
        return acc + cur;
    });
    return primeSum - primes[primes.length - 1]; // last prime is over n so need to subtract it out
}

function _getPrimes(maxPrime) {
    let primes = [2,3,5,7,11,13];
    let newPrime = 13;
    let stepPattern = [4,2,2,2]; // // only test odd numbers, skip divisible by 5
    let stepIndex = 0;
    while (primes[primes.length - 1] < maxPrime) {
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
    return primes;
}

console.log(summationOfPrimes(2000000));