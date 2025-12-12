import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    '.template-product',
    '.variant-selector__toggle-dimensions--container',
    '.variant-selector__btn',
    '.variant-selector__list'
  ],
  activate
);
