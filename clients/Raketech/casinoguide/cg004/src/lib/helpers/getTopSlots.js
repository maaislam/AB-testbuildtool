const getTopSlots = (url = '/') => {
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const topCasinos = doc.querySelectorAll('[data-toplist-item]');

      const topCasinosData = [];
      topCasinos.forEach((el, i) => {
        if (i > 7) return;

        const anchorElm = el.querySelector('a[class^="titleWrapper"]');
        const operatorBtn = el.querySelector('a[data-toplist-item-link]');
        //console.log(el);
        const reviewUrl = anchorElm.href;
        const operatorUrl = operatorBtn.href;
        const reviewSlug = reviewUrl.split('/').pop();
        const title = anchorElm.innerText.toLowerCase();
        const subTitle = anchorElm.nextElementSibling.textContent;

        const obj = {
          reviewUrl,
          reviewSlug,
          operatorUrl,
          title,
          subTitle
        };

        topCasinosData.push(obj);
      });

      //const allData = topCasinosData.filter(Boolean);

      //return allData.reverse();
      return topCasinosData;
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
};

export default getTopSlots;
