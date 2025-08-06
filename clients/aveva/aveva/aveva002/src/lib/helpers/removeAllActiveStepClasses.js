const removeAllActiveStepClasses = (id) => {
    //remove all active classes
    const activeElems = document.querySelectorAll(`.${id}__activeStep`);
    activeElems.forEach((elem) => elem.classList.remove(`${id}__activeStep`));
};
export default removeAllActiveStepClasses;
