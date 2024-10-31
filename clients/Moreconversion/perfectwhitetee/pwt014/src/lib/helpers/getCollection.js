const getCollection = async (collectionHandle) => {
    return fetch(
        `/collections/${collectionHandle}`
    )
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw new Error(`Request failed with status: ${response.status}`);
        })
        .then((html) => {
            const parser = new DOMParser();
            const parsedHTML = parser.parseFromString(html, 'text/html');

            const resultHtml = parsedHTML.getElementById('CollectionAjaxResult');

            return resultHtml;
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
};

export default getCollection;
