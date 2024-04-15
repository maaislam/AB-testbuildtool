const delivery = (ID) => {
  const html = `
        <div class="${ID}__delivery">
            <span class="${ID}__delivery-text">Estimated delivery to </span>
            
            <span class="${ID}__delivery-text">United States Mar 10–12</span>
        </div>
    `;

  return html.trim();
};

export default delivery;
