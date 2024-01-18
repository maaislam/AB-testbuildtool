import setup from './services/setup';
import shared from './shared/shared';
import techConnect from './components/techConnect';
import { heartIcon } from './assets/svg';

const { ID } = shared;

const init = () => {
  if (!document.querySelector(`.${ID}__techConnectContainer`)) {
    const techConnectAnchorPoint = document.querySelector('.sales-form-title');
    techConnectAnchorPoint.insertAdjacentHTML('afterbegin', techConnect(ID));
  }
  const headerLogo = document.querySelector('.header-inner .header-logo');
  const salesForm = document.querySelector('.sales-form-holder');

  headerLogo.href = 'https://www.dice.com/hiring';
  salesForm.classList.add(`${ID}__salesForm`);

  const progressCounter = () => {
    const htmlStr = `<div class="${ID}__progressCounter">
        Step <span class='${ID}__incrementalText'>1</span> of 3
    </div>`;
    return htmlStr;
  };
  const feProgressBar = document.querySelector('.fe-progress-bar');
  if (!document.querySelector(`.${ID}__progressCounter`)) {
    feProgressBar.insertAdjacentHTML('afterend', progressCounter());
  }

  //logo section
  const feLogo = document.querySelector('.logo-section');
  feLogo.classList.add(`${ID}__logoSection`);

  const logoSrcs = [
    'https://fe-test-dev.s3.amazonaws.com/Dice/Dice-128/capital.png',
    'https://fe-test-dev.s3.amazonaws.com/Dice/Dice-128/robartthalflogo.png',
    'https://fe-test-dev.s3.amazonaws.com/Dice/Dice-128/disney.png',
    'https://fe-test-dev.s3.amazonaws.com/Dice/Dice-128/att.png',
    'https://fe-test-dev.s3.amazonaws.com/Dice/Dice-128/kforce.jpg'
  ];
  feLogo.querySelectorAll('.logos img').forEach((img, index) => {
    img.src = logoSrcs[index];
  });

  //we know tech section
  const weKnowSection = document.querySelector('.bm_we_know_section');
  const alignImage = weKnowSection.querySelector('.align-image');
  weKnowSection.classList.add(`${ID}__weKnowSection`);

  if (!document.querySelector(`.${ID}__alignImage`)) {
    const newAlignImage = `<div class='${ID}__alignImageWrapper'>
      <img class='${ID}__alignImage' src='https://fe-test-dev.s3.amazonaws.com/Dice/Dice-128/stats.png'/>
    </div>`;
    alignImage.insertAdjacentHTML('afterend', newAlignImage);
  }

  const bmTechSectionElem = document.querySelector('.bm_tech_position_text');
  bmTechSectionElem.insertAdjacentHTML('afterbegin', heartIcon);

  const bmTechSection = `<section class='${ID}__bmTechSection'>
    ${bmTechSectionElem.outerHTML}
  </section>`;

  if (!document.querySelector(`.${ID}__bmTechSection`)) {
    weKnowSection.insertAdjacentHTML('afterend', bmTechSection);
  }

  //contact us
  const feFooter = document.querySelector('.fotter_section');
  feFooter.classList.add(`${ID}__footerSection`);
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('#fe-next-one') || target.closest('.mktoButtonWrap')) {
      const incrementalTextElem = document.querySelector(`.${ID}__incrementalText`);

      const DELAY = 200;
      setTimeout(() => {
        const feProgressBar = document.querySelector('.fe-progress-bar');
        const bmFormHeading = document.querySelector('.bm_form_heading');

        if (feProgressBar.classList.contains('fe-step1-complete') && !bmFormHeading.classList.contains('step1Complete')) {
          incrementalTextElem.textContent = '2';
        } else if (bmFormHeading.classList.contains('step1Complete')) {
          incrementalTextElem.textContent = '3';
        }
      }, DELAY);
    }
  });
};
