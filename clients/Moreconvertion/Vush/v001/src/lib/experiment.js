import { changeCssProperty, pollerLite } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();
  const smDevice = window.matchMedia('(max-width: 405px)');
  document.querySelector('.product__meta').classList.add(`${ID}__productMeta`);

  const getShadowRoot = (element) => element.shadowRoot;
  const root = document.querySelector('square-placement');

  pollerLite(
    [() => getShadowRoot(root) !== null && getShadowRoot(root).querySelector('p.afterpay-paragraph > span') !== null],
    () => {
      changeCssProperty(root.shadowRoot, 'p.afterpay-paragraph > span > strong', 'font-weight', '800');
      if (smDevice.matches) {
        changeCssProperty(root.shadowRoot, 'p.afterpay-paragraph > span', 'font-size', '11px');
      } else {
        changeCssProperty(root.shadowRoot, 'p.afterpay-paragraph > span', 'font-size', '12px');
      }
    }
  );
};
