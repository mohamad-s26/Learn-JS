// The First Method (Soultion)
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let soulution = "";
let mySoulution = myString.split("")
.map( (ele) => ele !=="," ? ele : "")
.filter( (ele) => isNaN(parseInt(ele))
)
.reduce( (acc, current) => acc + current)
.slice(true, -isNaN(myString)).replaceAll("_", " ");
console.log(mySoulution);   







// The Second Method (Soultion)
let solution = myString
    .split(",")
    .filter((ele) => isNaN(Number(ele)))
    .map((ele) => ele === "_" ? " " : ele)
    .reduce((acc, current) => `${acc}${current}`)
    .slice(true, -isNaN(myString));

console.log(solution); // Elzero Web School