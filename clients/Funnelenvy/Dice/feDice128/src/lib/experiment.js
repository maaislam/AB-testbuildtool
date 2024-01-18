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

  //form section
  const salesForm = document.querySelector('.sales-form-holder');
  salesForm.classList.add(`${ID}__salesForm`);

  //logo section
  const feLogo = document.querySelector('.logo-section');
  feLogo.classList.add(`${ID}__logoSection`);

  //we know tech section
  const weKnowSection = document.querySelector('.bm_we_know_section');
  weKnowSection.classList.add(`${ID}__weKnowSection`);

  const bmTechSection = document.querySelector('.bm_tech_position_text');
  bmTechSection.insertAdjacentHTML('afterbegin', heartIcon);

  //contact us
  const feFooter = document.querySelector('.fotter_section');
  feFooter.classList.add(`${ID}__footerSection`);
};

export default () => {
  setup();

  init();
};
