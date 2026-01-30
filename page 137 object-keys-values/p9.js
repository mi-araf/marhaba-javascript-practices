// একটা building অবজেক্ট বান, যার মধ্যে floors 10, address {street Main Road, city Dhaka}, আর type Commercial। এখন একটা for...in লুপ চালিয়ে সব প্রপার্টি আর ভ্যালু প্রিন্ট কর।

const building = {
    floors: 10,
    address: {
        street: 'Main Road',
        city: 'Dhaka',
    },
    type: 'Commercial',
};

for (const prop in building) {
    console.log(prop, building[prop]);
}