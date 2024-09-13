const stepOne = (id) => {
  const html = `
     <div class="${id}__validateUserModal-container-content-step-1 ${id}__step ${id}__show" data-attr='1'>
        <h1>Remove Ads</h1>
        <p>Remove all ads for a small fee.</p>
        <div class="${id}__buttonsWrapper">
            <button type="button"
                    class="${id}__button ${id}__noThanksBtn">No thanks</button>
            <button type="button"
                    class="${id}__button ${id}__continue">Continue</button>
        </div>
    </div>
  `;
  return html.trim();
};

export default stepOne;
