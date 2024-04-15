/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { arrow } from './assets';

const { VARIATION } = shared;

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    const isToplist = target.closest('[data-ga-action="Operators > Bonus index"]');
    //const getOperatorNameFromReviewUrl = (url) => {
    //const operatorName = url.split('/').slice(-1)[0];
    //return operatorName;
    //};
    if (target.closest('[href*="/redirect/operator"]')) {
      gaTracking(
        `${target.closest('a').dataset.gaLabel} | CTA Clicks to Operator (Bonus Intent)${
          isToplist ? ' | Toplist' : ''
        }`
      );
    } else if (target.closest('[href*="/spelbolag/"]') || target.closest('[href*="/bookmaker/"]')) {
      const operatorUrl = target.closest('a').href;
      gaTracking(
        `${operatorUrl.split('/').at(-2)} | CTA Click to Reviews${isToplist ? ' | Toplist' : ''}`
      );
    } else if (target.closest('.btmline-div')) {
      const tcOperator = target.closest('.bb-box-wrapper').dataset.opName;
      gaTracking(`${tcOperator} | Bottomline Clicks`);
    }
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') {
    return;
  }

  //-----------------------------
  //Write experiment code here

  const cards = document.querySelectorAll('[data-ga-action*="Operators"] > div');
  cards.forEach((el) => {
    el.querySelector('.row.w100p > div.col-lg-3.col-12').classList.remove('col-lg-3', 'col-12');
    el.querySelector('.rest-box-content').classList.remove('col-lg-5');
    el.querySelector('.buttons-box').classList.remove('col-lg-4');
    el.querySelector('.buttons-box > div').classList.remove('col-lg-6');

    el.querySelector('.bb-box-wrapper > div:nth-child(1)').classList.remove('hidden-md-down');

    const ratingStars = el.querySelector('.rating-stars');

    el.querySelector('.bb-box-wrapper .bb-box > div:nth-child(1)').insertAdjacentHTML(
      'afterend',
      '<div class="rating_div"></div>'
    );

    const bottomLine = el.querySelector('.bottom-line');
    if (bottomLine) {
      el.querySelector('.bb-box-wrapper > div:nth-child(1)').insertAdjacentHTML(
        'afterend',
        '<div class="btmline-div"></div>'
      );
    }

    const bottomlineClone = bottomLine.cloneNode(true);

    if (ratingStars) {
      const cloneRatings = ratingStars.cloneNode(true);
      const operatorElem = el.querySelector('.bb-box> div:nth-child(1) a');
      const clonedOperatorElem = operatorElem.cloneNode(true);
      const bettingName = operatorElem.getAttribute('data-ga-label');
      clonedOperatorElem.innerText = bettingName;
      clonedOperatorElem.classList.add('betting-name');

      console.log(bettingName, clonedOperatorElem);
      el.setAttribute('data-op-name', bettingName);
      el.querySelector('.rating_div').insertAdjacentElement('afterbegin', cloneRatings);
      el.querySelector('.rating_div').insertAdjacentElement('beforeend', clonedOperatorElem);
    }

    //el.querySelector('.buttons-box .displ-bl').innerHTML = 'Anmeldelse';

    el.querySelector('.btmline-div').insertAdjacentElement('afterbegin', bottomlineClone);
    el.querySelector('.rating_div + div').classList.add('custom-flex');
    el.querySelector('.rating_div + div').classList.remove('row', 'w100p');
    el.querySelector('.buttons-box > div:nth-child(2)').classList.remove('col-lg-6');
    el.querySelector('.buttons-box > div:nth-child(2) > div').classList.remove(
      'col-8',
      'col-sm-12'
    );

    const tandcElem = el.querySelector('.btmline-div .rules-terms-apply');

    //remove <br>
    tandcElem.innerHTML = tandcElem.innerHTML.replace(/<br>/g, '');

    el.querySelector('.btmline-div').insertAdjacentHTML(
      'beforeend',
      `<div class="arrow">${arrow}</div>`
    );
    el.querySelector('.btmline-div > .bottom-line > div').classList.remove(
      'col-sm-12',
      'tr',
      'pr-3'
    );

    el.querySelector('.bb-info-wrapper').classList.add('hide-content');
    el.querySelector('.btmline-div').addEventListener('click', () => {
      el.querySelector('.bb-info-wrapper').classList.toggle('hide-content');
      //el.querySelector('.btmline-div').classList.toggle('hide-content');
      el.querySelector('.arrow').classList.toggle('rotate');
    });

    if (window.innerWidth < 768) {
      el.querySelector('.rating_div').insertAdjacentElement(
        'beforeend',
        el.querySelector('.rest-box-content')
      );

      el.querySelector(
        '.bb-box-wrapper .bb-box > div:nth-child(1) > div:nth-child(1)'
      ).classList.remove('w110', 'h110');

      el.querySelector('.rest-box-content > div:nth-child(1)').classList.remove('pr-4');
    }
  });
};
