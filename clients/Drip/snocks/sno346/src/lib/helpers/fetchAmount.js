const fetchAmount = (prodHandle) => {
    fetch(`${prodHandle}.js`)
    .then((response) => response.json())
    .then((output) => {
    const prodArr = [];
    output.variants.forEach((variant) => {
               prodArr.push({
                   id: variant.id,
                   title: variant.title,
                   paar: variant.option3,
                   name: variant.name,
                   price: variant.price,
                   comparePrice: variant.compare_at_price
               });
  });
  console.log(prodArr);
  }).catch(() => {
    console.log('error');
});
};

export default fetchAmount;
