import combineBtn from '../components/combineBtn';
import { observeDOM, observeIntersection } from './utils';

export const stickyCombineBtn = (id) => {
  const intersectionAnchor = document.querySelector('.product-info-main');
  const anchorPoint = document.body;

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const stickySection = document.querySelector(`.${id}__stickyATC`);
      let scrollTimer;
      clearTimeout(scrollTimer);
      if (entry.isIntersecting) {
        stickySection.classList.remove(`${id}__show`);
        stickySection.classList.add('slide-out-bottom');
        scrollTimer = setTimeout(() => {
          stickySection.classList.add(`${id}__hide`);
        }, 250);
      } else {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${id}__hide`);
        stickySection.classList.add(`${id}__show`);
      }
    });
  };

  anchorPoint.insertAdjacentHTML('beforeend', combineBtn(id));

  observeIntersection(intersectionAnchor, 0, handleIntersection);

  const sampleInit = (mutation) => {
    const { addedNodes, removedNodes, target } = mutation;
    const orderSampleCta = document.querySelector(`.${id}__orderSampleBtn`);
    if (removedNodes.length > 0 && target.innerText === 'Adding free sample') {
      orderSampleCta.classList.add(`${id}__disabled`);
      orderSampleCta.innerText = 'Adding free sample';
    } else if (
      addedNodes.length > 0 &&
      target.innerText.toLowerCase().trim() === 'order a sample'
    ) {
      orderSampleCta.classList.remove(`${id}__disabled`);
      document.querySelector('.sample-add-form button[type="submit"] > span').innerText =
        'Order a free sample';
      orderSampleCta.innerText = 'Order a free sample';
    }
  };

  const atcInit = (mutation) => {
    const { addedNodes, target } = mutation;
    const cta = document.querySelector(`.${id}__atcBtn`);
    if (addedNodes.length > 0 && target.innerText === 'Adding...') {
      cta.classList.add(`${id}__disabled`);
      cta.innerText = 'Adding...';
    }
  };

  observeDOM('#product-addtocart-button1 span', sampleInit);
  observeDOM('#product-addtocart-button span', atcInit);
};
