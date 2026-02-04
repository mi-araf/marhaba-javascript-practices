// অ্যারেতে প্রতি odd সংখ্যা থেকে 1 বিয়োগ করে একটি নতুন অ্যারে বানিয়ে ফেল।

function returnOddSub2 (numbers) {
    let oddNumbers = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            oddNumbers.push(number - 1);
        }
    }
    return oddNumbers;
}
console.log(returnOddSub2([1,2,3,4,5,6]));
console.log(returnOddSub2([1,2,3,4,5,6,7,8,9]));