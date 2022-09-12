const fetchData = (prodHandle, item) => {
    //const response = await fetch(`${prodHandle}.js`);
    //const output = await response.json();
    fetch(`${prodHandle}.js`)
  .then((response) => response.json())
  .then((output) => {
    const prodArr = [];
    output.variants.forEach((variant) => {
      if (variant.option1 === item.querySelector('.ProductItem__TitleDescription').textContent) {
          if (!prodArr.includes(variant)) {
               prodArr.push({
                   id: variant.id,
                   title: variant.title,
                   option1: variant.option1,
                   option2: variant.option2,
                   option3: variant.option3,
                   sku: variant.sku,
                   available: variant.available,
                   name: variant.name,
                   public_title: variant.public_title
               });
          }
          item.setAttribute('data-obj', JSON.stringify(prodArr));
      }
  });
  }).catch(() => {
    console.log('error');
});
};

export default fetchData;
