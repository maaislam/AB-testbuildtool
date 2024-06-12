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
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/powder-pink.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-poeder-roze'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-poeder-roze`
    },
    {
      name: translationConfigForColors.taupe[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/taupe.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-taupe'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-taupe`
    },
    {
      name: translationConfigForColors['cream pearl'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/cream-pearl.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/robe-beige-white-piping'
          : `/${urlPortion}/collections/fleece-badjassen/products/robe-beige-white-piping`
    },
    {
      name: translationConfigForColors.sand[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/sand.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-sand'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-sand`
    },
    {
      name: translationConfigForColors['stone pearl'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/stone-pearl.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-double-piping'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-double-piping`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/black.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-zwart'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-zwart`
    },
    {
      name: translationConfigForColors.white[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/white.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-wit'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-wit`
    },
    {
      name: translationConfigForColors.navy[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/navy.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/fleece-badjas-donkerblauw'
          : `/${urlPortion}/collections/fleece-badjassen/products/fleece-badjas-donkerblauw`
    },
    {
      name: translationConfigForColors['chocolate brown'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/brown.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-chocolate-brown'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-chocolate-brown`
    },
    {
      name: translationConfigForColors['light pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/light-pink.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-light-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-light-pink`
    },
    {
      name: translationConfigForColors.lilac[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/lilac.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/robe-lilac'
          : `/${urlPortion}/collections/fleece-badjassen/products/robe-lilac`
    },
    {
      name: translationConfigForColors['baby blue'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/baby-blue.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/robe-baby-blue'
          : `/${urlPortion}/collections/fleece-badjassen/products/robe-baby-blue`
    },
    {
      name: translationConfigForColors.leopard[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/leopard.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-luipaard'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-luipaard`
    }
  ],
  waffle: [
    {
      name: translationConfigForColors['powder pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/powder-pink.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/waffle-badjas-powder-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/waffle-badjas-powder-pink`
    },
    {
      name: translationConfigForColors.taupe[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/taupe.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/waffle-badjas-taupe'
          : `/${urlPortion}/collections/fleece-badjassen/products/waffle-badjas-taupe`
    },
    {
      name: translationConfigForColors.white[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/white.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/waffle-badjas-white'
          : `/${urlPortion}/collections/fleece-badjassen/products/waffle-badjas-white`
    }
  ],
  long: [
    {
      name: translationConfigForColors.red[lang],
      imageUrl: 'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/red.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-bordeaux-red'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-bordeaux-red`
    },
    {
      name: translationConfigForColors['emerald green'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/emerald.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-emerald-green'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-emerald-green`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/black.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-deluxe-long-midnight-black'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-deluxe-long-midnight-black`
    },
    {
      name: translationConfigForColors.cream[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/cream.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kopie-van-kimono-deluxe-long-cream'
          : `/${urlPortion}/collections/fleece-badjassen/products/kopie-van-kimono-deluxe-long-cream`
    },
    {
      name: translationConfigForColors.white[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/white.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-deluxe-long-white'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-deluxe-long-white`
    }
  ],
  velours: [
    {
      name: translationConfigForColors.champagne[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/champagne.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-champagne'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velours-champagne`
    },
    {
      name: translationConfigForColors['powder pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/powder-pink.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-powder-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velours-powder-pink`
    },
    {
      name: translationConfigForColors.brown[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/brown.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-brown'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velours-brown`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/black.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-midnight-black'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velours-midnight-black`
    },
    {
      name: translationConfigForColors.grey[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/grey.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velours-grey'
          : `/${urlPortion}collections/fleece-badjassen/products/kimono-velours-grey`
    }
  ],
  cotton: [
    {
      name: translationConfigForColors['powder pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/powder-pink.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-katoen-powder-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-katoen-powder-pink`
    },
    {
      name: translationConfigForColors.taupe[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/taupe.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-katoen-taupe'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-katoen-taupe`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/black.png',
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
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/pink.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-pink-hooded'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-pink-hooded`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/black.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-black-hooded'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-black-hooded`
    },
    {
      name: translationConfigForColors['orchid pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/orchid-pink.png',
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
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/cuban-sand.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-cuban-sand'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-cuban-sand`
    },
    {
      name: translationConfigForColors['orchid pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/orchid-pink.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-orchid-pink'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-orchid-pink`
    },
    {
      name: translationConfigForColors['frosty mint'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/frosty-mint.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/badjas-mint-green'
          : `/${urlPortion}/collections/fleece-badjassen/products/badjas-mint-green`
    }
  ],
  velvet: [
    {
      name: translationConfigForColors.champagne[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/velvet-champagne.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-dark-grey'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-dark-grey`
    },
    {
      name: translationConfigForColors.brown[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/brown.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-brown'
          : `/${urlPortion}collections/fleece-badjassen/products/kimono-velvet-brown`
    },
    {
      name: translationConfigForColors.plum[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/plum.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-grey'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-grey`
    },
    {
      name: translationConfigForColors['emerald green'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/emerald.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-green-long'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-green-long`
    },
    {
      name: translationConfigForColors.red[lang],
      imageUrl: 'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/red.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-red-long'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-red-long`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/black.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-midnight-black'
          : `${urlPortion}`
    },
    {
      name: translationConfigForColors.blue[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/blue.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-velvet-cobalt-blue'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-velvet-cobalt-blue`
    }
  ],
  teddy: [
    {
      name: translationConfigForColors.caramel[lang],
      imageUrl: '',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-teddy-caramel'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-teddy-caramel`
    },
    {
      name: translationConfigForColors.black[lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/black.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-teddy-midnightblack'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-teddy-midnightblack`
    },
    {
      name: translationConfigForColors['blossom pink'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/blossom-pink.png',
      productUrl:
        lang === 'en'
          ? '/collections/fleece-badjassen/products/kimono-teddy-blossompink'
          : `/${urlPortion}/collections/fleece-badjassen/products/kimono-teddy-blossompink`
    },
    {
      name: translationConfigForColors['chocolate brown'][lang],
      imageUrl:
        'https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/le-olive/chocolate-brown.png',
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
