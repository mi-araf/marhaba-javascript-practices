const num = 85;
const isPass = true;

if (num > 80 && isPass) {
    // isPass is defined before and here isPass == true acting auto
    console.log('father will buy me a bike');
}
else {
    console.log('no bike man');
}