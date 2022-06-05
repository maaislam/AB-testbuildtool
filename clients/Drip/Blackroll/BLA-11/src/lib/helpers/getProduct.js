const getProductData = (productHandle, token, country) => {
  return fetch(`https://shop.${country === 'en' ? 'int' : country}.blackroll.com/api/2021-07/graphql`, {
    headers: {
      accept: 'application/json',
      'accept-language': 'en',
      'content-type': 'application/json',
      'x-shopify-storefront-access-token': token,
    },

    body: `{\"query\":\"query ProductCardByHandleQuery($handle: String!) {\\n  product: productByHandle(handle: $handle) {\\n    ...ProductCardFragment\\n  }\\n}\\n\\nfragment ProductCardFragment on Product {\\n  handle\\n  id\\n  productType\\n  availableForSale\\n  title\\n  presentmentPriceRanges(first: 1) {\\n    edges {\\n      node {\\n        minVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n        maxVariantPrice {\\n          amount\\n          currencyCode\\n        }\\n      }\\n    }\\n  }\\n  variants(first: 10) {\\n    edges {\\n      node {\\n        id\\n        sku\\n        title\\n        available: availableForSale\\n        priceV2 {\\n          amount\\n          currencyCode\\n        }\\n        compareAtPriceV2 {\\n          amount\\n          currencyCode\\n        }\\n        image {\\n          id\\n          src: originalSrc\\n        }\\n      }\\n    }\\n  }\\n  ...productOptionSwatchesFragment\\n  ...productBadgesFragment\\n  ...productFlagsFragment\\n  ...productCardHeaderFragment\\n  ...productProductCardUspFragment\\n}\\n\\nfragment productOptionSwatchesFragment on Product {\\n  _optionSwatches: metafield(namespace: \\\"oneworld\\\", key: \\\"optionSwatches\\\") {\\n    value\\n    valueType\\n  }\\n}\\n\\nfragment productBadgesFragment on Product {\\n  _badges: metafield(namespace: \\\"oneworld\\\", key: \\\"badges\\\") {\\n    value\\n    valueType\\n  }\\n}\\n\\nfragment productFlagsFragment on Product {\\n  _flags: metafield(namespace: \\\"oneworld\\\", key: \\\"flags\\\") {\\n    value\\n    valueType\\n  }\\n}\\n\\nfragment productCardHeaderFragment on Product {\\n  _cardHeader: metafield(namespace: \\\"oneworld\\\", key: \\\"cardHeader\\\") {\\n    value\\n    valueType\\n  }\\n}\\n\\nfragment productProductCardUspFragment on Product {\\n  _productCardUsp: metafield(namespace: \\\"oneworld\\\", key: \\\"productCardUsp\\\") {\\n    value\\n    valueType\\n  }\\n}\\n\",\"variables\":{\"handle\":\"${productHandle}\"}}`,
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  }).then((response) => response.json());
};
export default getProductData;
