import setup from './services/setup';

export default () => {
  const regularPriceContainer = document.getElementById('regular-pricing');
  const regularPriceSection = regularPriceContainer.closest('section');

  const articles = document.querySelectorAll('article');
  const lastArticle = articles[articles.length - 1];
  const lastArticleSection = lastArticle.closest('section');

  const mainElem = document.querySelector('main > section');

  mainElem.insertAdjacentElement('afterend', lastArticleSection);
  mainElem.insertAdjacentElement('afterend', regularPriceSection);
  setup();
};
