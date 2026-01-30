// একটা gadget অবজেক্ট বান, যার মধ্যে name iPhone, price 120000, আর color Black থাকবে। delete ব্যবহার করে price ডিলিট কর।

const gadget = {
    name: "iphone",
    price: 120000,
    color: 'black',
};
delete gadget.color;
console.log(gadget);