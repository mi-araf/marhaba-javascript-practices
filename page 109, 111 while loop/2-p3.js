// তুই এক স্কুলে 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নাম্বার লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।

let roll = 1;
let rollAll = 0
while (roll <= 50) {
    console.log(roll);
    rollAll = rollAll + roll;
    roll++;
}
console.log(rollAll);