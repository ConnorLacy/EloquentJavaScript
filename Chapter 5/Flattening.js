/*
    Use the reduce method in combination with the concat method to “flatten”
    an array of arrays into a single array that has all the elements of the original arrays.
*/

let arrays = [[1, 2, 3], [4, 5], [6]]

console.log(arrays.reduce((flat, current) => flat.concat(current), []))

//flat is the accumulator (arrays being concatenated to this)
//current is representing arrays
//console.log( arraytoreduce.reduce((accumulator, currentValue) => accumulator.concat(currentValue), omit))