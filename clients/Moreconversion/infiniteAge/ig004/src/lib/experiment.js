import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const controlSider = document.querySelector('[id^="MediaGallery-template--"]');
  const imageElemWrappers = controlSider.querySelectorAll('.product__media');
  const imageElemsArray = Array.from(imageElemWrappers).map((item) => item.querySelector('img'));
  const splicedArr = imageElemsArray.splice(2);
  splicedArr.push(imageElemsArray[0]);
  splicedArr.push(imageElemsArray[1]);
  //console.log('🚀 ~ file: experiment.js:48 ~ splicedArr:', splicedArr);
  imageElemWrappers.forEach((imageElemWrapper, index) => {
    //eslint-disable-next-line no-param-reassign
    imageElemWrapper.innerHTML = '';
    imageElemWrapper.appendChild(splicedArr[index]);
  });

  const populerMessage = `
  <div class="pkg_strip px-4" 
  "><p>MOST POPULAR</p></div>
  `;

  document.querySelector('.main_class');
};
