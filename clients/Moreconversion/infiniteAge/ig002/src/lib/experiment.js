/*eslint-disable no-param-reassign */
import setup from './services/setup';

export default () => {
  setup();

  const controlSider = document.querySelector('[id^="MediaGallery-template--"]');

  const imageElemWrappers = controlSider.querySelectorAll('.product__media');
  const imageElemsArray = Array.from(imageElemWrappers).map((item) => item.querySelector('img'));
  const splicedArr = imageElemsArray.splice(2);
  splicedArr.push(imageElemsArray[0]);
  splicedArr.push(imageElemsArray[1]);
  //console.log('🚀 ~ file: experiment.js:48 ~ splicedArr:', splicedArr);
  imageElemWrappers.forEach((imageElemWrapper, index) => {
    imageElemWrapper.innerHTML = '';
    imageElemWrapper.appendChild(splicedArr[index]);
  });
};
