// Repeat is a high order function because it operates
// on a function provided as a value
export default function repeat(n, action){
  for(let i=0; i<n; i++){
    action(i)
  }
}

