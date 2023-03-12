//import gaTracking from '../services/gaTracking';

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
const clickHandler = (event) => {
  const { target } = event;
  const action = window.location.pathname === '/bullet/upgrade' ? 'select_plan' : 'start_trial';
  if (
    target.closest(`a[href*="${basicPlanLink}"]`) ||
    target.closest(`[href*="${basicUpgradeLink}"]`)
  ) {
    //gaTracking(`basic_${action}_clicks_${pageNameConfig[window.location.pathname]}`);
  } else if (
    target.closest(`a[href*="${growthPlanLink}"]`) ||
    target.closest(`[href*="${growthUpgradeLink}"]`)
  ) {
    //gaTracking(`growth_${action}_clicks_${pageNameConfig[window.location.pathname]}`);
  } else if (
    target.closest(`a[href*="${bookDemoLink}"]`) ||
    target.closest('[data-intercom="plusDemoRequest"]')
  ) {
    //gaTracking(`plus_book_demo_clicks_${pageNameConfig[window.location.pathname]}`);
  } else if (
    target.closest('[href*="/plans-comparison/"]') &&
    window.location.pathname === '/pricing/'
  ) {
    //gaTracking('view_full_list_clicks_pricing');
  }
};

export default clickHandler;
