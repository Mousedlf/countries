
const randomCountry = document.querySelector('#country')
const changeCountry = document.querySelector('#refresh')
const capitalCity = document.querySelector('#capital')
const languagesSpoken = document.querySelector('#languages')
const currency = document.querySelector('#currency')
const region = document.querySelector('#region')

async function getTotalNumberOfCountries(){
    let response = await fetch('https://restcountries.com/v3.1/all');
    let data = await response.json();

    const numberOfCountries = document.querySelector('#nb')
    let numberOfCountriesValue = data.length
    numberOfCountries.innerHTML += numberOfCountriesValue
}
getTotalNumberOfCountries()


async function getACountry(){
    let response = await fetch('https://restcountries.com/v3.1/all');
    let data = await response.json();

    const getRandomCountryFromArray = Math.floor(Math.random()* data.length)
    const randomCountryFromArray = data[getRandomCountryFromArray].name.common;

    randomCountry.innerHTML += randomCountryFromArray

    // data[getRandomCountryFromArray].languages
    // data[getRandomCountryFromArray].currencies
    // data[getRandomCountryFromArray].region

    capitalCity.addEventListener('click', ()=>{
        capitalCity.innerHTML = data[getRandomCountryFromArray].capital
    })
    languagesSpoken.addEventListener('click', ()=>{
        languagesSpoken.innerHTML = data[getRandomCountryFromArray].languages
    })
    currency.addEventListener('click', ()=>{
        currency.innerHTML = data[getRandomCountryFromArray].currency
    })
    region.addEventListener('click', ()=>{
        region.innerHTML = data[getRandomCountryFromArray].languages
    })
}
getACountry()


changeCountry.addEventListener('click', ()=>{
    randomCountry.innerHTML = getACountry()  // ici problème [object promise]? mettre un then qqpart?
    capitalCity.innerHTML = 'press to reveal'
    languagesSpoken.innerHTML = 'press to reveal'
    currency.innerHTML = 'press to reveal'
    region.innerHTML = 'press to reveal'
})



/* essai précédent

languages.forEach(language =>{
    console.log(language)
    let template = `<div id="${language}" class="btn border-dark">${language}</div>`
    document.querySelector('#buttons').innerHTML+=template
})
*/





