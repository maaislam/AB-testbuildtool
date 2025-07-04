import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    '[data-testid="billing-country"]',
    () => {
      const plans = document.querySelectorAll('.pricing-box-content-cycle');
      return (
        plans.length &&
        Array.from(plans).every(
          (plan) => plan.querySelector('.h2') && plan.querySelector('.h2').textContent.trim() !== ''
        )
      );
    }
  ],
  activate
);
