/*
    Write a function countBs that takes a string as its only argument and returns a 
    number that indicates how many uppercase "B" characters there are in the string.

    Next, write a function called countChar that behaves like countBs, except it takes
    a second argument that indicates the character that is to be counted (rather than
    counting only uppercase "B" characters). Rewrite countBs to make use of this new function
*/

function countBs (someString) {
    let count = 0
    for (let i = 0 ; i < someString.length; i++){
        if(someString[i] === "B") count++
    }
    return `${count} instances of 'B', B!`
}

function countChar (otherString, charToFind) {
    let count = 0
    for (let i=0; i < otherString.length; i++){
        if(otherString[i] === charToFind) count++
    }
    return `${count} instances of ${charToFind}, B!`
}


console.log(countBs("This mans Be eating Beans, b!"))
console.log(countChar("This mans Be eating Beans, b!", "a"))