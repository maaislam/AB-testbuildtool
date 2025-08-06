const customerSupportHandler = (id, card) => {
  const controlSupportCTA = document.querySelector('a[data-cta="Visit customer support"]');

  controlSupportCTA.click();
};
export default customerSupportHandler;
