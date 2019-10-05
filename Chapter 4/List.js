/*
    Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 

    Also write a listToArray function that produces an array from a list. 
    
    Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element
    to the front of the input list.
    
    And another, nth, which takes a list and a number and returns the element at the given position in the list
    (with zero referring to the first element) or undefined when there is no such element.
*/

function arrayToList (arr) {
    let list = null

    for(let i = arr.length-1; i>=0; i--){
        list = { value: arr[i], rest: list} 
    }
    
    return list
}

function listToArray (list) {
    let arr = []

    for(let node = list; node; node = node.rest){
        arr.push(node.value)
    }

    return arr
}

function prepend (element, list) {
    let newList = null
    newList = { value: element, rest: list}
    return newList
}

function nth (list, number) {
    let count = 0
    for(let node = list; node; node = node.rest){
        if(count == number) return node.value
        count++
    }
}

console.log(arrayToList([10,20]))
console.log(listToArray(arrayToList([10,20])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10,20,30]),1))