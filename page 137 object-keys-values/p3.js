// তোকে ল্যাপটপ নামে একটা অবজেক্ট দেয়া হলো — const laptop = { brand: "Dell", model: "Inspiron", price: 45000 }; এবার for...in লুপ চালিয়ে প্রতিটি প্রপার্টি এবং তার মান প্রিন্ট কর।

const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000
};
for (let prop in laptop) {
    console.log(prop, laptop[prop]);
}