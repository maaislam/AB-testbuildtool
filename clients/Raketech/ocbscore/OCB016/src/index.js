import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const shouldRunTest = (url) => /^https:\/\/ocbscores\.com\/predictions-and-tips\/.+$/.test(url);

pollerLite(['body', '.MuiBox-root.mui-1smddtb'], () => setTimeout(activate, 2000));
pollerLite(['body', '.MuiBox-root.mui-4kbj', () => shouldRunTest(window.location.href)], () =>
  setTimeout(activate, 2000)
);
