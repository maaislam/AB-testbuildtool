import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('#MainContent .banner .banner_heading');
  const variationOneText =
    "Here's how Women are <span>increasing their energy, reducing fatigue & tiredness & balancing</span> their hormones with Beef Organ Superfoods";
  const variationTwoText =
    'Increase <span>energy, reduce tiredness, decrease stress, improve skin health</span> & reduce menstrual cramps within DAYS using Beef Organ Superfoods';

  const mainText = VARIATION === '1' ? variationOneText : variationTwoText;
  targetElement.innerHTML = mainText;
};

export default () => {
  setup();

  if (VARIATION === 'control') return;

  init();
};
