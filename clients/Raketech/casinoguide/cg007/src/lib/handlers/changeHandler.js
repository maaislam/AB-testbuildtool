import shared from '../shared/shared';

const changeHandler = (event) => {
  const { ID } = shared;
  const { target } = event;
  if (target.closest(`.${ID}__stagetwo-checkbox`)) {
    //console.log('event', event);
    const { brand } = target.dataset;
    if (window.selectedCasinos.includes(brand)) {
      window.selectedCasinos = window.selectedCasinos.filter((item) => item !== brand);
      //console.log('window.selectedCasinos', window.selectedCasinos);
      return;
    }
    window.selectedCasinos.push(brand);
    //console.log('window.selectedCasinos', window.selectedCasinos);
  }
};

export default changeHandler;
