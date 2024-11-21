const reset2 = (ID) => {
    //Remove the in-stock filter added to the top
    const stockAvailabilityElem = document.querySelector(`.${ID}__stockAvailability`);
    if (stockAvailabilityElem) {
        stockAvailabilityElem.remove();
    }

    //Remove the additional class from the more filters wrapper
    const moreFilterWrapper = document.querySelector(`#Toolbar > div > .contents > .w-grid.${ID}__moreFiltersWrapper`);
    if (moreFilterWrapper) {
        moreFilterWrapper.classList.remove(`${ID}__moreFiltersWrapper`);
    }

    //Restore the filter content alignment
    const gridFilters = document.querySelectorAll('label[for*="product-gridfilter"]');
    gridFilters.forEach((gridFilter) => {
        const filterParent = gridFilter.closest('.w-grid');
        const filterWrapper = filterParent.querySelector(`.${ID}__filterWrapper`);
        const wrapperAddClasses = ['border', 'border-border-active'];

        if (filterWrapper) {
            //Restore original classes
            filterWrapper.classList.remove(`${ID}__filterWrapper`);
            filterWrapper.classList.add(...wrapperAddClasses);
        }

        //Restore the class of the grid element
        const filterWGridElem = filterWrapper?.closest('.w-grid');
        if (filterWGridElem) {
            filterWGridElem.classList.remove(`${ID}__gridContents`);
        }

        //Restore original class on the parent
        filterParent.classList.add('relative');
    });

    //Restore the sort-by filter design
    const sortByFilterElem = document.querySelector('input[id*="product-gridsort_bydropdown"]');
    if (sortByFilterElem) {
        const sortByFilterParent = sortByFilterElem.parentElement;
        const sortByFilterWrapper = sortByFilterElem.closest('.contents');

        if (sortByFilterParent) {
            sortByFilterParent.classList.remove(`${ID}__sortByFilterParent`);
        }

        if (sortByFilterWrapper) {
            sortByFilterWrapper.classList.remove(`${ID}__sortByFilterWrapper`);
        }
    }

    const sortByLabelElem = document.querySelector('label[for*="product-gridsort_bydropdown"]');
    const grandParentElem = sortByLabelElem.parentElement.parentElement;
    const sortCheckboxes = grandParentElem.querySelectorAll('input[type="radio"]:not([data-dropdown])');
    sortCheckboxes.forEach((sortCheckbox) => {
        sortCheckbox.removeEventListener('change', () => { }); //Remove event listener
    });

    const allCheckboxes = document.querySelectorAll(`.${ID}__contents > div li input[type="checkbox"]`);
    allCheckboxes.forEach((checkbox) => {
        checkbox.classList.remove(`${ID}__checkbox`);
        checkbox.removeEventListener('change', () => { }); //remove event listener
    });

    const moreFilterCheckbox = document.querySelectorAll('label[for="Filters"] + [id*="FilterForm"] input[type="checkbox"].hidden');
    moreFilterCheckbox.forEach((checkbox) => {
        checkbox.removeEventListener('change', () => { }); //remove event listener
    });
};

export default reset2;
