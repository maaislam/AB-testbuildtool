const lang = window.langify.locale.iso_code;

const urlPortion =
  lang === 'nl' ? 'nl' : lang === 'de' ? 'de' : lang === 'es' ? 'es' : lang === 'fr' ? 'fr' : '';

const translationConfigForColors = {
  caramel: {
    nl: 'caramel',
    de: '',
    fr: '',
    es: '',
    en: 'caramel'
  },
  'chocolate brown': {
    nl: 'chocolate brown',
    de: '',
    fr: '',
    es: '',
    en: 'chocolate brown'
  },
  'blossom pink': {
    nl: 'blossom pink',
    de: '',
    fr: '',
    es: '',
    en: 'blossom pink'
  },
  'powder pink': {
    nl: 'powder pink',
    de: '',
    fr: '',
    es: '',
    en: 'powder pink'
  },
  taupe: {
    nl: 'taupe',
    de: '',
    fr: '',
    es: '',
    en: 'taupe'
  },
  'cream pearl': {
    nl: 'cream pearl',
    de: '',
    fr: '',
    es: '',
    en: 'cream pearl'
  },
  sand: {
    nl: 'sand',
    de: '',
    fr: '',
    es: '',
    en: 'sand'
  },
  'stone pearl': {
    nl: 'stone pearl',
    de: '',
    fr: '',
    es: '',
    en: 'stone pearl'
  },
  'light pink': {
    nl: 'light pink',
    de: '',
    fr: '',
    es: '',
    en: 'light pink'
  },
  brown: {
    nl: 'brown',
    de: '',
    fr: '',
    es: '',
    en: 'brown'
  },
  navy: {
    nl: 'navy',
    de: '',
    fr: '',
    es: '',
    en: 'navy'
  },
  white: {
    nl: 'white',
    de: '',
    fr: '',
    es: '',
    en: 'white'
  },
  black: {
    nl: 'black',
    de: '',
    fr: '',
    es: '',
    en: 'black'
  },
  leopard: {
    nl: 'leopard',
    de: '',
    fr: '',
    es: '',
    en: 'leopard'
  },
  'baby blue': {
    nl: 'baby blue',
    de: '',
    fr: '',
    es: '',
    en: 'baby blue'
  },
  lilac: {
    nl: 'lila',
    de: '',
    fr: '',
    es: '',
    en: 'lilac'
  },
  'emerald green': {
    nl: 'emerald green',
    de: '',
    fr: '',
    es: '',
    en: 'emerald green'
  },
  red: {
    nl: 'bordeaus red',
    de: '',
    fr: '',
    es: '',
    en: 'bordeaus red'
  },
  cream: {
    nl: 'Crème',
    de: '',
    fr: '',
    es: '',
    en: 'cream'
  },
  champagne: {
    nl: 'champagne',
    de: '',
    fr: '',
    es: '',
    en: 'champagne'
  },
  grey: {
    nl: 'grey',
    de: '',
    fr: '',
    es: '',
    en: 'grey'
  },
  pink: {
    nl: 'pink',
    de: '',
    fr: '',
    es: '',
    en: 'pink'
  },
  'orchid pink': {
    nl: 'orchid pink',
    de: '',
    fr: '',
    es: '',
    en: 'orchid pink'
  },
  'frosty mint': {
    nl: 'frosty mint',
    de: '',
    fr: '',
    es: '',
    en: 'frosty mint'
  },
  'cuban sand': {
    nl: 'cuban sand',
    de: '',
    fr: '',
    es: '',
    en: 'cuban sand'
  },
  plum: {
    nl: 'plum',
    de: '',
    fr: '',
    es: '',
    en: 'plum'
  },
  blue: {
    nl: 'blue',
    de: '',
    fr: '',
    es: '',
    en: 'blue'
  }
};

const colorObj = {
  classic: [
    {
      name: translationConfigForColors['powder pink'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20210603_DSC9844-Edit_12aaee6a-5ffd-4fb8-a898-6a2dc2f5ad24_compact.jpg?v=1715588333',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-poeder-roze'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-poeder-roze`
    },
    {
      name: translationConfigForColors.taupe[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20200903_DSC6837-Edit-2_77fb7c93-200b-46b1-b882-42d258694fca_compact.jpg?v=1714055075',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-taupe'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-taupe`
    },
    {
      name: translationConfigForColors['cream pearl'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20211020_DSC6720-Edit_43730648-c8eb-490f-9849-3f747f05bd35_compact.jpg?v=1707407081',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/robe-beige-white-piping'
          : `/${urlPortion}/collections/fleece-badjassen/products/robe-beige-white-piping`
    },
    {
      name: translationConfigForColors.sand[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20220224badjas_C_Fullbody_RAW_22-Edit-Productfotografiewebsite-2_compact.jpg?v=1714399831',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-sand'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-sand`
    },
    {
      name: translationConfigForColors['stone pearl'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20201208_DSC5779-Edit-2_9f3e8776-fffa-42b9-896f-d0d0c357f0bf_compact.jpg?v=1707998158',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-double-piping'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-double-piping`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20200922_DSC9529-Edit-2_288dca83-7741-4ada-9994-912d56a90ca8_compact.jpg?v=1715876836',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-zwart'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-zwart`
    },
    {
      name: translationConfigForColors.white[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20200922_DSC9780-Edit-2_1dffaca7-e0b9-49f0-acfa-c77066e3bbd7_compact.jpg?v=1687346961',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-wit'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-wit`
    },
    {
      name: translationConfigForColors.navy[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20210603_DSC9943-Edit_compact.jpg?v=1707998223',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-donkerblauw'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-donkerblauw`
    },
    {
      name: translationConfigForColors['chocolate brown'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20211020_DSC6651-Edit_486e6e17-d8df-4e42-a0ac-8c7b47243af1_compact.jpg?v=1681256883',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-chocolate-brown'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-chocolate-brown`
    },
    {
      name: translationConfigForColors['light pink'][lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/SHP07565-Edit_compact.jpg?v=1679583324',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-light-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-light-pink`
    },
    {
      name: translationConfigForColors.lilac[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20210429_DSC0257_compact.jpg?v=1663340086',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/robe-lilac'
          : `/${urlPortion}/collections/fleece-badjassen/products/robe-lilac`
    },
    {
      name: translationConfigForColors['baby blue'][lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/41_compact.jpg?v=1668444681',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/robe-baby-blue'
          : `/${urlPortion}/collections/fleece-badjassen/products/robe-baby-blue`
    },
    {
      name: translationConfigForColors.leopard[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/RobeLeopard_new1_c88d2b3c-984a-4ac4-a5c2-4bfe761ae6e4_compact.jpg?v=1663339910',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-luipaard'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-luipaard`
    }
  ],
  waffle: [
    {
      name: translationConfigForColors['powder pink'][lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/files/SHP07298-Edit_1_compact.jpg?v=1715588439',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/waffle-badjas-powder-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/waffle-badjas-powder-pink`
    },
    {
      name: translationConfigForColors.taupe[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/files/KR1A7437_compact.jpg?v=1714576310',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/waffle-badjas-taupe'
          : `/${urlPortion}/collections/fleece-badjassen/products/waffle-badjas-taupe`
    },
    {
      name: translationConfigForColors.white[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/files/SHP07708-Edit_compact.jpg?v=1715876796',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/waffle-badjas-white'
          : `/${urlPortion}/collections/fleece-badjassen/products/waffle-badjas-white`
    }
  ],
  long: [
    {
      name: translationConfigForColors.red[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/P211015132416_Fullbody_TIFF_109-Edit_2048x20481_compact.jpg?v=1706178562',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-bordeaux-red'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-bordeaux-red`
    },
    {
      name: translationConfigForColors['emerald green'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/lengteP211015132416_Fullbody_TIFF_153-Edit_9163fbda-23c0-4895-96a3-84baf0cbfb98_compact.jpg?v=1715596966',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-emerald-green'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-emerald-green`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/DSC7521-Edit_compact.jpg?v=1681257142',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-deluxe-long-midnight-black'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-deluxe-long-midnight-black`
    },
    {
      name: translationConfigForColors.cream[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20200903_DSC6500-Edit2_compact.jpg?v=1682956813',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kopie-van-kimono-deluxe-long-cream'
          : `/${urlPortion}/collections/fleece-badjassen/products/kopie-van-kimono-deluxe-long-cream`
    },
    {
      name: translationConfigForColors.white[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/DSC6286-Edit_f1af5109-6874-48cf-a611-d8285fadc500_compact.jpg?v=1712222906',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-deluxe-long-white'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-deluxe-long-white`
    }
  ],
  velours: [
    {
      name: translationConfigForColors.champagne[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/SHP07493-Edit_compact.jpg?v=1680275710',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-champagne'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velours-champagne`
    },
    {
      name: translationConfigForColors['powder pink'][lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/DSC6142-Edit-2_compact.jpg?v=1701767888',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-powder-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velours-powder-pink`
    },
    {
      name: translationConfigForColors.brown[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/DSC7216-Edit-1_compact.jpg?v=1667489960',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-brown'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velours-brown`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/KimonoVeloursBlack_01_compact.jpg?v=1673858027',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-midnight-black'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velours-midnight-black`
    },
    {
      name: translationConfigForColors.grey[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/DSC6422-Edit-2_compact.jpg?v=1667490397',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-grey'
          : `/${urlPortion}collections/fleece-badjassen/products/kimono-velours-grey`
    }
  ],
  cotton: [
    {
      name: translationConfigForColors['powder pink'][lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/SHP07692-Edit_compact.jpg?v=1683058108',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-katoen-powder-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-katoen-powder-pink`
    },
    {
      name: translationConfigForColors.taupe[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/01_5a15bdf0-4ced-42a6-91da-8ac5e236e2ee_compact.jpg?v=1677675071',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-katoen-taupe'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-katoen-taupe`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/SHP07376-Edit_compact.jpg?v=1679583113',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-katoen-midnight-black'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-katoen-midnight-black`
    }
  ],
  hooded: [
    {
      name: translationConfigForColors.pink[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/220220224badjas_torso_RAW_20-Edit_f0f5be46-995a-4b2f-a103-284d39b43f03_compact.jpg?v=1689262748',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-pink-hooded'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-pink-hooded`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/new-20220224badjas_Fullbody_RAW_13-Edit-2_compact.jpg?v=1700672382',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-black-hooded'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-black-hooded`
    },
    {
      name: translationConfigForColors['orchid pink'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/SHP07368-Edit_1_compact.jpg?v=1679332000',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-hooded-orchid-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-hooded-orchid-pink`
    }
  ],
  deluxe: [
    {
      name: translationConfigForColors['cuban sand'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20220224badjas_C_torso_RAW_78-Edit_25b88895-3c33-43d9-b08e-610b3be14fbf_compact.jpg?v=1686651600',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-cuban-sand'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-cuban-sand`
    },
    {
      name: translationConfigForColors['orchid pink'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20220224badjas_C_torso_RAW_24-Edit-bewerkt_1_1_compact.jpg?v=1717404671',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-orchid-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-orchid-pink`
    },
    {
      name: translationConfigForColors['frosty mint'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20220224badjas_torso_RAW_97-Edit_c0e89070-8e07-48c8-a821-d02f2b863699_compact.jpg?v=1684850872',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-mint-green'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-mint-green`
    }
  ],
  velvet: [
    {
      name: translationConfigForColors.champagne[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/DSC6059-Edit_compact.jpg?v=1703669332',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-dark-grey'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-dark-grey`
    },
    {
      name: translationConfigForColors.brown[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/DSC6108-Edit_compact.jpg?v=1681257500',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-brown'
          : `/${urlPortion}collections/fleece-badjassen/products/kimono-velvet-brown`
    },
    {
      name: translationConfigForColors.plum[lang],
      imageUrl: 'https://us.le-olive.com/cdn/shop/products/DSC6243-Edit_compact.jpg?v=1681257505',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-grey'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-grey`
    },
    {
      name: translationConfigForColors['emerald green'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/P211015132416_Fullbody_TIFF_55-Edit_eaa28c84-8d7a-4141-94c6-cc9b6435d19e_compact.jpg?v=1698658493',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-green-long'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-green-long`
    },
    {
      name: translationConfigForColors.red[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/RoseBertram_productimage_front_compact.jpg?v=1715175366',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-red-long'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-red-long`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/SHP00180-Edit_3c857d63-4a79-4f40-b716-bdce18c50605_compact.jpg?v=1715175303',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-midnight-black'
          : `${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-midnight-black`
    },
    {
      name: translationConfigForColors.blue[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/SHP00209-Edit_c9ab85a1-34ff-40f0-89b2-2be35edac0b1_compact.jpg?v=1665415575',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-cobalt-blue'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-cobalt-blue`
    }
  ],
  teddy: [
    {
      name: translationConfigForColors.caramel[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20210119_DSC1748-Edit_1_compact.jpg?v=1717671401',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-teddy-caramel'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-teddy-caramel`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20210429_DSC9859_de9817b6-7331-4a31-988f-15bf123cf488_compact.jpg?v=1717671324',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-teddy-midnightblack'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-teddy-midnightblack`
    },
    {
      name: translationConfigForColors['blossom pink'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20210429_DSC9526_1_compact.jpg?v=1697011807',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-teddy-blossompink'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-teddy-blossompink`
    },
    {
      name: translationConfigForColors['chocolate brown'][lang],
      imageUrl:
        'https://us.le-olive.com/cdn/shop/products/20210603_DSC9537-Edit-2_ed44d21f-1bea-450d-afc4-fec8e456abc7_compact.jpg?v=1663337868',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-teddy-chocolate-brown'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-teddy-chocolate-brown`
    }
  ],
  kids: [
    {
      name: translationConfigForColors['powder pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/powder-pink.png',
      productUrl: lang === 'en' ? '' : ''
    },
    {
      name: translationConfigForColors.taupe[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/taupe.png',
      productUrl: lang === 'en' ? '' : ''
    },
    {
      name: translationConfigForColors['light pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/light-pink.png',
      productUrl: lang === 'en' ? '' : ''
    },
    {
      name: translationConfigForColors['cream pearl'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/cream-pearl.png',
      productUrl: lang === 'en' ? '' : ''
    },
    {
      name: translationConfigForColors.navy[lang],
      imageUrl: '',
      productUrl: lang === 'en' ? '' : ''
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/blue.png',
      productUrl: lang === 'en' ? '' : ''
    }
  ],
  baby: [
    {
      name: translationConfigForColors['powder pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/powder-pink.png',
      productUrl: lang === 'en' ? '' : ''
    },
    {
      name: translationConfigForColors.taupe[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/taupe.png',
      productUrl: lang === 'en' ? '' : ''
    },
    {
      name: translationConfigForColors['light pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/light-pink.png',
      productUrl: lang === 'en' ? '' : ''
    },
    {
      name: translationConfigForColors['cream pearl'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/cream-pearl.png',
      productUrl: lang === 'en' ? '' : ''
    },
    {
      name: translationConfigForColors['baby blue'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/baby-blue.png',
      productUrl: lang === 'en' ? '' : ''
    }
  ]
};

export const robesProductData = {
  'fleece-badjas-poeder-roze': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors['powder pink'][lang]
  },
  'fleece-badjas-taupe': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors.taupe[lang]
  },
  'robe-beige-white-piping': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors['cream pearl'][lang]
  },
  'badjas-sand': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors.sand[lang]
  },
  'badjas-double-piping': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors['stone pearl'][lang]
  },
  'badjas-chocolate-brown': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors['chocolate brown'][lang]
  },
  'fleece-badjas-wit': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors.white[lang]
  },
  'fleece-badjas-donkerblauw': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors.navy[lang]
  },
  'fleece-badjas-zwart': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors.black[lang]
  },
  'badjas-light-pink': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors['light pink'][lang]
  },
  'robe-lilac': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors.lilac[lang]
  },
  'robe-baby-blue': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors['baby blue'][lang]
  },
  'badjas-luipaard': {
    colorArray: colorObj.classic,
    perSelectedColor: translationConfigForColors.leopard[lang]
  },
  //teddy
  'kimono-teddy-caramel': {
    colorArray: colorObj.teddy,
    //could not exact match
    perSelectedColor: translationConfigForColors.caramel[lang]
  },
  'kimono-teddy-midnightblack': {
    colorArray: colorObj.teddy,
    perSelectedColor: translationConfigForColors.black[lang]
  },
  'kimono-teddy-blossompink': {
    colorArray: colorObj.teddy,
    perSelectedColor: translationConfigForColors['blossom pink'][lang]
  },
  'kimono-teddy-chocolate-brown': {
    colorArray: colorObj.teddy,
    perSelectedColor: translationConfigForColors['chocolate brown'][lang]
  },
  //deluxe
  'badjas-cuban-sand': {
    colorArray: colorObj.deluxe,
    perSelectedColor: translationConfigForColors['cuban sand'][lang]
  },
  'badjas-orchid-pink': {
    colorArray: colorObj.deluxe,
    perSelectedColor: translationConfigForColors['orchid pink'][lang]
  },
  'badjas-mint-green': {
    colorArray: colorObj.deluxe,
    perSelectedColor: translationConfigForColors['frosty mint'][lang]
  },
  //long
  'badjas-bordeaux-red': {
    colorArray: colorObj.long,
    perSelectedColor: translationConfigForColors.red[lang]
  },
  'badjas-emerald-green': {
    colorArray: colorObj.long,
    perSelectedColor: translationConfigForColors['emerald green'][lang]
  },
  'kimono-deluxe-long-midnight-black': {
    colorArray: colorObj.long,
    perSelectedColor: translationConfigForColors.black[lang]
  },
  'kopie-van-kimono-deluxe-long-cream': {
    colorArray: colorObj.long,
    perSelectedColor: translationConfigForColors.cream[lang]
  },
  'kimono-deluxe-long-white': {
    colorArray: colorObj.long,
    perSelectedColor: translationConfigForColors.white[lang]
  },
  //hooded
  'badjas-hooded-orchid-pink': {
    colorArray: colorObj.hooded,
    perSelectedColor: translationConfigForColors['orchid pink'][lang]
  },
  'badjas-pink-hooded': {
    colorArray: colorObj.hooded,
    perSelectedColor: translationConfigForColors.pink[lang]
  },
  'badjas-black-hooded': {
    colorArray: colorObj.hooded,
    perSelectedColor: translationConfigForColors.black[lang]
  },
  //waffle
  'waffle-badjas-powder-pink': {
    colorArray: colorObj.waffle,
    perSelectedColor: translationConfigForColors['powder pink'][lang]
  },
  'waffle-badjas-taupe': {
    colorArray: colorObj.waffle,
    perSelectedColor: translationConfigForColors.taupe[lang]
  },
  'waffle-badjas-white': {
    colorArray: colorObj.waffle,
    perSelectedColor: translationConfigForColors.white[lang]
  },
  //velours
  'kimono-velours-powder-pink': {
    colorArray: colorObj.velours,
    perSelectedColor: translationConfigForColors['powder pink'][lang]
  },
  'kimono-velours-brown': {
    colorArray: colorObj.velours,
    perSelectedColor: translationConfigForColors.brown[lang]
  },
  'kimono-velours-midnight-black': {
    colorArray: colorObj.velours,
    perSelectedColor: translationConfigForColors.black[lang]
  },
  'kimono-velours-champagne': {
    colorArray: colorObj.velours,
    perSelectedColor: translationConfigForColors.champagne[lang]
  },
  'kimono-velours-grey': {
    colorArray: colorObj.velours,
    perSelectedColor: translationConfigForColors.grey[lang]
  },
  //velvet
  'kimono-velvet-red-long': {
    colorArray: colorObj.velvet,
    perSelectedColor: translationConfigForColors.red[lang]
  },
  'kimono-velvet-cobalt-blue': {
    colorArray: colorObj.velvet,
    perSelectedColor: translationConfigForColors.blue[lang]
  },
  'kimono-velvet-midnight-black': {
    colorArray: colorObj.velvet,
    perSelectedColor: translationConfigForColors.black[lang]
  },
  'kimono-velvet-green-long': {
    colorArray: colorObj.velvet,
    perSelectedColor: translationConfigForColors['emerald green'][lang]
  },
  'kimono-velvet-dark-grey': {
    colorArray: colorObj.velvet,
    perSelectedColor: translationConfigForColors.champagne[lang]
  },
  'kimono-velvet-brown': {
    colorArray: colorObj.velvet,
    perSelectedColor: translationConfigForColors.brown[lang]
  },
  'kimono-velvet-grey': {
    colorArray: colorObj.velvet,
    perSelectedColor: translationConfigForColors.plum[lang]
  },
  //cotton
  'badjas-katoen-powder-pink': {
    colorArray: colorObj.cotton,
    perSelectedColor: translationConfigForColors['powder pink'][lang]
  },
  'badjas-katoen-taupe': {
    colorArray: colorObj.cotton,
    perSelectedColor: translationConfigForColors.taupe[lang]
  },
  'badjas-katoen-midnight-black': {
    colorArray: colorObj.cotton,
    perSelectedColor: translationConfigForColors.black[lang]
  }
};
