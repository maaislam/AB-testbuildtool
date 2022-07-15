const submitButton = (id) => {
  document.querySelector(`.${id}_b-checkout_step-controls`)?.remove();
  const htmlStr = `<div class="${id}_b-checkout_step-controls" >
    <button class="${id}_b-button m-width_full" >
               Weiter zur Bezahlung
       </button>
</div>`;
  return htmlStr;
};

export default submitButton;
