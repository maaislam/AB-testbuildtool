const modalStageOne = (id) => {
  const htmlStr = `
    <div class="${id}__modalstageone container">
        <div class="${id}__modal-close ${id}__modalstageone-close ${id}__close"><img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/modal-close1.png" alt="close icon" /></div>
        <div class="${id}__modalstageone-content">
          <div class="${id}__text-wrapper">
            <div class="${id}__modalstageone-title">Få en personlig casinolista</div>
            <div class="${id}__modalstageone-text">I Sverige gäller regeln 1 bonus per spellicens. Har du redan ett aktivt spelkonto? Vi tar fram och visar dig alla tillgängliga casino bonusar.</div>
          </div>
          <div class="${id}__btns-wrapper">
            <div class="${id}__modalstageone-button accept">Jag har ett konto</div>
            <div class="${id}__modalstageone-button deny ">Jag har inte något konto</div>
          </div>
        </div>
    </div>
  `;
  return htmlStr;
};

export default modalStageOne;
