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
        const target_url = anchorElm.href;
        const backColor = anchorElm.getAttribute('style');
        //console.log(anchorElm);
        //console.log(backColor);

        const imgElm = el.querySelector('img');

        const img_url = imgElm.src;
        const main_heading = imgElm.alt.replace('logo', '');

        const sub_heading_1 = el.querySelector('.casino-table__bonus-text').innerText;
        const tnc_text = '18+ | Si applicano T&C | Gioca Responsabilmente | ADM';
        const button_text = 'Sito Web';
        const alt_tag = imgElm.alt;
        const obj = {
          target_url,
          backColor,
          img_url,
          main_heading,
          sub_heading_1,
          tnc_text,
          button_text,
          alt_tag
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
