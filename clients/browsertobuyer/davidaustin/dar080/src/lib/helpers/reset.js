export const reset = (ID) => {
    const customClasses = [
        `${ID}__productGrid`,
        `${ID}__contentsWrapper`,
        `${ID}__contents`,
        `${ID}__selectedFiltersWrapper`,
        `${ID}__sortWrapper`,
        `${ID}__hide`,
        `${ID}__moreFiltersForm`,
        `${ID}__moreFiltersWrapper`,
        `${ID}__filterBox`,
        `${ID}__dataToolbar`,
        `${ID}__checkbox`,
        `${ID}__resetFiltersBtn`,
        `${ID}__moreFiltersLabel`,
        `${ID}__moreFiltersLabelWrapper`,
        `${ID}__clearBtn`,
        'active-toggle'
    ];

    //Removing dynamically added elements
    const customElements = [
        `.${ID}__filterHeader`,
        `.${ID}__productCount`,
        `.${ID}__resetFiltersBtn`,
        `.${ID}__inStock`,
        `#${ID}__moreFiltersForm`
    ];

    //Reset default filters logic
    const defaultFilters = document.querySelectorAll(
        `.${ID}__contents input[type="radio"][id*="product-gridfilter"]`
    );
    defaultFilters.forEach((defaultFilter) => {
        console.log('Resetting defaultFilter:', defaultFilter);

        const storedName = localStorage.getItem('defaultFilterName');
        if (storedName) {
            defaultFilter.setAttribute('name', storedName); //Restore the name attribute
            localStorage.removeItem('defaultFilterName');
        }

        defaultFilter.checked = false;
        defaultFilter.replaceWith(defaultFilter.cloneNode(true));
    });

    //Restore toolbar and other elements to original state
    const dataToolBarElem = document.querySelector('[data-toolbar]');
    if (dataToolBarElem) {
        dataToolBarElem.className = 'color-primary bg-background text-text [--columns:6]  tablet:[--columns:2]  tablet:mb-0 sticky top-header-full z-20 tablet:contents pb-sm'; //Reset to default
    }
    const toolbarElem = document.querySelector('#Toolbar');
    if (toolbarElem) {
        toolbarElem.classList.add('top-header-full');
    }

    //Remove event listeners added to elements
    const allEventListenersSelectors = [
        '#mode-toggle',
        `.${ID}__contents > div li input[type="checkbox"]`,
        `.${ID}__moreFiltersForm li input[type="checkbox"]`,
        `.${ID}__moreFiltersForm li input[type="radio"]`,
        `.${ID}__sortWrapper input[type="radio"]:not([data-dropdown])`
    ];

    allEventListenersSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((elem) => {
            const clonedElem = elem.cloneNode(true);
            elem.parentNode.replaceChild(clonedElem, elem);
        });
    });

    customElements.forEach((selector) => {
        document.querySelectorAll(selector).forEach((elem) => elem.remove());
    });

    customClasses.forEach((className) => {
        document.querySelectorAll(`.${className}`).forEach((elem) => {
            elem.classList.remove(className);
        });
    });
};
