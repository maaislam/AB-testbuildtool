const clickHandler = (id) => {
  document.body.addEventListener('click', (e) => {
    if (e.target.closest(`.${id}__btnAtbWrapper`) || e.target.closest(`.${id}__btnAtbContainer`)) {
      document.querySelector(`#globalPDPDetailsContainer .add-to-basket-button > button`).click();
    } else if (e.target.closest(`.${id}__btnSize`)) {
      document.querySelector(`[id*='filterSizeContainer_']`).click();
    }
  });
};

export default clickHandler;
