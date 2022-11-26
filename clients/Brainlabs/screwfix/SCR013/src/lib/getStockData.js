const getStockData = (urls) => {
  const promises = urls.map((url) => fetch(url));

  return Promise.all(promises)
    .then((responses) => Promise.all(responses.map((res) => res.text())))
    .then((htmls) => {
      return htmls.map((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const delivery = !!doc.querySelector('#product_add_to_trolley_image');
        const collection = !!doc.querySelector('[id^=add_for_collection_button]');
        const sku = doc.querySelector('[itemprop="productID"]').innerText;
        return {
          sku,
          delivery,
          collection
        };
      });
    });

  //console.log(data);
};

export default getStockData;
