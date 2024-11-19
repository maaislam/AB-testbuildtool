import stockAvailability from '../components/stockAvailability';

const variation2 = (ID) => {
    //Add the in-stock filter to the top
    const moreFilterWrapper = document.querySelector('#Toolbar > div > .contents > .w-grid');
    moreFilterWrapper.classList.add(`${ID}__moreFiltersWrapper`);

    if (!document.querySelector(`.${ID}__stockAvailability`)) {
        moreFilterWrapper.insertAdjacentHTML('beforebegin', stockAvailability(ID));
    }

    //Align the filter-content with figma design
    const gridFilters = document.querySelectorAll('label[for*="product-gridfilter"]');
    gridFilters.forEach((gridFilter) => {
        const filterParent = gridFilter.closest('.w-grid');
        const filterWrapper = filterParent.querySelector('.z-20.absolute .bg-background');
        const wrapperRemoveClasses = ['border', 'border-border-active'];

        const applyBtn = filterWrapper.querySelector('button[form*="product-grid"][type="submit"][data-role="button"]');

        filterParent.classList.remove('relative');
        filterWrapper.classList.remove(...wrapperRemoveClasses);
        filterWrapper.classList.add(`${ID}__filterWrapper`);

        const filterWGridElem = filterWrapper.closest('.w-grid');
        filterWGridElem.classList.add(`${ID}__gridContents`);

        //Move apply button to the bottom of the filter-wrapper
        filterWrapper.insertAdjacentElement('beforeend', applyBtn);
    });

    //Update the sort-by filter design
    const sortByFilterElem = document.querySelector('input[id*="product-gridsort_bydropdown"]');
    const sortByFilterParent = sortByFilterElem.parentElement;
    const sortByFilterWrapper = sortByFilterElem.closest('.contents');

    sortByFilterParent.classList.add(`${ID}__sortByFilterParent`);
    sortByFilterWrapper.classList.add(`${ID}__sortByFilterWrapper`);
};
export default variation2;
