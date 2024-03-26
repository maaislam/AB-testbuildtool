import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['.ProductListItem', () => typeof window.DY.ServerUtil.getProductsData === 'function'],
  activate
);
