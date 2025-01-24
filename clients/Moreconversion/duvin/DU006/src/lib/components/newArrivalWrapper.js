const newArrivalWrapper = (id) => {
  const html = `
      <div class="${id}__newArrivalWrapper" data-select="mens">
          <div class="${id}__newArrivalContainer">
              <div class="${id}__newArrivalTitles">
                  <h1>New Arrivals</h1>
                  <div class="${id}__newArrivalStep">
                      <div class="${id}__newArrivalItem active" data-attr="mens">Men’s</div>
                      <div class="${id}__newArrivalItem" data-attr="womens">Women’s</div>
                      <div class="${id}__newArrivalItem" data-attr="kids">Kid’s</div>
                  </div>
              </div>
              <div class="${id}__newArrivalProducts">
              
              </div>
          </div>
      </div>
    `;
  return html.trim();
};

export default newArrivalWrapper;
