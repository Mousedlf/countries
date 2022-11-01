
const randomCountry = document.querySelector('#country')
const changeCountry = document.querySelector('#refresh')
const capitalCity = document.querySelector('#capital')
const languagesSpoken = document.querySelector('#languages')
const currency = document.querySelector('#currency')
const regionOfTheCountry = document.querySelector('#region')

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
    console.log(data)

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
        currency.innerHTML = data[getRandomCountryFromArray].currencies
        console.log(data[getRandomCountryFromArray].currencies)
    })
    regionOfTheCountry.addEventListener('click', ()=>{
        regionOfTheCountry.innerHTML = data[getRandomCountryFromArray].region
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





