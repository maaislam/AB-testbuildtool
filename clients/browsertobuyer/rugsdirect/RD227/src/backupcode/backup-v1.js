if (typeof (btbTestTracking) != "undefined" && btbTestTracking.running) { btbTestTracking.running.rd227 = "v1"; }

(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var shared = {
	    ID: "RD227",
	    VARIATION: "1",
	    CLIENT: "browsertobuyer",
	    SITE: "rugsdirect"
	  };
	var shared$1 = getDefaultExportFromCjs(shared);

	const setup = () => {
	  const { ID, VARIATION } = shared$1;
	  document.documentElement.classList.add(ID);
	  document.documentElement.classList.add(`${ID}-${VARIATION}`);
	};

	const pollerLite = (conditions, callback, maxTime = 10000) => {
	  const POLLING_INTERVAL = 25;
	  const startTime = Date.now();
	  const interval = setInterval(() => {
	    const allConditionsMet = conditions.every((condition) => {
	      if (typeof condition === 'function') {
	        return condition();
	      }
	      return !!document.querySelector(condition);
	    });
	    if (allConditionsMet) {
	      clearInterval(interval);
	      callback();
	    } else if (Date.now() - startTime >= maxTime) {
	      clearInterval(interval);
	      console.error('Polling exceeded maximum time limit');
	    }
	  }, POLLING_INTERVAL);
	};
	const setTextCopy = (VARIATION) => {
	  const copyText = VARIATION === '1' ? 'EVERYTHING10' : 'ALLRUGS10';
	  navigator.clipboard.writeText(copyText);
	};
	const trackGAEvent = (eventCategory, eventAction, eventLabel) => {
	  if (window.dataLayer) {
	    window.dataLayer.push({
	      event: 'gaCustomEvent',
	      eventCategory,
	      eventAction,
	      eventLabel
	    });
	    console.log('event tracked', eventCategory, eventAction, eventLabel);
	  }
	};

	const discountBanner = (id, data) => {
	  const html = `
        <div class="discount-code__wrapper ${id}__discount-banner">
            <div class="${id}__discount-code__label">10% <br> OFF</div>
            <div class="${id}__discount-code__label-point"></div>
            <div class="${id}__discountText">
                <div class="${id}__discount-code__text" data-discount-text="">Get an extra 10% off ${data.mainText}</div>
                 <button class="${id}__claimBtn">Claim Discount</button>
            </div>
            
            <div class="${id}__discount-code__border"></div>
        </div>
    `;
	  return html.trim();
	};

	const discountProd = (id, data) => {
	  const html = `
   
            <div class="${id}__tag-2">
                <div class="${id}__tag-top-style-2">
                </div>
                <div class="${id}__tag-bottom-style-2">
                    <div class="${id}__discount-container-2">
                        <p class="${id}__discount-tag-heading">Get an extra</p>
                        <p class="${id}__discount-tag-text">10% OFF</p>
                        <span class="${id}__discount-tag-text-small">${data.mainText}</span>
                         <button class="${id}__plpClaimBtn">Claim Discount</button>
                    </div>
                </div>
            </div>
     
  
  `;
	  return html.trim();
	};

	const modalCrossIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
<path d="M27.4683 11.6145C27.1693 11.3151 26.6846 11.3151 26.3857 11.6145L19.5123 18.4887L12.6389 11.6145C12.3399 11.3151 11.8553 11.3151 11.5563 11.6145C11.2573 11.9135 11.2573 12.3981 11.5563 12.6971L18.4297 19.5712L11.5563 26.4454C11.2573 26.744 11.2573 27.229 11.5563 27.528C11.706 27.6773 11.9016 27.752 12.0976 27.752C12.2936 27.752 12.4892 27.6773 12.6389 27.528L19.5123 20.6542L26.3857 27.528C26.5354 27.6773 26.731 27.752 26.927 27.752C27.123 27.752 27.3186 27.6773 27.4683 27.528C27.7672 27.229 27.7672 26.744 27.4683 26.4454L20.5949 19.5712L27.4683 12.6971C27.7676 12.3985 27.7676 11.9135 27.4683 11.6145ZM19.5123 0.380859C8.93057 0.380859 0.322266 8.98916 0.322266 19.5701C0.323031 30.1522 8.9321 38.7609 19.5138 38.7609C30.0944 38.7609 38.7023 30.1518 38.7023 19.5701C38.7023 8.98916 30.094 0.380859 19.5123 0.380859ZM19.5138 37.23H19.513C9.7762 37.23 1.85428 29.3077 1.85352 19.5705C1.85352 9.83365 9.77505 1.91249 19.5123 1.91249C29.2495 1.91249 37.171 9.83403 37.171 19.5705C37.171 29.3073 29.2503 37.23 19.5138 37.23Z" fill="black"/>
</svg>
`;

	const desktopSuccessDiscountMsg = (id, data, VARIATION) => {
	  const html = `
     <div class="${id}__modal-right ${id}__successMsgDesktop">
         <div class="${id}__successTitle">Here is your discount code:</div>
        <div class="${id}__copyCode">${data.discountCode}</div>
        <div class="${id}__copyWrapper">Click to copy the code</div>
        <p class="${id}__modal-right-heading">${data.condition}</p>
        <button class="${id}__modal-button ${id}__gap ${id}__continueShoppingBtn">Continue Shopping</button>
        ${
          VARIATION === '2'
            ? ` <p class="${id}__modal-right-heading ${id}__nogap">${data.additionalMsg}</p>`
            : ''
        }
    </div>
  `;
	  return html.trim();
	};

	const mobileSuccessDiscountMsg = (id, data, VARIATION) => {
	  const html = `
       <div class="${id}__mobile-modal-content ${id}__successMsgMobile">
           <div class="${id}__successTitle">Here is your discount code:</div>
          <div class="${id}__copyCode">${data.discountCode}</div>
          <div class="${id}__copyWrapper">Tap to copy the code</div>
          <p class="${id}__modal-right-heading">${data.condition}</p>
          <button class="${id}__modal-button ${id}__gap ${id}__continueShoppingBtn">Continue Shopping</button>
           ${
             VARIATION === '2'
               ? ` <p class="${id}__modal-right-heading ${id}__nogap">${data.additionalMsg}</p>`
               : ''
           }
      </div>
    `;
	  return html.trim();
	};

	const discountModal = (id, data, VARIATION) => {
	  const html = `
         <div class="${id}__modal">
            <div class="${id}__modal-overlay"></div>
            <div class="${id}__modal-container">
                <div class="${id}__modal-content">
                    <button class="${id}__modal-close">${modalCrossIcon}</button>
                    <div class="${id}__modal-body ${id}__desktop">
                        <div class="${id}__modal-left">
                            <div class="${id}__modal-discount-textWrapper">
                                <div class="${id}__modal-discount-heading">Extra</div>
                                <div class="${id}__modal-discount-discount">10% OFF</div>
                                <div class="${id}__modal-discount-small-text">${data.mainText}</div>
                            </div>
                            <div class="${id}__modal-discount-code__label-point"></div>
                        </div>
                        <div class="${id}__modal-right">
                            <p class="${id}__modal-right-heading">Sign up to our mailing list to get an instant <strong>10% off</strong> ${
    data.mainText
  } ${VARIATION === '1' ? 'on site' : ''}</p>
                            <input type="email" class="${id}__modal-input ${id}__input" placeholder="Your email"/>
                             <div class="${id}__error ${id}__hide">
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="oct-icon oct-signup__error__icon" aria-hidden="true" aria-label="" style="height: 20px; width: 20px; fill: black;"><path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm.55-4.5v4h-1v-4h1z" fill="#D8221F" fill-rule="evenodd"></path></svg>
                                <div class="${id}__errorMessage">
                                </div>
                            </div>
                            <button class="${id}__modal-button ${id}__claimDiscountBtn">Claim Discount</button>
                            <p class="${id}__modal-agreement">By signing up you agree to receive occasional emails and offers from Rugs Direct</p>
                            <span class="${id}__modal-no-thanks">No Thanks</span>
                        </div>
                        ${desktopSuccessDiscountMsg(id, data, VARIATION)}
                    </div>
                    <div class="${id}__modal-body ${id}__mobile">
                        <div class="${id}__modal-mobile-discount-code__label-point-wrapper">
                            <div class="${id}__modal-mobile-discount-code__label-point"></div>
                        </div>
                        <div class="${id}__mobile-modal-content">
                            <div class="${id}__modal-discount-mobile-heading">Extra 10% off everything</div>
                            <p class="${id}__modal-right-mobile-heading">Sign up to our mailing list to get an instant <strong>10% off</strong> ${
    data.mainText
  } ${VARIATION === '1' ? 'on site' : ''}</p>
                            <input type="email" class="${id}__modal-mobile-input ${id}__input" placeholder="Your email"/>
                            <div class="${id}__error ${id}__hide">
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="oct-icon oct-signup__error__icon" aria-hidden="true" aria-label="" style="height: 20px; width: 20px; fill: black;"><path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm.55-4.5v4h-1v-4h1z" fill="#D8221F" fill-rule="evenodd"></path></svg>
                                <div class="${id}__errorMessage">
                                </div>
                            </div>
                            <button class="${id}__modal-mobile-button ${id}__claimDiscountBtn">Claim Discount</button>
                            <p class="${id}__modal-mobile-agreement">By signing up you agree to receive occasional emails and offers from Rugs Direct</p>
                            <span class="${id}__modal-no-thanks-mobile">No Thanks</span>
                        </div>
                        ${mobileSuccessDiscountMsg(id, data, VARIATION)}
                    </div>
                </div>
            </div>
        </div>
      `;
	  return html;
	};

	const showEmailError = (id, input, message) => {
	  const formWrapper = input.closest(`.${id}__modal-body`);
	  const emailErrorMessage = formWrapper.querySelector(`.${id}__errorMessage`);
	  const emailError = formWrapper.querySelector(`.${id}__error`);
	  input.classList.add(`${id}__inputError`);
	  emailError.classList.remove(`${id}__hide`);
	  formWrapper.classList.remove(`${id}__emailValid`);
	  emailErrorMessage.textContent = message;
	};

	const hideEmailError = (id, input) => {
	  const formWrapper = input.closest(`.${id}__modal-body`);
	  const emailError = formWrapper.querySelector(`.${id}__error`);
	  input.classList.remove(`${id}__inputError`);
	  emailError.classList.add(`${id}__hide`);
	  formWrapper.classList.add(`${id}__emailValid`);
	};

	const subscribeToRust = async (email, VARIATION) => {
	  try {
	    const variation = `v${VARIATION}`.toLowerCase();
	    const url = `https://hooks.zapier.com/hooks/catch/3538884/2gebqy2/?email=${encodeURIComponent(
      email
    )}&variation=${encodeURIComponent(variation)}`;
	    const response = await fetch(url, {
	      method: 'GET'
	    });
	    const textData = await response.text();
	    let data;
	    try {
	      data = JSON.parse(textData);
	    } catch (error) {
	      data = {
	        status: 'error',
	        message: textData
	      };
	    }
	    return data;
	  } catch (error) {
	    console.error('Network Error:', error);
	    return {
	      status: 'error',
	      message: 'Request failed'
	    };
	  }
	};

	const mainObject = {
	  1: {
	    mainText: 'everything',
	    discountCode: 'EVERYTHING10',
	    condition: 'Enter this code in the basket for 10% off your order'
	  },
	  2: {
	    mainText: 'all rugs',
	    discountCode: 'ALLRUGS10',
	    condition: 'Enter this code in the basket for 10% off all rugs in your order',
	    additionalMsg:
	      '* Discount does not apply to non-rug items including underlay, door mats and accessories'
	  }
	};

	const { ID, VARIATION } = shared$1;
	const init = () => {
	  const exitingDiscountCodeWrapper = document.querySelector('.discount-code__wrapper');
	  if (!document.querySelector(`.${ID}__discount-banner`)) {
	    exitingDiscountCodeWrapper.insertAdjacentHTML(
	      'beforebegin',
	      discountBanner(ID, mainObject[VARIATION])
	    );
	  }
	  pollerLite(
	    ['.template-collection', '.productgrid--wrapper', '.productgrid--item .discount-code__btn'],
	    () => {
	      const productsWrapper = document.querySelector('.productgrid--wrapper');
	      const targetProduct = productsWrapper.querySelector(
	        '.productgrid--item.imagestyle--no-image .tag-2'
	      );
	      if (!document.querySelector(`.${ID}__tag-2`)) {
	        targetProduct.insertAdjacentHTML('beforebegin', discountProd(ID, mainObject[VARIATION]));
	      }
	    }
	  );
	  if (!document.querySelector(`.${ID}__modal`)) {
	    document.body.insertAdjacentHTML(
	      'beforeend',
	      discountModal(ID, mainObject[VARIATION], VARIATION)
	    );
	  }
	  const varEmailElems = document.querySelectorAll(`.${ID}__input`);
	  const emailRegex = /^[^@]+@[^@]+\.[^@.]{2,}$/;
	  if (varEmailElems.length > 0) {
	    const handleInputChange = (elem) => {
	      const { value } = elem;
	      if (value.length === 0) {
	        showEmailError(ID, elem, 'Please fill out this field.');
	      } else if (!emailRegex.test(value)) {
	        showEmailError(ID, elem, 'Please enter a valid email address.');
	      } else {
	        hideEmailError(ID, elem);
	      }
	    };
	    varEmailElems.forEach((elem) => {
	      elem.value = '';
	      elem.addEventListener('input', (e) => {
	        handleInputChange(e.target);
	      });
	      elem.addEventListener('keydown', (e) => {
	        if (e.key === 'Enter') {
	          e.preventDefault();
	          const modalBody = e.target.closest(`.${ID}__modal-body`);
	          const claimBtn = modalBody.querySelector(`.${ID}__claimDiscountBtn`);
	          modalBody.classList.contains(`${ID}__emailValid`)
	            ? claimBtn.click()
	            : handleInputChange(e.target);
	        }
	      });
	    });
	  }
	};
	var activate = () => {
	  setup();
	  document.body.addEventListener('click', (e) => {
	    const { target } = e;
	    if (target.closest(`.${ID}__plpClaimBtn`) || target.closest(`.${ID}__claimBtn`)) {
	      trackGAEvent('RD 227', 'claim_discount');
	      const modal = document.querySelector(`.${ID}__modal`);
	      if (modal) {
	        modal.classList.remove(`${ID}__closing`);
	        modal.classList.add(`${ID}__open`);
	      }
	    } else if (
	      target.closest(`.${ID}__modal-close`) ||
	      target.closest(`.${ID}__modal-overlay`) ||
	      target.closest(`.${ID}__modal-no-thanks`) ||
	      target.closest(`.${ID}__modal-no-thanks-mobile`) ||
	      target.closest(`.${ID}__continueShoppingBtn`)
	    ) {
	      const modal = document.querySelector(`.${ID}__modal`);
	      const modalContent = modal.querySelector(`.${ID}__modal-content`);
	      if (modal) {
	        modal.classList.remove(`${ID}__open`);
	        modal.classList.add(`${ID}__closing`);
	      }
	      if (modalContent && !modalContent.classList.contains(`${ID}__success`)) {
	        trackGAEvent('RD 227', 'closed_without_submission');
	      }
	    } else if (target.closest(`.${ID}__copyWrapper`)) {
	      const clickedItem = target.closest(`.${ID}__copyWrapper`);
	      setTextCopy(VARIATION);
	      clickedItem.textContent = 'Copied';
	    } else if (
	      target.closest(`.${ID}__modal-mobile-button`) ||
	      target.closest(`.${ID}__modal-button`)
	    ) {
	      const clickedItem =
	        target.closest(`.${ID}__modal-mobile-button`) || target.closest(`.${ID}__modal-button`);
	      const bodyWrapper = clickedItem.closest(`.${ID}__modal-body`);
	      const inputElement = bodyWrapper.querySelector(`.${ID}__input`);
	      const isEmailValid = bodyWrapper.classList.contains(`${ID}__emailValid`);
	      if (isEmailValid) {
	        subscribeToRust(inputElement.value, VARIATION)
	          .then((res) => {
	            if (res?.status === 'success') {
	              trackGAEvent('RD 227', 'submit_email');
	              const contentWrapper = bodyWrapper.closest(`.${ID}__modal-content`);
	              if (contentWrapper) contentWrapper.classList.add(`${ID}__success`);
	            } else {
	              console.error('Failed to subscribe:', res);
	            }
	          })
	          .catch((error) => {
	            console.error('Error:', error);
	          });
	      } else {
	        showEmailError(ID, inputElement, 'Please fill out this field.');
	      }
	    } else if (target.closest('.discount-code__btn')) {
	      trackGAEvent('RD 227', 'claim_discount');
	    }
	  });
	  if (VARIATION === 'control') return;
	  init();
	};

	pollerLite(['body', '.discount-code__wrapper'], activate);

})();