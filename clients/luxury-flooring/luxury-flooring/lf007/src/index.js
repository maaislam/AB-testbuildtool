import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.product-add-form', '[data-bind="textInput: input"]'], () => {
  setTimeout(activate, 1000);
});
