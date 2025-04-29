const productDescription = (id, productReviews, productName) => {
  const html = `
    <div class="${id}__productDescription">
        ${productReviews ? productReviews.outerHTML : ''}
        ${productName ? productName.outerHTML : ''}
    </div>
  `;
  return html.trim();
};

export default productDescription;
