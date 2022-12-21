export const mainSructure = (id) => {
  return `
        <div class="${id}__mainStructure">
            <div class="${id}__ratings">
                <span>9,6</span>
            </div>
            <div class="${id}__stars"></div>
            <div class="${id}__contents">
                <p class="${id}__title">kiyoh</p>
                <p class="${id}__subtitle">4991 beoordelingen</p>
                <div class="${id}__buttonContainer">
                    <button class="${id}__button">Beoordeel ons</button>
                
                </div>
            </div>
        </div>
    
    `;
};
