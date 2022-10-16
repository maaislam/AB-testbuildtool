import { dyEventTrigger } from './utils';

const getShopifyData = async (renderItemUrls, shared) => {
  const promises = renderItemUrls.map((item) => fetch(item.fetchUrl));
  const shopifyResponse = await Promise.all(promises);
  const shopifyData = await Promise.all(shopifyResponse.map((response) => response.json()));

  const renderData = shopifyData.map((data, index) => {
    const { available, featured_image, price, title, url, variants } = data;

    if (!available) {
      dyEventTrigger(`Product with url: ${url} is out of stock`, shared);
    }

    const variantToUse =
      variants.length === 1
        ? variants[0]
        : variants.find((variant) => variant.id === renderItemUrls[index].variantId * 1);
    return {
      featured_image,
      price,
      title,
      url,
      variantToUse
    };
  });
  return renderData;
};
export default getShopifyData;
