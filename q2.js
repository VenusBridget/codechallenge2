// Declare variables
let array = createArray(4,7)
let array2 = createArray(-4,7)

function createArray(start, end){
// Initialize an array to store the outcome
    let array = []
//Use push method to generate an array 
    for(let n = start; n <= end; n++) {
     array.push(n);
    }
    return array
}
// Output
console.log(array)
console.log(array2)