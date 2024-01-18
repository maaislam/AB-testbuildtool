import setup from './services/setup';
import shared from './shared/shared';
import techConnect from './components/techConnect';
import { heartIcon } from './assets/svg';

const { ID } = shared;

const init = () => {
  //tech connect component add
  if (!document.querySelector(`.${ID}__techConnectContainer`)) {
    const techConnectAnchorPoint = document.querySelector('.sales-form-title');
    techConnectAnchorPoint.insertAdjacentHTML('afterbegin', techConnect(ID));
  }

  //header logo src
  const headerLogo = document.querySelector('.header-inner .header-logo');
  headerLogo.href = 'https://www.dice.com/hiring';

  //form section
  const salesForm = document.querySelector('.sales-form-holder');
  salesForm.classList.add(`${ID}__salesForm`);

  //logo section
  const feLogo = document.querySelector('.logo-section');
  feLogo.classList.add(`${ID}__logoSection`);

  //we know tech section
  const weKnowSection = document.querySelector('.bm_we_know_section');
  weKnowSection.classList.add(`${ID}__weKnowSection`);

  const bmTechSectionElem = document.querySelector('.bm_tech_position_text');
  bmTechSectionElem.insertAdjacentHTML('afterbegin', heartIcon);

  const bmTechSection = `<section class='${ID}__bmTechSection'>
    ${bmTechSectionElem.outerHTML}
  </section>`;

  weKnowSection.insertAdjacentHTML('afterend', bmTechSection);

  //contact us
  const feFooter = document.querySelector('.fotter_section');
  feFooter.classList.add(`${ID}__footerSection`);
};

export default () => {
  setup();

  init();
};
