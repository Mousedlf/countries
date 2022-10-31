async function getCountries(){
    let response = await fetch('https://restcountries.com/v3.1/lang/french');
    let data = await response.json();
    console.log(data.length)

    const getRandomCountryFromArray = Math.floor(Math.random()* data.length)
    const randomCountryFromArray = data[getRandomCountryFromArray].name.common;
    console.log(randomCountryFromArray)

    const numberOfCountries = document.querySelector('#nb')
    let numberOfCountriesValue = data.length

    numberOfCountries.innerHTML += numberOfCountriesValue
}
getCountries()



