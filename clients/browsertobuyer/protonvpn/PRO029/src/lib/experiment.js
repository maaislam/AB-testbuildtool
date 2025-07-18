import { discountIcon, downArrow, savingsIcon } from './assets/icons';
import { trackGA4Event } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

//import shared from './shared/shared';

const { ID } = shared;

const ratingImg = `<div class="guarantee-box hide-mob">
                                        <div class="left-box">
                                            <img src="https://d31hba4f1d8ahx.cloudfront.net/PRO/006/30-day-guarantee_1.png" alt="30 Day Guarantee" width="42" height="51">
                                        </div>
                                        <div class="right-box">
                                            <h4>30-day money-back <br>guarantee</h4>
                                            <p>Try Proton VPN totally risk free - if for any reason you change your mind. you’ll receive a full refund. No
                                                questions asked.</p>
                                        </div>
                                    </div>`;

const planFeatures = [
  {
    html: 'Use on up to 10 devices at once'
  },
  {
    html: '13,650+ servers in 120+ countries'
  },
  {
    html: 'Dedicated servers optimized for streaming'
  },
  {
    html: `Apps for <img src="https://cdn-3.convertexperiments.com/uf/100410023/100411975/available-apps-for_6867368a976f5.png" 
              alt="Available Apps" style="height: 20px; vertical-align: middle; margin-left: 6px;" />`
  }
];

const TICK_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M9.85232 0.509656C9.93701 0.596055 9.98445 0.712216 9.98445 0.833198C9.98445 0.954181 9.93701 1.07034 9.85232 1.15674L3.63614 7.43727C3.57754 7.49673 3.5077 7.54395 3.43069 7.57617C3.35367 7.6084 3.27102 7.625 3.18753 7.625C3.10405 7.625 3.0214 7.6084 2.94438 7.57617C2.86737 7.54395 2.79753 7.49673 2.73893 7.43727L0.147869 4.82083C0.0629649 4.73455 0.0153809 4.61835 0.0153809 4.49729C0.0153809 4.37624 0.0629649 4.26004 0.147869 4.17375C0.189714 4.13111 0.239639 4.09724 0.294724 4.07412C0.34981 4.051 0.408951 4.03909 0.468692 4.03909C0.528433 4.03909 0.587575 4.051 0.642661 4.07412C0.697746 4.09724 0.747671 4.13111 0.789516 4.17375L3.18753 6.59624L9.21068 0.509656C9.25252 0.467018 9.30245 0.433149 9.35753 0.410029C9.41262 0.386908 9.47176 0.375 9.5315 0.375C9.59124 0.375 9.65038 0.386908 9.70547 0.410029C9.76055 0.433149 9.81048 0.467018 9.85232 0.509656Z"
      fill="#38257F"/>
  </svg>
`;

const pricingBoxClassNameConfig = {
  0: '',
  1: `${ID}-details`,
  2: `${ID}-payment`
};

const durationCopyInYear = {
  '1 month': '1 month',
  '12 months': '1 year',
  '24 months': '2 year'
};

const imgBasePath = 'https://d31hba4f1d8ahx.cloudfront.net/PRO/006/';

const socialProofElem = `
      <div class="rating-section">
          <div class="rating-logo"><img src="${imgBasePath}rating-logo-cnet.png" alt="CNET" width="115" height="86"></div>
          <div class="rating-logo"><img src="${imgBasePath}rating-logo-pceditor.png" alt="PC - EDITORS CHOICE" width="97" height="86"></div>
          <div class="rating-logo"><img src="${imgBasePath}rating-logo-techradar.png" alt="Tech Radar PRO" width="99" height="85"></div>
       </div>
  `;

const formatPrice = (amountRaw, symbol) => {
  const amount = amountRaw.replace(/[€£$]/g, '').trim();
  return symbol === '€' ? `${amount} €` : `${symbol}${amount}`;
};

const createConnectedBillingDropdown = () => {
  const plans = [...document.querySelectorAll('.pricing-box-content-cycle')];
  if (!plans.length) return;

  const dropdown = document.createElement('div');
  dropdown.className = 'billing-dropdown';
  dropdown.innerHTML = '<div class="billing-dropdown-container"></div>';

  const selected = document.createElement('div');
  selected.className = 'billing-selected';
  selected.tabIndex = 0;

  const menu = document.createElement('div');
  menu.className = 'billing-options';

  selected.addEventListener('click', () => {
    menu.classList.toggle('visible');
    if (menu.classList.contains('visible')) {
      selected.classList.add('open');
      trackGA4Event('PRO 029', 'Drop-down Opened', '');
    } else {
      selected.classList.remove('open');
    }
  });
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      menu.classList.remove('visible');
      selected.classList.remove('open');
    }
  });

  const allPlanData = [];

  const discountMsg = document.createElement('div');
  const upgradeMsg = document.createElement('div');
  discountMsg.className = 'discount-applied-msg';
  upgradeMsg.className = 'billing-warning-msg';
  discountMsg.style.marginBottom = '16px';
  upgradeMsg.style.marginTop = '10px';
  const updateMessages = (currentLabel, currentPerMonth, currentMonths, currencySymbol) => {
    const currentIndex = allPlanData.findIndex((p) => p.months === currentMonths);
    const nextPlan = allPlanData[currentIndex + 1];

    if (nextPlan) {
      const totalCurrent = currentPerMonth * nextPlan.months;
      const totalNext = nextPlan.perMonthNum * nextPlan.months;
      const savings = totalCurrent - totalNext;

      upgradeMsg.innerHTML =
        savings > 0
          ? `<div style="color:#372580; display:flex;align-items:center;font-size:14px;">
              <span class="savings-icon">${savingsIcon}</span><span class="savings-text"><strong>Save ${currencySymbol}${savings.toFixed(
              2
            )}</strong>
              with a <a href="#" style="text-decoration: underline;">${
                durationCopyInYear[nextPlan.duration] || nextPlan.duration
              } plan</a></span>
            </div>`
          : '';
    } else {
      upgradeMsg.innerHTML = '';
    }

    if (currentMonths >= 12) {
      const base = allPlanData.find((p) => p.months === 1);
      if (base) {
        const percent = Math.round(((base.perMonthNum - currentPerMonth) / base.perMonthNum) * 100);
        discountMsg.innerHTML = `
            <div style="color:#372580; display:flex;align-items:center;">
              <span class="discount-icon">${discountIcon}</span> Your ${percent}% discount has been applied
            </div>
          `;
      }
    } else {
      discountMsg.innerHTML = '';
    }
  };
  const bacupData = {
    0: {
      duration: '1 month',
      months: 1
    },
    1: {
      duration: '12 months',
      months: 12
    },
    2: {
      duration: '24 months',
      months: 24
    }
  };

  plans.forEach((plan, i) => {
    const radio = plan.querySelector('input[type="radio"]');
    if (!radio) return;

    const { duration } = bacupData[i];
    const perMonthRaw = plan.querySelector('.h2')?.textContent.trim() ?? '';
    const billedText = plan.querySelector('[id$="-billed"]')?.innerText.trim() ?? '';
    const badge = plan.querySelector('.cycle-selector-label');

    const billedAmountMatch = billedText.match(/(?:billed at|at)\s+([€£$]?\s?\d+[\d.,]*)/i);
    const currencyMatch = perMonthRaw.match(/([€£$])\s*$|^\s*([€£$])/);
    const symbol = currencyMatch?.[1] || currencyMatch?.[2] || '';

    const billedAmountValue = billedAmountMatch?.[1] ?? perMonthRaw;
    const billedAmount = formatPrice(billedAmountValue, symbol);
    const perMonth = formatPrice(perMonthRaw, symbol);

    const months = parseInt(duration.match(/\d+/)?.[0] ?? '0', 10);
    const perMonthNum = parseFloat(perMonth.replace(/[^\d.]/g, ''));

    const planData = {
      duration,
      months,
      perMonthNum,
      billedAmount,
      symbol,
      radio
    };

    console.log('🚀 ~ planData:', planData);

    allPlanData.push(planData);

    const option = document.createElement('div');
    option.className = 'billing-option';

    const left = document.createElement('div');
    left.className = 'billing-left';
    left.innerHTML = `<div class="billing-duration">${
      durationCopyInYear[duration] || duration
    }</div> 
    ${i === 0 ? `<div class="billing-per-month">${perMonth} / month</div>` : ''}`;

    const right = document.createElement('div');
    right.className = 'billing-right';
    right.innerHTML = `
        <div class="billing-total">${billedAmount}</div>
        ${i !== 0 ? `<div class="billing-per-month">${perMonth} / month</div>` : ''}
      `;

    const basePlan = allPlanData.find((p) => p.months === 1);
    console.log('🚀 ~ basePlan:', basePlan);
    if (basePlan && months > 1) {
      const savings = basePlan.perMonthNum * months - perMonthNum * months;
      if (savings > 0) {
        const badgeEl = document.createElement('div');
        badgeEl.className = 'billing-save-badge';
        badgeEl.textContent = `Save ${symbol}${savings.toFixed(2)}`;
        left.appendChild(badgeEl);
      }
    }

    if (badge) {
      const badgeEl = document.createElement('span');
      badgeEl.className = 'billing-badge';
      badgeEl.textContent = 'BEST VALUE';
      dropdown.classList.add('has-best');
      selected.classList.add('has-best');
    }

    const updateSelected = (durations, total, monthly) => {
      selected.innerHTML = `
          <div class="billing-label">
            <div class="billing-duration">${durationCopyInYear[durations] || durations}</div>
            <div class="billing-per-month">${monthly} / month</div>
          </div>
          <div class="billing-info">
            <div class="billing-total">${total}</div>
            <span class="dropdown-icon">${downArrow}</span>
          </div>
        `;
    };

    option.append(left, right);

    option.addEventListener('click', () => {
      radio.click();
      updateSelected(duration, billedAmount, perMonth);
      menu.querySelectorAll('.billing-option').forEach((opt) => opt.classList.remove('active'));
      option.classList.add('active');
      trackGA4Event('PRO 029', 'Plan Updated', '');
      menu.classList.remove('visible');
      updateMessages(duration, perMonthNum, months, symbol);
    });

    option.addEventListener('mouseenter', () => {
      //check if active
      menu.querySelectorAll('.billing-option').forEach((opt) => opt.classList.add('hover'));
    });
    option.addEventListener('mouseleave', () => {
      menu.querySelectorAll('.billing-option').forEach((opt) => opt.classList.remove('hover'));
    });

    if (radio.checked) {
      updateSelected(duration, billedAmount, perMonth);
      option.classList.add('active');
      setTimeout(() => updateMessages(duration, perMonthNum, months, symbol), 100);
    }

    menu.appendChild(option);
  });

  dropdown.querySelector('.billing-dropdown-container').append(selected, menu);

  const pricingRow = document.querySelectorAll('.pricing-box')[1];
  const secondColumn = pricingRow?.children[0];
  const targetWrapper = secondColumn?.lastElementChild;
  const targetDiv = targetWrapper?.querySelector('div');

  if (targetDiv) {
    targetDiv.style.display = 'none';
    targetDiv.classList.add('billing-dropdown-attach');
    targetDiv.insertAdjacentHTML('beforebegin', `<h3 class="${ID}__summaryTitle">Summary</h3>`);
    targetDiv.insertAdjacentElement('beforebegin', discountMsg);
    targetDiv.insertAdjacentElement('beforebegin', dropdown);
    targetDiv.insertAdjacentElement('beforebegin', upgradeMsg);
  }
};

const adjustCountryDpd = () => {
  const countryDpd = document.querySelector('[data-testid="billing-country"]');
  const wrapper = countryDpd?.closest('.field-two-container');
  console.log('🚀 ~ adjustCountryDpd ~ wrapper:', wrapper);

  const newPosition = document.querySelector('.billing-dropdown-attach');
  if (wrapper && newPosition) {
    newPosition.insertAdjacentElement('afterend', wrapper);
  }
};

const adjustCurrencyDpd = () => {
  const currencyDpd = document.querySelector('[data-testid="currency-selector"]');
  const wrapper = currencyDpd?.closest('div');
  const thirdPricingBox = document.querySelectorAll('.pricing-box')[2];
  const newPosition = thirdPricingBox.querySelector('div');

  if (wrapper && newPosition) {
    newPosition.insertAdjacentElement('beforeend', wrapper);
  }
};

const adjustStepNames = () => {
  const stepNames = document.querySelectorAll('.step-label');
  stepNames.forEach((step, i) => {
    const stepWrapper = step.parentElement.parentElement;
    const stepCountName = step.parentElement;
    const stepHeadline = stepWrapper.querySelector('h2');

    const stepHeadlineConfig = {
      0: '',
      1: 'Enter your email address',
      2: 'Select your payment method'
    };

    if (stepHeadline) {
      stepHeadline.textContent = stepHeadlineConfig[i];
    }
    if (stepCountName) {
      stepCountName.style.display = 'none';
    }
  });
};

const renderBulletPoints = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'plan-features';

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add(`${ID}__moneyBackImageWrapper`);
  imageWrapper.innerHTML = ratingImg;

  const heading = document.createElement('h3');
  heading.textContent = 'Your plan includes:';
  wrapper.appendChild(heading);

  planFeatures.forEach((item) => {
    const feature = document.createElement('div');
    feature.className = 'feature-item';

    const tick = document.createElement('div');
    tick.className = 'tick-icon';
    tick.innerHTML = TICK_SVG;

    const content = document.createElement('div');
    content.innerHTML = item.html;

    feature.appendChild(tick);
    feature.appendChild(content);

    wrapper.appendChild(feature);
  });
  wrapper.appendChild(imageWrapper);

  const isMobile = window.innerWidth <= 600;
  const priceBoxIndex = isMobile ? 1 : 2;
  const newPositionSelector = isMobile ? 'div' : '.pricing-box-content > div > div > div';
  const attachOrder = isMobile ? 'beforeend' : 'beforebegin';
  const thirdPricingBox = document.querySelectorAll('.pricing-box')[priceBoxIndex];
  console.log('🚀 ~ renderBulletPoints ~ thirdPricingBox:', thirdPricingBox);
  const newPosition = thirdPricingBox.querySelector(newPositionSelector);
  console.log('🚀 ~ renderBulletPoints ~ newPosition:', newPosition);

  newPosition.insertAdjacentElement(attachOrder, wrapper);
  if (isMobile) {
    const planFeatureElement = document.querySelector('.plan-features');
    planFeatureElement.classList.add('mt-8', 'sm:mt-0', 'sm:p-11', 'sm:pt-0', 'pt-0');
  }
};

const renderSignInComponent = () => {
  const signIncomponent = document.querySelector(
    '[name="account-form"] span:has(a[href*="/dashboard"])'
  );
  //extract href from the link
  const link = signIncomponent.querySelector('a[href*="/dashboard"]');
  if (link) {
    const href = link.getAttribute('href');
    const newHtml = (screen) =>
      `<span class="${ID}__signWrapper ${ID}__${screen}">Already have an account? <a class="link link-focus text-nowrap" href="${href}">Sign in</a></span>`;
    console.log('Extracted href:', href);
    const newAttachPoint = document.querySelector('header > div > div:nth-child(1)');
    const headerWrapper = newAttachPoint.parentElement;
    if (newAttachPoint && !document.querySelector(`.${ID}__signWrapper.${ID}__desktop`)) {
      newAttachPoint.insertAdjacentHTML('afterend', newHtml('desktop'));
    }
    if (headerWrapper && !document.querySelector(`.${ID}__signWrapper.${ID}__mobile`)) {
      headerWrapper.insertAdjacentHTML('afterend', newHtml('mobile'));
    }
  }
};

const renderMoneyBackImage = () => {
  const payementWrapper = document.querySelector('form[name="payment-form"]');
  const submitBtn = payementWrapper?.querySelector('.rating-section');

  if (!document.querySelector(`.${ID}__moneyBackImageWrapper.${ID}__mobileImage`)) {
    submitBtn?.insertAdjacentHTML(
      'beforebegin',
      `
      <div class="${ID}__moneyBackImageWrapper ${ID}__mobileImage">
        ${ratingImg}
      </div>
    `
    );
  }
};
const renderSocialProof = () => {
  const threeDs = document.querySelector('[data-testid="3ds-info"]');
  const existingSocialProofContainer = threeDs.parentElement;
  existingSocialProofContainer.style.display = 'none';

  const socialProofContainer = existingSocialProofContainer.nextElementSibling;

  if (socialProofContainer) {
    socialProofContainer.insertAdjacentHTML('afterend', socialProofElem);
  }
};

export default () => {
  setup();
  createConnectedBillingDropdown();
  adjustCountryDpd();
  adjustCurrencyDpd();
  renderBulletPoints();
  adjustStepNames();
  renderSignInComponent();
  setTimeout(() => {
    renderSocialProof();
    renderMoneyBackImage();
  }, 1000);

  //hide step 1
  const step1 = document.querySelectorAll('.pricing-box')[0];
  step1.style.display = 'none';

  document.querySelectorAll('.pricing-box').forEach((box, index) => {
    const className = pricingBoxClassNameConfig[index];
    if (className) {
      box.classList.add(className);
    }
  });
};
