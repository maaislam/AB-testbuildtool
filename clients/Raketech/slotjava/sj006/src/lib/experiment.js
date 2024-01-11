import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.button.button_hero')) {
      gaTracking('Welcome Button');
    } else if (target.closest('.button.link-out') && target.closest('.card-list')) {
      //const operatorName = target.closest('.button.link-out').href.split('visitar/')[1];
      const operatorName = target.closest('.button.link-out').dataset.operator;
      gaTracking(`${operatorName} | CTA CTO | Toplist`);
    } else if (target.closest('.button.link-out')) {
      const operatorName = target.closest('.button.link-out').href.split('visitar/')[1];
      gaTracking(`${operatorName} | CTA CTO | Bottomlist`);
    }
  });

  document.body.addEventListener('pointerup', (e) => {
    const { target } = e;
    if (target.closest('.button.link-out') && target.closest('#drawer')) {
      const operatorName = target.closest('.button.link-out').dataset.operator;
      //console.log(operatorName);
      gaTracking(`${operatorName} | CTA CTO | Bottomlist`);
    }
  });
};
