import renderCountryList from './renderCountryList';

const filterCountries = (id, countryData) => {
    const searchInput = document.querySelector(`.${id}__input`);
    const countryContainer = document.querySelector(`.${id}__contriesLists`);

    if (!searchInput || !countryContainer) return;

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase().trim();

        //Filter countryData based on search input
        const filteredCountries = countryData.filter((country) =>
            country.name.toLowerCase().includes(searchValue));

        //Re-render filtered countries
        renderCountryList(id, filteredCountries, countryContainer);
    });
};
export default filterCountries;
