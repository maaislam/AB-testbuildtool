const fetchProductImagesData = async (link) => {
  try {
    const response = await fetch(`https://luxuryflooring.co.uk${link}`);
    const data = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    console.log(doc, doc.querySelector('.gallery__thumbnails'));
    //const galleryItem = doc.querySelector('.gallery__thumbnails .f-thumbs__slide > div');

    //const { src } = galleryItem.dataset;

    //return src;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
};

export default fetchProductImagesData;
