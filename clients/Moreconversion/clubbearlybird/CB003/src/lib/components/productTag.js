const productTag = (id) => {
  const html = `
        <div class="${id}__productTag">
            <div class="${id}__text">Less than your Starbucks habit -&nbsp;</div>
            <div class="${id}__subtext">as low as $1.51 per serving</div>
        </div>
    `;
  return html.trim();
};

export default productTag;
