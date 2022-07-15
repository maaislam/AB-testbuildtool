const buttonStrFn = (id) => {
  return `<div class="${id}__btnAtbWrapper">
                    <button class="lr-button lr-button-block">
                        ADD TO BASKET
                    </button>
          </div>`;
};

const buttonWithSizeFn = (id, isArrow) => {
  //console.log('inside arrow', isArrow);
  return `<div class="${id}__sizeAtbContainer">
        <div class="${id}__btnSize">
          <span>Size</span>
          <span class="lr-arrow lr-arrow-right ${
            isArrow ? 'arrow-hidden' : 'arrow-visible'
          }"></span>     
        </div>
        <div class="${id}__btnAtbContainer">
          <button class="lr-button lr-button-block">
              ADD TO BASKET
          </button>
        </div>
    
     </div>`;
};

export { buttonStrFn, buttonWithSizeFn };
