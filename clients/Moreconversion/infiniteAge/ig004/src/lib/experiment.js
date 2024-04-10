import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  const extractNumber = (str) => {
    const num = str.match(/\d/g);
    return num.join('');
  };

  const isMobile = window.innerWidth < 576;

  //if (!isMobile) return;

  const oneTimePacks = document.querySelectorAll('.oneetime [data-val]');
  const subPacks = document.querySelectorAll('.subscript [data-val]');

  const oneTimePacksArr = [...oneTimePacks];
  const subPacksArr = [...subPacks];

  const highestValOneTime = oneTimePacksArr.reduce(
    (acc, curr, i) => {
      if (window.getComputedStyle(curr).display === 'none') return acc;

      const title = curr.querySelector('.package-card__title ').textContent;
      const getVal = Number(extractNumber(title));
      //curr.classList.add(`${ID}__onetime-${i + 1}`);
      if (getVal > acc?.val) {
        acc.val = getVal;
        acc.el = curr;
      }
      return acc;
    },
    {
 val: 0, el: null
}
  );

  const highestValSub = subPacksArr.reduce(
    (acc, curr, i) => {
      if (window.getComputedStyle(curr).display === 'none') return acc;
      const title = curr.querySelector('.package-card__title ').textContent;
      const getVal = Number(extractNumber(title));

      //curr.classList.add(`${ID}__sub-${i + 1}`);

      if (getVal > acc?.val) {
        acc.val = getVal;
        acc.el = curr;
      }
      return acc;
    },
    {
 val: 0, el: null
}
  );
  console.log('highestValOneTime:', highestValOneTime);
  console.log('highestValSub:', highestValSub);

  //if (!isMobile) return;

  const highestValOneTimeEl = highestValOneTime.el;
  const highestValSubEl = highestValSub.el;

  highestValOneTimeEl?.classList.add(`${ID}__highest-val-one-time`);
  highestValSubEl?.classList.add(`${ID}__highest-val-sub`);

  const pkgStripOneTime = document.querySelector('.oneetime .pkg_strip');
  const pkgStripSub = document.querySelector('.subscript .pkg_strip');

  //clonedPkgStrip.classList.add(`${ID}__cloned-pkgstrip`);

  if (oneTimePacks.length === 0) return;
  const secondOneTime = oneTimePacks[1];
  secondOneTime.classList.add(`${ID}__first-one-time`);
  secondOneTime.insertAdjacentElement('afterend', highestValOneTimeEl);
  if (isMobile) {
    highestValOneTimeEl.insertAdjacentElement('beforebegin', pkgStripOneTime);
  }

  if (subPacks.length === 0) return;
  const firstSub = subPacks[0];
  firstSub.classList.add(`${ID}__first-sub`);
  firstSub.insertAdjacentElement('afterend', highestValSubEl);
  if (isMobile) {
    highestValSubEl.insertAdjacentElement('beforebegin', pkgStripSub);
  } else {
    document.querySelectorAll('.ig003__most-popular .package-card__text-2')[1].style.order = 1;
  }
  //document.body.classList.remove('ig003__most-popular');
};
