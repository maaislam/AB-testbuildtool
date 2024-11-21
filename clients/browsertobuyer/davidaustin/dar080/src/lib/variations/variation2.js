/*eslint-disable no-unused-expressions */
/*eslint-disable max-len */
import stockAvailability from '../components/stockAvailability';
import { trackGA4Event } from '../helpers/utils';

const checkStockQueryParams = (url) => {
    const urlObj = new URL(url);

    const paramsArray = Array.from(urlObj.searchParams.values()).map((value) => value.toLowerCase());

    const results = {
        inStock: paramsArray.includes('in stock'),
        potterRose: paramsArray.includes('potted rose - in stock'),
        bareRoot: paramsArray.includes('bare root - in stock')
    };

    return results;
};

const variation2 = (ID) => {
    const url = window.location.href;

    const result = checkStockQueryParams(url);
    //set the stock availability checkboxes based on the query params for the form and new stock availability filter
    const inStockUlElem = document.querySelector('form[id*="product-grid"] [value="In Stock"]').closest('ul');
    const isStockLists = inStockUlElem.querySelectorAll('li');
    //Mapping between input values and `result` keys
    const stockMapping = {
        'Bare Root - In Stock': 'bareRoot',
        'In Stock': 'inStock',
        'Potted Rose - In Stock': 'potterRose'
    };

    isStockLists.forEach((list) => {
        const inputElem = list.querySelector('input[type="checkbox"]');
        const inputVal = inputElem.value;

        //Check if the current input value matches any of the stock mapping
        const resultKey = stockMapping[inputVal];
        if (resultKey !== undefined) {
            //Set the checkbox state based on the result
            inputElem.checked = result[resultKey];
        }
    });

    //Add the in-stock filter to the top
    const moreFilterWrapper = document.querySelector('#Toolbar > div > .contents > .w-grid');
    moreFilterWrapper.classList.add(`${ID}__moreFiltersWrapper`);

    if (!document.querySelector(`.${ID}__stockAvailability`)) {
        moreFilterWrapper.insertAdjacentHTML('beforebegin', stockAvailability(ID, result));
    }

    //Align the filter-content with figma design
    const gridFilters = document.querySelectorAll('label[for*="product-gridfilter"], label[for*="product-gridsort_bydropdown"]');
    gridFilters.forEach((gridFilter) => {
        const filterParent = gridFilter.closest('.w-grid');
        const filterWrapper = filterParent.querySelector('.z-20.absolute .bg-background');
        const filterWrapperParent = filterWrapper.parentElement;
        const wrapperRemoveClasses = ['border', 'border-border-active'];

        const applyBtn = filterWrapper.querySelector('button[form*="product-grid"][type="submit"][data-role="button"]');

        filterParent.classList.remove('relative');
        filterWrapper.classList.remove(...wrapperRemoveClasses);
        filterWrapperParent.classList.add(`${ID}__filterContainer`);
        filterWrapper.classList.add(`${ID}__filterWrapper`);

        const filterWGridElem = filterWrapper.closest('.w-grid');
        filterWGridElem.classList.add(`${ID}__gridContents`);

        //Move apply button to the bottom of the filter-wrapper
        if (applyBtn) {
            filterWrapper?.insertAdjacentElement('beforeend', applyBtn);
            //apply button text changes
            applyBtn.textContent = 'Apply filters';
        }

        //Clear button text changes
        const clearBtn = filterWrapper?.querySelector('button[form*="product-grid"][data-reset]');
        //console.log('clearBtn: ', clearBtn);
        if (clearBtn) clearBtn.textContent = 'Clear all';
    });

    //sidebar form checkboxes according to the new stock checkboxes
    const newStockCheckboxes = document.querySelectorAll(`.${ID}__stockInput`);
    let isAnyChecked = false;

    newStockCheckboxes.forEach((stockCheckbox) => {
        if (stockCheckbox.checked) {
            isAnyChecked = true;
        }

        stockCheckbox.addEventListener('change', (e) => {
            const { target } = e;
            const { value } = target;

            isStockLists.forEach((list) => {
                const inputElem = list.querySelector('input[type="checkbox"]');
                const inputVal = inputElem.value;

                inputVal === value ? (inputElem.checked = target.checked) : null;
            });
        });
    });

    const stockResetBtn = document.querySelector(`.${ID}__stockReset`);
    console.log('isAnyChecked: ', isAnyChecked);
    if (!isAnyChecked) {
        stockResetBtn.classList.add(`${ID}__hide`);
    } else {
        stockResetBtn.classList.remove(`${ID}__hide`);
    }

    //Update the sort-by filter design
    const sortByFilterElem = document.querySelector('input[id*="product-gridsort_bydropdown"]');
    const sortByFilterParent = sortByFilterElem.parentElement;
    const sortByFilterWrapper = sortByFilterElem.closest('.contents');

    sortByFilterParent.classList.add(`${ID}__sortByFilterParent`);
    sortByFilterWrapper.classList.add(`${ID}__sortByFilterWrapper`);

    //sort by tracking
    const sortByLabelElem = document.querySelector('label[for*="product-gridsort_bydropdown"]');
    const grandParentElem = sortByLabelElem.parentElement.parentElement;
    const sortCheckboxes = grandParentElem.querySelectorAll('input[type="radio"]:not([data-dropdown])');
    sortCheckboxes.forEach((sortCheckbox) => {
        sortCheckbox.addEventListener('change', (e) => {
            const { target } = e;

            const eventName = 'Sort By Change';
            const action = 'Sort By Change';
            const eventLabel = target.value;

            trackGA4Event(eventName, action, eventLabel);
        });
    });

    //all checkboxes and event listener tracking
    const productGrid = document.querySelector('.shopify-section-product-grid');
    const contentsWrapperElem = productGrid.querySelector('#Toolbar > div');
    const contentsElem = contentsWrapperElem.querySelector('.contents');

    contentsWrapperElem.classList.add(`${ID}__contentsWrapper`);
    contentsElem.classList.add(`${ID}__contents`);

    const allCheckboxes = document.querySelectorAll(`.${ID}__contents > div li input[type="checkbox"]`);
    allCheckboxes.forEach((checkbox) => {
        checkbox.classList.add(`${ID}__checkbox`);
        checkbox.addEventListener('change', (e) => {
            const { target } = e;

            const labelElem = target.closest('.w-grid')?.querySelector('label');
            const label = labelElem.textContent.trim();

            let eventName = label;
            if (label.includes('Type of rose')) {
                eventName = 'Rose Type';
            }

            const action = `${eventName} Filter Change`;
            const eventLabel = target.value;
            eventName = `Filter ${eventName} Change`;
            trackGA4Event(eventName, action, eventLabel);
        });
    });

    //More filters checkboxes and event listener tracking
    const moreFilterCheckbox = document.querySelectorAll('label[for="Filters"] + [id*="FilterForm"] input[type="checkbox"].hidden');
    moreFilterCheckbox.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const { target } = e;

            const labelElem = target.closest('.border-b.border-border')?.querySelector('label');
            const labelText = labelElem.textContent.trim();

            const eventName = `Filter ${labelText} Change`;
            const action = `${eventName} Filter Change`;
            const eventLabel = target.value;

            trackGA4Event(eventName, action, eventLabel);
        });
    });
};
export default variation2;
