import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';
import startCarAnimation from './helpers/initCarScroll';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    const submitBtn = document.querySelector('#makeForm button[type="submit"]');
    if (target.closest(`.${ID}__fakeBtn`)) {
      const clickedItem = target.closest(`.${ID}__fakeBtn`);
      const mainWrapper = clickedItem.closest('[data-ref="hero-banner"]');
      if (mainWrapper && !document.querySelector(`.${ID}__wrapper`)) {
        mainWrapper.childNodes[1].style.display = 'none';
        mainWrapper.insertAdjacentHTML('beforeend', wrapper(ID));
        mainWrapper.scrollIntoView();
        startCarAnimation(ID);
      }

      return;
    }

    pollerLite([() => submitBtn.classList.contains('light-turquoise-bg')], () => {
      document.querySelector(`.${ID}__fakeBtn`)?.remove();
    });

    pollerLite([() => !submitBtn.classList.contains('light-turquoise-bg')], () => {
      if (
        !submitBtn.classList.contains('light-turquoise-bg') &&
        !document.querySelector(`.${ID}__fakeBtn`)
      ) {
        submitBtn.insertAdjacentHTML(
          'beforebegin',
          `<button class="btn ${ID}__fakeBtn" type="button">Get instant quote</button>`
        );
      }
    });
  });
};
