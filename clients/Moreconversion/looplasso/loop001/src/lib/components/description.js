const description = (id, data, variation) => {
  const html = `
            <div class="${id}__description">
                <div class="description-container">
                    <p>${data.title}</p>
                </div>
            </div>
    `;

  const html2 = `
        <div class="${id}__description">
            <div class="description-container">
                <p>${data.title}</p>
                <div class="description-info">
                   <span>${data.author}</span>
                   <span>${data.icon}</span>
                </div>
            </div>
        </div>
    `;
  return variation === '1' ? html.trim() : html2.trim();
};

export default description;
