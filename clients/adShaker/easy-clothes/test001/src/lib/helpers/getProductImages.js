const getProductImages = async () => {
  const productUrl = `${window.location.pathname}.js`;
  const productData = await fetch(productUrl);
  const productJson = await productData.json();
  const { title, images } = productJson;
  const imageSrcset = images.map((item) => {
    const imageWidths = ['394', '788', '1182'];
    const srcSets = imageWidths.map((width, index) => {
      const imageSrc = item.replace('.jpg', `_${width}x.jpg`);
      return `${imageSrc} ${index + 1}x,`;
    });
    return {
      srcSets: srcSets.join(','),
      defaultImg: item.replace('.jpg', '_394x.jpg'),
      alt: title
    };
  });
  console.log(imageSrcset);
  return imageSrcset;
};

export default getProductImages;
