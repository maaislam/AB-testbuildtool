const resultContainer = (id) => {
  const html = `
        <div class="${id}__resultContainer">
            <div class="${id}__resultWrapper">
                <p class="${id}__title">Feature coming soon</p>
                <button class="${id}__btn">back to main</button>
            </div>
        </div>
    `;
  return html.trim();
};

export default resultContainer;
