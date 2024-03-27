export const FormMessage = (ID) => {
  const html = `
        <div class="${ID}__formMessage">
            <div class="${ID}__formMessage-title">Pre-order now</div>
            <strong class="${ID}__formMessage-thanks">Thanks for the submitting the form</strong>
            <p class="${ID}__formMessage-info">One of the sales team will contract you as soon as poosible to discuss timeframes and place a pre-orderfor you.</p>
            <p class="${ID}__formMessage-additional-info">Should you require anything before then,</p>
            <p class="${ID}__formMessage-number">Please call 0333 577 0025.</p>
            <p class="${ID}__formMessage-team">The Luxury Flooring Team</p>
        </div>
    `;

  return html.trim();
};
