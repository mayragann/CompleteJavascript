'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can Drive");

//!reserved features for 'use strict' for future releases
// const interface = 'Audio';
// const if = 23; -> can't call it that because it's already being use for if/else statement

//!Functions declarations
//? piece of code that can be reused
//? can hold 1 or more complete lines of code
//? can be called before defined

// function logger(){
//     console.log('My name is Mayra');
// }

// logger();//invoking function calling function, or running function
// logger();

// function fruitProcessor(apples,oranges){
  
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// //need to store value when calling, give arguments
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)
// const appleOrangeJuice = fruitProcessor(5, 10);
// console.log(appleOrangeJuice)

// function calcAgeOne(birthYear){
//     return 2037 - birthYear;;
// }

// const ageOne = calcAgeOne(1991);
// console.log(ageOne)

// //!Function Expression
// //? does not work if declared first 
// //*makes code a little nicer and more structured. 
// //*Can store everything in variables

// const calcAgeTwo = function (birthYear){
//     return 2037 - birthYear;;
// }
// const ageTwo = calcAgeTwo(1993);
// console.log(ageOne, ageTwo)

// //!Arrow Functions
// //?same as above, can be returned without the return function only if one paramater


// const calcAgeThree = birthYear => 2037 - birthYear;
// const ageThree = calcAgeThree(1991);
// console.log(ageThree) 

// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2022- birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1989, 'Mayra'))

//! Calling Other Functions

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function fruitProcessor(apples,oranges){
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
  
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2,3))

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0 ){
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    }
    else{
        console.log(`${firstName} has already retired`)
        return -1;
    }
    //return retirement;
 
}
console.log(yearsUntilRetirement(1991, 'Mayra'))
console.log(yearsUntilRetirement(1970, 'Mike'))