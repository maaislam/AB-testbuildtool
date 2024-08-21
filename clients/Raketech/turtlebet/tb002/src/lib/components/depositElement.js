import bonusElement from './bonusElement';

const depositeElement = (id, element, min_deposit, sportsbook) => {
  const html = `
        <div class="MuiGrid-root MuiGrid-container ${id}__depositeWrapper">
            ${element.outerHTML}
            ${bonusElement(id, sportsbook)}
            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 mui-1orysjz ${id}__depositeContainer">
                <div class="mui-1ckvxhl">Minimitalletus</div>
                <div class="mui-f14zgk ${id}__minimumDeposit">${min_deposit}</div>
            </div>
        </div>
    `;

  return html.trim();
};

export default depositeElement;
