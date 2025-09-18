import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import customRadioButtonListener from './helpers/customRadioButtonListener';
import successStr from './components/successStr';

const { ID, VARIATION } = shared;

/*========= RESULT STEP: scoring + decision + TY renderer ========= */

const imgObj = {
  ROVE6: 'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4.png.webp',
  ROVE4: 'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4.png.webp',
  AT_HOME: 'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4.png.webp',
  VOXI5: 'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4.png.webp'
};

const productObj = {
  ROVE6: 'https://www.inogen.com/product/rove6-system/',
  ROVE4: 'https://www.inogen.com/product/rove4-system/',
  AT_HOME: '#',
  VOXI5: 'https://www.inogen.com/product/voxi-5/'
};

//Storage key used across pages
const STORAGE_KEY = 'inogen:quiz:result';

//Minimal HTML->DOM
const _toFrag = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content;
};

//Product copy for TY card
const _COPY = {
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

//----- Scoring (per spec) -----
function scoreProducts(ans) {
  const score = {
    ROVE6: 0,
    ROVE4: 0,
    AT_HOME: 0,
    VOXI5: 0
  };

  //Q1 — Use location
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

  //Q2 — Portable trade-off (only if Q1 ≠ Home)
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

  //Q3 — Travel frequency (only if Q1 ≠ Home)
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

  //Q4 — Home priorities (only if Q1 = Home or Both)
  if (ans.q1 === 'home' || ans.q1 === 'both') {
    if (ans.q4_homePriority === 'wheels') {
      score.AT_HOME += 3;
    } else if (ans.q4_homePriority === 'compact') {
      score.AT_HOME += 2;
      score.ROVE4 += 1;
      score.VOXI5 += 1;
    }
  }

  //Q5 — Budget vs premium (asked for all users)
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
}

//----- Decision / Tiebreak rules A–E -----
const _ORDER_PRODUCTS = ['ROVE6', 'ROVE4', 'VOXI5', 'AT_HOME']; //Rule E
const _PORTABLES = new Set(['ROVE6', 'ROVE4', 'VOXI5']);

function decideWinner(score, ans) {
  const keys = Object.keys(score);
  const max = Math.max(...keys.map((k) => score[k]));
  let cand = keys.filter((k) => score[k] === max);
  const trace = {
    max,
    start: [...cand],
    steps: []
  };

  //A — single winner
  if (cand.length === 1) {
    trace.steps.push('A: single high score');
    return {
      product: cand[0],
      appliedRule: 'A',
      trace
    };
  }

  //D — tie incl AT_HOME vs portable
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

  //B — tie ROVE6 vs lighter (ROVE4/VOXI5)
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

  //C — tie between ROVE4 and VOXI5
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
      trace.steps.push('C: Q3=frequent → VOXI5'); //current change
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

  //E — deterministic fallback
  const winner = [...cand].sort(
    (a, b) => _ORDER_PRODUCTS.indexOf(a) - _ORDER_PRODUCTS.indexOf(b)
  )[0];
  trace.steps.push(`E: fallback → ${winner}`);
  return {
    product: winner,
    appliedRule: 'E',
    trace
  };
}

//----- Rationale for TY copy -----
function buildRationale(product, ans, score, { appliedRule, trace }) {
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
    if (ans.q4_homePriority === 'wheels')
      factors.push('At home, easy movement around the house matters.');
    if (ans.q4_homePriority === 'compact')
      factors.push('You want a compact unit for home with occasional travel.');
  }
  if (ans.q5_budgetPreference === 'budget')
    factors.push('You indicated a budget-friendly preference.');
  if (ans.q5_budgetPreference === 'premiumUSA')
    factors.push('You prefer premium devices designed & assembled in the USA.');
  return {
    product,
    points: score[product],
    appliedRule,
    factors,
    trace
  };
}

//----- TY card HTML -----
const _li = (t) => `<li class="ty-rec-bullet">${t}</li>`;
function tyCardHTML(winner, rationale) {
  const c = _COPY[winner] || {
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
                  ? `<ul class="ty-rec-list">${rationale.factors.map(_li).join('')}</ul>`
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
}

//----- Thank-you renderer (runs on TY page; no quiz needed) -----
export function renderThankYou() {
  setup();
  let payload = null;
  try {
    payload = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  } catch (_) {}
  if (!payload?.winner) return;

  //Try a few safe mounts; tweak if you have a dedicated TY container
  const mount = document.querySelector('.thankyou-section');

  if (!document.querySelector(`.${ID}__heroSection`)) {
    mount.insertAdjacentHTML('beforebegin', successStr(ID));
  }

  const mainWrapper = document.querySelector(`.${ID}__thankyou-hero`);
  const contentWrapper = mainWrapper.querySelector(`.${ID}__content`);
  contentWrapper.innerHTML = tyCardHTML(payload.winner, payload.rationale);

  //optional privacy clear
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (_) {}
}

const init = () => {
  //---------- Config ----------
  const SELECTORS = {
    form: '[data-quiz-form], .LeadCaptureForm, form#leadFormBottom, form#leadForm, form[action*="marketo"], form[action*="hubspot"], form'
  };
  const ORDER = ['s1', 's2', 's3', 's4', 's5', 's6']; //for progress bar segments

  //---------- Flow ----------
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
        to: 's6'
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

  //---------- State ----------
  const state = {
    answers: {},
    currentId: flow.start,
    history: []
  };

  //---------- Utils ----------
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const htmlToFragment = (html) => {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content;
  };
  const getNextId = (fromId, answers) => {
    const rules = flow.routing.filter((r) => r.from === fromId);
    for (const r of rules) {
      if (!r.when) return r.to;
      const [k, v] = Object.entries(r.when)[0];
      const a = answers[k];
      if (Array.isArray(v) ? v.includes(a) : a === v) return r.to;
    }
    return null;
  };

  //---------- HTML factories (return strings) ----------
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

  //---------- Mount ----------
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

  if (!document.querySelector('.header-mobile')) {
    document
      .querySelector('.heroSection .heronewsec')
      .insertAdjacentHTML(
        'afterbegin',
        '<div class="header-mobile">An Inogen POC may be covered by Medicare or other Insurance!</div>'
      );
  }

  const stepNodes = {};
  ['s1', 's2', 's3', 's4', 's5'].forEach(
    (id) => (stepNodes[id] = root.querySelector(`[data-step-id="${id}"]`))
  );
  const segs = $$('.quiz-seg', root);

  //---------- View helpers ----------
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
      current.querySelector('input,button,[tabindex]')?.focus({
        preventScroll: false
      });
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
    formEl.querySelector('input,select,textarea,button')?.focus({
      preventScroll: false
    });
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
          (e) => {
            const form = e.target;
            if (!(form instanceof HTMLFormElement)) return;
            if (form !== formEl) return; //only the lead form

            const answers = {
              ...state.answers
            };
            if (!Object.keys(answers).length) return;

            const score = scoreProducts(answers);
            const decision = decideWinner(score, answers);
            const rationale = buildRationale(decision.product, answers, score, decision);

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
              /*ignore storage errors */
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

  //Expose (optional)
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

export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
