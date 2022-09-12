const { isMobile } = require('../helpers/utils');

/*eslint-disable prefer-destructuring */
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 6 6" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.2486 0.370828C1.00328 0.176562 0.645872 0.192751 0.419229 0.419395C0.175151 0.663472 0.175151 1.0592 0.419229 1.30328L2.187 3.07104L0.419229 4.83881L0.370662 4.89332C0.176396 5.13865 0.192585 5.49605 0.419229 5.7227C0.663306 5.96677 1.05903 5.96677 1.30311 5.7227L3.07088 3.95493L4.83865 5.7227L4.89316 5.77126C5.13848 5.96553 5.49589 5.94934 5.72253 5.7227C5.96661 5.47862 5.96661 5.08289 5.72253 4.83881L3.95476 3.07104L5.72253 1.30328L5.7711 1.24876C5.96536 1.00344 5.94917 0.646038 5.72253 0.419395C5.47845 0.175317 5.08272 0.175317 4.83865 0.419395L3.07088 2.18716L1.30311 0.419395L1.2486 0.370828Z" fill="white"/>
</svg>`;

const slideCatalog = (id, data, position) => {
  const { live_url, small_cover, tiny_cover, infos } = data;
  const title = infos.publication.title;
  const mobileCover = tiny_cover || small_cover;
  const htmlStr = `
    <div class="${id}__slidecatalog" style="top: ${position.top};left: ${position.left};">
        <span class="${id}__closeicon">${closeIcon}</span>
        <div class="${id}__slidecatalog--content" data-href="${live_url}">
            <div class="${id}__slidecatalog--title">Shop Sale</div>
            <div class="${id}__slidecatalog--img-wrapper">
                <img src="${isMobile ? mobileCover : small_cover}" alt="${title}" />
            </div>
        </div>
    </div>
  `;

  return htmlStr.trim();
};

export default slideCatalog;
