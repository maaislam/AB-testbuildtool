const buttonElem = (id) => {
  const html = `
    <div class="${id}__btnWrapper">
        <a href="/customer-gallery" class="action ${id}__btn">
            View Customer Gallery
        </a>
    </div>
  `;
  return html.trim();
};

export default buttonElem;
