// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas')

// let firstName = 'Matilda';

// console.log(firstName);

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';




//!dynamic typing example
// let javascriptIsFun = true;
// console.log(typeof true);
// console.log(typeof 1);
// console.log(typeof "String");
// console.log(javascriptIsFun)


// javascriptIsFun = 'YES!'
// console.log(javascriptIsFun)
// !dynamic typing example
// !undefined example
// let year;
// console.log(year)
// console.log(typeof year)

// year = 1991;
// console.log(typeof year)

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

//!math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020
// console.log(ageJonas, ageSarah)

// console.log(ageJonas * 2, ageJonas / 10, 2**3)
//?2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas'
// const lastName = 'Oddname'
// console.log(firstName + ' ' +lastName)

// !assignment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x ++ // x = x + 1
// x --; // x = x -1
// x --; // x = x -1
// console.log(x)

// console.log(ageJonas < ageSarah);
// console.log(ageSarah >= 18);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " +  (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old and work as a ${job}!`;
// console.log(jonasNew)

// const age = 15;

//!controled structure
// if(age>= 18){
//     console.log(
//     'Sara can start driving 🤣'
//     );
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`Sara is too young. Wait another ${yearsLeft} years :)`)
// }

// const birthYear = 2012;
// let century;

// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)


// //!type conversion
// const inputYear = '1991';
// //*Number converts string-numbers to numbers
// //NaN is when you use Number to try to convert non string-numbers over to numbers
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18)
// //*converts over to string
// console.log(String(23), 23)

// //! type coercion
// //*will convert one value to a different value + operator triggers coercion 
// //* into a string happens automatically
// console.log("I am " + 23 + ' Years old;')
// //? - operator will trigger the opposite of forcing string to numbers
// console.log('23 ' - '10' - 3);

// let n = '1' + 1; //? will turn out to be the string 11
// n = n - 1; //? this will take the string 11 and convert it to number 11 because of subtraction 
// console.log(n)

//! 5 falsy values : 0, '', undefined, null, NaN-> not intitial false but when converted to boolean will convert to false
//* everything else will be true when attempted to convert over into boolean

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Jonas'))
// console.log(Boolean(''))
// console.log(Boolean({})) //? empty object

// const money = 0; //? falsey value
// if (money){ //?because money has no money - 0 number will convert too boolean(truthy and falsy value) 
//     console.log(
//         "Don't spend it all"
//     )
// }
// else{
//     console.log("You should get a job")
// }

// let height; //? empty so it's a falsy
// if(height){
//     console.log(
//         "Tag is defined"
//     )
// } else {
//     console.log(
//         "Height UNDEFINED"
//     )
// }

// const age = 18; //! single = is assignment
// if(age === 18) console.log("Hello Adult (Strict)"); //! equality operator both sides need to be exact
// //! == doesn't have to exact loose equality operator for clean code avoid this as much as possible
// if(age == "18") console.log("Hello Adult(loose)");

// //! prompt function
// const favorite = Number(prompt("What is your favorite number"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23){ //? will be converted to number
//     console.log("Cool! 23 is amazing number");
// } else if (favorite === 7){
//     console.log("Cool! 7 is amazing number too");
// }
// else{
//     console.log('Not any cool numbers!');
// }

// if(favorite !== 23){
//     console.log("Why not 23?");
// }

//! Boolean Logic is not specific only for Javascript

// const hasDriversLicense = true; //A
// const hasGoodVision = false; //B
// const isTired = false;

// console.log(hasDriversLicense && hasGoodVision) //false
// console.log(hasDriversLicense || hasGoodVision) //true
// console.log(!hasGoodVision) //true ! change operator

// if(hasDriversLicense && !hasGoodVision){
//     console.log("Sarah can drive");
// } else{
//     console.log("Someone else could drive")
// }
// console.log(hasDriversLicense && hasGoodVision && !isTired)

// if(hasDriversLicense && !hasGoodVision && !isTired){
//     console.log("Sarah can drive");
// } else{
//     console.log("Someone else could drive")
// }

//! Switch statment
//? design for equality, not comparison

//const day = prompt("What is your favorite day")

// switch(day){
//     case 'monday': //day === 'monday'
//         console.log('Plan Course Structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday': //day === 'tuesday'
//         console.log('Prepare Vids');
//         console.log('Hit the gym');
//         break;
//     case 'wednesday': //day === 'wednesday'
//     case 'thursday': //day === 'wednesday'
//         console.log('Write code examples');
//         break
//     case 'friday':
//         console.log("Record Videos");
//         break;
//     case 'saturday':
//     case 'sunday' :
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('not a valid day')
    
// }
//? example of switch case above in else
// if(day === 'monday'){
//     console.log('Plan Course Structure');
//     console.log('Go to coding meetup');
// } else if(day === 'tuesday'){
//     console.log('Prepare Vids');
//     console.log('Hit the gym');
// }
// else if(day === 'wednesday' || day === 'thursday'){
//     console.log('Write code examples');
// }
// else if(day === 'friday'){
//     console.log("Record Videos");
// }
// else if(day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the weekend');
// }
// else{
//     console.log('Not valid day')
// }

//! Expression vs Statements
//? 3+4 is an expression because it produces a value
//? 1991 is a value too so it's an expresion--true && !False, all these expression
//* statement is a piece of code to be executed does not provide value
//declares actions but does not declare value if/else, but the expression is the string-like complete statement
// if ( 23 > 10){
//     const str = '23 is bigger'
// }

//! conditional operator TERNARY OPERATOR

//  const age = 23;
// // age >= 18 ? console.log("I like to drink wine ") : console.log("I like to drink water"); //condition is true, so first one will be executed

// const drink = age >= 18 ? 'Wine' : 'Water';
// console.log(drink)

// let drink2;
// if(age >= 18){
//     drink2 = 'wine';
// }
// else{
//     drink2 = "water";
// }
// console.log(drink2)
// console.log(`I like to drink ${ age >= 18 ? 'Wine' : 'Water'}`);