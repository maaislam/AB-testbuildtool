const price = (ID, pricePerLitre, actualPrice) => {
  console.log(pricePerLitre, actualPrice);
  if (!pricePerLitre) return '';
  const html = `<span class="${ID}__perLitre">(£${((actualPrice / pricePerLitre) * 1000).toFixed(
    2
  )}/Ltr)</span>`;
  //eslint-disable-next-line consistent-return
  return html.trim();
};

export default price;
