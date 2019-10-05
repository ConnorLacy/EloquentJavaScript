/*
    Write a function deepEqual that takes two values and returns true only if they are
    the same value or are objects with the same properties, where the values of the properties
    are equal when compared with a recursive call to deepEqual.
*/

function deepEqual (a, b) {
    if (a===b) return true;

    if(typeof a != "object" || a == null 
    || typeof b != "object" || b == null ) return false;

    let aKeys = Object.keys(a), bKeys = Object.keys(b);

    if(aKeys.length != bKeys.length) return false;

    for(let key of aKeys){
        if(!bKeys.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));