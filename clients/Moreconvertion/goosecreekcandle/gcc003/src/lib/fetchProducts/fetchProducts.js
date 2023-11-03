import { data } from './data';

const fetchProducts = async () => {
    const url = 'https://goosecreekcandle.com/collections/all?filter.v.price.gte=&filter.v.price.lte=&sort_by=best-selling';
    const products = [];
    await fetch(url)
        .then((response) => response.text())
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const prdGridImages = doc.querySelectorAll('a.grid__image');
            const itemContainer = Array.from(prdGridImages).map((item) => {
                const href = item.getAttribute('href');
                const isMatch = data.includes(href);
                if (isMatch) {
                    products.push(item.closest('li'));
                }
                return null;
            }).filter((item) => item);
            return itemContainer;
        });
    return products;
};

export default fetchProducts;
