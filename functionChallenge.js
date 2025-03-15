

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

showDetails( 21,"Mohamad",true )
showDetails( 21,false,"Mohamad" )
showDetails( "Mohamad", 21,false )
showDetails( false, 21 ,"Mohamad")