// const player = { name Messi, goals 800, club Inter Miami }; Object.freeze() মেথড ব্যবহার করে অবজেক্ট ফ্রিজ কর। তারপর নতুন প্রপার্টি যোগ করে দেখ, কাজ করে কি না।

const player = {
    name: "Messi", 
    goals: 800, 
    club: "Inter Miami" 
};
// object is freezed
Object.freeze(player);

player['past club'] = 'bracelona';
console.log(player);