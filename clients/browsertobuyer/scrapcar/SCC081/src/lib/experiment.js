import setup from './services/setup';

import shared from './shared/shared';
import { onUrlChange } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const validUrls = [
    'https://quote.scrapcarcomparison.co.uk/quote/sa/',
    'https://quote.scrapcarcomparison.co.uk/quote/sa/car-condition/'
  ];

  if (
    !validUrls.some((url) => window.location.href.includes(url)) ||
    window.location.href.includes('/offer')
  ) {
    document.documentElement.classList.remove(ID);
    document.documentElement.classList.remove(`${ID}-${VARIATION}`);

    return;
  }
  console.log('Experiment initialized');

  const API_URL = 'https://apiv2.prod.systemquotes.co.uk/api/quote-flow/v2/get-vehicle-details';
  const ROOT_CLASS = 'fe-vehicle-header';

  //Avoid duplicates
  if (document.querySelector(`.${ROOT_CLASS}`)) return;

  const params = new URLSearchParams(window.location.search);
  const quoteRequestHash = params.get('qfi');

  if (!quoteRequestHash) {
    console.warn('[VehicleHeader] No qfi param in URL');
    return;
  }

  const payload = {
    quoteRequestHash
  };

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      if (!data || !data.vehicleRegistration) {
        console.warn('[VehicleHeader] No vehicle data in response', data);
        return;
      }

      const { vehicleMake, vehicleModel, vehicleYear, vehicleRegistration } = data;
      console.log('🚀 ~ init ~ data:', data);
      const offerValElem = document.querySelector('section input[name="capLower"]');
      console.log('🚀 ~ init ~ offerValElem:', offerValElem);
      const offerValue = offerValElem ? offerValElem.value : '';
      const headingParts = [vehicleYear, vehicleMake, vehicleModel].filter(Boolean);
      const headingText = headingParts.join(' ');

      const section = document.createElement('div');
      section.className = ROOT_CLASS;
      section.classList.add(`variation-${VARIATION}`);
      section.innerHTML = `
        <div class="${ROOT_CLASS}__inner">
          <div class="${ROOT_CLASS}__offer-value"><div class="flex flex-col md:items-center justify-center"><div class="font-semibold md:text-xl relative w-full"><input type="hidden" value="${offerValue}" name="capLower"><span class="uppercase">Get Up to <span class="orange-highlight">£${offerValue}</span><span class="ml-auto w-full"><button type="button" class="peer" aria-label="Tooltip"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" width="18"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg></button><section role="tooltip" class="absolute basis-full bg-gray-600 hidden max-w-full px-3 py-2 right-0 rounded-sm text-white top-6 z-10 peer-focus:block peer-hover:block "><span class="absolute bg-gray-600 block h-2 right-[6px] rotate-45 w-2 -top-[3px]"></span><p class="text-xs">All prices shown are based on the current information we have for your vehicle and are subject to change</p></section></span></div></div></div>
          <h1 class="${ROOT_CLASS}__title"></span>
            ${headingText}
          </h1>
          <div class="${ROOT_CLASS}__plate-wrap">
            <div class="${ROOT_CLASS}__plate">
              <span class="${ROOT_CLASS}__plate-text">
                ${vehicleRegistration}
              </span>
            </div>
          </div>
          <a href="https://www.scrapcarcomparison.co.uk/quote-forms/rnf/" class="${ROOT_CLASS}__not-my">This is not my vehicle</a>
        </div>
      `;

      //Insert at top of body (tweak if you have a specific container)
      document
        .querySelector('main > form:first-child')
        .insertAdjacentElement('afterbegin', section);
    })
    .catch((err) => {
      console.error('[VehicleHeader] Error fetching vehicle details', err);
    });

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  setup();
  if (window.location.pathname === '/quote/sa/') {
    //Find the CTA and then its container <section>
    const cta = document.querySelector('button[aria-label="Get offers"]');
    if (!cta) return;

    const formSection = cta.closest('section');
    if (!formSection) return;

    //Add a hook class so our CSS is scoped
    formSection.classList.add('fe-form-enhanced');
    formSection.classList.add(`variation-${VARIATION}`);

    //1. Add "All fields are required" at the very top of the container
    if (!formSection.querySelector('.fe-all-required')) {
      const msg = document.createElement('p');
      msg.className = 'fe-all-required';
      msg.textContent = 'All fields are required';
      formSection.insertBefore(msg, formSection.firstChild);
    }

    //2. Move the privacy disclaimer UNDER the CTA
    const disclaimer = Array.from(formSection.querySelectorAll('p')).find((p) =>
      p.textContent.trim().startsWith('By requesting a price for your vehicle')
    );

    if (disclaimer && disclaimer !== cta.nextElementSibling) {
      disclaimer.classList.add('fe-privacy-text');
      cta.insertAdjacentElement('afterend', disclaimer);
    }

    //3. Update CTA text to match visual ("GET MY OFFERS")
    cta.textContent = 'GET MY OFFERS';
  } else if (window.location.pathname === '/quote/sa/car-condition/') {
    const btn = document.querySelector('button[aria-label="Next"]');
    if (!btn) return;

    const section = btn.closest('section');
    if (!section) return;

    //Scope
    section.classList.add('fe-form-enhanced-page2');
    section.classList.add(`variation-${VARIATION}`);

    //Hide progress indicators
    const progress = section.querySelector('.bg-conrete');
    if (progress) progress.style.display = 'none';

    //Update CTA
    btn.textContent = 'GET BEST PRICE';
    btn.setAttribute('aria-label', 'Get best price');
    btn.removeAttribute('disabled');

    //Fix layout: assign row classes
    const fieldsets = section.querySelectorAll('fieldset');

    fieldsets.forEach((fs) => {
      const wrapper = fs.querySelector('.flex.mt-2, .flex.sm\\:flex-nowrap, .flex-wrap');
      if (!wrapper) return;

      const items = wrapper.children.length;

      if (items === 3) {
        wrapper.classList.add('fe-row-3');
      } else if (items === 2) {
        wrapper.classList.add('fe-row-2');
      }
    });
  }
};

export default () => {
  console.log(ID);

  init();

  onUrlChange(() => {
    init();
  });
};
