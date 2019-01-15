// 999 * 999 = 998001
// 100 * 100 = 10000
// cannot be prime (must be product of two 3 digit numbers)

let count = 0;

function largestPalindromeProduct() {
    let maxNum = 999 * 999;
    let minNum = 100 * 100;
    let n = maxNum;
    while (n >= minNum) {
        count++;
        if (isPalindromeNumber(n)) {
            let factor1 = 100;
            while (factor1 !== 1000) {
                count++;
                if (n % factor1 === 0 && n / factor1 > 99 && n / factor1 < 1000) {
                    return [factor1, n / factor1];
                }
                factor1++;
            }
        }
        n--;
    }
}

function isPalindromeNumber(n) {
    let numbers = [];
    while (n !== 0) {
        count++;
        numbers.push(n % 10);
        n -= n % 10;
        n = n / 10;
    }
    while (numbers.length > 1) {
        count++;
        if (numbers.pop() !== numbers.shift()) {
            return false;
        }
    }
    return true;
}

console.log(largestPalindromeProduct());
console.log('count', count);