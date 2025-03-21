import setup from './services/setup';
import shared from './shared/shared';
import tableRow from './components/tableRow';
import generateToplistData from './helpers/generateToplistData';

const { ID } = shared;

const init = () => {
  const postTitleContainerElem = document.querySelector('.post-title-container');
  const promoBannerElem = document.querySelector('#toc-widget-2 .box.promo');
  const tableAttachpoint = document.querySelector('.main-container');

  postTitleContainerElem.classList.add('wrapper');
  postTitleContainerElem.insertAdjacentElement('beforeend', promoBannerElem);

  const renderToplistTable = () => {
    const data = generateToplistData(ID);
    const htmlRows = data.map(tableRow).join('');
    const fullTableHtml = `<div class="${ID}__container wrapper">${htmlRows}</div>`;
    tableAttachpoint.insertAdjacentHTML('afterbegin', fullTableHtml);
  };

  renderToplistTable();
};

export default () => {
  setup();

  init();
};
