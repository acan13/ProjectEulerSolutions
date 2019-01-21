// max c is 997
// max b is 499
// max a is 332
let steps = 0;

function pythagoreanTriplet() {
    for (let a = 1; a !== 333; a++) {
        for (let b = a + 1; b !== 500; b++) {
            let c = 1000 - a - b;
            if (a * a + b * b === c * c) {
                return [a,b,c];
            }
        }
    }
}

console.log('pyth triple', pythagoreanTriplet());