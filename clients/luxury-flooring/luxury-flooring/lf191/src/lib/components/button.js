const buttonElem = (id) => {
  const html = `
    <div class="${id}__btnWrapper">
        <button type="button" class="action ${id}__btn">
            View Customer Gallery
        </button>
    </div>
  `;
  return html.trim();
};

export default buttonElem;
