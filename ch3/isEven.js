/*
    Write a recursive function that takes a single whole
    number as a param, and returns a boolean describing if it 
    is even
*/
const isEven = (number) => {
    //Edge cases
    if(number < 0) return isEven(number * -1)
    if(number === 0) return true
    if(number === 1) return false

    // Recursion
    else {
        return isEven(number-2)
    }
}

console.log(isEven(-50))