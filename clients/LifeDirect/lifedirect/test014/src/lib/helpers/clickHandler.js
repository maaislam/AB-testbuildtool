import dispatchChange from './dispatchChange';

const clickHandler = (ID, target) => {
  const clickedElm = (selector) => target.closest(selector);
  if (clickedElm('[data-action="simple-select"]')) {
    dispatchChange('Stepped');
    clickedElm('[data-action="simple-select"]').classList.add('selected');
    document.querySelector('[data-action="show-more"]').classList.remove('selected');
    document.querySelector(`.${ID}__levelcoversubs`).classList.add(`${ID}__hide`);
  } else if (clickedElm('[data-action="show-more"]')) {
    document.querySelector(`.${ID}__levelcoversubs`).classList.remove(`${ID}__hide`);
    document.querySelectorAll(`.${ID}__agegroup`)[1].click();
    clickedElm('[data-action="show-more"]').classList.add('selected');
    document.querySelector('[data-action="simple-select"]').classList.remove('selected');
  } else if (clickedElm(`.${ID}__agegroup`)) {
    const clickedElem = clickedElm(`.${ID}__agegroup`);
    document.querySelectorAll(`.${ID}__agegroup`).forEach((agegroup) => {
      agegroup.classList.remove('selected');
    });
    dispatchChange(clickedElem.dataset.agegroup);
    clickedElem.classList.add('selected');
  } else if (clickedElm(`.${ID}__aboutcovers`)) {
    document.querySelectorAll('.space-s')[0].click();
  }
};

export default clickHandler;
