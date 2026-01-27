// তুই এক স্কুলে 31 থেকে 58 পর্যন্ত ছাত্রদের রোল নাম্বার লিস্ট করবি, তারপর একটা for লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।

let roll = 31;
let allRoll = 0;
let rolls = [];

for (roll; roll <= 58; roll++) {
    allRoll += roll;
    rolls.push(roll);
}

/**
 * while (roll <= 58) {
    // console.log(roll);
    allRoll += roll;     // allRoll = roll + allRoll;
    rolls.push(roll);
    roll++;
}
*/
console.log(rolls);
console.log(allRoll);