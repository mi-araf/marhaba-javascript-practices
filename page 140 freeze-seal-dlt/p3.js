// const book = { title Harry Potter, author JK Rowling, pages 500 }; Object.seal() ব্যবহার করে অবজেক্ট সিল কর। তারপর author প্রপার্টি চেঞ্জ করে দেখ।

const book = { title: "Harry Potter", author: 'JK Rowling', pages: 500 };
Object.seal(book);
book['author'] = 'araf';
console.log(book);