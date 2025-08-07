const prefilledFormValues = (formType) => {
  if (formType === 'support') {
    const supportMktoFormElem = document.querySelector('.support-mkto-form');
    const industryInputElem = supportMktoFormElem.querySelector('#Industry__c');
    const jobTitleInputElem = supportMktoFormElem.querySelector('#Title');

    industryInputElem.value = 'Academia';
    jobTitleInputElem.value = 'Support submission';
  }
};
export default prefilledFormValues;
