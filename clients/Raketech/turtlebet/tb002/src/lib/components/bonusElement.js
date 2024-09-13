const bonusElement = (id, sportsbook) => {
  const html = `
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 mui-1orysjz ${id}__bonusElement">
            <div class="mui-1ckvxhl">Kierrätysvaatimus</div>
            <div class="mui-f14zgk">${sportsbook?.wagering?.trim() || '-'}</div>
        </div>
    `;
  return html.trim();
};

export default bonusElement;
