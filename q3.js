// declare variable with array of numbers
const numbers = [1,2,3,4,5,6,7,8,9,10]

function primeNumbers(num) {
// use the filter method to find prime numbers
    for(let n=2; num > n; n++){
        if (num % n === 0) {
            return false;
        }
    }
    return num > 1;
}
// Output
console.log(numbers.filter(primeNumbers));
window.alert(numbers.filter(primeNumbers))