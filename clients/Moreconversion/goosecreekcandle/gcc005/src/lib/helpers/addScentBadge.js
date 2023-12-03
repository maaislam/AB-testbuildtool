import removeParamFromUrl from './removeParamFromUrl';

const addScentBadge = (ID, searchParamValue) => {
    const modifiedUrl = removeParamFromUrl(`${window.location.href}`, 'filter.v.scent');
    const activeFacets = document.querySelector('.active-facets');
    const htmlStr = `<a class="${ID}__activeFacets active-facets__button active-facets__button--light button button--tertiary js-facet-remove" href="${modifiedUrl}">    
        ${searchParamValue}
        <svg aria-hidden="true" focusable="false" role="presentation" width="12" height="13" class="icon-close-small" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.48627 9.32917L2.82849 3.67098" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M2.88539 9.38504L8.42932 3.61524" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>`;

    if (!document.querySelector(`.${ID}__activeFacets`)) {
        activeFacets.insertAdjacentHTML('beforeend', htmlStr);
    } else {
        document.querySelector(`.${ID}__activeFacets`).remove();
        activeFacets.insertAdjacentHTML('beforeend', htmlStr);
    }
};

export default addScentBadge;
