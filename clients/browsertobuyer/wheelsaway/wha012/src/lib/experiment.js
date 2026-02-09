import setup from './services/setup';

import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';

const { VARIATION } = shared;

const CONFIG = {
  slideDelay: 400,
  swiperSpeed: 500,
  swiperCSS: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css',
  swiperJS: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js',
  selectors: {
    form: 'form',
    fieldset: 'fieldset',
    section: 'section.col-span-12.rounded-lg',
    heading: 'h1',
    radioInput: 'input[type="radio"]',
    checkboxInput: 'input[type="checkbox"]'
  },
  conditionalQuestions: {
    warning_lights: {
      triggerValue: 'yes',
      secondaryName: 'warning_lights_state',
      type: 'checkbox'
    },
    show_mileage_input: {
      triggerValue: 'yes',
      secondaryName: 'mileage',
      type: 'input'
    }
  },
  labelUpdates: {
    engine_condition: {
      1: {
        title: 'No Faults',
        desc: 'Engine that starts and runs as intended.'
      },
      2: {
        title: 'Faulty but runs',
        desc: 'There is an engine problem but it still drives.'
      },
      3: {
        title: "Doesn't run",
        desc: "The engine won't start or cuts out shortly after starting."
      }
    },
    gearbox_condition: {
      1: {
        title: 'Drives',
        desc: 'Transmission works as intended.'
      },
      2: {
        title: 'Faulty but drives',
        desc: 'There is an issue, but you can still drive the vehicle.'
      },
      3: {
        title: "Doesn't drive",
        desc: 'The transmission fault prevents the engine from driving.'
      }
    },
    clean_title: {
      0: {
        title: 'Yes - clean title',
        desc: 'Unless the vehicle has previously had severe damage it is likely to have a clean title.'
      },
      1: {
        title: 'No - salvage or rebuilt title',
        desc: "If you have the title then check it for any historic entries mentioning 'salvage' or 'rebuilt'."
      },
      2: {
        title: 'No title present',
        desc: ''
      }
    },
    warning_lights: {
      yes: {
        title: 'Yes',
        desc: ''
      },
      no: {
        title: 'No',
        desc: ''
      }
    },
    warning_lights_state: {
      eml: {
        title: 'EML',
        desc: 'Engine Management Light.'
      },
      srs: {
        title: 'SRS',
        desc: 'Supplemental Restraint System (Airbag).'
      },
      abs: {
        title: 'ABS',
        desc: 'Anti-lock Braking System.'
      },
      other: {
        title: 'Other',
        desc: 'Any other warning lights on the dashboard.'
      }
    },
    crash_damaged: {
      2: {
        title: 'Yes',
        desc: 'Crash damage impacts my ability to drive the vehicle safely.'
      },
      1: {
        title: 'No',
        desc: "Crash damage doesn't impact my ability to drive the vehicle safely."
      }
    },
    interior_condition: {
      1: {
        title: 'Excellent',
        desc: ''
      },
      3: {
        title: 'Average',
        desc: ''
      },
      4: {
        title: 'Poor',
        desc: ''
      }
    },
    show_mileage_input: {
      yes: {
        title: 'Yes',
        desc: ''
      },
      no: {
        title: 'No',
        desc: ''
      }
    }
  }
};

const state = {
  swiper: null,
  answeredQuestions: new Set()
};

const loadCSS = (href) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`link[href="${href}"]`)) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    document.head.appendChild(link);
  });
};

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.body.appendChild(script);
  });
};

const loadSwiper = async () => {
  if (typeof Swiper !== 'undefined') return true;

  try {
    await loadCSS(CONFIG.swiperCSS);
    await loadScript(CONFIG.swiperJS);
    return true;
  } catch (error) {
    console.error('Failed to load Swiper:', error);
    return false;
  }
};
const createTickIcon = () => {
  const tick = document.createElement('span');
  tick.className = 'wa-tick';
  tick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="9" fill="#EF741D"/>
    <rect x="4.5" y="9.06445" width="0.960996" height="4.80498" rx="0.480498" transform="rotate(-45 4.5 9.06445)" fill="white"/>
    <rect x="13.1324" y="5.78564" width="0.960996" height="8.30589" rx="0.480498" transform="rotate(45 13.1324 5.78564)" fill="white"/>
  </svg>`;
  return tick;
};

const applyLabelUpdates = () => {
  if (VARIATION === '1') return;

  const form = document.querySelector(CONFIG.selectors.form);
  const section = document.querySelector(CONFIG.selectors.section);
  if (!form || !section) return;

  //Add class to section for SCSS styling
  section.classList.add('wa-enhanced-labels');

  //Update all labels
  Object.entries(CONFIG.labelUpdates).forEach(([inputName, values]) => {
    Object.entries(values).forEach(([inputValue, content]) => {
      const input = form.querySelector(`input[name="${inputName}"][value="${inputValue}"]`);
      if (!input) return;

      const label = form.querySelector(`label[for="${input.id}"]`);
      if (!label) return;

      //Check if label has an image (like warning lights)
      const img = label.querySelector('img');

      //Clear existing text content but keep images
      if (img) {
        //for image labels, add text next to image
        label.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'wa-label-with-icon';

        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'wa-label-icon';
        imgWrapper.appendChild(img);

        const textWrapper = document.createElement('div');
        textWrapper.className = 'wa-label-text';
        textWrapper.innerHTML = `<strong>${content.title}</strong>${
          content.desc ? `<span>${content.desc}</span>` : ''
        }`;

        wrapper.appendChild(imgWrapper);
        wrapper.appendChild(textWrapper);
        label.appendChild(wrapper);
      } else {
        //For text-only labels
        label.innerHTML = `<div class="wa-label-content">
            <strong>${content.title}</strong>
            ${content.desc ? `<span>${content.desc}</span>` : ''}
          </div>`;
      }

      //Add tick icon
      label.appendChild(createTickIcon());
    });
  });
};

const getFieldsetName = (fieldset) => {
  const input =
    fieldset.querySelector(CONFIG.selectors.radioInput) ||
    fieldset.querySelector(CONFIG.selectors.checkboxInput);
  return input?.name || null;
};

const createSwiperStructure = () => {
  const section = document.querySelector(CONFIG.selectors.section);
  const heading = section?.querySelector(CONFIG.selectors.heading);

  if (!section || !heading) return null;

  //Get all fieldsets directly in section (not nested in hidden divs)
  const allFieldsets = [...section.querySelectorAll(`:scope > ${CONFIG.selectors.fieldset}`)];

  //Also get fieldsets inside hidden divs
  const hiddenDivs = [...section.querySelectorAll(':scope > div[hidden]')];
  const hiddenFieldsets = hiddenDivs
    .map((div) => div.querySelector(CONFIG.selectors.fieldset))
    .filter(Boolean);

  if (allFieldsets.length === 0) return null;

  //Track secondary fieldset names
  const secondaryNames = Object.values(CONFIG.conditionalQuestions).map((c) => c.secondaryName);

  //Create Swiper container
  const swiperContainer = document.createElement('div');
  swiperContainer.className = 'swiper wa-swiper';

  const swiperWrapper = document.createElement('div');
  swiperWrapper.className = 'swiper-wrapper';

  allFieldsets.forEach((fs) => {
    const name = getFieldsetName(fs);

    //Skip secondary fieldsets - they'll be appended to parent
    if (secondaryNames.includes(name)) return;

    //Add swiper-slide class to original fieldset
    fs.classList.add('swiper-slide');

    //Check if this has a conditional secondary
    const conditional = CONFIG.conditionalQuestions[name];
    if (conditional) {
      //Find the secondary fieldset from hidden divs
      const secondaryFs = hiddenFieldsets.find(
        (f) => getFieldsetName(f) === conditional.secondaryName
      );

      if (secondaryFs) {
        console.log('🚀 ~ createSwiperStructure ~ secondaryFs:', secondaryFs);
        //Create wrapper and MOVE (not clone) the secondary content
        //make another swiper here

        const secondaryWrapper = document.createElement('div');
        //secondaryWrapper.className = 'wa-secondary-question';
        secondaryWrapper.classList.add('swiper', 'wa-swiper-secondary', 'wa-secondary-question');
        secondaryWrapper.dataset.parentName = name;
        secondaryWrapper.dataset.triggerValue = conditional.triggerValue;
        secondaryWrapper.dataset.type = conditional.type;
        secondaryWrapper.style.display = 'none';

        //Move all children from secondary fieldset
        while (secondaryFs.firstChild) {
          secondaryWrapper.appendChild(secondaryFs.firstChild);
        }

        //Add Next button
        const nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'wa-next-btn';
        nextBtn.textContent = 'Next';
        nextBtn.disabled = true;
        secondaryWrapper.appendChild(nextBtn);

        fs.appendChild(secondaryWrapper);
      }
    }

    //MOVE fieldset to swiper wrapper
    swiperWrapper.appendChild(fs);
  });

  swiperContainer.appendChild(swiperWrapper);

  //Remove empty hidden divs
  hiddenDivs.forEach((div) => div.remove());

  //Insert after heading
  heading.after(swiperContainer);

  return swiperContainer;
};

const initSwiper = (container) => {
  state.swiper = new window.Swiper(container, {
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: CONFIG.swiperSpeed,
    allowTouchMove: true,
    mousewheel: true,
    grabCursor: true,
    observer: true,
    observeParents: true,
    effect: 'slide'
  });
};

const showSecondaryQuestion = (name, show) => {
  const secondaryWrapper = document.querySelector(
    `.wa-secondary-question[data-parent-name="${name}"]`
  );
  if (secondaryWrapper) {
    secondaryWrapper.style.display = show ? 'block' : 'none';

    //Force Swiper to recalculate and stay on current slide
    if (state.swiper) {
      const currentIndex = state.swiper.activeIndex;

      requestAnimationFrame(() => {
        state.swiper.update();
        state.swiper.slideTo(currentIndex, 0);
        state.swiper.updateAutoHeight(300);
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      });
    }
  }
};

const slideToNext = () => {
  if (!state.swiper) return;
  state.swiper.slideNext();
};

const handleRadioChange = (input) => {
  const { name } = input;
  const { value } = input;

  const conditional = CONFIG.conditionalQuestions[name];

  if (conditional) {
    const needsSecondary = value === conditional.triggerValue;
    showSecondaryQuestion(name, needsSecondary);

    if (needsSecondary) {
      //Show secondary, wait for Next button click
      return;
    }
    //"No" selected - auto advance
    if (!state.answeredQuestions.has(name)) {
      state.answeredQuestions.add(name);
      setTimeout(() => slideToNext(), CONFIG.slideDelay);
    }
    return;
  }

  if (!state.answeredQuestions.has(name)) {
    state.answeredQuestions.add(name);
    setTimeout(() => slideToNext(), CONFIG.slideDelay);
  }
};

const handleCheckboxChange = (input) => {
  const secondaryWrapper = input.closest('.wa-secondary-question');
  if (!secondaryWrapper) return;

  const { type } = secondaryWrapper.dataset;
  if (type !== 'checkbox') return;

  const checkedBoxes = secondaryWrapper.querySelectorAll('input[type="checkbox"]:checked');
  const nextBtn = secondaryWrapper.querySelector('.wa-next-btn');

  if (nextBtn) {
    nextBtn.disabled = checkedBoxes.length === 0;
  }
};

const handleTextInput = (input) => {
  const secondaryWrapper = input.closest('.wa-secondary-question');
  if (!secondaryWrapper) return;

  const { type } = secondaryWrapper.dataset;
  if (type !== 'input') return;

  const nextBtn = secondaryWrapper.querySelector('.wa-next-btn');
  if (nextBtn) {
    nextBtn.disabled = input.value.trim() === '';
  }
};

const handleNextBtnClick = (btn) => {
  const secondaryWrapper = btn.closest('.wa-secondary-question');
  if (!secondaryWrapper) return;

  const { parentName } = secondaryWrapper.dataset;

  if (!state.answeredQuestions.has(parentName)) {
    state.answeredQuestions.add(parentName);
    slideToNext();
  }
};

const bindEvents = () => {
  const form = document.querySelector(CONFIG.selectors.form);
  if (!form) return;

  form.addEventListener('change', (e) => {
    const input = e.target;

    if (input.matches(CONFIG.selectors.radioInput)) {
      handleRadioChange(input);
    } else if (input.matches(CONFIG.selectors.checkboxInput)) {
      handleCheckboxChange(input);
    }
  });

  //Text input - enable/disable Next button on input
  form.addEventListener('input', (e) => {
    if (e.target.matches('input[type="text"], input[type="number"]')) {
      handleTextInput(e.target);
    }
  });

  //Next button click
  form.addEventListener('click', (e) => {
    if (e.target.matches('.wa-next-btn')) {
      handleNextBtnClick(e.target);
    }
  });
};
const reset = () => {
  const form = document.querySelector(CONFIG.selectors.form);
  if (!form) return;

  //1. Clear internal state
  state.answeredQuestions.clear();

  //2. Reset Swiper to first slide
  if (state.swiper) {
    state.swiper.slideTo(0, 0);
  }

  //3. Hide all secondary questions and disable Next buttons
  document.querySelectorAll('.wa-secondary-question').forEach((el) => {
    el.style.display = 'none';
    const btn = el.querySelector('.wa-next-btn');
    if (btn) btn.disabled = true;
  });

  //4. Uncheck all radio buttons
  form.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
    input.checked = false;
  });

  //5. Uncheck all checkboxes
  form.querySelectorAll('input[type="checkbox"]:checked').forEach((input) => {
    input.checked = false;
  });

  //6. Clear all text/number inputs
  form.querySelectorAll('input[type="text"], input[type="number"]').forEach((input) => {
    input.value = '';
  });

  //7. Trigger change events to reset form validation
  const firstInput = form.querySelector('input');
  if (firstInput) {
    firstInput.dispatchEvent(
      new Event('change', {
        bubbles: true
      })
    );
  }

  //8. Update Swiper height
  if (state.swiper) {
    requestAnimationFrame(() => {
      state.swiper.update();
      state.swiper.updateAutoHeight(0);
    });
  }

  console.log('WheelsAway Form Reset');
};

const init = async () => {
  if (window.location.pathname !== '/quote/sa/car-condition/') return;

  reset();

  const loaded = await loadSwiper();
  if (!loaded) {
    console.error('Could not initialize: Swiper failed to load');
    return;
  }
  pollerLite([() => typeof window.Swiper === 'function'], () => {
    const container = createSwiperStructure();
    if (container) {
      initSwiper(container);
      bindEvents();
      applyLabelUpdates();
      console.log('WheelsAway Form Enhancements (Swiper) initialized');
    }
  });
};

export default () => {
  setup(); //use if needed
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  pollerLite(['[name="gearbox_condition"]'], init);

  onUrlChange(() => {
    pollerLite(['[name="gearbox_condition"]'], init);
  });
};
