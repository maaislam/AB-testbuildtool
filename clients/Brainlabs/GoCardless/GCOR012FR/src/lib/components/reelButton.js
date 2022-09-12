const reelBtn = (id, { text, link, classSuffix }, btnType = 'div') => {
  const btnDivHtml = `<div class="${id}__btn-${classSuffix}">${text}</div>`;
  const btnLinkHtml = `<a class="${id}__btn-${classSuffix}"
       href="${link}">${text}</a>`;

  return btnType === 'div' ? btnDivHtml : btnLinkHtml;
};

export default reelBtn;
