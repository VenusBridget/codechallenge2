// Declare input string in a variable
const original = 'The Quick Brown Fox'

function swapCase(string) {
    // Use split and map method to swap the cases
    let chars = string.split("").map(char => {
        // Check if current character is uppercase letter
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        }
        // Check if current character is lowercase letter
        else {
            return char.toUpperCase();
        }
    })
    // Join the results
    return chars.join("");
}
const swappedCase = swapCase(original)
// Output joined results
console.log(swappedCase);
window.alert(swappedCase);
