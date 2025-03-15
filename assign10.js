
// 01

let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i<=end;) {
    console.log(i)
    i = i + start
    if (i === exclude) {
    continue;
    }
}


console.log("================");

// 02

let sstart = 10;
let eend = 0;
let stop = 3;

for(let i=sstart; i>=eend; i--) {
    if (i < sstart) {
    console.log(`0${i}`);
    }else {console.log(`${i}`)};
    if (i == stop) {
    break;
    }
}




console.log("================");

// 03
let ssstart = 1;
let eeend = 6;
let breaker = 2;


mainLoop:for (let i = ssstart; i<= eeend; i++) {
    console.log(i)
    nestedLoop:for(let j=breaker; j<eeend ; j += breaker ) {
        console.log(`--${j}`);
    }
}



console.log("================");

// 04

let index = 10;
let jump = 2;
for (;;) {
    if (index == jump)
    break;
    console.log(index);
    index -=  jump;
}


console.log("================");

// 05

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let n = +false; n<friends.length; n++) {
    if(friends[n].startsWith(letter.toUpperCase())) {
        continue;
    }
    console.log(`"${n} => ${friends[n]} " `);
}
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"





console.log("================");

// 06

let sttart = 0;
let swappedName = "elZerO";
let result = "";
for(let h = sttart; h < swappedName.length; h++) {
    if(swappedName[h] === swappedName[h].toLowerCase()) {
    result += swappedName[h].toUpperCase();
    } else if (swappedName[h] === swappedName[h].toUpperCase()) {
    result += swappedName.toLowerCase();
    }
}
console.log(result);

"ELzERo"









console.log("================");

// 07





let stttart = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(let i=stttart; i<mix.length; i++) {
    if(typeof mix[i] == "string") {
    continue;
    }
    if(mix[i] ==true) {
    continue;
    }
    console.log(mix[i]);
}
// Output
2
3
4