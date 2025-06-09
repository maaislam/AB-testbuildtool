const fakeButton = (id) => {
  const html = `
        <button type="button" class="btn-green submit-btn ${id}__fakeBtn">SHOW MY PRICE</button>
    `;
  return html.trim();
};

export default fakeButton;
