import { onUrlChange } from './helpers/utils';
import setup from './services/setup';

export default () => {
  setup();

  const adjustPageCards = () => {
    const getPageElement = (page, selector) =>
      document.querySelector(`.products-grid.products-grid[amscroll-page='${page}'] ${selector}`);

    //get last ol on the page
    const amscrolls = document.querySelectorAll('[amscroll-page]');
    const lastAmscroll = amscrolls[amscrolls.length - 1];

    //get amscroll value

    const newPage = lastAmscroll.getAttribute('amscroll-page');

    if (newPage) {
      const previouspage = newPage - 1;

      //get the first li inside ol of the new page
      const newPageFirstLi = getPageElement(newPage, 'ol li:first-child');

      const previousPageOl = getPageElement(previouspage, 'ol');

      //move it at the end of the previous page

      //check if li count is
      const previousPageLiCount = previousPageOl.querySelectorAll('li').length;

      if (previousPageLiCount % 2 !== 0) {
        previousPageOl.appendChild(newPageFirstLi);
      }
    }
  };

  onUrlChange(() => {
    console.log('URL changed!');
    adjustPageCards();
  });

  //add scroll listener
  window.addEventListener('scroll', adjustPageCards);
};
