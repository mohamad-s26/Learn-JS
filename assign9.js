
// 01

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Another Method 
// myFriends.pop()
// Method 1
console.log(myFriends.slice(false , num)); // ["Ahmed", "Elham", "Osama"];
// Another Method 
// myFriends.lenght = 3
// Method 2
console.log(myFriends.splice(-num -true , num));





console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")


// 02
// Another Method 
// myFriends.pop()
// myFriends.shift()
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends = friends.splice(+true , true + true)
console.log(friends); // ["Eman", "Osama"]






console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")




// 03

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]







console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")


// 04 

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][website.length - website.length].slice(website.length).toUpperCase()); // ZERO









console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")



// 05 

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
// Write 3 Solutions
if (haystack.includes(needle) == true) {
    console.log("Found");
}
if (haystack.indexOf(needle) == true) {
    console.log("Found");
}
if (haystack.lastIndexOf(needle) == true) {
    console.log("Found");
}




console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")






// 06 

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
allArrs = arr2[arr1.length - true].concat(arr1[arr1.length - true].concat(arr2[arr1.length])).toLowerCase()
// Your Code Here

console.log(allArrs); // fxy





