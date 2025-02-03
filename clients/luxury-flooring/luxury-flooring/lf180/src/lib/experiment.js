import { onAmscrollChange } from './helpers/utils';
import setup from './services/setup';

export default () => {
  setup(); //use if needed

  const callbackHandler = () => {
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

      //check if li count is odd
      const previousPageLiCount = previousPageOl.querySelectorAll('li').length;

      if (previousPageLiCount % 2 !== 0) {
        previousPageOl.appendChild(newPageFirstLi);
      }
    }
  };

  onAmscrollChange(callbackHandler);
};
