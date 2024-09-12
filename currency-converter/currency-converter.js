const axios = require('axios');

//1st function: getExchangeRate
const getExchangeRate = async (fromCurrency, toCurrency) => {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=e2c33dd0625c0a3c26b59820ef6ec727&format=1');
    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    if(isNaN(exchangeRate))
        throw new Error (`Unable to get the currency ${fromCurrency} and ${toCurrency}`);
    return exchangeRate;
}

//2nd function: getCountries
const getCountries = async (toCurrency) => {
    try {
        const response = await axios.get(`https://restcountries.com/v2/currency/${toCurrency}`)
        return response.data.map(country => country.name)
    } catch(error) {
        throw new Error (`Unable to get the countries that use ${toCurrency}`)
    }
};

//3rd function: convertCurrency
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    const countries = await getCountries(toCurrency);
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(3);

    return `${amount} ${fromCurrency} is worth of ${convertedAmount} ${toCurrency}. You can spend this in the following countries: ${countries}`;
}
convertCurrency('USD', 'INR', 50)
    .then(message => console.log(message))
    .catch(error => console.log(error.message));