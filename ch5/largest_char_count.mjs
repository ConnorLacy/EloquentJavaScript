import SCRIPTS from "./data/scripts.mjs";

// For each script object, sum the total characters of all
// ranges
function characterCount(script) {
  return script.ranges.reduce((totalChars, [from, to]) => {
    return totalChars + (to - from);
  }, 0);
}

console.log(
  // curr represents the 'sum' or the current total
  SCRIPTS.reduce((curr, next) => {
    // Instead of combining the character count, we are replacing the
    // value of curr if the character count of the next script is higher
    return characterCount(curr) < characterCount(next) ? next : curr;
  })
);
