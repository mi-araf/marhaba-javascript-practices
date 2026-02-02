// তোর এক বন্ধুর কাছে কিছু নম্বর আছে: [5, 15, 8, 7]। ওর চাওয়া অনুযায়ী, শুধু বিজোড় সংখ্যাগুলার যোগফল বের করে দে। এই কাজের জন্য একটা ফাংশন লিখে ফলাফলটা রিটার্ন কর।

function onlyOddSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 1) {
            sum = sum + number;
        }
    }
    return sum;
}
console.log(onlyOddSum([5, 15, 8, 7]));