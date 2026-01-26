// একটা প্রোগ্রাম বানিয়ে ‘বৃষ্টি’ নামক উপাদান আছে কি না, চেক কর। যদি থাকে, তাহলে আউটপুট বলবি ‘I need umbrella’, না থাকলে বলবি ‘No rain no pain’। অ্যারেতে ‘দীপ’, ‘মেঘ’, ‘বৃষ্টি’ ও ‘ঝর্ণা’ আছে।

// const climate = ['summer', 'sunny', 'windy', 'stormy', 'dry'];
const weather = ['দীপ', 'মেঘ', 'বৃষ্টি', 'ঝর্ণা']

const checkRain = weather.includes('বৃষ্টি');

// checkRain == true
checkRain ? console.log('i need umbrealla') : console.log('no rain no pain');