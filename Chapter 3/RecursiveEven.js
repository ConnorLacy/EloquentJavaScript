/*
    Define a recursive function isEven to define rules:
        0 is even
        1 is odd
        For any other number N, its evenness is the same as N-2
*/

function isEven (num) {
    if(num < 0){
        num = Math.abs(num)
    }

    if(num == 0) return true
    else if(num == 1) return false
    else return isEven(num-2)
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
console.log(isEven(-2))