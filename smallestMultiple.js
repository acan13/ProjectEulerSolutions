function smallestMultiple(){
    let divisors = [20,19,18,17,16,15,14,13,12,11]; // all smaller numbers are multiples of the larger ones so no need to check them
    let smallestMultiple = divisors[0];
    for (const divisor of divisors) {
        smallestMultiple = smallestMultipleBetweenTwoNumbers(smallestMultiple, divisor);
    }
    return smallestMultiple;
}

function smallestMultipleBetweenTwoNumbers(n1, n2) {
    let step = n1 > n2 ? n1 : n2;
    let divisor = n1 > n2 ? n2 : n1;
    let smallestMultiple = step;
    while (smallestMultiple % divisor !== 0) {
        smallestMultiple += step;
    }
    return smallestMultiple;
}

console.log('test2', smallestMultiple2());
console.log('steps', steps2);

