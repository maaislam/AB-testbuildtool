import setup from './services/setup';
import shared from './shared/shared';
import cards from './components/cards';

const { ID, VARIATION } = shared;

const data = [
  {
    title: 'Title 1',
    desktopImage: 'https://i.shgcdn.com/ac107369-6742-4e61-be09-752afec3a1fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/',
    mobileImage: 'https://i.shgcdn.com/ac107369-6742-4e61-be09-752afec3a1fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/',
    url: ''
  },
  {
    title: 'Title 2',
    desktopImage: 'https://i.shgcdn.com/ac107369-6742-4e61-be09-752afec3a1fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/',
    mobileImage: 'https://i.shgcdn.com/ac107369-6742-4e61-be09-752afec3a1fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/',
    url: ''
  },
  {
    title: 'Title 3',
    desktopImage: 'https://i.shgcdn.com/ac107369-6742-4e61-be09-752afec3a1fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/',
    mobileImage: 'https://i.shgcdn.com/ac107369-6742-4e61-be09-752afec3a1fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/',
    url: ''
  },
  {
    title: 'Title 4',
    desktopImage: 'https://i.shgcdn.com/ac107369-6742-4e61-be09-752afec3a1fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/',
    mobileImage: 'https://i.shgcdn.com/ac107369-6742-4e61-be09-752afec3a1fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1920x/',
    url: ''
  }
];

const init = () => {
  const attachPoint = document.querySelector('.shogun-root > .shg-box-vertical-align-wrapper .shg-box-vertical-align-wrapper');
  attachPoint.insertAdjacentHTML('beforebegin', cards(ID, data));
};

export default () => {
  setup();

  init();
};
