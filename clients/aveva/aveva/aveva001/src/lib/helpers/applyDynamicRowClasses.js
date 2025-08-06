const applyDynamicRowClasses = (id) => {
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

    firstNameRow.classList.add(`${id}__firstNameRow`);
    lastNameRow.classList.add(`${id}__lastNameRow`);
    emailRow.classList.add(`${id}__emailRow`);
    companyRow.classList.add(`${id}__companyRow`);
    industryRow.classList.add(`${id}__industryRow`);
    jobTitleRow.classList.add(`${id}__jobTitleRow`);
    phoneRow.classList.add(`${id}__phoneRow`);
    enquiryTypeRow.classList.add(`${id}__enquiryTypeRow`);
    enquiryMessageRow.classList.add(`${id}__enquiryMessageRow`);
    countryRow.classList.add(`${id}__countryRow`);

    if (stateInput) {
        const stateRow = stateInput.closest('.mktoFormRow');
        stateRow.classList.add(`${id}__stateRow`);
    }
    if (postCodeInput) {
        const postCodeRow = postCodeInput.closest('.mktoFormRow');
        postCodeRow.classList.add(`${id}__postCodeRow`);
    }
};
export default applyDynamicRowClasses;
