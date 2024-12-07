// ---- Ex 1 -----
console.log(" --- Ex1 ----"); 
function printMinNumber(num1, num2) {
    if(num1 < num2 ) {
        console.log(num1);
    } else if (num1 > num2) {
        console.log(num2);
    } else {
        console.log("equal");
    }
}

printMinNumber(4,7);
printMinNumber(7,5);
printMinNumber(7,7);


// ---- Ex 2 -----
console.log(" ");
console.log(" --- Ex2 ----"); 
function gtFromThreeChars(s1, s2, s3, s4) {
    let l1 = String(s1).length;
    let l2 = String(s2).length;
    let l3 = String(s3).length;
    let l4 = String(s4).length;

    let nunGtThree = 0;

    if(l1 > 3) {
        nunGtThree++;
    }
    if(l2 > 3) {
        nunGtThree++;
    }

    if(l3 > 3) {
        nunGtThree++;
    }

    if(l4 > 3) {
        nunGtThree++;
    }

    return nunGtThree;
}

console.log("aa", "bbbb", 5, 88);
let nunGtThree = gtFromThreeChars("aa", "bbbb", 5, 88);
console.log("text greater then 3 chars: " + nunGtThree);

console.log("Yossi", "Yafa", "Aya", 9999);
nunGtThree = gtFromThreeChars("Yossi", "Yafa", "Aya", 9999);
console.log("text greater then 3 chars: " + nunGtThree);
