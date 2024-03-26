import setup from './services/setup';
import shared from './shared/shared';
import { packageContainer } from './components/packageContainer';
import { podContainer } from './components/podContainer';
import { blendContainer } from './components/blendContainer';
import { header } from './components/header';
import { packages, pods } from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const targetDiv = document.querySelector('#MainContent > .container');
  //package header
  if (document.querySelector(`.${ID}__packageHeader`)) {
    document.querySelector(`.${ID}__packageHeader`).remove();
  }

  targetDiv.insertAdjacentHTML(
    'beforeend',
    header(
      ID,
      'THE PERFECT INTRODUCTION',
      'Discover our Starter Packs – packaged with some of our bestselling Essential Oil Blends, they’re the best way to shop...',
      `${ID}__packageHeader`
    )
  );

  //package product
  if (document.querySelector(`.${ID}__packageContainer`)) {
    document.querySelector(`.${ID}__packageContainer`).remove();
  }

  targetDiv.insertAdjacentHTML('beforeend', packageContainer(ID, packages));

  //pod header
  if (document.querySelector(`.${ID}__podHeader`)) {
    document.querySelector(`.${ID}__podHeader`).remove();
  }

  targetDiv.insertAdjacentHTML(
    'beforeend',
    header(
      ID,
      'POD PARTNERS',
      'From replacements parts to cleaning kits shop our Wellbeing Pod accessories...',
      `${ID}__podHeader`
    )
  );

  //pod products
  if (document.querySelector(`.${ID}__podContainer`)) {
    document.querySelector(`.${ID}__podContainer`).remove();
  }
  targetDiv.insertAdjacentHTML('beforeend', podContainer(ID, pods));

  //blend element
  if (document.querySelector(`.${ID}__blendContainer`)) {
    document.querySelector(`.${ID}__blendContainer`).remove();
  }
  targetDiv.insertAdjacentHTML('beforeend', blendContainer(ID));
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  init();
};
