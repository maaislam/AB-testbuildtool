import setup from './services/setup';

import shared from './shared/shared';

const { VARIATION } = shared;

const hideConfig = {
  1: {
    hide: true,
    sectionIds: ['16074765', '16074769', '16074770', '16074771', '16074772', '16074773', '16074774']
  },
  2: {
    hide: true,
    sectionIds: ['16074775', '16074776', '16074777', '16074778', '16074779', '16074780', '16074781']
  },
  3: {
    hide: true,
    sectionIds: ['16074782', '16074783', '16074784', '16074785', '16074786']
  },
  4: {
    hide: true,
    sectionIds: ['16074787', '16074788', '16074789', '16074790']
  },
  5: {
    hide: true,
    sectionIds: ['16074791']
  },
  6: {
    hide: true,
    sectionIds: ['16074792']
  }
};

export default () => {
  setup();

  const { sectionIds } = hideConfig[VARIATION];
  sectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = 'none';
    }
  });
};
