
// Loop Challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"]
let myEmployees = ["Amged", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"]
let showAdimns = 3;
let counter = 1;
let counterOne = 1;
let counterTwo = 1;
document.write(`<div> We Have ${showAdimns} Admins </div>`)


mainLoop:for (let i=0; i<myAdmins.length; i++) {
    if (myAdmins[i] == "Stop") {
        break mainLoop;
    }
    document.write(`<hr>`)
    document.write(`<div>`)
    document.write(`<div> The Admin For Team  ${i + 1} Is ${myAdmins[i]}  </div>`)
    document.write(`<h3>Team Members : </h3>`)
    document.write(`</div>`)
    nestedLoop:for(let j = 0; j<myEmployees.length; j++) {
        if (myAdmins[i].startsWith("A") && myEmployees[j].startsWith("A")) {
            document.write(` <p> - ${counter++} ${myEmployees[j]} </p>`)
        }else if (myAdmins[i].startsWith("O") && myEmployees[j].startsWith("O")) {
            document.write(` <p> - ${counterOne++} ${myEmployees[j]} </p>`)
        } else if (myAdmins[i].startsWith("S") && myEmployees[j].startsWith("S")) {
            document.write(` <p> - ${counterTwo++} ${myEmployees[j]} </p>`)
        }
    }

}