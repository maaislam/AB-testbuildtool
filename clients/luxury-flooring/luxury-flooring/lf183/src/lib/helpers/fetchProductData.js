const fetchProductImagesData = async (productCard) => {
  try {
    const productUrl = productCard.querySelector('a.product-item-photo')?.href;
    if (!productUrl) return [];

    const response = await fetch(productUrl);
    const data = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const photoGalleryWrapper = doc.querySelector('#productCarousel');

    if (!photoGalleryWrapper) return [];

    const galleryItems = photoGalleryWrapper.querySelectorAll('.gallery__item');
    const productSkuElement = doc.querySelector('form[data-product-sku]');

    const images = [...galleryItems]
      .map((item) => {
        const img = item.dataset.src;
        return img || null;
      })
      .filter(Boolean);

    return {
      sku: productSkuElement ? productSkuElement.dataset.productSku : '',
      images
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
};

export default fetchProductImagesData;
