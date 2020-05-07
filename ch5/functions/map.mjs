// Map is a pure function that clones a given array, 
// and applies a mapping to each of its elements, 
// returning a new array mapped to a different form
export default function map(array, transform){
  let mapped = []
  for(let element of array){
    mapped.push(transform(element))
  }
  return mapped;
}