const freeShippingBar = (id) => {
  const html = `
        <div class="${id}__banner">
            <span class="${id}__banner-left">FREE SHIPPING</span>
            <span class="${id}__banner-right">On Accessory Orders Over $499</span>
        </div>
    `;
  return html.trim();
};

export default freeShippingBar;
