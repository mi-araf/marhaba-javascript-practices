// তোর এক বন্ধুর কাছে একটা array আছে, যেমন: [2, 4, 5, 8, 32, 49]। এখন এমন একটা ফাংশন তৈরি কর, যেটা শুধু এমন সংখ্যাগুলোর যোগফল দেখাবে, যেগুলি 4 দিয়ে ভাগ যায়।

function sumOf4(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 4 === 0) {
            sum += number;    // sum = sum + number;
        }
    }
    return sum;
}
console.log(sumOf4([2, 4, 5, 8, 32, 49]));