export const header = (ID) => {
  const html = `
        <div class="${ID}__header">
            <h3 class="${ID}__header-title">Back soon...</h3>
            <strong class="${ID}__header-message">This bestseller is almost back in stock!</strong>
            <div class="${ID}__header-text">Get in touch with our flooring experts on <a href="tel:+44333-577-0025"><span class="number">0333 577 0025</span></a> to find out your earliest available delivery date.</div>
            <div class="${ID}__header-subtext">Can't get to the phone right now? Simply fill in the form and a member of our team will be in touch!</div>
        </div>
    `;

  return html.trim();
};
