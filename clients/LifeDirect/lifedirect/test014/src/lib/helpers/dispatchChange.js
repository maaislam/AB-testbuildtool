const dispatchChange = (optionVal) => {
  const selectElm = document.querySelector('#life\\.premiumStructure');
  selectElm.value = optionVal;
  selectElm.dispatchEvent(
    new Event('change', {
      bubbles: true
    })
  );
};
export default dispatchChange;
