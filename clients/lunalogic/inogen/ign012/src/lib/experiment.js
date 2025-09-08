import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import customRadioButtonListener from './helpers/customRadioButtonListener';

const { ID, VARIATION } = shared;

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
            label: 'Both – For home and another for travel'
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
            label: "A unit on wheels that's easy to move around my&nbsp;home"
          },
          {
            value: 'compact',
            label: 'A unit that is light & compact enough to take when I&nbsp;travel'
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
            label: 'Budget-friendly device, made anywhere in the world'
          },
          {
            value: 'premiumUSA',
            label: 'Premium device, designed and assembled in the USA'
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
            ${note}
            <div class="quiz-options">${options}</div>
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
    }
    const btn = e.target.closest('[data-action="next"], [data-action="back"]');
    if (!btn) return;
    const sec = btn.closest('.quiz-step[data-step-id]');
    const action = btn.getAttribute('data-action');

    if (action === 'back') {
      if (!state.history.length) return;
      state.currentId = state.history.pop();
      showStep(state.currentId);
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
      if (nextId === 's6') showForm();
      else if (nextId) {
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

  document.body.style.opacity = '1';
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
