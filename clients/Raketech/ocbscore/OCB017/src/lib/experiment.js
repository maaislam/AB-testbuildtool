import setup from './services/setup';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  if (!document.documentElement.classList.contains(ID)) {
    setup();
  }

  const targetPointMobile = document.querySelector('.MuiCardContent-root.mui-5ni05f');
  const mobilePolicyTargetPage = document.querySelector('.MuiCard-root.mui-epm59u');

  if (!document.querySelector(`.${ID}__surveyBanner.${ID}__mobile`)) {
    targetPointMobile &&
      targetPointMobile.parentElement.insertAdjacentHTML(
        'beforebegin',
        `<div class="${ID}__surveyBanner ${ID}__mobile">
        <img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/ocbscores/Feedback_Survey_V6.png" alt="survey-banner"/>
      </div>`
      );
  }

  if (!document.querySelector(`.${ID}__surveyBanner.${ID}__mobile`)) {
    mobilePolicyTargetPage &&
      mobilePolicyTargetPage.parentElement.insertAdjacentHTML(
        'afterend',
        `<div class="${ID}__surveyBanner ${ID}__mobile ${ID}__policyPageBannerMobile">
        <img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/ocbscores/Feedback_Survey_V6.png" alt="survey-banner"/>
      </div>`
      );
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  const isListenerAdded = document.body.getAttribute(`${ID}__isListenerAdded`);
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest(`.${ID}__surveyBanner`)) {
        window._sva.invokeEvent('survey_banner_click');
      }
    });
  }

  document.body.setAttribute(`${ID}__isListenerAdded`, true);

  if (VARIATION === 'control') {
    return;
  }

  const experimentStart = () => {
    const intervalId = setInterval(() => {
      init();
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);
  };

  experimentStart();

  onUrlChange(() => {
    //if (window.location.pathname === '/' || window.location.pathname === '/odds/') {
    pollerLite(
      ['body', '.MuiStack-root.mui-1hdbc19', '.MuiCardContent-root.mui-5ni05f'],
      experimentStart
    );
    //}
  });
};
