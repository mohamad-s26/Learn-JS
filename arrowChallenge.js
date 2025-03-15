
// 01 

let names =  (...rest) => `String [${rest.join("], [")}] => Done ! `;
console.log(names("Osama", "Mohamad", "Ali", "Ibrahim"));

// 02

let myNumbers = [20, 50, 10, 60];
let calc = function (one, two, ...nums) {
    return one + nums[+Array.isArray(myNumbers)];
}
console.log(calc(20, 50, 10, 60)); // 80


