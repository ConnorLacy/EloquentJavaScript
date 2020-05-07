// This is a recreation of an existing HOF provided by the array prototype
// which takes in a list and calls the provided action on that l
function myForEach(list, action){
  for(let i=0; i<list.length; i++){
    let item = list[i]
    action(item)
  }
}


myForEach([1,2,3], l => console.log(l))


export default myForEach;