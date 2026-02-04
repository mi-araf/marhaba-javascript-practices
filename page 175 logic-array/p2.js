// একটি অ্যারে odd সংখ্যালাককে 2 দিয়ে গুণ করে একটি নতুন অ্যারে বানিয়ে নতুন অ্যারে রিটার্ন কর।

function returnOddMul2 (numbers) {
    let oddNumbers = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            oddNumbers.push(number*2);
        }
    }
    return oddNumbers;
}
console.log(returnOddMul2([1,2,3,4,5,6]));
console.log(returnOddMul2([1,2,3,4,5,6,7,8,9]));