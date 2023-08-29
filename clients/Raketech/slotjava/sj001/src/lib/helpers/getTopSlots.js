const imageUrlConfig = {
  Pokerstars: {
    imgUrlPrefix: 'pokerstars_casino',
    colorCode: '#000000;'
  },
  'Big Casino': {
    imgUrlPrefix: 'big_casino_large',
    colorCode: '#000000;'
  },
  Starcasino: {
    imgUrlPrefix: 'starcasino-logo',
    colorCode: '#ffffff;'
  },

  Netbet: {
    imgUrlPrefix: 'netbet-logo',
    colorCode: '#333743;'
  },
  WinCasino: {
    imgUrlPrefix: 'wincasino-logo',
    colorCode: '#ffffff;'
  },
  'William Hill': {
    imgUrlPrefix: 'williamhill_logo',
    colorCode: '#000f3f;'
  },
  Leovegas: {
    imgUrlPrefix: 'leovegas_it',
    colorCode: '#f58249;'
  },
  Betway: {
    imgUrlPrefix: 'betway_logo_italy',
    colorCode: '#222;'
  },
  Snai: {
    imgUrlPrefix: 'snai-logo',
    colorCode: '#2d3844;'
  },
  AdmiralBet: {
    imgUrlPrefix: 'admiralbet-logo',
    colorCode: '#FFFFFF;'
  },
  'Betroom.it': {
    imgUrlPrefix: 'betroom-it-1',
    colorCode: '#126E51;'
  },
  KingCasino: {
    imgUrlPrefix: 'king-casino',
    colorCode: ''
  },
  VinciTu: {
    imgUrlPrefix: '1664524158',
    colorCode: ''
  },
  Betclic: {
    imgUrlPrefix: 'betclic-logo',
    colorCode: '#d2161e;'
  },
  StarVegas: {
    imgUrlPrefix: 'starvegas',
    colorCode: '#fff;'
  },
  Videoslots: {
    imgUrlPrefix: 'videoslots_slotjava',
    colorCode: '#222222;'
  },
  '888 Casino': {
    imgUrlPrefix: '888_green_logo_it',
    colorCode: '#171717;'
  },
  Betfair: {
    imgUrlPrefix: 'betfair_logo_slotjava_it',
    colorCode: '#fdb714;'
  },
  Novibet: {
    imgUrlPrefix: 'novibet-logo',
    colorCode: '#30343f;'
  },
  Unibet: {
    imgUrlPrefix: 'unibet_logo_slotjava_it',
    colorCode: '#147b45;'
  },
  'Gioco Digitale': {
    imgUrlPrefix: 'gioco_digitale',
    colorCode: '#ffffff;'
  },
  Fastbet: {
    imgUrlPrefix: 'fastbet-logo',
    colorCode: '#313131;'
  },
  Eurobet: {
    imgUrlPrefix: 'eurobet_logo',
    colorCode: '#fff;'
  },
  'Voglia Di Vincere': {
    imgUrlPrefix: 'voglia_di_vincere_logo',
    colorCode: '#ffffff;'
  },
  Bwin: {
    imgUrlPrefix: 'bwin-logo',
    colorCode: '#000;'
  },
  'Fantasyteam Casino': {
    imgUrlPrefix: 'fantasyteam_main_logo',
    colorCode: '#272727;'
  },
  'Casino.com': {
    imgUrlPrefix: 'casino-com-logo',
    colorCode: '#222;'
  },
  Goldbet: {
    imgUrlPrefix: 'goldbet_logo_slotjavait',
    colorCode: '#102547;'
  },
  SportitaliaBet: {
    imgUrlPrefix: 'sportitaliabet-logo',
    colorCode: '#00081e;'
  },
  CasinoMania: {
    imgUrlPrefix: 'casinomania-logo',
    colorCode: '#002742;'
  }
};

const getTopSlots = (url = '/') => {
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const tableRows = doc.querySelectorAll('.casino-table tr.casino-table__data-row');

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

        const main_heading = imgElm.alt.replace('logo', '');
        const img_url = imageUrlConfig[main_heading.trim()].imgUrlPrefix;

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
