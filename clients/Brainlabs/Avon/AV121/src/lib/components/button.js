const button = (id, text, variantId, btnType = 'single-add') => {
  const btnHtml = `<div class="${id}__button" data-id="${variantId}" data-type="${btnType}">
        ${text}
    </div>`;

  return btnHtml.trim();
};

export default button;
