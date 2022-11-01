
const buttons = document.querySelector('#buttons')

async function getCountries(){
    let response = await fetch('https://restcountries.com/v3.1/all');
    let data = await response.json();

    const getRandomCountryFromArray = Math.floor(Math.random()* data.length)
    const randomCountryFromArray = data[getRandomCountryFromArray].name.common;
    console.log('random country : ' + randomCountryFromArray)

    const randomCountry = document.querySelector('#country')
    randomCountry.innerHTML += randomCountryFromArray

    const numberOfCountries = document.querySelector('#nb')
    let numberOfCountriesValue = data.length

    numberOfCountries.innerHTML += numberOfCountriesValue

}
getCountries()



/*
languages.forEach(language =>{
    console.log(language)
    let template = `<div id="${language}" class="btn border-dark">${language}</div>`
    document.querySelector('#buttons').innerHTML+=template
})
*/





