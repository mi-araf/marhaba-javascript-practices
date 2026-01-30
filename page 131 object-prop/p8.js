// একটা family অবজেক্ট বানাস। যার মধ্যে একটা প্রপার্টি হবে father। সেটার মানও আরেকটা অবজেক্ট এবং ফাদারের মধ্যে তোর আব্বুর নাম, বয়স এবং পেশা (profession) থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটা প্রপার্টি থাকবে, সেই প্রপার্টির মানও আরেকটা অবজেক্ট এবং mother-এর অবজেক্টের মধ্যে তোর আম্মুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচ্ছে, mother-এর age প্রপার্টি বের কর। তারপর তোর আব্বুর age-এর মান বের কর। তারপর এই দুইটা age-এর যোগফল বের করে সেট আউটপুট হিসেবে দেখ।

const family = {
    father: {
        name: 'monsur ali',
        age: 56,
        profession: 'service holder'
    },
    mother: {
        name: 'ashphia begum',
        age: 48,
        profession: 'house wife'
    }
}
const fatherAge = family.father.age;
const motherAge = family['mother']['age'];

console.log(fatherAge);
console.log(motherAge);