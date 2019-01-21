// buggy and unfinished

let series = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

series = "120345";

function largestProduct(series, n){
    let seriesArray = series.split('');
    let seriesArrayNumbers = seriesArray.map(strNum => {return Number(strNum)});
    if (seriesArray.length <= n) {
        return {
            index: 0,
            numbers: seriesArrayNumbers,
            product: seriesArrayNumbers.reduce((acc, cur) => {return acc * cur}),
        }
    }

    seriesArray = series.split('0');
    let maxProduct = 0;
    let maxProductStartIndex = 0;
    if (seriesArray.length === 1) {
        maxProduct = Number.NEGATIVE_INFINITY;
        maxProductStartIndex = seriesArray[0].length - n + 1;
        if (maxProductStartIndex < 0) {
            maxProductStartIndex = 0;
        }
    }

    let originalIndex = 0;
    for (const miniSeries of seriesArray) {
        let miniIndex = 0;
        if (miniSeries.length < n) {
            originalIndex += miniSeries.length + 1;
        } else {
            let count = 0;
            let currentProduct = 1;
            while (miniIndex !== miniSeries.length) {
                currentProduct *= Number(miniSeries[miniIndex]);
                if (count === n) {
                    if (miniIndex !== n - 1) {
                        currentProduct /= Number(miniSeries[miniIndex - n]);
                    }
                    if (currentProduct > maxProduct) {
                        maxProduct = currentProduct;
                        maxProductStartIndex = originalIndex - n + 1;
                    }
                } else {
                    count++;
                }
                miniIndex++;
                originalIndex++;
            }
        }
    }
    
    let numbers = [];
    let offset = 0;
    while (offset !== n && maxProductStartIndex + offset !== seriesArrayNumbers.length) {
        numbers.push(seriesArrayNumbers[maxProductStartIndex + offset]);
        offset++;
    }
    return {
        index: maxProductStartIndex,
        numbers,
        product: maxProduct,
    };
}

console.log(largestProduct(series, 3));
// console.log(largestProduct(series, 13));