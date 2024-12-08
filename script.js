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

// ---- Ex 3 -----
console.log(" ");
console.log(" --- Ex 3 ----"); 

function replaceChar() {
    let inputV = document.getElementById('intext').value;
    
    if(String(inputV).indexOf('A') != -1) {
       let newStr = String(inputV).replaceAll("A","a");
       document.getElementById('intext').value = newStr;
    }
}


// ---- Ex 4 -----
console.log(" ");
console.log(" --- Ex 4 ----"); 
function printNegatPosOddEven(num) {
    let numStatus = "";
    if(typeof(num) == "number")   {
        if(num > 0) {
            numStatus = "positive";
        } else if(num < 0) {
            numStatus = "negative";
        } else {
            numStatus = "zero";
        } 

        if(num % 2 != 0) {
            numStatus = numStatus + " " + "odd";
        } else {
            numStatus = numStatus + " " + "even";
        }

        console.log(num + " is: " + numStatus);
    } else {
        console.log(num + " is not a number");
    }
 
}

printNegatPosOddEven(5);
printNegatPosOddEven(4);
printNegatPosOddEven(-10);
printNegatPosOddEven(-13);
printNegatPosOddEven("xxxx");


// ---- Ex 5 -----
console.log(" ");
console.log(" --- Ex 5 ----"); 
function removeChars(str) {
    if(typeof(str) == "string") {
        let s1 = String(str);
        let chFirst = s1.charAt(0).normalize();
        let chLast = s1.charAt(s1.length-1).normalize();
        let newStr = ""
        if(chFirst === chLast) {
            newStr = s1.replaceAll(chFirst,"");
        }
        console.log("newStr: " + newStr);
    }

}
removeChars("AyossiA");

// ---- Ex 6 -----
console.log(" ");
console.log(" --- Ex 6 ----"); 
function stringManipulate(str) {
    if(typeof(str) == "string") {
        let newStr = "";
        let s1 = String(str);

        if(s1.includes('*')) {
            newStr = s1.replaceAll('*',"");
        }

        if(s1.includes('@')) {
            newStr = '*' + s1 + '*' ;
        }
        
        if(s1.includes('₪')) {
            newStr = 'new shekel' ;
        }

        console.log("input str: " + str + "  --- newStr = " + newStr);

    }
}
stringManipulate("Yos*si");
stringManipulate("Yos@si");
stringManipulate("Yos₪si");