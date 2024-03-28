import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import addBreadcrumb from './addBreadcrumb';
import addCard from './addCard';
import { onUrlChange } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  pollerLite(
    ['.MuiContainer-root .mui-1cpixy9'],
    () => {
      setTimeout(() => {
        addBreadcrumb(ID);
        addCard(ID);
      }, 1000);
    },
  );
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
  onUrlChange(() => {
    init();
  });
};
