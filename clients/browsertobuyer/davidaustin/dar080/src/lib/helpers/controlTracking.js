import { trackGA4Event } from './utils';

const controlTracking = () => {
    const allFilterInputs = document.querySelectorAll('#Toolbar input[type="checkbox"], #Toolbar input[type="radio"]');
    allFilterInputs.forEach((filterInput) => {
        filterInput.addEventListener('change', () => {
            trackGA4Event('Filter Selected', 'Filter Used', '');
        });
    });

    const sortByLabelElem = document.querySelector('label[for*="product-gridsort_bydropdown"]');
    const grandParentElem = sortByLabelElem.parentElement.parentElement;
    const sortCheckboxes = grandParentElem.querySelectorAll('input[type="radio"]:not([data-dropdown])');
    sortCheckboxes.forEach((sortCheckbox) => {
        sortCheckbox.addEventListener('change', (e) => {
            const { target } = e;

            const eventName = 'Sorting Used';
            const action = 'Sort By Change';
            const eventLabel = target.value;

            trackGA4Event(eventName, action, eventLabel);
        });
    });
};
export default controlTracking;
