import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.button.button_hero')) {
      console.log(target);
      gaTracking('main button clicked');
    } else if (target.closest('.button.link-out')) {
      gaTracking('secondary button clicked');
    }
  });
};
