// Repeat is a high order function because it operates
// on a function provided as a value
function repeat(n, action){
  for(let i=0; i<n; i++){
    action(i)
  }
}

repeat(3, console.log)

export default repeat;