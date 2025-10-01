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