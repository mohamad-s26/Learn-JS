
// 01
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(200000 / 2); // 100000 dont use the Operators two times
console.log(25000 * 4); // 100000  dont use the Operators two times


console.log(Math.round(parseFloat("100000.19")));
console.log(parseInt("100000.19"));
console.log(50000 + 50000); // 100000
console.log(15_0000 - 5_0000); // 100000
console.log(60_00_00 / 6 ); // 100000
console.log(1_0_0_0 * 10**2); // 100000
console.log(Math.pow(10 , 5)); // 100000
console.log(Math.max(12 , 56 , 10**5 , -1)); // 100000
console.log(Math.trunc(10.000019**5)); // 100000
console.log(Math.floor(10.000019**5)); // 100000



// 02 

console.log(-(Number).MIN_SAFE_INTEGER);

// 03 

console.log(`${(Number).MAX_SAFE_INTEGER}`.length);

// 04

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

// 05

let num = 10;
console.log((Number).isInteger(num) + true);


// 06

let flt = 10.4;

console.log(flt.toFixed(0)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.ceil(flt - true)); // 10
console.log(Math.round(flt)); // 10

// 07

console.log(Math.trunc(Math.random() * 5));