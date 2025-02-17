import activate from './lib/experiment';
import { pollerLite, collectionName } from './lib/helpers/utils';

const isCollection = collectionName.filter((item) =>
  window.location.href.includes(item.urlPortion));

//const isQueryParam = window.location.href.includes('qa=true');

pollerLite(
  ['#CartCount', '.product-single__form-banner', () => isCollection && isCollection.length],
  activate
);
