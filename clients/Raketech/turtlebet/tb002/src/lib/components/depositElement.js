import bonusElement from './bonusElement';

const depositeElement = (id, element) => {
  const html = `
        <div class="MuiGrid-root MuiGrid-container ${id}__depositeWrapper">
            ${element.outerHTML}
            ${bonusElement(id)}
            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 mui-1orysjz ${id}__depositeContainer">
                <div class="mui-1ckvxhl">Minimitalletus</div>
                <div class="mui-f14zgk ${id}__minimumDeposit">40x&nbsp;(T+B)</div>
            </div>
        </div>
    `;

  return html.trim();
};

export default depositeElement;
