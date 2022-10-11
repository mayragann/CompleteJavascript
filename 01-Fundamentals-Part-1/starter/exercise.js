// let country = "United States";
// let continent = "Nort America";
let population = 326;

// console.log(country)
// console.log(continent)
// console.log(population)

// let isIsland = false
// let language;

// console.log(isIsland)
// console.log(language)

// language = "English";
// const country="United States"
// const continent = 'North America';
// const isIsland = false;
// // isIsland = true
// const finland = 6;
// const avgPopulation = 33;
// const description1 = country + ' is in ' + continent + ' it has ' + population + ' and its people speak ' + language

// console.log(typeof country)
// console.log(typeof continent)
// console.log(typeof population)
// console.log(typeof language)
// // 1. If your country split in half, and each half would contain half the population,
// console.log(population / 2);
// // then how many people would live in each half?
// // 2. Increase the population of your country by 1 and log the result to the console
// population++;
// console.log(population)
// // 3. Finland has a population of 6 million. Does your country have more people than
// // Finland?
// console.log(population > finland)
// console.log(population < finland)
// // 4. The average population of a country is 33 million people. Does your country
// // have less people than the average country?
// console.log(population < avgPopulation)

// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

// console.log(description1)
// const description = `My country is ${country}, and is in ${continent} it has ${population} million and its people speak ${language}`
// console.log(description)

// if(population > 33){
//     console.log(
//     `${country} is above average`
//     );
// }
// else{
//     console.log(
//         `${country}'s is ${33 - population} below average`)
// }
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// console.log(markBMI);
// const johnBMI = (johnWeight / johnHeight ** 2);
// console.log(johnBMI);


// if(markBMI > johnBMI){
//     console.log(
//         `Mark's BMI: ${markBMI} is higher than John's BMI: ${johnBMI}`
//     );
// }
//     else{
//         console.log(
//             `John's BMI: ${johnBMI} is higher than Mark's BMI: ${markBMI}`
//         );
//     }

// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17');//617 
// console.log('19' - '13' + 17);//23
// console.log('123' < 57);//false
// console.log(5 + 6 + '4' + 9 - 4 - 2);//128

// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// const numNeighbours = Number(prompt("How many neighbour countries does your country"))
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// if(numNeighbours === 1){
//     console.log("Only 1 Border!")
// }
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// else if(numNeighbours > 1){
//     console.log("More than 1 border")
// }
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// else{
//     console.log("No borders")
// }
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

//1.Calculate Average Score for each team-Need to find sum of all numbers
// const dolphinSumOne = (96 + 10 + 89)/3
// const koalaSumOne = (88 + 91 + 110)/3
// const dolphinSumTwo = (97 + 112 + 101)/3
// const koalaSumTwo = (109 + 95 + 123)/3
// const dolphinSumThree = (97 + 112 + 101)/3
// const koalaSumThree = (109 + 95 + 106)/3
// const minScore = 100;
// console.log(dolphinSumThree)
// console.log(koalaSumThree)

// if(dolphinSumThree > koalaSumThree && minScore){
//     console.log("Dolphins Have higher score")
// } else if(dolphinSumThree === koalaSumThree && minScore){
//     console.log("Same Score")
// } else if(dolphinSumThree < koalaSumThree && minScore){
//     console.log("Koala wins")
// }else{
//     console.log("No one wins!")
// }

// const language = prompt("what is your countries language")

// switch(language){
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!')
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place')
//         break;
//     case 'hindi':
//         console.log('4th place');
//         break;
//     case 'arabic':
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too!")
    
// }
