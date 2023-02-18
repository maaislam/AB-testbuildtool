import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  //console.log(ID);

  const pageNameConfig = {
    '/pricing/': 'pricing',
    '/plans-comparison/': 'comparison',
    '/bullet/upgrade': 'upgrade'
  };
  const basicPlanLink = '?package=price_1HL9MSFJDrKkwzVpVSTP9uwO';
  const basicUpgradeLink = '/bullet/upgrade/basic';

  const growthPlanLink = '?package=price_1JgtZlFJDrKkwzVp2DWUCMa3';
  const growthUpgradeLink = '/bullet/upgrade/growth';

  const bookDemoLink = 'https://www.uscreen.tv/request-demo/';

  document.body.addEventListener('click', ({ target }) => {
    console.log(target);
    if (
      target.closest(`a[href*="${basicPlanLink}"]`) ||
      target.closest(`[href*="${basicUpgradeLink}"]`)
    ) {
      gaTracking(`basic_start_trial_clicks_${pageNameConfig[window.location.pathname]}`);
    } else if (
      target.closest(`a[href*="${growthPlanLink}"]`) ||
      target.closest(`[href*="${growthUpgradeLink}"]`)
    ) {
      gaTracking(`growth_start_trial_clicks_${pageNameConfig[window.location.pathname]}`);
    } else if (
      target.closest(`a[href*="${bookDemoLink}"]`) ||
      target.closest('[data-intercom="plusDemoRequest"]')
    ) {
      gaTracking(`plus_book_demo_clicks_${pageNameConfig[window.location.pathname]}`);
    }
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (window.location.pathname === '/bullet/upgrade') {
    const growthPlan = document.querySelector('[data-test="growth-plan"]');
    const plusPan = document.querySelector('[data-intercom="plusDemoRequest"]');
    growthPlan.querySelector('ds-button').setAttribute('style', '--primary: var(--gray-900);');
    plusPan.removeAttribute('style');
  }
};
