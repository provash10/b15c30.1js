// Class 30.1 Practice Array(class 29.1) and Loop
// for(initialization ; range/condition; increment/Decriment)
//     1                  10             ++
//     10                  5             --
//  Statement ..........

//    i= initialization , i <= range/condtion; ++/-- increment/Decriment
// 
// =============================================================

// for loop

for(let i= 1; i<=10; i++){
    console.log("Hello World");
}

// Again with i's value 
for(let i= 1; i<=10; i++){
    console.log("Hello World");
    console.log(i);
}

// Now Arry & Loop 
// Array

let marks = [23, 67, 89, 99, 33];

marks[0];
marks[1];
marks[2];
marks[3];
marks[4];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);


// Now Loop

for (let i=0; i<=4; i++){
    // console.log(marks[0]);
    console.log(marks[i]);
}

// =============
let number = 20;

if(number%2 == 0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}
// ======

let numbers = [34, 56, 67, 90, 45, 74, 89, 123, 76, 100];

// for(let i=0; i<=9; i++){
//     if(numbers[i]%2 == 0){
//         console.log("Even Number=");
//     }
//     else{
//         console.log("Odd Number");
//     }
// }

for(let i=0; i<=9; i++){
    if(numbers[i]%2 == 0){
        console.log("Even Number=" + numbers[i]);
    }
    else{
        console.log("Odd Number=" + numbers[i]);
    }
}

// Sorry

for(let i=0; i<=50; i++){
    console.log("Sorry");
    console.log(i);
}
