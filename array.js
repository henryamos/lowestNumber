
const number = [1,2,5,8,9,12];
const nRange = [4,12];
const lowest = number.find( function(low){
    const numbers = low > nRange[0] && low <= nRange[1];
    return numbers;
});
console.log(`The lowest numbers is ${lowest}`);
