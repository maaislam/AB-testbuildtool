import { getCookie, setCookie } from './utils';

const setViewCount = (ID) => {
  //check if session id exist, if not
  //set session id
  //increase view count

  if (sessionStorage.getItem(`${ID}__viewsession`)) return;
  const viewCount = parseInt(getCookie(`${ID}__viewcount`)) || 0;
  sessionStorage.setItem(`${ID}__viewsession`, true);
  setCookie(`${ID}__viewcount`, viewCount + 1, 30);
};

export default setViewCount;
