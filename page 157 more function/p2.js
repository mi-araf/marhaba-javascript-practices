// ধর, তোকে এমন একটা ফাংশন বানাতে হবে, যেটাতে একটা নাম পাস করলে সেটার প্রথম অক্ষরটা রিটার্ন করবে। ধর 'Raju' দিলে 'R' রিটার্ন করবে।

function firstLetter(word) {
    let theWord = [];
    for (const letter of word) {
        theWord.push(letter)
    }
    return theWord[0];
}
console.log(firstLetter('Raju'));