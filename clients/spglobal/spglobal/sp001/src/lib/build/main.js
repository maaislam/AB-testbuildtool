(function () {
  /**===============================
   *  Experiment metadata & helpers
   *  =============================== */
  const experiment = {
    experimentId: 'sp001',
    variationId: '1',
    client: 'spglobal',
    site: 'spglobal'
  };
  const { experimentId: EXP_ID, variationId: VARIATION } = experiment;

  const ROOT = document.documentElement;
  const qs = (sel, scope = document) => scope.querySelector(sel);
  const qsa = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));
  const addClass = (el, cls) => el && el.classList.add(cls);

  /**Poll until all conditions pass, then run callback */
  const pollerLite = (conditions, callback, maxTime = 10000) => {
    const POLLING_INTERVAL = 25;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const allMet = conditions.every((c) => (typeof c === 'function' ? c() : !!qs(c)));
      if (allMet) {
        clearInterval(interval);
        callback();
      } else if (Date.now() - startTime >= maxTime) {
        clearInterval(interval);
        console.error('[sp001] Polling exceeded maximum time limit');
      }
    }, POLLING_INTERVAL);
  };

  /**Adobe WebSDK (Alloy) event sender */
  const sendAdobeAnalyticsEvent = (linkName, eventName) => {
    try {
      if (typeof window.alloy !== 'function') return;
      window.alloy('sendEvent', {
        xdm: {
          eventType: 'web.webinteraction.linkClicks',
          web: {
            webInteraction: {
              name: linkName,
              type: 'other'
            }
          },
          _experience: {
            analytics: {
              customEvent: {
                name: eventName
              }
            }
          }
        },
        data: {
          __adobe: {
            analytics: {
              events: [eventName], //e.g. "event15"
              linkName,
              linkType: 'o'
            }
          }
        }
      });
    } catch (err) {
      console.error('[sp001] Failed to send Adobe event:', err);
    }
  };

  /**Utility: track a step completion once */
  const markStepCompleteOnce = (step) => {
    const flag = `${EXP_ID}__stepComplete-${step}`;
    if (!document.body.classList.contains(flag)) {
      document.body.classList.add(flag);
      sendAdobeAnalyticsEvent(`Step ${step} completes`, '');
    }
  };

  const removeAsterisksFromPlaceholders = function removeAsterisksFromPlaceholders() {
    //All input types (text, email, tel, number, etc.)
    document.querySelectorAll('input[placeholder]').forEach((input) => {
      input.placeholder = input.placeholder.replace(/\*/g, '').trim();
    });
    //Textareas
    document.querySelectorAll('textarea[placeholder]').forEach((textarea) => {
      textarea.placeholder = textarea.placeholder.replace(/\*/g, '').trim();
    });
    //Select elements (remove * from first option acting as placeholder)
    document.querySelectorAll('select').forEach((select) => {
      const firstOption = select.querySelector('option');
      if (firstOption && firstOption.textContent.includes('*')) {
        firstOption.textContent = firstOption.textContent.replace(/\*/g, '').trim();
      }
    });
  };

  /**===============================
   *  Markup builders
   *  =============================== */
  const stepContainer = (id) =>
    `
    <div class="wrap ${id}__stepContainer">
      <div class="${id}__progress-bar" aria-label="Progress: Step 1 of 3">
        ${[1, 2, 3]
          .map(
            (n) => `
          <div class="segment" data-segment="${n}">
            <div class="segment-inner">
              <span class="dot current" aria-hidden="true"></span>
              <div class="rail" aria-hidden="true"></div>
            </div>
            <div class="marker">
              <div class="meta">
                <span class="step">Step ${n}</span>
                <span class="title">${
                  n === 1 ? 'Basic Information' : n === 2 ? 'Business Details' : 'Challenges'
                }</span>
              </div>
            </div>
          </div>
        `
          )
          .join('')}
      </div>

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
  `.trim();

  /**NOTE: typo fixed: policyConatiner -> policyContainer, removed unnecessary inline style attr */
  const policyBlock = (id) =>
    `
    <div class="${id}__policyContainer fd-col-lg-12 fd-col-md-12 fd-col-sm-12 fd-col-xs-12"
         id="guideContainer-rootPanel-guidetextdraw___guide-item"
         data-guide-parent-id="guideContainer-rootPanel__">
      <div class="guidetextdraw guidefield">
        <div class="guideFieldNode guideTextDraw privacyPolicy guideStaticText af-field-filled"
             id="guideContainer-rootPanel-guidetextdraw__"
             data-guide-view-bind="guideContainer-rootPanel-guidetextdraw__"
             data-disabled="false">
          <p>
            Clicking 'Submit' means you agree to the
            <a title="https://www.spglobal.com/terms-of-use"
               href="https://www.spglobal.com/terms-of-use"
               data-clickable-id="clickable-1"
               target="_blank"
               data-event-name="link"
               data-link-text="Terms"
               data-link-title="form-terms"
               data-link-location="form-terms"
               data-event-flag="true">
              <b><u>Terms</u></b>
              <span class="cmp-link__screen-reader-only">(opens in a new tab)</span>
            </a>and have read and understand the&nbsp;
            <a title="https://www.spglobal.com/corporate-privacy-policy"
               href="https://www.spglobal.com/corporate-privacy-policy"
               data-clickable-id="clickable-2"
               target="_blank"
               data-event-name="link"
               data-link-text="Privacy Policy"
               data-link-title="form-privacy-policy"
               data-link-location="form-privacy-policy"
               data-event-flag="true">
              <b><u>Privacy Policy</u></b>
              <span class="cmp-link__screen-reader-only">(opens in a new tab)</span>
            </a>.
          </p>
        </div>
      </div>
    </div>
  `.trim();

  const formShell = (id) =>
    `
    <div class="${id}__formWrapper" data-step-active="1" data-fill-step="0">
      ${stepContainer(id)}
      <div class="${id}__formInner">
        <div class="${id}__first-step ${id}__step" data-step="1">
          <div class="${id}__stepInner"></div>
          <div class="${id}__actionWrapper">
            <button class="${id}__back-btn" style="opacity:0;">Back</button>
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
          ${policyBlock(id)}
          <div class="${id}__actionWrapper">
            <button class="${id}__back-btn">Back</button>
            <button class="${id}__next-btn">Finish</button>
          </div>
        </div>
      </div>
    </div>
  `.trim();

  /**===============================
   *  DOM orchestration
   *  =============================== */
  const resetErrorForStep = (step) => {
    const container = qs(`.${EXP_ID}__formWrapper .${EXP_ID}__step[data-step="${step}"]`);
    if (!container) return;
    qsa('.validation-failure', container).forEach((el) =>
      el.classList.remove('validation-failure')
    );
    qsa('input[aria-invalid="true"]', container).forEach((input) => {
      input.removeAttribute('aria-invalid');
      input.value = '';
    });
  };

  const initFormStructure = () => {
    //Safer scoping: add experiment classes at the root (not body.* global CSS)
    addClass(ROOT, EXP_ID);
    addClass(ROOT, `${EXP_ID}-${VARIATION}`);

    const { pathname } = window.location;
    if (pathname === '/market-intelligence/en/info/request-follow-up') {
      addClass(document.body, `${EXP_ID}__reverseOrder`);
    }

    const mount = qs('.guideGridFluidLayout2Container');
    if (mount && !qs(`.${EXP_ID}__formWrapper`)) {
      mount.insertAdjacentHTML('afterbegin', formShell(EXP_ID));
    }

    const firstStepInner = qs(`.${EXP_ID}__first-step  .${EXP_ID}__stepInner`);
    const secondStepInner = qs(`.${EXP_ID}__second-step .${EXP_ID}__stepInner`);
    const thirdStepInner = qs(`.${EXP_ID}__third-step  .${EXP_ID}__stepInner`);

    //Move existing platform fields into our shells
    const firstPanel = qs(`.${EXP_ID}__formWrapper ~ #guideContainer-rootPanel-panel___guide-item`);
    if (firstPanel && firstStepInner) firstStepInner.insertAdjacentElement('beforeend', firstPanel);

    const panels = qsa(`.${EXP_ID}__formWrapper ~ [id^="guideContainer-rootPanel-panel"]`);
    panels.forEach((el, i) => {
      if (i <= 3) {
        secondStepInner && secondStepInner.insertAdjacentElement('beforeend', el);
      } else {
        thirdStepInner && thirdStepInner.insertAdjacentElement('beforeend', el);
      }
    });

    //Reorder phone/company fields if present
    const phone = qs(`.${EXP_ID}__second-step .${EXP_ID}__stepInner > div`);
    const company = qs(
      `.${EXP_ID}__first-step .${EXP_ID}__stepInner #guideContainer-rootPanel-panel-guidetextbox___guide-item`
    );

    if (phone && !phone.classList.contains(`${EXP_ID}__phoneNumber`) && company) {
      company.insertAdjacentElement('afterend', phone);
      addClass(phone, `${EXP_ID}__phoneNumber`);
    }
    if (company && !company.classList.contains(`${EXP_ID}__companyName`) && secondStepInner) {
      secondStepInner.insertAdjacentElement('afterbegin', company);
      addClass(company, `${EXP_ID}__companyName`);
    }

    //Third step helper text
    const firstLabel = thirdStepInner ? qs('label', thirdStepInner) : null;
    if (firstLabel) {
      addClass(firstLabel, `${EXP_ID}__thirdStepLabel`);
      if (!qs(`.${EXP_ID}__thirdStepText`)) {
        firstLabel.insertAdjacentHTML(
          'afterend',
          `<p class="${EXP_ID}__thirdStepText">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>`
        );
      }
    }
    removeAsterisksFromPlaceholders();
  };

  /**Step validation: returns true if all inputs in the step are non-empty */
  const isStepValid = (stepEl) => {
    const inputs = qsa('input', stepEl);
    return inputs.every((input) => input.value.trim());
  };

  const clickControlSubmitIfPresent = () => {
    const btn = qs('#guideContainer-rootPanel-submit___widget');
    if (btn) btn.click();
  };

  /**===============================
   *  Event delegation
   *  =============================== */
  const onBodyClick = (e) => {
    const { target } = e;

    //NEXT
    const nextBtn = target.closest(`.${EXP_ID}__next-btn`);
    if (nextBtn) {
      const stepEl = nextBtn.closest(`.${EXP_ID}__step`);
      const wrapper = stepEl.closest(`.${EXP_ID}__formWrapper`);
      const isThird = stepEl.matches(`.${EXP_ID}__step[data-step="3"]`);
      const { stepActive, fillStep } = wrapper.dataset;

      if (!isThird) {
        //Trigger native validation first so platform errors render
        if (!isStepValid(stepEl)) {
          clickControlSubmitIfPresent();
        }

        //Allow platform to render errors; then decide progression
        setTimeout(() => {
          if (qsa('.validation-failure', stepEl).length === 0) {
            wrapper.dataset.stepActive = String(Number(stepActive) + 1);
            wrapper.dataset.fillStep = String(Number(fillStep) + 1);
            resetErrorForStep(Number(stepActive) + 1);
            markStepCompleteOnce(stepEl.dataset.step);
          }
        }, 50);
        return;
      }

      //Step 3: require checkbox tick then submit control form
      const consent = qs('input[type="checkbox"]', stepEl);
      if (consent) {
        document.body.classList.add(`${EXP_ID}__stepComplete-3`);
        clickControlSubmitIfPresent();
        sendAdobeAnalyticsEvent('Step 3 completes', '');
        sendAdobeAnalyticsEvent('form submission completes', '');
      } else {
        console.error('[sp001] Consent checkbox is required on Step 3');
      }
      return;
    }

    //BACK
    const backBtn = target.closest(`.${EXP_ID}__back-btn`);
    if (backBtn) {
      const stepEl = backBtn.closest(`.${EXP_ID}__step`);
      const wrapper = stepEl.closest(`.${EXP_ID}__formWrapper`);
      const { stepActive, fillStep } = wrapper.dataset;
      wrapper.dataset.stepActive = String(Math.max(1, Number(stepActive) - 1));
      wrapper.dataset.fillStep = String(Math.max(0, Number(fillStep) - 1));
      return;
    }

    //CONTROL submit completion tracking (only when in control)
    if (target.closest('#guideContainer-rootPanel-submit___widget') && VARIATION === 'control') {
      pollerLite(['.thankyou-message-component'], () => {
        if (!document.body.classList.contains(`${EXP_ID}__formComplete`)) {
          document.body.classList.add(`${EXP_ID}__formComplete`);
          sendAdobeAnalyticsEvent('form submission completes', '');
        }
      });
    }
  };

  /**===============================
   *  Boot
   *  =============================== */
  const activate = () => {
    //Add experiment classes early
    addClass(ROOT, EXP_ID);
    addClass(ROOT, `${EXP_ID}-${VARIATION}`);

    document.body.addEventListener('click', onBodyClick);
    if (VARIATION !== 'control') initFormStructure();
  };

  pollerLite(
    [
      'body',
      '#guideContainer-rootPanel___guide-item-container',
      '#guideContainer-rootPanel-panel___guide-item'
    ],
    activate
  );
})();
