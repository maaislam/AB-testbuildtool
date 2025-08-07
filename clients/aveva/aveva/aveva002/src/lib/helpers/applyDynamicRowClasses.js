/*eslint-disable prefer-template */
const applyDynamicRowClasses = () => {
  const firstNameInput = document.querySelector('form.mktoForm #FirstName');
  const lastNameInput = document.querySelector('form.mktoForm #LastName');
  const emailInput = document.querySelector('form.mktoForm #Email');
  const companyInput = document.querySelector('form.mktoForm #Company');
  const industryInput = document.querySelector('form.mktoForm #Industry__c');
  const jobTitleInput = document.querySelector('form.mktoForm #Title');
  const phoneInput = document.querySelector('form.mktoForm #Phone');
  const enquiryTypeInput = document.querySelector('form.mktoForm #enquiryType');
  const enquiryMessageInput = document.querySelector('form.mktoForm #enquiryMessage');
  const countryInput = document.querySelector('form.mktoForm #Country');
  const stateInput = document.querySelector('form.mktoForm #State');
  const postCodeInput = document.querySelector('form.mktoForm #PostalCode');

  const firstNameRow = firstNameInput.closest('.mktoFormRow');
  const lastNameRow = lastNameInput.closest('.mktoFormRow');
  const emailRow = emailInput.closest('.mktoFormRow');
  const companyRow = companyInput.closest('.mktoFormRow');
  const industryRow = industryInput.closest('.mktoFormRow');
  const jobTitleRow = jobTitleInput.closest('.mktoFormRow');
  const phoneRow = phoneInput.closest('.mktoFormRow');
  const enquiryTypeRow = enquiryTypeInput.closest('.mktoFormRow');
  const enquiryMessageRow = enquiryMessageInput.closest('.mktoFormRow');
  const countryRow = countryInput.closest('.mktoFormRow');

  //turn to es5 syntax
  firstNameRow.classList.add('contact-us__firstNameRow');
  lastNameRow.classList.add('contact-us__lastNameRow');
  emailRow.classList.add('contact-us__emailRow');
  companyRow.classList.add('contact-us__companyRow');
  industryRow.classList.add('contact-us__industryRow');
  jobTitleRow.classList.add('contact-us__jobTitleRow');
  phoneRow.classList.add('contact-us__phoneRow');
  enquiryTypeRow.classList.add('contact-us__enquiryTypeRow');
  enquiryMessageRow.classList.add('contact-us__enquiryMessageRow');
  countryRow.classList.add('contact-us__countryRow');

  if (stateInput) {
    const stateRow = stateInput.closest('.mktoFormRow');
    //turn to es5 syntax
    stateRow.classList.add('contact-us__stateRow');
  }
  if (postCodeInput) {
    const postCodeRow = postCodeInput.closest('.mktoFormRow');
    //turn to es5 syntax
    postCodeRow.classList.add('contact-us__postCodeRow');
  }
};
export default applyDynamicRowClasses;
