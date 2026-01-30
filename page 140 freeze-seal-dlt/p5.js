// একটা animal অবজেক্ট বান, যার মধ্যে name Tiger, location Sundarban থাকবে। এখন এমন কিছু কর, যাতে টাইগারের লোকেশন চেঞ্জ করা না যায়।

const animal = {
    name: 'tiger',
    location: 'sundarban',
}

Object.freeze(animal);

animal.location = 'bandarban';
console.log(animal);