'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive");

//!reserved features for 'use strict' for future releases
// const interface = 'Audio';
// const if = 23; -> can't call it that because it's already being use for if/else statement

//!Functions
//? piece of code that can be reused
//? can hold 1 or more complete lines of code

function logger(){
    console.log('My name is Mayra');
}

logger();//invoking function calling function, or running function
logger();

function fruitProcessor(apples,oranges){
  
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
//need to store value when calling, give arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)
const appleOrangeJuice = fruitProcessor(5, 10);
console.log(appleOrangeJuice)