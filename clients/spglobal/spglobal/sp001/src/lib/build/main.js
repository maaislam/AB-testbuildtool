(function () {
  /*--------------------------- CommonJS default helper --------------------------- */
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  /*------------------------------------ Data ------------------------------------ */
  const shared = {
    ID: 'sp001',
    VARIATION: '1',
    CLIENT: 'spglobal',
    SITE: 'spglobal'
  };
  const shared$1 = getDefaultExportFromCjs(shared);

  /*--------------------------------- Utilities ---------------------------------- */
  const qs = (sel, scope = document) => scope.querySelector(sel);
  const qsa = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));
  const addClass = (el, cls) => el && el.classList.add(cls);

  const pollerLite = (conditions, callback, maxTime = 10000) => {
    const POLLING_INTERVAL = 25;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const allConditionsMet = conditions.every((condition) => {
        if (typeof condition === 'function') return condition();
        return !!qs(condition);
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

  /*--------------------------------- Markup ------------------------------------- */
  const setup = () => {
    const { ID, VARIATION } = shared$1;
    addClass(document.documentElement, ID);
    addClass(document.documentElement, `${ID}-${VARIATION}`);
  };

  const stepContainer = (id) => {
    const html = `
      <div class="wrap ${id}__stepContainer">
        <!-- Progress header -->
        <div class="${id}__progress-bar" aria-label="Progress: Step 1 of 3">
          <!-- Step 1 (current) -->
          <div class="segment" data-segment="1">
            <div class="segment-inner">
              <span class="dot current" aria-hidden="true"></span>
              <div class="rail" aria-hidden="true"></div>
            </div>
            <div class="marker">  
              <div class="meta">
                <span class="step">Step 1</span>
                <span class="title">Basic Information</span>
              </div>
            </div>
          </div>
          <!-- Step 2 -->
          <div class="segment" data-segment="2">
            <div class="segment-inner">
              <span class="dot current" aria-hidden="true"></span>
              <div class="rail" aria-hidden="true"></div>
            </div>
            <div class="marker">
              <div class="meta">
                <span class="step">Step 2</span>
                <span class="title">Business Details</span>
              </div>
            </div>
          </div>
          <!-- Step 3 -->
          <div class="segment" data-segment="3">
            <div class="segment-inner">
              <span class="dot current" aria-hidden="true"></span>
              <div class="rail" aria-hidden="true"></div>
            </div>
            <div class="marker">
              <div class="meta">
                <span class="step">Step 3</span>
                <span class="title">Challenges</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Page title & copy -->
        <div class="${id}__formHeader">
          <div class="${id}__formHeader-info" data-info="1">
            <h1>Basic Information</h1>
            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          </div>
          <div class="${id}__formHeader-info" data-info="2">
            <h1>Business Details</h1>
            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          </div>
          <div class="${id}__formHeader-info" data-info="3">
            <h1>Basic Information</h1>
            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          </div>
        </div>

        <div class="hint">* Indicates a required field</div>
      </div>
    `;
    return html.trim();
  };

  const policyStr = (id) => {
    const html = `
      <div class="${id}__policyConatiner" id="guideContainer-rootPanel-guidetextdraw___guide-item" class="fd-col-lg-12 fd-col-md-12 fd-col-sm-12 fd-col-xs-12" data-guide-parent-id="guideContainer-rootPanel__">
        <div class="guidetextdraw guidefield">
          <div class="guideFieldNode guideTextDraw privacyPolicy guideStaticText af-field-filled" id="guideContainer-rootPanel-guidetextdraw__" style=";" data-guide-view-bind="guideContainer-rootPanel-guidetextdraw__" data-disabled="false">
            <p>Clicking 'Submit' means you agree to the&nbsp; 
              <a title="https://www.spglobal.com/terms-of-use" href="https://www.spglobal.com/terms-of-use" data-clickable-id="clickable-1" target="_blank" data-event-name="link" data-link-text="Terms" data-link-title="form-terms" data-link-location="form-terms" data-event-flag="true">
                <b><u>Terms</u></b>
                <span class="cmp-link__screen-reader-only">(opens in a new tab)</span>
              </a>&nbsp;and have read and understand the&nbsp; 
              <a title="https://www.spglobal.com/corporate-privacy-policy" href="https://www.spglobal.com/corporate-privacy-policy" data-clickable-id="clickable-2" target="_blank" data-event-name="link" data-link-text="Privacy Policy" data-link-title="form-privacy-policy" data-link-location="form-privacy-policy" data-event-flag="true">
                <b><u>Privacy Policy</u></b>
                <span class="cmp-link__screen-reader-only">(opens in a new tab)</span>
              </a>. 
            </p>
          </div>
        </div>
      </div>
    `;
    return html.trim();
  };

  const form = (id) => {
    const html = `
      <div class="${id}__formWrapper" data-step-active="1" data-fill-step="0">
        ${stepContainer(id)}
        <div class="${id}__formInner">
          <div class="${id}__first-step ${id}__step" data-step="1">
            <div class="${id}__stepInner"></div>
            <div class="${id}__actionWrapper">
              <button style="opacity:0;" class="${id}__back-btn">Back</button>
              <button class="${id}__next-btn">Next</button>
            </div>
          </div>

          <div class="${id}__second-step ${id}__step" data-step="2">
            <div class="${id}__stepInner"></div>
            <div class="${id}__actionWrapper">
              <button class="${id}__back-btn">Back</button>
              <button class="${id}__next-btn">Next</button>
            </div>
          </div>

          <div class="${id}__third-step ${id}__step" data-step="3">
            <div class="${id}__stepInner"></div>
            ${policyStr(id)}
            <div class="${id}__actionWrapper">
              <button class="${id}__back-btn">Back</button>
              <button class="${id}__next-btn">Finish</button>
            </div>
          </div>
        </div>
      </div>
    `;
    return html.trim();
  };

  /*------------------------------ Behavior helpers ------------------------------ */
  const { ID } = shared$1;

  const resetError = (step) => {
    const container = qs(`.${ID}__formWrapper .${ID}__step[data-step="${step}"]`);
    if (!container) return;

    const allErrorElems = qsa('.validation-failure', container);
    const allErrorInputs = qsa('input[aria-invalid="true"]', container);

    allErrorElems.forEach((item) => item.classList.remove('validation-failure'));
    allErrorInputs.forEach((input) => {
      input.removeAttribute('aria-invalid');
      input.value = '';
    });
  };

  const init = () => {
    const { pathname } = window.location;

    if (pathname === '/market-intelligence/en/info/request-follow-up') {
      addClass(document.body, `${ID}__reverseOrder`);
    }

    const targetPoint = qs('.guideGridFluidLayout2Container');
    if (targetPoint && !qs(`.${ID}__formWrapper`)) {
      targetPoint.insertAdjacentHTML('afterbegin', form(ID));
    }

    const firstStepInner = qs(`.${ID}__first-step .${ID}__stepInner`);
    const secondStepInner = qs(`.${ID}__second-step .${ID}__stepInner`);
    const thirdStepInner = qs(`.${ID}__third-step .${ID}__stepInner`);

    const firstStepElements = qs(
      `.${ID}__formWrapper ~ #guideContainer-rootPanel-panel___guide-item`
    );
    if (firstStepElements && firstStepInner) {
      firstStepInner.insertAdjacentElement('beforeend', firstStepElements);
    }

    const secondStepElements = qsa(`.${ID}__formWrapper ~ [id^="guideContainer-rootPanel-panel"]`);
    if (secondStepElements.length > 0) {
      secondStepElements.forEach((item, index) => {
        if (index <= 3) {
          if (secondStepInner) secondStepInner.insertAdjacentElement('beforeend', item);
        } else if (thirdStepInner) thirdStepInner.insertAdjacentElement('beforeend', item);
      });
    }

    const phoneNumberElem = qs(`.${ID}__second-step .${ID}__stepInner > div`);
    const companyNameElem = qs(
      `.${ID}__first-step .${ID}__stepInner #guideContainer-rootPanel-panel-guidetextbox___guide-item`
    );

    if (
      phoneNumberElem &&
      !phoneNumberElem.classList.contains(`${ID}__phoneNumber`) &&
      companyNameElem
    ) {
      companyNameElem.insertAdjacentElement('afterend', phoneNumberElem);
      addClass(phoneNumberElem, `${ID}__phoneNumber`);
    }

    if (
      companyNameElem &&
      !companyNameElem.classList.contains(`${ID}__companyName`) &&
      secondStepInner
    ) {
      secondStepInner.insertAdjacentElement('afterbegin', companyNameElem);
      addClass(companyNameElem, `${ID}__companyName`);
    }

    const firstlabelElem = thirdStepInner ? qs('label', thirdStepInner) : null;
    if (firstlabelElem) {
      addClass(firstlabelElem, `${ID}__thirdStepLabel`);
      if (!qs(`${ID}__thirdStepText`)) {
        firstlabelElem.insertAdjacentHTML(
          'afterend',
          `<p class="${ID}__thirdStepText">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>`
        );
      }
    }
  };

  /*--------------------------------- Activate ----------------------------------- */
  const activate = () => {
    setup();

    document.body.addEventListener('click', (e) => {
      const { target } = e;

      //Next button
      if (target.closest(`.${ID}__next-btn`)) {
        const clickedItem = target.closest(`.${ID}__next-btn`);
        const mainWrapper = clickedItem.closest(`.${ID}__step`);
        const formWrapper = mainWrapper.closest(`.${ID}__formWrapper`);
        const { stepActive, fillStep } = formWrapper.dataset;
        const { step } = mainWrapper.dataset;
        const inputs = qsa('input', mainWrapper);
        const allFields = inputs.every((input) => input.value.trim());
        const controlSubmitBtn = qs('#guideContainer-rootPanel-submit___widget');

        if (controlSubmitBtn && !allFields && !target.closest(`.${ID}__step[data-step="3"]`)) {
          controlSubmitBtn.click();
        }

        if (target.closest(`.${ID}__step[data-step="3"]`)) {
          const checkBoxElem = qs('input[type="checkbox"]', mainWrapper);
          if (checkBoxElem && checkBoxElem.checked) {
            if (!document.body.classList.contains(`${ID}__stepComplete-3`)) {
              console.log('step--3 completes');
              console.log('form completes in variation');
              addClass(document.body, `${ID}__stepComplete-3`);
            }
            if (controlSubmitBtn) controlSubmitBtn.click();
            return;
          }
        }

        setTimeout(() => {
          if (target.closest(`.${ID}__step[data-step="3"]`)) return;

          const allErrorElems = qsa('.validation-failure', mainWrapper);
          if (allErrorElems.length === 0) {
            formWrapper.dataset.stepActive = Number(stepActive) + 1;
            formWrapper.dataset.fillStep = Number(fillStep) + 1;
            resetError(Number(stepActive) + 1);

            if (!document.body.classList.contains(`${ID}__stepComplete-${step}`)) {
              console.log(`step--${step} completes`);
              addClass(document.body, `${ID}__stepComplete-${step}`);
            }
          }
        }, 50);

        return;
      }

      //Back button
      if (target.closest(`.${ID}__back-btn`)) {
        const clickedItem = target.closest(`.${ID}__back-btn`);
        const stepWrapper = clickedItem.closest(`.${ID}__step`);
        const formWrapper = stepWrapper.closest(`.${ID}__formWrapper`);
        const { stepActive, fillStep } = formWrapper.dataset;

        formWrapper.dataset.stepActive = Number(stepActive) - 1;
        formWrapper.dataset.fillStep = Number(fillStep) - 1;
        return;
      }

      //Control submit (control variation only)
      if (
        target.closest('#guideContainer-rootPanel-submit___widget') &&
        shared.VARIATION === 'control'
      ) {
        pollerLite(['.thankyou-message-component'], () => {
          if (!document.body.classList.contains(`${ID}__formComplete`)) {
            console.log('form completes in control');
            addClass(document.body, `${ID}__formComplete`);
          }
        });
      }
    });

    if (shared.VARIATION === 'control') return;
    init();
  };

  /*--------------------------------- Bootstrp ----------------------------------- */
  pollerLite(
    [
      'body',
      '#guideContainer-rootPanel___guide-item-container',
      '#guideContainer-rootPanel-panel___guide-item'
    ],
    activate
  );
})();
