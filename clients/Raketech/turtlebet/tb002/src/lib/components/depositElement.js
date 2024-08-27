import bonusElement from './bonusElement';

const zeroSpin = `
<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 mui-1orysjz"><div class="mui-1ckvxhl">Ilmaiskierrosta</div><div class="mui-f14zgk">0</div></div>
`;

const depositeElement = (id, element, min_deposit, sportsbook) => {
  const regex = /(\d+)/;
  const numberOnly = min_deposit.match(regex)[0];
  const html = `
        <div class="MuiGrid-root MuiGrid-container ${id}__depositeWrapper">
            ${element?.outerHTML || zeroSpin}
            ${bonusElement(id, sportsbook)}
            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 mui-1orysjz ${id}__depositeContainer">
                <div class="mui-1ckvxhl">Minimitalletus</div>
                <div class="mui-f14zgk ${id}__minimumDeposit">${numberOnly}€</div>
            </div>
        </div>
    `;

  return html.trim();
};

export default depositeElement;
