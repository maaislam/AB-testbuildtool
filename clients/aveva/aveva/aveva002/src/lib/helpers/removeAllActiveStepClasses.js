const removeAllActiveStepClasses = () => {
  //remove all active classes
  const activeElems = document.querySelectorAll('.contact-us__activeStep');
  activeElems.forEach((elem) => elem.classList.remove('contact-us__activeStep'));
};
export default removeAllActiveStepClasses;
