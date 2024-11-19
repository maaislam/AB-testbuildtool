export const reset = (ID) => {
    const selectorsToCleanUp = [
        {
            selector: '.shopify-section-product-grid',
            classes: [`${ID}__productGrid`]
        },
        {
            selector: `.${ID}__filterHeader`,
            remove: true
        },
        {
            selector: '#Toolbar > div',
            classes: [`${ID}__contentsWrapper`]
        },
        {
            selector: '.contents',
            classes: [`${ID}__contents`]
        },
        {
            selector: '#Toolbar > div:last-child',
            classes: [`${ID}__selectedFiltersWrapper`]
        },
        {
            selector: `.${ID}__sortWrapper`,
            remove: true
        },
        {
            selector: '.contents .w-grid.gap-gutter',
            classes: [`${ID}__hide`]
        },
        {
            selector: `.${ID}__productCount`,
            remove: true
        },
        {
            selector: `.${ID}__moreFiltersForm`,
            remove: true
        },
        {
            selector: '[data-toolbar]',
            classes: [`${ID}__dataToolbar`]
        },
        {
            selector: '#Toolbar',
            classes: ['top-header-full']
        },
        {
            selector: `.${ID}__contents .${ID}__filterBox`,
            removeClasses: ['border', 'border-border-active', 'bg-background', `${ID}__filterBox`]
        },
        {
            selector: 'label[for="Filters"]',
            parentSelector: '.w-grid',
            parentClasses: [`${ID}__hide`]
        },
        {
            selector: `.${ID}__contents input[type="radio"][id*="product-gridfilter"]`,
            removeAttributes: ['name', 'checked']
        },
        {
            selector: `.${ID}__contents > div li input[type="checkbox"]`,
            removeClasses: [`${ID}__checkbox`]
        },
        {
            selector: `.${ID}__moreFiltersForm li input[type="checkbox"]`,
            removeClasses: [`${ID}__checkbox`]
        },
        {
            selector: `.${ID}__moreFiltersWrapper input[value="In Stock"]`,
            parentSelector: 'li',
            parentClasses: [`${ID}__hide`]
        }
    ];

    //Remove event listeners
    //Uncheck default filters and restore attributes
    const defaultFilters = document.querySelectorAll(`.${ID}__contents input[type="radio"][id*="product-gridfilter"]`);
    defaultFilters.forEach((defaultFilter) => {
        //defaultFilter.setAttribute('name', ''); //Replace with the original name if known
        //defaultFilter.checked = false; //Uncheck the radio button
        defaultFilter.removeEventListener('click', () => { }); //Remove custom event listener
    });

    //Uncheck all checkboxes and remove event listeners
    const allCheckboxes = document.querySelectorAll(`.${ID}__checkbox`);
    allCheckboxes.forEach((checkbox) => {
        //checkbox.checked = false; //Uncheck
        //checkbox.classList.remove(`${ID}__checkbox`);
        checkbox.removeEventListener('change', () => { }); //Remove event listener
    });
    //Uncheck and reset checkboxes in the "More Filters" section
    const moreFiltersCheckboxes = document.querySelectorAll(`.${ID}__moreFiltersForm li input[type="checkbox"]`);
    moreFiltersCheckboxes.forEach((checkbox) => {
        console.log('checkbox::::::: ', checkbox);
        // checkbox.checked = false; //Uncheck
        //checkbox.classList.remove(`${ID}__checkbox`);
        checkbox.removeEventListener('change', () => { }); //Remove event listener
    });

    //Clean up elements, classes, and attributes
    selectorsToCleanUp.forEach((item) => {
        const elements = document.querySelectorAll(item.selector);

        elements.forEach((elem) => {
            if (item.remove) {
                elem.remove();
            } else {
                if (item.classes) {
                    elem.classList.remove(...item.classes);
                }

                if (item.removeClasses) {
                    elem.classList.remove(...item.removeClasses);
                }

                if (item.removeAttributes) {
                    item.removeAttributes.forEach((attr) => elem.removeAttribute(attr));
                }

                if (item.parentSelector) {
                    const parentElem = elem.closest(item.parentSelector);
                    if (parentElem && item.parentClasses) {
                        parentElem.classList.remove(...item.parentClasses);
                    }
                }
            }
        });
    });
};
