const counter = (ID, index, total) => {
  const html = `
        <div class="${ID}__counter">
            ${index + 1}/${total}
        </div>
    `;

  return html.trim();
};

export default counter;
