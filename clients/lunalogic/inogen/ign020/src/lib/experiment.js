/*eslint-disable no-underscore-dangle */
/*eslint-disable no-param-reassign */
/*eslint-disable object-curly-newline */
import setup from './services/setup';

import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID } = shared;

const customRadioButtonListener = () => {
  //Get the radio buttons
  const yesRadioButton = document.getElementById('yes');
  const noRadioButton = document.getElementById('no');

  //Function to handle the change event
  function handleRadioButtonChange(event) {
    if (event.target.value === 'Yes') {
      console.log('User selected Yes');
      document.querySelector('#formSection [name="prescribed_o2_patient_yes"]').click();
    } else if (event.target.value === 'No') {
      console.log('User selected No');
      document.querySelector('#formSection [name="prescribed_o2_patient_no"]').click();
    }
  }

  //Add event listeners for both radio buttons
  yesRadioButton.addEventListener('change', handleRadioButtonChange);
  noRadioButton.addEventListener('change', handleRadioButtonChange);
};

const successStr = (id) => {
  const html = `
        <div class="heroSection ${id}__heroSection ${id}__thankyou-hero">
            <div class="new-header">
                <div class="heronewsec">
                

                <div class="header_txt">
                    <h1>An Inogen POC may be covered by Medicare or other Insurance!</h1>
                    <img decoding="async"
                        src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png"
                        alt="Medicare Insurance bg"
                        class="medicare_img perfmatters-lazy entered pmloaded"
                        data-src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png"
                        data-ll-status="loaded">
                </div>
                <div class="innerContainer">
                    <div class="${id}__content">
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

const imgObj = {
  ROVE6: 'https://cdn.inogen.com/wp-content/uploads/2023/06/Inogen-Rove-6-700x700.png.webp',
  ROVE4: 'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4.png.webp',
  AT_HOME:
    'https://cdn.inogen.com/wp-content/uploads/2017/06/Inogen-At-Home-Web-12-in-e1487283801766-700x700.png.webp',
  VOXI5: 'https://cdn.inogen.com/wp-content/uploads/2025/06/voxi5-product-image.jpg.webp'
};
const productObj = {
  ROVE6: 'https://www.inogen.com/product/rove6-system/',
  ROVE4: 'https://www.inogen.com/product/rove4-system/',
  AT_HOME: 'https://www.inogen.com/product/inogen-at-home-oxygen-concentrator/',
  VOXI5: 'https://www.inogen.com/product/voxi-5/'
};
const STORAGE_KEY = 'inogen:quiz:result';
const COPY = {
  ROVE6: {
    title: 'Inogen Rove 6',
    tag: 'Premium portable — longer battery life'
  },
  ROVE4: {
    title: 'Inogen Rove 4',
    tag: 'Ultra portable — light and compact'
  },
  AT_HOME: {
    title: 'Inogen At Home',
    tag: 'Stationary — quiet & efficient for daily use'
  },
  VOXI5: {
    title: 'Inogen Voxi 5',
    tag: 'Compact portable — light with solid performance'
  }
};
const scoreProducts = (ans) => {
  const score = {
    ROVE6: 0,
    ROVE4: 0,
    AT_HOME: 0,
    VOXI5: 0
  };
  if (ans.q1 === 'home') {
    score.AT_HOME += 3;
  } else if (ans.q1 === 'portable') {
    score.ROVE6 += 2;
    score.ROVE4 += 2;
    score.VOXI5 += 2;
  } else if (ans.q1 === 'both') {
    score.AT_HOME += 1;
    score.ROVE6 += 1;
    score.ROVE4 += 1;
    score.VOXI5 += 1;
  }
  if (ans.q1 !== 'home') {
    if (ans.q2_portablePriority === 'light') {
      score.ROVE4 += 3;
      score.VOXI5 += 3;
      score.ROVE6 += 1;
    } else if (ans.q2_portablePriority === 'battery') {
      score.ROVE6 += 3;
      score.ROVE4 += 1;
      score.VOXI5 += 1;
    }
  }
  if (ans.q1 !== 'home') {
    if (ans.q3_travelFrequency === 'frequent') {
      score.ROVE4 += 2;
      score.VOXI5 += 2;
      score.ROVE6 += 2;
      console.log(score, 'score');
    } else if (ans.q3_travelFrequency === 'occasional') {
      score.ROVE6 += 1;
      score.ROVE4 += 1;
      score.VOXI5 += 1;
      if (ans.q1 === 'both') score.AT_HOME += 1;
    }
  }
  if (ans.q1 === 'home' || ans.q1 === 'both') {
    if (ans.q4_homePriority === 'wheels') {
      score.AT_HOME += 3;
    } else if (ans.q4_homePriority === 'compact') {
      score.AT_HOME += 2;
      score.ROVE4 += 1;
      score.VOXI5 += 1;
    }
  }
  if (ans.q5_budgetPreference === 'budget') {
    score.VOXI5 += 2;
    score.ROVE4 += 1;
    score.AT_HOME += 1;
  } else if (ans.q5_budgetPreference === 'premiumUSA') {
    score.ROVE6 += 2;
    score.AT_HOME += 2;
    score.ROVE4 += 2;
  }
  return score;
};
const _ORDER_PRODUCTS = ['ROVE6', 'ROVE4', 'VOXI5', 'AT_HOME'];
const _PORTABLES = new Set(['ROVE6', 'ROVE4', 'VOXI5']);
const decideWinner = (score, ans) => {
  const keys = Object.keys(score);
  const max = Math.max(...keys.map((k) => score[k]));
  let cand = keys.filter((k) => score[k] === max);
  const trace = {
    max,
    start: [...cand],
    steps: []
  };
  if (cand.length === 1) {
    trace.steps.push('A: single high score');
    return {
      product: cand[0],
      appliedRule: 'A',
      trace
    };
  }
  if (cand.includes('AT_HOME') && cand.some((p) => _PORTABLES.has(p))) {
    if (ans.q1 === 'home') {
      trace.steps.push('D: Q1=home → AT_HOME');
      return {
        product: 'AT_HOME',
        appliedRule: 'D',
        trace
      };
    }
    if (ans.q1 === 'both') {
      if (ans.q4_homePriority === 'wheels') {
        trace.steps.push('D: Q1=both & Q4=wheels → AT_HOME');
        return {
          product: 'AT_HOME',
          appliedRule: 'D',
          trace
        };
      }
      const portOnly = cand.filter((p) => _PORTABLES.has(p));
      if (portOnly.length) {
        cand = portOnly;
        trace.steps.push(`D: choose among portables → [${cand.join(', ')}]`);
      }
      if (cand.length === 1) {
        return {
          product: cand[0],
          appliedRule: 'D',
          trace
        };
      }
    } else if (ans.q1 === 'portable') {
      cand = cand.filter((p) => _PORTABLES.has(p));
      trace.steps.push(`D: Q1=portable → [${cand.join(', ')}]`);
      if (cand.length === 1) {
        return {
          product: cand[0],
          appliedRule: 'D',
          trace
        };
      }
    }
  }
  if (cand.includes('ROVE6') && (cand.includes('ROVE4') || cand.includes('VOXI5'))) {
    if (ans.q2_portablePriority === 'battery') {
      trace.steps.push('B: Q2=battery → ROVE6');
      return {
        product: 'ROVE6',
        appliedRule: 'B',
        trace
      };
    }
    if (ans.q2_portablePriority === 'light') {
      if (cand.includes('ROVE4')) {
        trace.steps.push('B: Q2=light → ROVE4');
        return {
          product: 'ROVE4',
          appliedRule: 'B',
          trace
        };
      }
      if (cand.includes('VOXI5')) {
        trace.steps.push('B: Q2=light → VOXI5');
        return {
          product: 'VOXI5',
          appliedRule: 'B',
          trace
        };
      }
    }
  }
  const onlyR4V5 = cand.every((p) => p === 'ROVE4' || p === 'VOXI5');
  if (onlyR4V5) {
    if (ans.q5_budgetPreference === 'budget') {
      trace.steps.push('C: Q5=budget → VOXI5');
      return {
        product: 'VOXI5',
        appliedRule: 'C',
        trace
      };
    }
    if (ans.q5_budgetPreference === 'premiumUSA') {
      trace.steps.push('C: Q5=premium → ROVE4');
      return {
        product: 'ROVE4',
        appliedRule: 'C',
        trace
      };
    }
    if (ans.q3_travelFrequency === 'frequent') {
      trace.steps.push('C: Q3=frequent → VOXI5');
      return {
        product: 'VOXI5',
        appliedRule: 'C',
        trace
      };
    }
    if (ans.q3_travelFrequency === 'occasional') {
      trace.steps.push('C: Q3=occasional → VOXI5');
      return {
        product: 'VOXI5',
        appliedRule: 'C',
        trace
      };
    }
  }
  const winner = [...cand].sort(
    (a, b) => _ORDER_PRODUCTS.indexOf(a) - _ORDER_PRODUCTS.indexOf(b)
  )[0];
  trace.steps.push(`E: fallback → ${winner}`);
  return {
    product: winner,
    appliedRule: 'E',
    trace
  };
};
const buildRationale = (product, ans, score, { appliedRule, trace }) => {
  const factors = [];
  if (ans.q1 === 'home') factors.push('You primarily plan to use it at home.');
  if (ans.q1 === 'portable') factors.push('You plan to use it mostly on the go.');
  if (ans.q1 === 'both') factors.push('You plan to use it both at home and while traveling.');
  if (ans.q1 !== 'home') {
    if (ans.q2_portablePriority === 'battery') factors.push('You preferred longer battery life.');
    if (ans.q2_portablePriority === 'light') factors.push('You preferred the lightest option.');
    if (ans.q3_travelFrequency === 'frequent') factors.push('You travel frequently.');
    if (ans.q3_travelFrequency === 'occasional') factors.push('You travel occasionally.');
  }
  if (ans.q1 === 'home' || ans.q1 === 'both') {
    if (ans.q4_homePriority === 'wheels') {
      factors.push('At home, easy movement around the house matters.');
    }
    if (ans.q4_homePriority === 'compact') {
      factors.push('You want a compact unit for home with occasional travel.');
    }
  }
  if (ans.q5_budgetPreference === 'budget') {
    factors.push('You indicated a budget-friendly preference.');
  }
  if (ans.q5_budgetPreference === 'premiumUSA') {
    factors.push('You prefer premium devices designed & assembled in the USA.');
  }
  return {
    product,
    points: score[product],
    appliedRule,
    factors,
    trace
  };
};
const li = (t) => `<li class="ty-rec-bullet">${t}</li>`;
const tyCardHTML = (winner, rationale) => {
  const c = COPY[winner] || {
    title: winner,
    tag: ''
  };
  return `
    <section class="ty-rec-root" aria-labelledby="ty-rec-heading">
      <div class="ty-rec-card">
        <div class="ty-rec-header">
          <div class="ty-rec-texts">
              <h2 id="ty-rec-heading" class="ty-rec-heading">Your best match</h2>
              <h3 class="ty-rec-title">${c.title}</h3>
          </div>
          <div class="ty-rec-image">
            <img src="${imgObj[winner] || ''}" alt="${c.title}" class="ty-rec-img" />
          </div>
        </div>
        <div class="ty-rec-body">
            <p class="ty-rec-tag">${c.tag}</p>
            <div class="ty-rec-why">
              ${
                rationale?.factors?.length
                  ? `<ul class="ty-rec-list">${rationale.factors.map(li).join('')}</ul>`
                  : ''
              }
            </div>
            <div class="call-box">
              <p>Call now for the best price</p>
              <a href="tel:18888888888" class="call-number">1-888-888-8888</a>
            </div>
            <div class="ty-rec-ctas">
              <a class="ty-btn ty-btn--primary" href="${productObj[winner] || '#'}">Shop online</a>
            </div>
          </div>
        </div> 
    </section>
  `;
};
const renderThankYou = () => {
  setup();
  let payload = null;

  const source = sessionStorage.getItem('landingSource');
  if (source) {
    console.log('✅ Visitor is on thank-you page from:', source);
    window.VWO.event('totalFormCompletionsQuizStandard');
    //fire tracking event here
  } else {
    console.log('ℹ️ Visitor is on thank-you page, but no tracked landing source found.');
  }

  sessionStorage.removeItem('landingSource');
  try {
    payload = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    const { answers } = payload;
    const hasAnswers = answers.q1 !== '';
    if (hasAnswers) {
      window.VWO.event('formCompletionQuiz');
    } else {
      window.VWO.event('formCompletionStandard');
    }
  } catch (_) {
    //Intentionally ignored
  }
  if (!payload?.winner) return;
  const mount = document.querySelector('.thankyou-section');
  if (!document.querySelector(`.${ID}__heroSection`)) {
    mount.insertAdjacentHTML('beforebegin', successStr(ID));
  }
  const mainWrapper = document.querySelector(`.${ID}__thankyou-hero`);
  const contentWrapper = mainWrapper.querySelector(`.${ID}__content`);
  contentWrapper.innerHTML = tyCardHTML(payload.winner, payload.rationale);
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (_) {
    //Intentionally ignored
  }
};
const init = () => {
  const SELECTORS = {
    form: '[data-quiz-form], .LeadCaptureForm, form#leadFormBottom, form#leadForm, form[action*="marketo"], form[action*="hubspot"], form'
  };
  const ORDER = ['s1', 's2', 's3', 's4', 's5', 's6'];
  const flow = {
    start: 's1',
    routing: [
      {
        from: 's1',
        when: {
          q1: 'home'
        },
        to: 's4'
      },
      {
        from: 's1',
        when: {
          q1: ['portable', 'both']
        },
        to: 's2'
      },
      {
        from: 's2',
        to: 's3'
      },
      {
        from: 's3',
        when: {
          q1: 'portable'
        },
        to: 's5'
      },
      {
        from: 's3',
        when: {
          q1: 'both'
        },
        to: 's4'
      },
      {
        from: 's4',
        to: 's5'
      },
      {
        from: 's5',
        to: 's6'
      }
    ],
    screens: {
      s1: {
        id: 's1',
        heading: 'Where do you plan to use your oxygen machine most of the time?',
        subheading: '',
        question: '',
        modelKey: 'q1',
        options: [
          {
            value: 'home',
            label: 'Mostly at home (stationary use)'
          },
          {
            value: 'portable',
            label: 'Mostly on the go (portable use)'
          },
          {
            value: 'both',
            label: 'Both'
          }
        ]
      },
      s2: {
        id: 's2',
        heading: 'What’s more important to you when choosing a portable machine?',
        subheading: 'Shows only if you picked Portable or Both.',
        question: "What's more important to you when choosing a portable machine?",
        note: 'Both options are FAA-approved for travel.',
        modelKey: 'q2_portablePriority',
        options: [
          {
            value: 'light',
            label: 'As light as possible'
          },
          {
            value: 'battery',
            label: 'Longer battery life'
          }
        ]
      },
      s3: {
        id: 's3',
        heading: 'How often do you travel or leave the house with your oxygen machine?',
        question: 'How often do you travel or leave the house with your oxygen machine?',
        modelKey: 'q3_travelFrequency',
        options: [
          {
            value: 'frequent',
            label: 'Every day / frequently'
          },
          {
            value: 'occasional',
            label: 'Occasionally'
          }
        ]
      },
      s4: {
        id: 's4',
        heading: 'For home use, what matters most to you?',
        subheading: '',
        question: 'For home use, what matters most to you?',
        modelKey: 'q4_homePriority',
        options: [
          {
            value: 'wheels',
            label: "A unit on wheels that's easy to move around&nbsp;my&nbsp;home"
          },
          {
            value: 'compact',
            label: 'A unit that is light & compact enough to take when&nbsp;I&nbsp;travel'
          }
        ]
      },
      s5: {
        id: 's5',
        heading: 'Which is more important to you?',
        subheading: '',
        question: 'Which is more important to you?',
        modelKey: 'q5_budgetPreference',
        options: [
          {
            value: 'budget',
            label: 'Budget-friendly device, made anywhere in&nbsp;the&nbsp;world'
          },
          {
            value: 'premiumUSA',
            label: 'Premium device, designed and assembled in&nbsp;the&nbsp;USA'
          }
        ]
      }
    }
  };
  const state = {
    answers: {},
    currentId: flow.start,
    history: []
  };
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const htmlToFragment = (html) => {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content;
  };
  const getNextId = (fromId, answers) => {
    const rules = flow.routing.filter((r) => r.from === fromId);
    const found = rules.find((r) => {
      if (!r.when) return true;
      const [k, v] = Object.entries(r.when)[0];
      const a = answers[k];
      return Array.isArray(v) ? v.includes(a) : a === v;
    });
    return found ? found.to : null;
  };
  const progressBarHTML = (count) => `
    <div class="quiz-progressbar" role="img" aria-label="Step progress">
      ${Array.from(
        {
          length: count
        },
        (_, i) => `<span class="quiz-seg" data-seg="${i}" aria-hidden="true"></span>`
      ).join('')}
    </div>
  `;
  const radioHTML = (name, value, label, index) => `
    <div class="quiz-option">
      <input class="quiz-radio" type="radio" id="${name}-${index}" name="${name}" value="${value}" required />
      <label for="${name}-${index}" class="quiz-option-label">${label}</label>
    </div>
  `;
  const screenHTML = (scr) => {
    const sub = scr.subheading ? `<p class="quiz-subheading">${scr.subheading}</p>` : '';
    const q = scr.question ? `<legend class="quiz-question">${scr.question}</legend>` : '';
    const note = scr.note ? `<p class="quiz-note" role="note">${scr.note}</p>` : '';
    const options = scr.options
      .map((o, i) => radioHTML(scr.modelKey, o.value, o.label, i))
      .join('');
    return `
      <section class="quiz-step" data-step-id="${scr.id}" data-model-key="${
      scr.modelKey
    }" aria-hidden="true">
        <div class="quiz-card">
          <h2 class="quiz-heading">${scr.heading || ''}</h2>
          ${sub}
          <fieldset class="quiz-fieldset">
            ${q}
            <div class="quiz-options">${options}</div>
             ${note}
          </fieldset>
          <div class="quiz-nav">
            <button type="button" class="quiz-btn quiz-back" data-action="back" disabled>Previous</button>
            <button type="button" class="quiz-btn quiz-next" data-action="next">Next</button>
          </div>
        </div>
      </section>
    `;
  };
  const allScreensHTML = () => {
    const ids = ['s1', 's2', 's3', 's4', 's5'];
    return ids.map((id) => screenHTML(flow.screens[id])).join('');
  };
  const formEl = (() => {
    const cands = $$(SELECTORS.form).filter((f) => f instanceof HTMLFormElement);
    return cands[0] || null;
  })();
  if (!formEl) {
    console.warn('[Quiz] Lead form not found.');
    return;
  }
  formEl.hidden = true;
  formEl.setAttribute('aria-hidden', 'true');
  const root = document.createElement('div');
  root.className = 'quiz-root';
  root.dataset.role = 'preform-steps';
  root.appendChild(htmlToFragment(progressBarHTML(ORDER.length)));
  root.appendChild(htmlToFragment(allScreensHTML()));
  if (!document.querySelector('.quiz-root')) {
    formEl.parentNode.insertBefore(root, formEl);
  }
  //if (!document.querySelector('.header-mobile')) {
  //document
  //.querySelector('.heroSection .heronewsec')
  //.insertAdjacentHTML(
  //'afterbegin',
  //'<div class="header-mobile">An Inogen POC may be covered by Medicare or other Insurance!</div>'
  //);
  //}
  const stepNodes = {};
  ['s1', 's2', 's3', 's4', 's5'].forEach((id) => {
    stepNodes[id] = root.querySelector(`[data-step-id="${id}"]`);
  });
  const segs = $$('.quiz-seg', root);
  const setProgress = (currentIdOrS6) => {
    const idx = Math.max(0, ORDER.indexOf(currentIdOrS6));
    segs.forEach((seg, i) => {
      seg.classList.toggle('is-active', i === idx);
      seg.classList.toggle('is-complete', i < idx);
      seg.classList.toggle('is-upcoming', i > idx);
    });
  };
  const showStep = (id) => {
    Object.values(stepNodes).forEach((sec) => {
      sec.style.display = 'none';
      sec.setAttribute('aria-hidden', 'true');
      const backBtn = sec.querySelector('.quiz-back');
      if (backBtn) backBtn.disabled = state.history.length === 0;
      const key = sec.getAttribute('data-model-key');
      if (key && state.answers[key] != null) {
        const v = String(state.answers[key]);
        const inp = sec.querySelector(
          `input[type="radio"][name="${CSS.escape(key)}"][value="${CSS.escape(v)}"]`
        );
        if (inp) inp.checked = true;
      }
    });
    const current = stepNodes[id];
    if (current) {
      current.style.display = '';
      current.setAttribute('aria-hidden', 'false');
      //current.querySelector('button,[tabindex]')?.focus({
      //preventScroll: false
      //});
    }
    setProgress(id);
  };
  const showForm = () => {
    Object.values(stepNodes).forEach((sec) => {
      sec.style.display = 'none';
      sec.setAttribute('aria-hidden', 'true');
    });
    formEl.hidden = false;
    formEl.setAttribute('aria-hidden', 'false');
    //formEl.querySelector('select,textarea,button')?.focus({
    //preventScroll: false
    //});
    setProgress('s6');
  };
  pollerLite(['.heronewsec'], () => {
    const mainWrapper = document.querySelector('.heronewsec');
    if (!document.querySelector('.new-header')) {
      mainWrapper.insertAdjacentHTML('beforebegin', '<div class="new-header"></div>');
    }
    if (document.querySelector('.new-header')) {
      document.querySelector('.new-header').append(mainWrapper);
    }
  });
  pollerLite(['.mob_dis'], () => {
    const mobileForm = document.querySelector('.mob_dis');
    const targetPoint = document.querySelector('.heroTextSection .globalLeader');
    if (!document.querySelector('.mobileForm')) {
      targetPoint.insertAdjacentElement('beforeend', mobileForm);
      mobileForm.classList.add('mobileForm');
    }
  });
  pollerLite(['#formSection .lead_form_page'], () => {
    const targetPoint = document.querySelector('#formSection .lead_form_page');
    const prescribedElem = document.querySelector('#formSection .prescribed_o2_patient_container');
    if (!document.querySelector('.desktop-form-title')) {
      targetPoint.insertAdjacentHTML(
        'afterbegin',
        '<h2 class="desktop-form-title">Let us know where to send your result:</h2>'
      );
    }
    const str = `
    <div class="custom-radio-buttons">
      <input type="radio" id="yes" name="response" value="Yes">
      <label for="yes">Yes</label>
      <input type="radio" id="no" name="response" value="No">
      <label for="no">No</label>
    </div>
    `;
    if (!document.querySelector('.custom-radio-buttons')) {
      prescribedElem.querySelector('p').insertAdjacentHTML('afterend', str);
      customRadioButtonListener();
    }
    const btnElement = document.querySelector('#formSection input[value="GET MY FREE GUIDE"]');
    if (btnElement) {
      btnElement.value = 'Get my results';
    }
    if (!document.querySelector('.previous-button')) {
      targetPoint.insertAdjacentHTML(
        'beforeend',
        '<button class="previous-button">Previous</button>'
      );
    }
  });
  document.body.addEventListener(
    'change',
    (e) => {
      const input = e.target;
      if (!(input instanceof HTMLInputElement) || input.type !== 'radio') return;
      const sec = input.closest('.quiz-step[data-step-id]');
      if (!sec) return;
      const key = sec.getAttribute('data-model-key');
      if (key) state.answers[key] = input.value;
    },
    true
  );
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('button[type="submit"], input[type="submit"]');

    if (target && !target.disabled) {
      window.VWO.event('formStartsQuizStandard');
      window.VWO.event('freeGuideFormSubmitClick');
      console.log('Submit button clicked:', target);
    }

    if (e.target.closest('.quiz-option')) {
      const quizWrapper = e.target.closest('.quiz-step');
      const nextButton = quizWrapper.querySelector('.quiz-btn.quiz-next');
      if (nextButton) nextButton.click();
      if (e.target.closest('input#q1-0')) {
        document.querySelector('.quiz-seg[data-seg="1"]').style.display = 'none';
        document.querySelector('.quiz-seg[data-seg="2"]').style.display = 'none';
      }
    } else if (e.target.closest('.previous-button')) {
      if (!state.history.length) return;
      state.currentId = state.history.pop();
      showStep(state.currentId);
      document.querySelector('#formSection #leadForm').hidden = true;
      document.querySelector('#formSection #leadForm').setAttribute('aria-hidden', 'true');
    }
    const btn = e.target.closest('[data-action="next"], [data-action="back"]');
    if (!btn) return;
    const sec = btn.closest('.quiz-step[data-step-id]');
    const action = btn.getAttribute('data-action');
    if (action === 'back') {
      if (!state.history.length) return;
      state.currentId = state.history.pop();
      showStep(state.currentId);
      if (state.currentId === 's1') {
        document.querySelector('.quiz-seg[data-seg="1"]').removeAttribute('style');
        document.querySelector('.quiz-seg[data-seg="2"]').removeAttribute('style');
      }
      return;
    }
    if (action === 'next') {
      if (!document.querySelector('quiz-started')) {
        window.VWO.event('quizStartsNew');
        document.body.classList.add('quiz-started');
      }

      const key = sec?.getAttribute('data-model-key');
      if (key) {
        const checked = sec.querySelector(`input[type="radio"][name="${CSS.escape(key)}"]:checked`);
        if (!checked) {
          sec.querySelector(`input[name="${CSS.escape(key)}"]`)?.reportValidity?.();
          return;
        }
        state.answers[key] = checked.value;
      }
      const currentId = sec?.getAttribute('data-step-id');
      const nextId = getNextId(currentId, state.answers);
      if (nextId === 's6') {
        showForm();

        document.body.addEventListener(
          'submit',
          (ev) => {
            const form = ev.target;
            if (!(form instanceof HTMLFormElement)) return;
            if (form !== formEl) return;
            const answers = {
              ...state.answers
            };
            console.log('answers', answers);
            if (!Object.keys(answers).length) return;
            const score = scoreProducts(answers);
            const decision = decideWinner(score, answers);
            const rationale = buildRationale(decision.product, answers, score, decision);

            //Error tracking
            const errorInputs = Array.from(form.querySelectorAll('input')).filter((input) => {
              const errorSelector = input.closest('.form_field_error');
              const errorElem = errorSelector ? input.closest('.form_field_error') : null;
              return errorElem;
            });

            if (errorInputs.length) {
              window.VWO.event('freeGuideFormErrors', {
                inputName: errorInputs.map((i) => i.name).join(', ')
              });
            }
            try {
              localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                  ts: Date.now(),
                  answers,
                  score,
                  winner: decision.product,
                  rationale
                })
              );
            } catch (_) {
              //Intentionally ignored
            }
          },
          true
        );
      } else if (nextId) {
        state.history.push(currentId);
        state.currentId = nextId;
        showStep(state.currentId);
      }
    }
  });
  state.currentId = flow.start;
  showStep(state.currentId);
  window.InogenQuiz = {
    get answers() {
      return {
        ...state.answers
      };
    },
    goto(id) {
      if (stepNodes[id]) {
        state.history.push(state.currentId);
        state.currentId = id;
        showStep(id);
      }
    },
    reset() {
      state.answers = {};
      state.history = [];
      state.currentId = flow.start;
      formEl.hidden = true;
      formEl.setAttribute('aria-hidden', 'true');
      showStep(state.currentId);
    }
  };
};

window.VWO = window.VWO || [];
window.VWO.event =
  window.VWO.event ||
  function (...args) {
    window.VWO.push(['event'].concat(args));
  };

//if (window.location.href.includes('/thankyou/') && window.location.href.includes('leadid=')  ) {
//pollerLite(['body'], renderThankYou);
//} else {

//}

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  document.body.addEventListener('change', (e) => {
    if (e.target.matches('[id*="full_name"]')) {
      console.log('freeGuideFormStart');
      window.VWO.event('formStartsQuizStandard');
    }
  });

  init();
  const path = window.location.pathname;
  if (path.includes('/lp/sem-google-medicare-sl')) {
    sessionStorage.setItem('landingSource', 'sem-price-sl');
  }

  const initInogenHeroVariant = () => {
    const PATH = window.location.pathname.replace(/\/$/, ''); //remove trailing slash

    //----- Mount + hero background target -----
    const MOUNT_SELECTORS = ['.header_txt.header_txt--top', '.header_txt--top', '.header_txt'];
    const HERO_BG_SELECTOR = '.new-header';

    //----- Assets -----
    const GUARANTEE_BADGE =
      'https://useruploads.vwo.io/useruploads/1054833/images/ef279100c449b39f8998e86c0e71b079_moneybackgurantee.png';

    //----- Page configs -----
    const PAGES = {
      '/lp/sem-freeguide-form-nb-poc': {
        pageClass: 'fe-hero--nb-poc',
        showbadge: true,
        type: 'guarantee',
        heroBgDesktopUrl:
          'https://useruploads.vwo.io/useruploads/1054833/images/daacd93240e775def9a647e1bcc837f6_quizdesktop.png', //TODO
        headline: 'How To Know Which Portable Oxygen System Is Right For You',
        body: [
          'Portable oxygen concentrators provide a safe source of oxygen-enriched air to provide medical oxygen as prescribed by a physician.',
          'Try for 30 days risk free*'
        ]
      },

      '/lp/sem-freeguide-form-qq3': {
        pageClass: 'fe-hero--qq3',
        showbadge: false,
        type: 'guarantee',
        heroBgDesktopUrl: '', //TODO
        headline: 'Live Life with Portable Oxygen Therapy',
        body: ['Try for 30 days risk free*']
      },

      '/lp/freedoctorguide': {
        pageClass: 'fe-hero--doctor',
        showbadge: false,
        type: 'guarantee',
        heroBgDesktopUrl: '', //TODO
        headline: 'America’s leader in portable oxygen therapy.',
        body: ['Affordable Options & America Designed & Assembled']
      },

      '/lp/soc-freeguide-form-seed': {
        pageClass: 'fe-hero--soc-seed',
        showbadge: true,
        type: 'offer',
        heroBgDesktopUrl:
          'https://useruploads.vwo.io/useruploads/1054833/images/daacd93240e775def9a647e1bcc837f6_quizdesktop.png',
        badgeUrl: '', //TODO
        badgeAlt: 'Limited time offer $300 off',
        headline: 'Portable Oxygen for Your On-the-Go Lifestyle',
        bullets: [
          'Converts the air around you into medical grade oxygen',
          'Incorporates Inogen’s Intelligent Delivery Technology®'
        ]
      },

      '/lp/sem-google-medicare-sl': {
        pageClass: 'fe-hero--medicare-sl',
        showbadge: false,
        type: 'guarantee',
        heroBgDesktopUrl: '', //TODO
        headline: 'An Inogen POC may be covered by Medicare or other Insurance!',
        body: [
          '',
          '<img decoding="async" src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png" alt="Medicare Insurance bg" class="fe-medcare-img medicare_img perfmatters-lazy entered pmloaded" data-src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png" data-ll-status="loaded">'
        ]
      },
      '/lp/sem-freeguide-form-nb-medicare': {
        pageClass: 'fe-hero--medicare-sl',
        showbadge: false,
        type: 'guarantee',
        heroBgDesktopUrl: '', //TODO
        headline: 'An Inogen POC may be covered by Medicare or other Insurance!',
        body: [
          '',
          '<img decoding="async" src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png" alt="Medicare Insurance bg" class="fe-medcare-img medicare_img perfmatters-lazy entered pmloaded" data-src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png" data-ll-status="loaded">'
        ]
      }
    };

    const cfg = PAGES[PATH];
    console.log('🚀 ~ initInogenHeroVariant ~ cfg:', cfg);
    if (!cfg) return;

    //----- Add page class -----
    document.documentElement.classList.add(cfg.pageClass);

    //----- Update hero background (desktop only; mobile handled in CSS) -----
    const heroEl = document.querySelector(HERO_BG_SELECTOR);
    if (heroEl && cfg.heroBgDesktopUrl) {
      heroEl.style.backgroundImage = `url("${cfg.heroBgDesktopUrl}")`;
      heroEl.style.backgroundSize = 'cover';
      heroEl.style.backgroundPosition = 'center';
      heroEl.style.backgroundRepeat = 'no-repeat';
    }

    //----- Find mount -----
    const mount = MOUNT_SELECTORS.map((sel) => document.querySelector(sel)).find(Boolean);
    if (!mount) return;

    //----- Renderers -----
    function renderGuarantee() {
      const bodyHtml = (cfg.body || [])
        .map((t) => `<p class="fe-heroCopy__body">${t}</p>`)
        .join('');

      return `
      <div class="fe-heroCopy">
        ${
          cfg.showbadge
            ? `<img class="fe-heroCopy__badge" src="${GUARANTEE_BADGE}" alt="30 Day Money Back Guarantee" />`
            : ''
        }
        <h1 class="fe-heroCopy__headline">${cfg.headline || ''}</h1>
        ${bodyHtml}
      </div>
    `;
    }

    function renderOffer() {
      const bullets = (cfg.bullets || [])
        .map(
          (t) => `
          <li class="fe-heroOffer__li">
            <span class="fe-heroOffer__tick" aria-hidden="true"></span>
            <span class="fe-heroOffer__bulletText">${t}</span>
          </li>
        `
        )
        .join('');

      return `
      <div class="fe-heroOffer">
        ${
          cfg.showbadge
            ? `<img class="fe-heroCopy__badge" src="${GUARANTEE_BADGE}" alt="30 Day Money Back Guarantee" />`
            : ''
        }
        <h1 class="fe-heroOffer__headline">${cfg.headline || ''}</h1>
        <ul class="fe-heroOffer__list">${bullets}</ul>
      </div>
    `;
    }

    //----- Inject -----
    mount.innerHTML = cfg.type === 'offer' ? renderOffer() : renderGuarantee();
  };

  pollerLite(['.heronewsec'], initInogenHeroVariant);

  (() => {
    const lead_form_on_page = false;
    let lead_form_started = false;
    let lead_form_name_valid = false;
    let lead_form_phone_valid = false;
    let lead_form_email_valid = false;
    let lead_form_valid = false;
    const lead_form_campaign = '';
    const lead_form_utm_campaign = '';
    const lead_form_campaign_phone = '';
    let lead_form_trusted_form_cert_url = '';

    const qs = (root, sel) => root.querySelector(sel);
    const qsa = (root, sel) => Array.from(root.querySelectorAll(sel));

    const show = (el) => el && (el.style.display = '');
    const hide = (el) => el && (el.style.display = 'none');

    const removeAll = (root, sel) => root && qsa(root, sel).forEach((n) => n.remove());

    const setSubmitEnabled = (formEl, enabled) => {
      const submit = qs(formEl, "input[type='submit']");
      if (!submit) return;
      if (enabled) submit.removeAttribute('disabled');
      else submit.setAttribute('disabled', 'disabled');
    };

    //closest equivalent to $(form).serializeArray()
    const serializeArray = (formEl) => {
      const fd = new FormData(formEl);
      const arr = [];
      for (const [name, value] of fd.entries()) arr.push({ name, value });
      return arr;
    };

    const toUrlEncoded = (pairs) => {
      const params = new URLSearchParams();
      pairs.forEach(({ name, value }) => params.append(name, value));
      return params.toString();
    };

    function getCookie(name) {
      const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
      return m ? decodeURIComponent(m[1]) : '';
    }

    function validate_form(formEl, page) {
      console.log('validating form');
      let valid = true;

      if (lead_form_trusted_form_cert_url == '') {
        lead_form_trusted_form_cert_url =
          qs(formEl, "input[name='xxTrustedFormCertUrl']")?.value || '';
      }

      if (lead_form_started === false) {
        console.log('first time validating the form, tracking lead form started in mixpanel');
        lead_form_started = true;
      }

      //IMPORTANT: do NOT fail if fieldset missing (matches jQuery behavior)
      const fieldset = qs(formEl, `fieldset.lead_form_page${page}`);

      //confirm a value is set for each field in the fieldset
      if (fieldset) {
        qsa(fieldset, 'input').forEach((input) => {
          const field_type = (input.getAttribute('type') || '').toLowerCase();
          const name = input.getAttribute('name') || '';

          console.log(`checking: ${name} ...`);

          switch (field_type) {
            case 'checkbox':
              if (input.getAttribute('required') == 'required') {
                if (!input.checked) {
                  console.log(`${name} is not checked`);
                  valid = false;
                }
              }
              break;

            case 'radio': {
              const radio_button_name = input.getAttribute('name') || '';
              if (input.getAttribute('required') == 'required') {
                const checked = qs(
                  formEl,
                  `input[name="${CSS.escape(radio_button_name)}"]:checked`
                );
                const v = checked?.value;

                if (typeof v !== 'undefined' && v != '') {
                  console.log(`${radio_button_name} selected value is [${v}]`);
                } else {
                  console.log(`${radio_button_name} is not checked`);
                  valid = false;
                }
              }
              break;
            }

            default: {
              const v = input.value;
              if (typeof v === 'undefined' || v == '') {
                console.log(`${name} is blank`);
                valid = false;
              } else {
                console.log(`${name} has a value: [${v}]`);
              }
            }
          }
        });
      }

      if (true) {
        //error messages
        let preferred_language = 'English';
        const langEl = qs(formEl, "input[name='preferred_language']");
        if (typeof langEl?.value !== 'undefined' && langEl.value != '') {
          preferred_language = langEl.value.trim();
        }

        //full name must be at least two parts
        const fullNameEl = qs(formEl, `fieldset.lead_form_page${page} input[name='full_name']`);
        if (typeof fullNameEl?.value !== 'undefined' && fullNameEl.value != '') {
          if (fullNameEl.value.trim().split(' ').length < 2) {
            fullNameEl.parentElement?.classList.add('form_field_error');
            removeAll(fullNameEl.parentElement, '.form_field_error_message');

            if (preferred_language == 'English') {
              fullNameEl.parentElement?.insertAdjacentHTML(
                'beforeend',
                '<div class="form_field_error_message">Please enter your full name</div>'
              );
            } else if (preferred_language == 'Spanish') {
              fullNameEl.parentElement?.insertAdjacentHTML(
                'beforeend',
                '<div class="form_field_error_message">Por favor ingrese su nombre completo</div>'
              );
            }
            valid = false;
          } else {
            fullNameEl.parentElement?.classList.remove('form_field_error');
            removeAll(fullNameEl.parentElement, '.form_field_error_message');
            if (lead_form_name_valid === false) lead_form_name_valid = true;
          }
        }

        //validate email format
        const emailEl = qs(formEl, `fieldset.lead_form_page${page} input[name='email']`);
        if (typeof emailEl?.value !== 'undefined' && emailEl.value != '') {
          const valid_email_regex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

          if (emailEl.value.trim().match(valid_email_regex)) {
            emailEl.parentElement?.classList.remove('form_field_error');
            removeAll(emailEl.parentElement, '.form_field_error_message');
            if (lead_form_email_valid === false) lead_form_email_valid = true;
          } else {
            emailEl.parentElement?.classList.add('form_field_error');
            removeAll(emailEl.parentElement, '.form_field_error_message');

            if (preferred_language == 'English') {
              emailEl.parentElement?.insertAdjacentHTML(
                'beforeend',
                '<div class="form_field_error_message">Please enter a valid email address</div>'
              );
            } else if (preferred_language == 'Spanish') {
              emailEl.parentElement?.insertAdjacentHTML(
                'beforeend',
                '<div class="form_field_error_message">Por favor ingrese una dirección de correo electrónico válida</div>'
              );
            }
            valid = false;
          }
        }

        //validate phone number
        const phoneEl = qs(formEl, `fieldset.lead_form_page${page} input[name='phone']`);
        if (typeof phoneEl?.value !== 'undefined' && phoneEl.value != '') {
          if (
            phoneEl.value
              .trim()
              .replace(/\D+/g, '')
              .replace(/^1/, '')
              .match(/([^\d]*\d[^\d]*){10}$/)
          ) {
            phoneEl.parentElement?.classList.remove('form_field_error');
            removeAll(phoneEl.parentElement, '.form_field_error_message');
            if (lead_form_phone_valid === false) lead_form_phone_valid = true;
          } else {
            phoneEl.parentElement?.classList.add('form_field_error');
            removeAll(phoneEl.parentElement, '.form_field_error_message');

            if (preferred_language == 'English') {
              phoneEl.parentElement?.insertAdjacentHTML(
                'beforeend',
                '<div class="form_field_error_message">Please enter a 10 digit phone number</div>'
              );
            } else if (preferred_language == 'Spanish') {
              phoneEl.parentElement?.insertAdjacentHTML(
                'beforeend',
                '<div class="form_field_error_message">Por favor ingrese un número de teléfono válido</div>'
              );
            }
            valid = false;
          }
        }
      }

      if (valid) {
        console.log('valid');
        if (lead_form_valid === false) lead_form_valid = true;
      } else console.log('invalid');

      return valid;
    }

    function formatUSNumber(entry = '') {
      const match_results = entry
        .replace(/\D+/g, '')
        .replace(/^1/, '')
        .match(/([^\d]*\d[^\d]*){1,10}$/);
      if (match_results === null) return '';
      const match = match_results[0];

      if (match.length >= 4) {
        qsa(document, '.phone_type_container').forEach((el) => show(el));
      }

      const part1 = match.length > 3 ? `(${match.substring(0, 3)}` : match;
      const part2 = match.length > 3 ? `) ${match.substring(3, 6)}` : '';
      const part3 = match.length > 6 ? `-${match.substring(6, 10)}` : '';
      return `${part1}${part2}${part3}`;
    }

    function formatZip(entry = '') {
      const match_results = entry.replace(/\D+/g, '').match(/([^\d]*\d[^\d]*){1,5}$/);
      if (match_results === null) return '';
      return `${match_results[0]}`;
    }

    function cleanLeadConduitID(input) {
      const hexRegex = /[0-9A-Fa-f]/;
      const hexCharacters = String(input)
        .split('')
        .filter((char) => hexRegex.test(char));
      return hexCharacters.join('');
    }

    //prescribed button
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.prescribed_o2_patient_button');
      if (!btn) return;

      const formEl = btn.closest('form');
      if (!formEl) return;

      const { value } = btn;

      const parent = btn.parentElement;
      if (parent) {
        qsa(parent, '.prescribed_o2_patient_button').forEach((b) => b.classList.remove('active'));
      }
      btn.classList.add('active');

      //same as original: button.parent().find("input[name='prescribed_o2_patient']")
      const hidden = parent?.querySelector("input[name='prescribed_o2_patient']");
      if (hidden) hidden.value = value;

      const current_page = formEl.getAttribute('data-page');
      console.log(`current_page: ${current_page}`);

      setSubmitEnabled(formEl, validate_form(formEl, current_page));
    });

    //keyup formatters
    document.addEventListener('keyup', (e) => {
      const t = e.target;
      if (!(t instanceof HTMLInputElement)) return;

      const formEl = t.closest('form.lead_form');
      if (!formEl) return;

      if (t.type === 'tel') t.value = formatUSNumber(t.value);
      if (t.name === 'zip') t.value = formatZip(t.value);
    });

    //change validation + prescribed logic
    document.addEventListener('change', (e) => {
      const input = e.target;
      if (!(input instanceof HTMLInputElement)) return;

      const formEl = input.closest('form.lead_form');
      if (!formEl) return;

      console.log(`input changed: ${input.value}`);
      const current_page = formEl.getAttribute('data-page');
      console.log(`current_page: ${current_page}`);

      if (input.name == 'prescribed_o2_patient') {
        const checked = qs(formEl, 'input[name="prescribed_o2_patient"]:checked');
        const v = checked?.value;

        if (typeof v !== 'undefined' && v != '') {
          if (v == 'Yes') {
            hide(qs(formEl, '.checkbox_container.under_6lpm_na'));
            qsa(formEl, '.checkbox_container.under_6lpm_na input').forEach(
              (i) => (i.checked = false)
            );
            show(qs(formEl, '.checkbox_container.under_6lpm_yes'));
            show(qs(formEl, '.checkbox_container.under_6lpm_no'));
          } else if (v == 'No') {
            show(qs(formEl, '.checkbox_container.under_6lpm_na'));
            qsa(formEl, '.checkbox_container.under_6lpm_na input').forEach(
              (i) => (i.checked = true)
            );
            hide(qs(formEl, '.checkbox_container.under_6lpm_yes'));
            hide(qs(formEl, '.checkbox_container.under_6lpm_no'));
          }
        }
      }

      setSubmitEnabled(formEl, validate_form(formEl, current_page));
    });

    //submit per lead form
    qsa(document, 'form.lead_form').forEach((formEl) => {
      formEl.addEventListener('submit', async (event) => {
        event.preventDefault();

        const current_page = formEl.getAttribute('data-page');

        if (!validate_form(formEl, current_page)) return;

        const data = serializeArray(formEl);

        //add event_source_url
        data.push({ name: 'event_source_url', value: window.location.href });

        console.log('data:\n');
        console.dir(data);

        hide(qs(formEl, 'input[type="submit"]'));
        show(qs(formEl, '.form_button_loading'));

        try {
          const res = await fetch('/wp-content/themes/inogen/assets/js/ajax/lead_form.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'X-Requested-With': 'XMLHttpRequest',
              accept: '*/*'
            },
            body: toUrlEncoded(data),
            credentials: 'include',
            mode: 'cors'
          });

          const raw = await res.text();

          qsa(document, '.form_system_error').forEach(hide);

          const response = JSON.parse(raw);

          if (response.outcome == 'failure') {
            switch (response.reason) {
              case 'lead.phone_1 must have valid format':
              case 'Bad phone number': {
                const phoneInput = qs(formEl, "fieldset.lead_form_page1 input[name='phone']");
                phoneInput?.parentElement?.classList.add('form_field_error');
                removeAll(phoneInput?.parentElement, '.form_field_error_message');
                phoneInput?.parentElement?.insertAdjacentHTML(
                  'beforeend',
                  '<div class="form_field_error_message">This phone number is invalid</div>'
                );
                show(qs(formEl, '.form_button'));
                hide(qs(formEl, '.form_button_loading'));
                break;
              }
              default:
                qsa(document, '.form_system_error').forEach(show);
            }
            console.log(`error submitting form: ${response.reason}`);
            return;
          }

          //success
          const leadSubmissionTimestamp = new Date().getTime();
          document.cookie = `lead_form_submitted=${leadSubmissionTimestamp}; path=/; max-age=${
            180 * 24 * 60 * 60
          }`;

          console.log('successful new lead, triggering pixels/tracking');

          if (response?.lead?.id) {
            console.log(`lead ID: ${response.lead.id}`);

            const Accutrak_script = document.createElement('script');
            Accutrak_script.innerHTML = `var Accutrak_custom = Accutrak_custom || {}; Accutrak_custom.visitor_keys_cookie = ['leadid']; Accutrak_custom.visitor = {leadid: '${cleanLeadConduitID(
              response.lead.id
            )}'};  Accutrak.log('https://www.inogen.com/', 'Lead', 'pageview');`;
            document.head.appendChild(Accutrak_script);
            try {
              Accutrak.goal('6933');
            } catch (e) {}

            const prescription_for_oxygen =
              qs(formEl, "input[name='prescribed_o2_patient']")?.value == 'Yes' ? 'yes' : 'no';

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'conversion',
              'Prescription for Oxygen': prescription_for_oxygen
            });
          }

          if (window.location.pathname.indexOf('/lp/') == -1) {
            switch (current_page) {
              case '1':
                hide(qs(formEl, '.lead_form_page1'));
                const header = qs(document, '.lead_form_header');
                if (header) header.innerHTML = 'Thank You!';
                hide(qs(formEl, '.form_button_loading'));
                hide(qs(formEl, '.lead_form_page2'));
                hide(qs(formEl, '.lead_form_page3'));
                show(qs(formEl, '.lead_form_page4'));
                qsa(document, '.form_thank_you_message').forEach(show);
                break;
            }
          } else {
            let query_string = window.location.search;

            if (response?.lead?.id) {
              if (query_string.length > 0) query_string += `&leadid=${response.lead.id}`;
              else query_string = `?leadid=${response.lead.id}`;
            }

            let preferred_language = 'English';
            const langEl = qs(formEl, "input[name='preferred_language']");
            if (typeof langEl?.value !== 'undefined' && langEl.value != '') {
              preferred_language = langEl.value.trim();
            }

            if (preferred_language == 'Spanish')
              window.location.href = `/thankyou-spanish/${query_string}`;
            else window.location.href = `/thankyou/${query_string}`;
          }

          const lead_form_utm_campaign = getCookie('inogen_utm_campaign');
          const lead_form_campaign = getCookie('inogen_campaign');
          const lead_form_campaign_phone = getCookie('inogen_campaign_phone');
          const lead_form_trusted_form_cert_url =
            qs(formEl, "input[name='xxTrustedFormCertUrl']")?.value || '';

          if (response?.lead?.id) {
            try {
              mixpanel.track('New Lead', {
                lead_id: response.lead.id,
                form_location: qs(formEl, "input[name='form_location']")?.value || 'unknown',
                campaign: lead_form_campaign,
                utm_campaign: lead_form_utm_campaign,
                campaign_phone: lead_form_campaign_phone,
                trusted_form_cert_url: lead_form_trusted_form_cert_url
              });
            } catch (err) {
              console.warn(`error tracking new lead in mixpanel: ${err.message}`);
            }
          }
        } catch (e) {
          qsa(document, '.form_system_error').forEach(show);
        }
      });
    });
  })();
};
