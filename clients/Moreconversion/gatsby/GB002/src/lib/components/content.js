const content = (id) => {
  const html = `
    <div class="${id}__content">
      <h1 class="${id}__content-header">FOR A LIMITED TIME ONLY</h1>
      <h1 class="${id}__content-subheader">GET 50% OFF</h1>
      <div class="${id}__content-footer">
        <div class="${id}__content-footer-text">Step into comfort without stepping out of your<br> budget.</div>
      </div>
    </div>
  `;
  return html.trim();
};

export default content;
