export const header = (ID) => {
  const html = `
        <div class="${ID}__header">
            <div class="${ID}__header-title">Pre-order now</div>
            <strong class="${ID}__header-message">This bestseller is almost back in stock!</strong>
            <div class="${ID}__header-text">Pre-order yours today and our flooring experts will get back to you on your earliest available delivery date.</div>
        </div>
    `;

  return html.trim();
};
