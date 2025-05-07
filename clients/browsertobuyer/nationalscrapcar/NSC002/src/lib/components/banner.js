const banner = (id, model, registration) => {
  const html = `
        <div class="${id}__car-banner">
            <div class="overlay">
                <h2>${model}</h2>
                <div class="reg-plate">${registration}</div>
                <a href="https://nationalscrapcar.co.uk/quote-forms/" class="wrong-details">Wrong details?</a>
            </div>
        </div>
    
    `;
  return html.trim();
};

export default banner;
