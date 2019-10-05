/*
    Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
    For this exercise, write two functions, reverseArray and reverseArrayInPlace.
    
    The first, reverseArray, takes an array as argument and produces a new array that has the same elements
    in the inverse order. 
    
    The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as
    argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(arr) {
    let newArr = []

    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i])
    }

    return newArr
}

function reverseArrayInPlace(arr) {
    let end = arr.length-1
    let mid = 0 + arr.length/2
    
    for(let i = 0; i < mid; i++){
        let temp = arr[i]
        arr[i] = arr[end-i]
        arr[end-i] = temp
    }
    return arr
}

console.log(reverseArray([0,1,2,3,4,5]))
console.log(reverseArrayInPlace([0,1,2,3,4,5]))