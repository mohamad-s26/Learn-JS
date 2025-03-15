// 01
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let word = mix
.map( (ele) => isNaN(parseInt(ele)) ? ele : "")
.reduce((acc,current) => acc +current)
console.log(word);
// Elzero





// 02 
let myString = "EElllzzzzzzzeroo";
let noRepeat = myString.split("")
.filter( (ele, index) =>myString.indexOf(ele) === index)
.reduce( (acc, current) =>acc + current)
console.log(noRepeat)
// Elzero





// 03 
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flatten = myArray
.reduce( (acc, current) =>  acc +current)
.replaceAll(",", "")
console.log(flatten);
// Elzero





// 04 
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let negative = numsAndStrings
.filter(ele => !isNaN(ele))
.map(ele => -ele);
console.log(negative)
// [-1, -10, 10, 20, -5, -3]





// 05
let nums = [2, 12, 11, 5, 10, 1, 99];
let result = nums
.reduce( (acc, current) => current % 2 === 0 ? acc * current : acc + current , 1)
console.log(result)
// 500
