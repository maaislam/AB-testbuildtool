const getTopSlots = (url = '/') => {
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const tableRows = doc.querySelectorAll('.casino-table tr');

      const tableRowsData = [];
      tableRows.forEach((el, i) => {
        if (i > 5 || i === 0) return;

        const anchorElm = el.querySelector('a');
        //console.log(el);
        const targetUrl = anchorElm.href;
        const backColor = anchorElm.getAttribute('style');
        //console.log(anchorElm);
        //console.log(backColor);

        const imgElm = el.querySelector('img');

        const imgUrl = imgElm.src;
        const mainHeading = imgElm.alt.replace('logo', '');

        const subHeading1 = el.querySelector('.casino-table__bonus-text').innerText;
        const tncText = '18+ | Si applicano T&C | Gioca Responsabilmente | ADM';
        const buttonText = 'Sito Web';
        const altTag = imgElm.alt;
        const obj = {
          targetUrl,
          backColor,
          imgUrl,
          mainHeading,
          subHeading1,
          tncText,
          buttonText,
          altTag
        };

        tableRowsData.push(obj);
      });

      const allData = tableRowsData.filter(Boolean);

      return allData.reverse();
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
};

export default getTopSlots;
