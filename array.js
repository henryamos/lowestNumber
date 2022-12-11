
const number = [7, 23, 3, 1, 3, 5, 2] ;
const nRange = [2,7];
const lowest = number.filter(function(low){
    const numbers = low > nRange[0] && low <= nRange[1];
    return numbers;
    
});

const minimum = Math.min(...lowest);
console.log(`The lowest number is ${minimum}`);