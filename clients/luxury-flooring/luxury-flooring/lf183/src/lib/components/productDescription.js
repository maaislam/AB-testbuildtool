const productDescription = (id, productReviews, productName, productLink) => {
  const html = `
    <div class="${id}__productDescription" data-link="${productLink}#reviews">
        ${productReviews ? productReviews.outerHTML : ''}
        ${productName ? productName.outerHTML : ''}
    </div>
  `;
  return html.trim();
};

export default productDescription;
