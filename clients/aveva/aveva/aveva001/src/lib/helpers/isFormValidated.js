const isFormValidated = () => {
    return document.querySelectorAll('.mktoFormRow .mktoInvalid').length === 0;
};
export default isFormValidated;
