import banner from '../components/banner';
import subBanner from '../components/subBanner';
import usp from '../components/usp';
import { uspData } from '../data/data';

const tradeDiscountsPage = (ID) => {
    const attachPoint = document.querySelector('#maincontent');

    document.body.classList.add(`${ID}__tradeDiscountsPage`);

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
      ${banner(ID)}
      ${subBanner(ID)}
      ${lfClubHTML()}
      ${usps()}
      ${authContainerHTML()}
      ${faqHTML()}
    </div>`;

    if (!document.querySelector(`.${ID}__mainContainer`)) {
        attachPoint.insertAdjacentHTML('afterbegin', mainContainer);
    }
};
export default tradeDiscountsPage;
