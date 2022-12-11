
const number = [1, 3, 2];
const nRange = [1,1];
const lowest = number.filter(function(low){
    const numbers = low > nRange[0] && low < nRange[1];
    return numbers;
    
});
if(lowest.length == 0){
    console.log(0);
}else{
    const minimum = Math.min(...lowest);
console.log(`The lowest number is ${minimum}`);
}
