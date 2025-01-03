const menuData = {
  Roses: {
    title: 'Roses',
    hasChildren: [
      {
        title: 'Popular categories',
        hasChildren: [
          {
            title: 'Shop all roses',
            href: 'https://www.davidaustinroses.co.uk/collections/shop-all-roses'
          },
          {
            title: 'New in',
            href: 'https://www.davidaustinroses.co.uk/collections/new-varieties'
          },
          {
            title: 'Bestsellers',
            href: 'https://www.davidaustinroses.co.uk/collections/bestselling'
          },
          {
            title: 'Shop all potted roses',
            href: 'https://www.davidaustinroses.co.uk/collections/potted'
          },
          {
            title: 'Shop all bare root roses',
            href: 'https://www.davidaustinroses.co.uk/collections/bare-root'
          },
          {
            title: 'Use our rose Finder',
            href: 'https://www.davidaustinroses.co.uk/pages/rose-finder'
          }
        ]
      },
      {
        title: 'Shop by type of rose',
        link: 'https://www.davidaustinroses.co.uk/collections/shop-by-type',
        hasChildren: [
          {
            title: 'Bare root roses',
            href: 'https://www.davidaustinroses.co.uk/collections/bare-root'
          },
          {
            title: 'Potted roses',
            href: 'https://www.davidaustinroses.co.uk/collections/potted'
          },
          {
            title: 'Climbing roses',
            href: 'https://www.davidaustinroses.co.uk/collections/climbing-roses'
          },
          {
            title: 'Standard tree roses',
            href: 'https://www.davidaustinroses.co.uk/collections/standard-roses'
          },
          {
            title: 'Shrub roses',
            href: 'https://www.davidaustinroses.co.uk/collections/shrub-roses'
          },
          {
            title: 'Rambling roses',
            href: 'https://www.davidaustinroses.co.uk/collections/rambling-roses'
          },
          {
            title: 'English roses',
            href: 'https://www.davidaustinroses.co.uk/collections/english-roses'
          },
          {
            title: 'Floribundas',
            href: 'https://www.davidaustinroses.co.uk/collections/floribundas'
          },
          {
            title: 'Ground cover rose',
            href: 'https://www.davidaustinroses.co.uk/collections/ground-cover-roses'
          },
          {
            title: 'Shop all roses',
            href: 'https://www.davidaustinroses.co.uk/collections/shop-all-roses'
          }
        ]
      },
      {
        title: 'Shop by colour',
        link: 'https://www.davidaustinroses.co.uk/collections/shop-by-colour',
        hasChildren: [
          {
            title: 'Pink',
            href: 'https://www.davidaustinroses.co.uk/collections/pink-roses',
            colorCode: '#efc4ce',
            mobileImage:
              'https://www.davidaustinroses.co.uk/cdn/shop/files/6bbfa5054282f6dcf50875746068601a.jpg?v=1715855578&width=320'
          },
          {
            title: 'Red',
            href: 'https://www.davidaustinroses.co.uk/collections/red-roses',
            colorCode: '#dd342b',
            mobileImage:
              'https://www.davidaustinroses.co.uk/cdn/shop/products/377fd18c7968f3d51d9d2577ae72b5f6.jpg?v=1595539606&width=320'
          },
          {
            title: 'Apricot & Orange',
            href: 'https://www.davidaustinroses.co.uk/collections/apricot-orange-roses',
            colorCode: '#efb578',
            mobileImage:
              'https://www.davidaustinroses.co.uk/cdn/shop/files/d70459fc3f6a58bf524f8ccdda19b3ef.png?v=1695806984&width=320'
          },
          {
            title: 'Yellow',
            href: 'https://www.davidaustinroses.co.uk/collections/yellow-roses',
            colorCode: '#f6e95a',
            mobileImage:
              'https://www.davidaustinroses.co.uk/cdn/shop/products/2a994b4a45a18180fda642a56990f1c7_a6ffaffe-ee9f-45f3-a645-790d90e9fbc1.jpg?v=1595538638&width=320'
          },
          {
            title: 'White & Cream',
            href: 'https://www.davidaustinroses.co.uk/collections/white-cream-roses',
            swatchImage:
              'https://www.davidaustinroses.co.uk/cdn/shop/files/swatch-white-cream.svg?crop=centeru0026height=32u0026v=1714479045u0026width=32',
            colorCode: '#ffffff',
            mobileImage:
              'https://www.davidaustinroses.co.uk/cdn/shop/products/2e28c400a7735da1f26befa7e4af854c_011528a9-52c1-4420-8727-af4646389e53.jpg?v=1595530240&width=320'
          },
          {
            title: 'Purple',
            href: 'https://www.davidaustinroses.co.uk/collections/purple-roses',
            colorCode: '#912d62',
            mobileImage:
              'https://www.davidaustinroses.co.uk/cdn/shop/products/520e79a6223bae15c48a05d4f3abc641_77dc0d47-d28a-4847-a3f4-91bdfd19aefc.jpg?v=1595523513&width=320'
          }
        ]
      },
      {
        title: 'Shop by planting location',
        link: 'https://www.davidaustinroses.co.uk/collections/shop-by-location',
        hasChildren: [
          {
            title: 'Mixed borders',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-mixed-border'
          },
          {
            title: 'Pots & containers',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-pots-containers'
          },
          {
            title: 'Shady areas',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-north-walls-and-shady-areas'
          },
          {
            title: 'Rose hedges',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-growing-as-hedges'
          },
          {
            title: '6ft wall and fence',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-walls-fences'
          },
          {
            title: '10ft wall and fence',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-10ft-wall-and-fence'
          },
          {
            title: 'Front of house',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-buildings'
          },
          {
            title: 'Arches & pergolas',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-arches'
          }
        ]
      },
      {
        title: 'Shop by rose features',
        link: 'https://www.davidaustinroses.co.uk/collections/shop-by-key-feature',
        hasChildren: [
          {
            title: 'Most fragrant roses',
            href: 'https://www.davidaustinroses.co.uk/collections/most-fragrant'
          },
          {
            title: 'Roses best for flowering',
            href: 'https://www.davidaustinroses.co.uk/collections/best-for-abundantly-flowering'
          },
          {
            title: 'Most disease-resistant roses',
            href: 'https://www.davidaustinroses.co.uk/collections/disease-resistant-roses'
          },
          {
            title: 'Roses with very few thorns',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-thornless'
          },
          {
            title: 'Roses best for attracting bees',
            href: 'https://www.davidaustinroses.co.uk/collections/ideal-for-bee-friendly-roses'
          },
          {
            title: 'Roses best for cutting',
            href: 'https://www.davidaustinroses.co.uk/collections/cuttings-for-arrangements'
          }
        ]
      }
    ]
  },
  'Gifts & Accessories': {
    title: 'Gifts & Accessories',
    hasChildren: [
      {
        title: 'Rose and garden accessories',
        link: 'https://www.davidaustinroses.co.uk/collections/rose-care',
        hasChildren: [
          {
            title: 'Rose food, sprays and compost',
            href: 'https://www.davidaustinroses.co.uk/collections/rose-food'
          },
          {
            title: 'Gloves and gardenwear',
            href: 'https://www.davidaustinroses.co.uk/collections/gloves-and-gardenwear'
          },
          {
            title: 'Garden tools',
            href: 'https://www.davidaustinroses.co.uk/collections/garden-tools-accessories'
          },
          {
            title: 'Training & tying-in',
            href: 'https://www.davidaustinroses.co.uk/collections/training-and-tying-in'
          }
        ]
      },
      {
        title: 'Gifts & homeware',
        link: 'https://www.davidaustinroses.co.uk/collections/gifts',
        hasChildren: [
          {
            title: 'Best roses for gifts',
            href: 'https://www.davidaustinroses.co.uk/collections/occasion'
          },
          {
            title: 'Christmas gifts',
            href: 'https://www.davidaustinroses.co.uk/collections/christmas-gifting'
          },
          {
            title: 'Gift boxes',
            href: 'https://www.davidaustinroses.co.uk/collections/gift-boxes'
          },
          {
            title: 'Gift cards',
            href: 'https://www.davidaustinroses.co.uk/collections/gift-cards'
          },
          {
            title: '2025 calendar',
            href: 'https://www.davidaustinroses.co.uk/products/david-austin-2025-wall-calendar'
          },
          {
            title: 'Books',
            href: 'https://www.davidaustinroses.co.uk/collections/books'
          },
          {
            title: 'China & homeware',
            href: 'https://www.davidaustinroses.co.uk/collections/china-vases-and-homeware'
          },
          {
            title: 'Festive afternoon tea',
            href: 'https://www.davidaustinroses.co.uk/pages/festive-afternoon-tea'
          },
          {
            title: 'Pruning workshop',
            href: 'https://www.davidaustinroses.co.uk/products/pruning-workshop'
          }
        ]
      }
    ]
  }
};

export default menuData;
