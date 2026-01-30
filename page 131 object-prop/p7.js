// একটা college অবজেক্ট বানাস। যার নাম ndc, প্রতিষ্ঠিত (established) 1949, গ্রুপ (groups) ['Science', 'Arts', 'Commerce']। এখন তোর কাজ হবে সেকেন্ড groups-এর মান অর্থাৎ 1 ইনডেক্সের মান বের করা।

const college = {
    name: 'ndc',
    established: 1949,
    groups: ['science', 'arts', 'commerse'],
}
console.log(college.groups[1]);