// Write range function that takes array of numbers and returns
// the sum of these numbers

const range = (start, end) => {
  let nums = [];
  while (start <= end) {
    nums.push(start);
    start++;
  }
  return nums;
};

const sum = (numberArr) => {
  let total = 0;
  for (let number of numberArr) {
    total += number;
  }
  return total;
};

console.log(sum(range(1, 10)));
