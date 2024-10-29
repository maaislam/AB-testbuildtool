const bonusContainer = (id, bonusValue, bonusValuex, freeSpinValue, freeSpinValuex) => {
  const html = `
        <div class="${id}__bonusContainer">
            <div class="${id}__bonusContainer-list">
                <div class="${id}__bonusContainer-item">
                    ${
                      bonusValuex
                        ? `
                             <div class="${id}__bonusContainer-item-text">
                                <span class="${id}__bonusValue">${bonusValue}</span>
                                <span class="${id}__bonusValue-text">Bonus</span>              
                             </div>
                             <div class="${id}__bonusContainer-item-quantity">
                                oms.krav: <span>${bonusValuex}</span>
                             </div>
                        `
                        : `
                          <div class="${id}__bonusContainer-item-text-only">
                            ${bonusValue}       
                          </div>

                        `
                    }           
                </div>
                <div class="${id}__bonusContainer-item">
                    ${
                      freeSpinValuex
                        ? `
                             <div class="${id}__bonusContainer-item-text">
                                <span class="${id}__bonusValue">${freeSpinValue}</span>
                                <span class="${id}__bonusValue-text">Free Spins</span>              
                             </div>
                             <div class="${id}__bonusContainer-item-quantity">
                                oms.krav: <span>${freeSpinValuex}</span>
                             </div>
                        `
                        : `
                          <div class="${id}__bonusContainer-item-text-only">
                            ${freeSpinValue} 
                          </div>

                        `
                    }           
                </div>
                
            </div>
        </div>
    `;

  return html.trim();
};

export default bonusContainer;
