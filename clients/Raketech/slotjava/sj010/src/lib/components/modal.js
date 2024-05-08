export const modal = (id) => {
  const html = `
    <div class="${id}__modal">
        <div class="${id}__modal-content">
            <div class="${id}-container">
                <span class="${id}__close">&times;</span>
                <p>Some text. Some text. Some text.</p>
                <p>Some text. Some text. Some text.</p>
            </div>
        </div>
    </div>
    `;
  return html;
};
