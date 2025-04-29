const buttons = (id, link, isSampleProduct) => {
  const html = `
    <a href="${link}">View Product</a>
    ${isSampleProduct ? `<span class="${id}__sampleBtn">Order a Free Sample</span>` : ''}
  `;
  return html.trim();
};

export default buttons;
