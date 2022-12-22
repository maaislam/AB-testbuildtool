/*eslint-disable no-param-reassign */
import initaialScan from '../components/initailScan';
import { delay, waitForElm } from '../helpers/utils';
import gaTracking from '../services/gaTracking';

const scanSubmitHandler = (id) => {
  const payload = {
    fullName: sessionStorage.getItem(`${id}__fullname`),
    location: sessionStorage.getItem(`${id}__currentlocation`)
  };

  const searchDomain = 'https://vxp.joindeleteme.com';

  const getCount = (waitInterval) => {
    return fetch(`${searchDomain}/bff/api/v1/free-scan-count`, {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        scanId: sessionStorage.getItem(`${id}__scanId`)
      }),
      method: 'POST'
    })
      .then((response) => response.json())
      .then((res) => res)
      .then((data) => delay(waitInterval).then(() => data));
  };

  gaTracking('step_2_completion');

  return fetch(`${searchDomain}/bff/api/v1/free-scan`, {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json; charset=UTF-8'
    },

    body: JSON.stringify(payload),
    method: 'POST'
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { scanId, scanLogId, city, state, countryCode } = data;
      sessionStorage.setItem(`${id}__scanId`, scanId);
      sessionStorage.setItem(`${id}__scanLogId`, scanLogId);
      sessionStorage.setItem(`${id}__city`, city);
      sessionStorage.setItem(`${id}__state`, state);
      sessionStorage.setItem(`${id}__countryCode`, countryCode);
    })
    .then(() => getCount(2000))
    .then(() => getCount(3000))
    .then(() => getCount(4000))
    .then(() => getCount(5000))
    .then(() => getCount(6000))
    .then(() => getCount(2000))
    .then((count) => {
      console.log(count);
      sessionStorage.setItem(`${id}__count`, count.total);

      //show email field + appropriate header text

      waitForElm(`.${id}__scanning-progress--complete`).then((elem) => {
        elem.style.width = '100%';

        document.querySelector(`.${id}__scanning--row1`).classList.add(`${id}__hide`);
        document.querySelector(`.${id}__scanning--row2`).classList.remove(`${id}__hide`);
        const navtabs = document.querySelector(`.${id}__navtab`);
        navtabs?.classList.remove('step-2');
        navtabs?.classList.add('step-3');
        document
          .querySelector(`.${id}__scanning--row2`)
          .insertAdjacentHTML('afterbegin', initaialScan(id));
      });
    });
};

export default scanSubmitHandler;
