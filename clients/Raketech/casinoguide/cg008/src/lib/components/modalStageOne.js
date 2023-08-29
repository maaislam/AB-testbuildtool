const modalStageOne = (id) => {
  const htmlStr = `
    <div class="${id}__modalstageone">
        <div class="${id}__modal-close ${id}__modalstageone-close"><img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/modal-close1.png" alt="close icon" /></div>
        <div class="${id}__modalstageone-content">
            <div class="${id}__modalstageone-title">Do you currently have an open casino account?</div>
            <div class="${id}__modalstageone-text">1 bonus per license rule applies. Get a personalised casino list to access more bonus</div>
            <div class="${id}__modalstageone-button accept">I have an account</div>
            <div class="${id}__modalstageone-button deny">I don’t have an account</div>
        </div>
    </div>
  `;
  return htmlStr;
};

export default modalStageOne;
