import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const anchorPoint = document.querySelector('.vc_section > div.vc_row > .vc_column_container');

  const uspsData = [
    {
      details: 'Swift Evaluation Guarantee: Get assessed quickly—bypassing wait times prevalent in other clinics.'
    },
    {
      details: 'Exclusive 1:1 Expert Care: Experience personalized attention from our highly trained clinicians—no sharing appointments or passing off to aides.'
    },
    {
      details: 'Extended Quality Sessions: Enjoy full hour-long appointments directly with your physical therapist, ensuring comprehensive care without interruptions.'
    },
    {
      details: 'Proven Faster Recovery: Our approach means faster recovery in fewer visits—supported by data showcasing our effectiveness.'
    }
  ];

  const checkboxIcon = '<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 429.76"><path fill-rule="nonzero" d="M96.3 0h242.43c-15.45 14.62-30.92 29.65-46 44.92l-.78.79H96.3c-13.9 0-26.55 5.7-35.72 14.87-9.17 9.17-14.87 21.82-14.87 35.71v237.17c0 27.86 22.73 50.59 50.59 50.59h319.4c27.7 0 50.59-22.89 50.59-50.59V100.71c12.47-14.55 25-28.94 37.48-43.14A94.985 94.985 0 0 1 512 96.29v237.17c0 52.91-43.39 96.3-96.3 96.3H96.3c-52.84 0-96.3-43.47-96.3-96.3V96.29C0 69.8 10.83 45.71 28.27 28.27 45.71 10.83 69.8 0 96.3 0zm92.81 146.72c22.15 12.77 36.58 23.38 53.76 42.31 44.55-71.71 94.83-113.36 157.71-169.76l6.15-2.37h68.8C383.28 119.36 314.7 201.19 245.77 324.73c-41.43-69.82-69.31-114.77-129.55-161.54l72.89-16.47z"/></svg>';

  const htmlStr = `
    <div class="${ID}__uspsContainer">
      <div class="${ID}__uspsList">
        ${uspsData.map((usps) => `
          <div class="${ID}__uspItem">
            <div class="${ID}__details">${usps.details}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  anchorPoint.insertAdjacentHTML('beforeend', htmlStr);
};

export default () => {
  setup();

  init();
};
