'use strict';

function describeCountry(country, population, capitalCity){
    const countryInfo = `${country} has ${population} and a capital of ${capitalCity}`
    return countryInfo;
}

const countryOne = describeCountry('United States', '336 Million', 'Washington DC')
console.log(countryOne)
const countryTwo = describeCountry('Mexico', '356 Million', 'Mexico City')
console.log(countryTwo)

