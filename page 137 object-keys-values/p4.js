// একটা phone নামে অবজেক্ট আছে। const phone = { brand: "Samsung", model: "Galaxy S21", price: 85000 }; এটার জন্য Object.keys ব্যবহার করে for...of লুপ চালিয়ে প্রতিটি প্রপার্টি এবং তার মান কনসোল লগ কর।

const phone = {
    brand: "Samsung",
    model: "Galaxy S21", 
    price: 85000 
};

let phoneArrPorps = Object.keys(phone);   // make an array consists of the poperty names
// console.log(phoneArrPorps);  

for (let prop of phoneArrPorps) console.log(prop, phone[prop]);