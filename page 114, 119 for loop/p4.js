// For লুপ দিয়ে 1 থেকে 50 পর্যন্ত লুপ চালাবি। তবে লুপ চালানোর সময় লুপের ভিতরের মান প্রতিবার 4 করে বাড়াবে।

let nArr = [];
for (let n = 1; n <=50; n+=4) {
    console.log(n);
    nArr.push(n);
}
console.log(nArr);