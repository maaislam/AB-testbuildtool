import usp from './components/usp';
import { uspData } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const { pathname } = window.location;
  const attachPoint = document.querySelector('#maincontent');

  if (pathname.includes('/trade-discounts')) {
    document.body.classList.add(`${ID}__tradeDiscountsPage`);
    const subBanner = () => `<div class="${ID}__subBanner">
      <span class="${ID}__semiBold">Price Match Promise</span>
      <span>&nbsp;- Found it cheaper? We'll match it!</span>
    </div>`;

    const lfClubHTML = () => `<div class="${ID}__lfClub">
      <div class="${ID}__lfClubText">Whether you’re a seasoned pro or new to the game, you need a flooring supplier you can trust. Sign up to our exclusive club to <span class="${ID}__semiBold">get first-class products</span> you can rely on <span class="${ID}__semiBold">at discounted prices</span>. Luxury Made Affordable is what we do best.
      </div>
    </div>`;

    const usps = () => `<div class="${ID}__usps">${uspData.map((item) => usp(ID, item)).join('')}</div>`;

    const authContainerHTML = () => `<div class="${ID}__authContainer">
      <div class="${ID}__registrationBox">
        <p>Access offers</p>
        <button class="register-btn" id="${ID}__registerBtn">Register now</button>
      </div>
      <div class="divider"></div>
      <div class="divider-horizontal"></div>
      <div class="${ID}__loginBox">
        <p>Already have an account?</p>
        <button class="login-btn" id="${ID}__loginBtn">Log in</button>
      </div>
    </div>`;

    const faqHTML = () => `
    <div class="${ID}__faqContainer">
        <div class="${ID}__faqWrapper">
            <div class="${ID}__faqTitle">FAQs</div>

            <div class="${ID}__faqAccordionWrapper">
                <div class="${ID}__faqAccordion">
                    <div class="${ID}__faqAccordion-header">
                        <div class="${ID}__faqAccordion-title">What is the Luxury Flooring Club?</div>
                        <div class="${ID}__faqAccordion-icon">
                            <i class="arrow down"></i>
                        </div>
                    </div>
                    <div class="${ID}__faqAccordion-content">
                        <p>The Luxury Flooring Club is an exclusive club for our customers. It offers a range of benefits,
                            including
                            discounted prices on our products, access to exclusive offers, and more. Sign up today to start
                            enjoying the benefits of the Luxury Flooring Club.
                        </p>
                    </div>
                </div>
                <div class="${ID}__faqAccordion">
                    <div class="${ID}__faqAccordion-header">
                        <div class="${ID}__faqAccordion-title">What is the Luxury Flooring Club?</div>
                        <div class="${ID}__faqAccordion-icon">
                            <i class="arrow down"></i>
                        </div>
                    </div>
                    <div class="${ID}__faqAccordion-content">
                        <p>The Luxury Flooring Club is an exclusive club for our customers. It offers a range of benefits,
                            including
                            discounted prices on our products, access to exclusive offers, and more. Sign up today to start
                            enjoying the benefits of the Luxury Flooring Club.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    const mainContainer = `<div class="${ID}__mainContainer">
      ${subBanner()}
      ${lfClubHTML()}
      ${usps()}
      ${authContainerHTML()}
      ${faqHTML()}
    </div>`;

    if (!document.querySelector(`.${ID}__mainContainer`)) {
      attachPoint.insertAdjacentHTML('afterbegin', mainContainer);
    }
  }
};

export default () => {
  setup();
  init();

  document.addEventListener('click', (e) => {
    const { target } = e;

    const faqHeader = target.closest(`.${ID}__faqAccordion-header`);

    if (faqHeader) {
      const content = faqHeader.nextElementSibling;
      const icon = faqHeader.querySelector(`.${ID}__faqAccordion-icon i`);

      content.classList.toggle('open');

      if (content.classList.contains('open')) {
        content.style.maxHeight = `${content.scrollHeight}px`; //Set height to content height
      } else {
        content.style.maxHeight = '0'; //Collapse the content
      }

      //Toggle arrow direction
      icon.classList.toggle('down');
    } else if (target.id === `${ID}__registerBtn`) {
      window.location.href = '/trade-registration';
    } else if (target.id === `${ID}__loginBtn`) {
      window.location.href = '/customer/account/';
    }
  });
};
