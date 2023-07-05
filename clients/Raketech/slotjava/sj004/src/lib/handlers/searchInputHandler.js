import piwikTrack from '../services/gaTracking';

const SEARCH_READ_DELAY = 300;

const searchInputHandler = (e) => {
  const { value } = e.target;
  clearTimeout(window.typingTimer);
  window.typingTimer = setTimeout(() => {
    piwikTrack(`${value} | Clicks on Filter | Search Bar`);
  }, SEARCH_READ_DELAY);
};
export default searchInputHandler;
