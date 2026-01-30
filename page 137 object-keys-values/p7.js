// সংখ্যার একটা অবজেক্ট দিলাম— const numbers = { a: 10, b: 20, c: 30, d: 40 }; এবার বুদ্ধি খাটিয়ে এই অবজেক্টের সব প্রপার্টির ভ্যালুগুলোর যোগফল বের কর।

const numbers = { 
    a: 10, 
    b: 20, 
    c: 30, 
    d: 40 
};

let sum = 0;
for (let num in numbers) {
    // console.log(typeof numbers[num]);
    // sum = num + sum;     // reverse sum
    sum = sum + numbers[num];
}
console.log(sum);