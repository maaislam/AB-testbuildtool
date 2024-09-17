const bonusContainer = (id, data) => {
  const { bonus, freeSpin, omsBonus, omsSpin } = data;
  const html = `
        <div class="${id}__bonusContainer">
            <div class="${id}__bonusContainer-list">
                <div class="${id}__bonusContainer-item">
                    <div class="${id}__bonusContainer-item-quantity">${bonus}</div>
                    <div class="${id}__bonusContainer-item-text">Bonus</div>
                </div>
                <div class="${id}__bonusContainer-item">
                    <div class="${id}__bonusContainer-item-quantity">${freeSpin}</div>
                    <div class="${id}__bonusContainer-item-text">Free Spins</div>
                </div>
                <div class="${id}__bonusContainer-item">
                    <div class="${id}__bonusContainer-item-quantity">${omsBonus}</div>
                    <div class="${id}__bonusContainer-item-text">Oms.krav\nbonus</div>
                </div>
                <div class="${id}__bonusContainer-item">
                    <div class="${id}__bonusContainer-item-quantity">${omsSpin}</div>
                    <div class="${id}__bonusContainer-item-text">Oms.kra free\nspins</div>
                </div>
            </div>
        </div>
    `;

  return html.trim();
};

export default bonusContainer;
