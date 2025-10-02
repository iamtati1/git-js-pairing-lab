//Code your solutions in this file
//This is my 1st function - Tatiana
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
// fiveToOneHundred();

//Jandir - completed 2nd function 

const multiplesOfThree = () => {
    for (let count = 3; count <= 100; count += 3) {
        console.log(count);
    }
}
// multiplesOfThree();// 
//Tatiana completed 3rd function 
const multiplesOfThreeOrFive = () => {
    for (let count = 3; count <= 100; count++) {
        if (count % 3 === 0 || count % 5 === 0) {
            console.log(count);
        }
    }
}
// multiplesOfThreeOrFive();
// multiplesOfThree();

//Jandir completed 4th function
const untilNum = (num) => {

    for (let count = 1; count <= num; count++) {
        console.log(count);
    }
}
// untilNum(5);
// untilNum(9);
// untilNum(42);

//Tatiana completed the 5th function
const multiply = (num1, num2) => {
    return (num1 * num2);
}
// console.log(multiply(2, 4));
// console.log(multiply(10, -5));
// console.log(multiply(3, 7.5));

//Jandir completed 6th function
const add = (num1, num2) => {
    let sum = num1 + num2;
    if (num1 === num2) {
        return sum * 3;
    } else {
        return sum;
    }
    // return num1 === num2 ? sum * 3 : sum;
}

// console.log(add(2, 4));
// console.log(add(5, 5));
// console.log(add(10, -5));

// Tatiana completed this function
const isNegative = (num) => {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
    // return num < 0;
}
// console.log(isNegative(3));
// console.log(isNegative(-2));
// console.log(isNegative(Math.PI));

//Jandir completed 8th function
const triangleArea = (height, base) => {
    let area = 0.5 * height * base;
    return area;
}

// console.log(triangleArea(5, 7));
// console.log(triangleArea(6, 8));

//Tatiana completed 9th function
const betweenTwentyAndFourty = (num) => {
    return num > 20 && num < 40;
}
// console.log(betweenTwentyAndFourty(39));
// console.log(betweenTwentyAndFourty(40));

//Jandir completed 10th function

const largest = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};

// console.log(`${largest(4, 6, 8)} is the greatest number.`);       //returns 8
// console.log(`${largest(20, 32, 17)} is the greatest number.`);   //returns 30
// console.log(`${largest(41, 108, 86)} is the greatest number.`);    //returns 108

//Bonus Questions - Tati - Problem #11
const printTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    console.log(hours + ":" + minutes + ":" + seconds);
};
printTime()

// Bonus Questions - Tati - Problem #13
const getExtention = (filename) => {
    return filename.split('.').pop(); //split seperates it after the period. pop() is the extension.
}
console.log(getExtention("hello.txt")); //return ".txt"
console.log(getExtention("app.js")); //returns ".js"
console.log(getExtention("README.md")); // returns ".md"

// Bonus Questions - Tati - Problem #15
const switchLetters = (str) => {
    if (str.length <= 1) return str; // if string is too short, returns string as is

    let first = str[0] //gets the 1st letter of the string
    let last = str[str.length - 1]; //gets the last letter of the string
    let middle = str.slice(1, -1); //gets everything in between
    return last + middle + first; // returns it in a way that displays it with the (last letter) + (the middle) + (the first letter); like the problem asks
};

console.log(switchLetters("anne"));
console.log(switchLetters("hello world"));
console.log(switchLetters("a"));
console.log(switchLetters(""));