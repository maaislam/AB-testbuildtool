const searchElement = (id, element) => {
  const html = `
        <div class="${id}__search-section">
            <div class="${id}__search-section-wrapper">
                <div class="${id}__search-section-wrapper-text">
                    <h2>What are you looking for ?</h2>
                    <p>Search from thousands of golf courses, lakes, trail maps and more.</p>
                </div>
                <div class="${id}__search-section-wrapper-element">
                    ${element.outerHTML}
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default searchElement;
