import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  if (!document.documentElement.classList.contains(ID)) {
    setup();
  }
  const targetPointDesktop = document.querySelector('.MuiStack-root.mui-1hdbc19');
  const targetPointMobile = document.querySelector('.MuiCardContent-root.mui-5ni05f');
  const policyTargetPage = document.querySelector('.MuiStack-root.mui-1i43dhb');
  const mobilePolicyTargetPage = document.querySelector('.MuiCard-root.mui-epm59u');

  if (
    !document.querySelector(`.${ID}__surveyBanner.${ID}__desktop`) &&
    window.location.pathname === '/privacy-policy/'
  ) {
    policyTargetPage.insertAdjacentHTML(
      'afterend',
      `<div class="${ID}__surveyBanner ${ID}__desktop ${ID}__policyPageBanner">
        <img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/ocbscores/OCBScores_SurveyBanner_320x50_01.png" alt="survey-banner"/>
      </div>`
    );
  }

  if (
    !document.querySelector(`.${ID}__surveyBanner.${ID}__desktop`) &&
    (window.location.pathname === '/' || window.location.pathname === '/odds/')
  ) {
    targetPointDesktop.insertAdjacentHTML(
      'afterend',
      `<div class="${ID}__surveyBanner ${ID}__desktop">
        <img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/ocbscores/OCBScores_SurveyBanner_320x50_01.png" alt="survey-banner"/>
      </div>`
    );
  }
  if (
    !document.querySelector(`.${ID}__surveyBanner.${ID}__mobile`) &&
    (window.location.pathname === '/' || window.location.pathname === '/odds/')
  ) {
    targetPointMobile.parentElement.insertAdjacentHTML(
      'beforebegin',
      `<div class="${ID}__surveyBanner ${ID}__mobile">
        <img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/ocbscores/OCBScores_SurveyBanner_320x50_01.png" alt="survey-banner"/>
      </div>`
    );
  }

  if (
    !document.querySelector(`.${ID}__surveyBanner.${ID}__mobile`) &&
    window.location.pathname === '/privacy-policy/'
  ) {
    mobilePolicyTargetPage.parentElement.insertAdjacentHTML(
      'afterend',
      `<div class="${ID}__surveyBanner ${ID}__mobile ${ID}__policyPageBannerMobile">
        <img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/ocbscores/OCBScores_SurveyBanner_320x50_01.png" alt="survey-banner"/>
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
    if (window.location.pathname === '/' || window.location.pathname === '/odds/') {
      pollerLite(
        ['body', '.MuiStack-root.mui-1hdbc19', '.MuiCardContent-root.mui-5ni05f'],
        experimentStart
      );
    }
    if (window.location.pathname === '/privacy-policy/') {
      pollerLite(
        ['body', '.MuiStack-root.mui-1i43dhb', '.MuiCard-root.mui-epm59u'],
        experimentStart
      );
    }
  });
};
