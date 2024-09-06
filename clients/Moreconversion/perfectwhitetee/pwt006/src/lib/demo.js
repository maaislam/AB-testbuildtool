const cartTitles = document.querySelectorAll('#slidecarthq .item .title');
pollerLite([() => cartTitles.length > 0], () => {
    const fetchPromises = [];

    cartTitles.forEach((cartTitle) => {
        let newVariantId;

        const {variantId} = cartTitle.closest('.item').dataset;
        const linkElem = cartTitle.querySelector('a');
        const link = linkElem.getAttribute('href');

        //const url = link.replace(/\?.*$/, '.js');
        const urlObj = new URL(link, window.location.origin);

        if (urlObj.search.length > 0) {
            newVariantId = urlObj.searchParams.get('variant');
          } else {
            newVariantId = variantId;
          }

        urlObj.search = '';
        const url = `${urlObj.href}.js`;

        fetchPromises.push(
            fetch(url)
                .then((response) => response.json())
                .then((fileData) => ({ fileData, cartTitle, newVariantId }))
        );
    });

    Promise.all(fetchPromises)
        .then((fileDataArray) => {
            fileDataArray.forEach(({ fileData, cartTitle, newVariantId }) => {
                const { type, variants } = fileData;
                const macthedPrdType = typeObj[type];
                const [titleFirstPart, ...rest] = cartTitle.textContent.trim().split(' ');
                const productColor = rest.join(' ');
                const prdType = type.toLowerCase();

                //Update the product title to include the product type
                if (macthedPrdType || type) {
                    cartTitle.textContent = `${titleFirstPart} ${macthedPrdType || prdType} ${productColor}`;
                }

                if (macthedPrdType || type) {
                    if (variants) {
                      const prdId = Number(newVariantId);
                      const currentVariant = variants.find((variant) => variant.id === prdId);

                      if (currentVariant && currentVariant.option2) {
                        const { option2 } = currentVariant;
                        const color = option2.toLowerCase();
                        const productTitleText = `${titleFirstPart} ${macthedPrdType || prdType} ${color}`;
                        collectionTitle.textContent = productTitleText;
                      } else {
                        const productTitleText = `${titleFirstPart} ${macthedPrdType || prdType} ${productColor}`;
                        collectionTitle.textContent = productTitleText;
                      }
                    }
                  }
            });
        })
        .catch((err) => {
            console.log('Something went wrong with one or more fetch requests.', err);
        });
});
