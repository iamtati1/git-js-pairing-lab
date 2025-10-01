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
}
console.log(isNegative(3));
console.log(isNegative(-2));
console.log(isNegative(Math.PI));