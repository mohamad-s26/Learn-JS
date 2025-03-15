// 01

function sayHello (theName, thegender) {
    let gender; 
    if (thegender === "Male") {
        gender = "Mr";
    } else if (thegender == "Female") {
        gender = "Miss";
    } else if (thegender == undefined) {
        gender = "";
    }
    document.write(`Hello ${gender} ${theName}`);
}

sayHello("Mohamad", "Male")






document.write(`<pre><pre>`)



// 02



function calculate(firstNum, secondNum, operation) {
    let result;
    if (secondNum == undefined) {
        document.write("Second Number Not Found");
    } else if (operation == undefined || operation == 'add') {
        result = firstNum + secondNum;
        document.write(`<p> ${result}`)
    } else if ( operation == 'subtract') {
        result = firstNum - secondNum;
        document.write(`<p>${result}`)
    } else if ( operation == 'multiply') {
        result = firstNum * secondNum;
        document.write(`<p> ${result}`)
    } 
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600







document.write(`<pre><pre>`)


// 03


function ageInTime(theAge) {
    let years; let months; let weeks; let days; let hours; let minutes; let seconds;
    if (theAge > 100 || theAge < 10) {
        console.log("Age Out Of Range");
    } else {
        years = theAge;
        console.log(`Your Age Is : ${years}  `);
        months = theAge * 12;
        console.log(`${months} Months `);
        weeks = months * 4;
        console.log(`${weeks} Weeks`);
        days = weeks * 7;
        console.log(`${days} Days `);
        hours = days * 24;
        console.log(`${hours} Hours `);
        minutes = hours * 60;
        console.log(`${minutes} Minutes`);
        seconds = minutes * 60;
        console.log(`${seconds} Seconds`);
    }
}

  // Needed Output
  ageInTime(9); // Age Out Of Range
  ageInTime(53); // Months Example => 456 Months





document.write(`<pre><pre>`)


// 04

function showDetails (a, b, c) {
    let name ;
    let age ;
    let status ;
    typeof a === "string" ? name = a  : typeof a === "number" ? age = a : status = a;
    typeof b === "string" ? name = b  : typeof b === "number" ? age = b : status = b;
    typeof c === "string" ? name = c  : typeof c === "number" ? age = c : status = c;

    status === true ? status = "You Are Avaible For Haire": status = "You Are Not Avaible For Haire"
    
    document.write(`<P>" Hello ${name}, Your Age Is ${age}, ${status} "<p>`)
}

showDetails( 21,"Chouaib",false )
showDetails( 21,false,"Mohamad" )
showDetails( "Mohamad", 21,false )
showDetails( false, 21 ,"Mohamad")
showDetails ("Zaki", 20 , true)










document.write(`<pre><pre>`)



// 05

function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (let i = startYear; i <=  endYear; i++) {
        document.write(`<option value=" ${i} "> ${i} </option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);

document.write(`<pre><pre>`)



// 06
function multiply(...numbers) {
    let result;
    for (let i = 0; i<numbers.length; i++) {
        if (typeof numbers[i] === "string" ) {
            continue;
        } else {
            result = parseInt(numbers[i - 1]) * parseInt(numbers[i]) ;
        }
    }
    return result;
}

console.log(multiply(10, 20));
console.log(multiply("A", 10, 30));
console.log(multiply(100.5, 10, "B"));
