const getNextPage = (id, pageNo) => {
    const url = window.location.href;
    const newUrl = new URL(url);
    newUrl.searchParams.set('page', pageNo);

    const updatedUrl = newUrl.toString();

    return fetch(updatedUrl, {
        method: 'GET',
        headers: {
            'Accept': 'text/html',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const page2Products = doc.querySelectorAll('.grid__item.grid-product');
        const uniform = document.querySelector('#CollectionAjaxContent .grid.grid--uniform');

        uniform.classList.add(`${id}__uniform`);

        const filteredArr = [];
        const filteredElem = [];

        page2Products.forEach((item) => {
            item.classList.add('grid__item', 'grid-product', 'small--one-half', 'medium-up--one-quarter', 'aos-init', 'aos-animate');
            item.setAttribute('data-aos', 'row-of-');
            const prdId = item.getAttribute('data-product-id');

            if (filteredArr.includes(prdId)) return;

            const productTitle = item.dataset.productHandle;
            const modifiedTitle = productTitle.replace(/[\d-]|copy|of/g, ' ').trim();

            item.setAttribute('data-product-title', modifiedTitle);

            filteredArr.push(prdId);
            filteredElem.push(item);
        });

        filteredElem.forEach((elem) => {
            const productName = elem.getAttribute('data-product-title');
            elem.querySelector('.grid-product__title').innerHTML = `<span class="${id}__title">${productName}</span>`;

            const pdpUrlElem = elem.querySelector('.grid-product__link');
            const pdpUrl = pdpUrlElem.getAttribute('href');
            const newPdpUrl = pdpUrl.split('?')[0];
            pdpUrlElem.setAttribute('href', newPdpUrl);

            const anchorPoint = document.querySelector(`.${id}__uniform`);
            anchorPoint.insertAdjacentElement('beforeend', elem);
        });

        return data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export default getNextPage;
