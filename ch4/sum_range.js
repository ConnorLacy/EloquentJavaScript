const range = (start, end, step = 1) => {
  let nums = [];
  if (step < 0) {
    let temp = start;
    start = end;
    end = temp;
  }
  while (start <= end) {
    nums.push(start);
    start++;
  }
  return step < 0 ? nums.reverse() : nums;
};

const sum = (numberArr) => {
  let total = 0;
  for (let number of numberArr) {
    total += number;
  }
  return total;
};

console.log(range(1, 10, 2));
console.log(range(5, 1, -1));
