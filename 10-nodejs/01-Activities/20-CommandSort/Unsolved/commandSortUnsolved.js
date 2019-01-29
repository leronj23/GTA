// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

let nodeArgs = process.argv.slice(2);
let numberArray = nodeArgs.sort(function(a,b){return a-b});

console.log(numberArray);