const fakeButton = (id) => {
  const html = `
    <button type="button" class="post--pdp__cta--add-to-cart ${id}__fakeAtb" style="display: inline-block;">Add to cart</button>
  `;
  return html.trim();
};

export default fakeButton;
