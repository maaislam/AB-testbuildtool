const hpCard = (data) => {
  const { className, imageSrc, translation } = data;
  const { en, fr } = translation;
  const langFr = document.querySelector('[lang="fr-fr"]');

  const htmlStr = `
    <div class="col25 mobile100 product-border relative fe-${className} fe-home-prod" style="cursor: pointer;">
        <div class="varWidthImg">
            <div class="instantLoad">
                <a class="block lock_width">
                    <img src="${imageSrc}">
                </a>
                <a class="row ellipsis lock_width2">${langFr ? fr : en}</a>
            </div>
            <div class="row ellipsis width_fix2"></div>
        </div>
    </div>`;

  return htmlStr.trim();
};
export default hpCard;
