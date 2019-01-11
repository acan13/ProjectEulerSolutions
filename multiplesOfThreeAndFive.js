function getSum() {
    let multiples = [3,5,6,9,10,12,15];
    let counter = 0;
    let total = 0;

    while (counter * 15 + multiples[6] < 1000) {
        for (const val of multiples) {
            total += 15 * counter + val;
        }
        counter++;
    }

    for (let i = 0; i < multiples.length; i++) {
        let newNum = 15 * counter + multiples[i];
        if (newNum < 1000) {
            total += newNum;
        }
    }

    return total;
}

console.log('test', getSum(), confirm());