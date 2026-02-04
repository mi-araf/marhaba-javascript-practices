// একটি অ্যারেতে odd সংখ্যাগুলোর গড় করে দশমিকের পরে দুই ঘর পরিমাণ মান রিটার্ন কর।

function returnOddAvg (numbers) {
    let oddNumbers = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            oddNumbers.push(number);
        }
    }
    let sum = 0;
    for (const oddNum of oddNumbers) {
        sum = sum + oddNum;
    }
    return (sum / oddNumbers.length).toFixed(2);
}
console.log(returnOddAvg([1,2,3,4,5,6]));
console.log(returnOddAvg([1,2,3,4,5,6,7,8,9]));