"use strict";

// function describeCountry(country, population, capitalCity){
//     const countryInfo = `${country} has ${population} and a capital of ${capitalCity}`
//     return countryInfo;
// }

// const countryOne = describeCountry('United States', '336 Million', 'Washington DC')
// console.log(countryOne)
// const countryTwo = describeCountry('Mexico', '356 Million', 'Mexico City')
// console.log(countryTwo)

// //? function declartions vs expressions
// //declaration first
// function percetageOfWorld(population) {
//   const worldPopulation = 7900;
//   return (population / worldPopulation) * 100;
// }
// const percetageOfWorldOne = percetageOfWorld(1441);
// console.log(percetageOfWorldOne);
// //expression
// const percentOfWorldTwo = function(population){
//     const worldPopulation = 7900
//     return (population/worldPopulation)*100
// }
// const chinaPercent = percentOfWorldTwo(1441)
// console.log(chinaPercent)

// const percentageOfworld = population => (population/7900)*100
// console.log(percentageOfworld(1441))

// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'

// function describePopulation(country, population) {
//   const populationTotal = percetageOfWorld(population);
//   const totalPopulation = `${country} has a total population of ${population} millions which is ${populationTotal}`;
//   return totalPopulation;
// }
// console.log(describePopulation("China", 1441));
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice
