const findConsecutiveZeros = (num) => {
    // let binaryNum = num.toString(2)
    // let max = 0;

    // for(let i = 0; i < binaryNumber.length; i++) {
    //     let currentMax = 0;
    //     while(binaryNumber[i] === '0') {
    //         currentMax++;
    //         i++;
    //     }
    //     max = Math.max(max, currentMax)
    // }
    // console.log(max);
    // return max;
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //  DOES NOT ACCOUNT FOR ALL CASES, -> findConsecutiveZeros(6) // 110, returns 1, should be 0



    // convert num to a binary num
    const binaryNumber = (num >>> 0).toString(2);
    // remove all numbers after the last 1 in the binary number
    const removeLast1AndBeyond = binaryNumber.substring(0, binaryNumber.lastIndexOf("1"));
    // split removeLast1AndBeyond ("new" binary number) by 1, group all 0s between 1 together
    const splitBinary = removeLast1AndBeyond.split("1");
    console.log(splitBinary);  //1s will be blank ''
    // sort and reverse to get largest to smallest, at arr[0] will have ans by finding its length
    const maxConsecutiveZeros = splitBinary.sort().reverse()[0].length;

    console.log(maxConsecutiveZeros);
    return maxConsecutiveZeros;
}

findConsecutiveZeros(1); // 1 //=> 0
findConsecutiveZeros(5); // 101 //=> 1
findConsecutiveZeros(6); // 110 //=> 1
findConsecutiveZeros(15); // 1111 //=>
findConsecutiveZeros(19); // 10011 //=> 2
findConsecutiveZeros(32); // 10000010001 //=> 5
findConsecutiveZeros(6291457); // 11000000000000000000001 //=> 20
findConsecutiveZeros(1376796946); // 1010010000100000100000100010010 //=> 5
findConsecutiveZeros(1610612737); // 1100000000000000000000000000001 //=> 28


///////////////////////////////////////////////////////////////////////////
const solution = (N) => {
    let number = N;
    let binary = '';
    let currentCount = -1;
    let maxCount = 0;
    
    while(number > 0) {
        let digit = number % 2;
        
        if(digit === 1) {
            if(currentCount > maxCount) {
                maxCount = currentCount;
            }
            currentCount = 0;
        } else if(currentCount >= 0) {
            currentCount++;
        }
        
        binary = '' + digit + binary;
        number = parseInt(number / 2);
    }
        
    return maxCount;
}
