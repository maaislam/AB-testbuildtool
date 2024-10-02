import setup from './services/setup';
import shared from './shared/shared';
import categoryWrapper from './components/categoryWrapper';
import { topsArray } from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const header = document.querySelector('#CollectionSection');
  if (!document.querySelector(`.${ID}__categoryWrapper`)) {
    header.insertAdjacentHTML('afterbegin', categoryWrapper(ID, topsArray));
  }
};

export default () => {
  setup();

  init(); //
};
