import { uspFreeSampleIcon } from '../assets/icons';
import banner from '../components/banner';
import subBanner from '../components/subBanner';
import usp from '../components/usp';
import { uspData } from '../data/data';
import startTimer from '../helpers/startTimer';

const tradeDiscountsPage = (ID, endDate) => {
  const attachPoint = document.querySelector('#maincontent');
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div style='display:none'>${uspFreeSampleIcon}</div>`
  );

  document.body.classList.add(`${ID}__tradeDiscountsPage`);

  const lfClubHTML = () => `<div class="${ID}__lfClub">
      <div class="${ID}__lfClubText">Whether you’re a seasoned pro or new to the game, you need a flooring supplier you can trust. Sign up to our exclusive club to <span class="${ID}__semiBold">get first-class products</span> you can rely on <span class="${ID}__semiBold">at discounted prices</span>. Luxury Made Affordable is what we do best.
      </div>
    </div>`;

  const usps = () =>
    `<div class="${ID}__usps">${uspData.map((item) => usp(ID, item)).join('')}</div>`;

  const authContainerHTML = () => `<div class="${ID}__authContainer">
      <div class="${ID}__registrationBox">
        <p>Access offers</p>
        <button class="register-btn" id="${ID}__registerBtn">
            Register now
            <svg fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.00 330.00" xml:space="preserve" stroke="#ffffff" stroke-width="0.0033"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
        </button>
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
                        <div class="${ID}__faqAccordion-title">How do the discounts work?</div>
                        <div class="${ID}__faqAccordion-icon">
                            <i class="arrow"></i>
                        </div>
                    </div>
                    <div class="${ID}__faqAccordion-content">
                        <p>Once you’ve signed up, you’ll unlock our discounted trade prices. That means 
you’ll get 15% off all of our floors, plus 25% off any accessories.
                        </p>
                    </div>
                </div>

                <div class="${ID}__faqAccordion">
                    <div class="${ID}__faqAccordion-header">
                        <div class="${ID}__faqAccordion-title">Will I still get unlimited free samples?</div>
                        <div class="${ID}__faqAccordion-icon">
                            <i class="arrow"></i>
                        </div>
                    </div>
                    <div class="${ID}__faqAccordion-content">
                        <p>Yes, there’s no limit to how many free samples you can order from us. Whether 
you need a collection to keep on hand to show potential clients or you want a 
selection for a specific project, we’ve got you covered.
                        </p>
                        <p>And if you’re not sure what exactly you’re after, just send us a project brief and 
we’ll pick some for you!</p>
                    </div>
                </div>

                <div class="${ID}__faqAccordion">
                    <div class="${ID}__faqAccordion-header">
                        <div class="${ID}__faqAccordion-title">I’m planning ahead - Can I reserve stock?</div>
                        <div class="${ID}__faqAccordion-icon">
                            <i class="arrow"></i>
                        </div>
                    </div>
                    <div class="${ID}__faqAccordion-content">
                        <p>Yes, we’re more than happy to keep your stock in our warehouse, at no extra 
charge. Just let us know when you’re ready and we’ll deliver it to wherever you 
like.
                        </p>
                        <p>Give our friendly flooring experts a call on 0330 1743 180 to find out more.</p>
                    </div>
                </div>

                <div class="${ID}__faqAccordion">
                    <div class="${ID}__faqAccordion-header">
                        <div class="${ID}__faqAccordion-title">How will my account manager help?</div>
                        <div class="${ID}__faqAccordion-icon">
                            <i class="arrow"></i>
                        </div>
                    </div>
                    <div class="${ID}__faqAccordion-content">
                        <p>Your dedicated account manager will be on hand for anything you need, 
whether you’ve got product questions, you want to check stock levels or you’re 
after a quote. Drop them a call or an email and they’ll be happy to help.</p>
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
    startTimer(ID, endDate);
  }
};
export default tradeDiscountsPage;
