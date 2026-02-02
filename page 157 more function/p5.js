// একটা ফাংশন বানাবি, যেটা কোনো সংখ্যা পাবে, আর সেই সংখ্যা দ্বিগুণ করে রিটার্ন করবে, যদি সংখ্যা পজিটিভ হয়। যদি নেগেটিভ হয়, তাহলে তিনগুণ করে রিটার্ন করবে।

function getNum(n) {
    let res = 0;
    if (n > 0) {
        res = n * 2;
    } else if (n < 0) {
        res = n * 3;
    } else {
        res = 0;
    }
    return res;
}
console.log(getNum(3));
console.log(getNum(-4));
console.log(getNum(0));