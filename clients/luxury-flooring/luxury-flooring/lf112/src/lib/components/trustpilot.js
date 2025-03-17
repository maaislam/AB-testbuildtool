export const trustpilot = (id) => {
  const html = `
        <div class="${id}__trustpilotSection">
            <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6ffb0d04a076446a9af" data-businessunit-id="51f87a0a00006400056d3768" data-style-height="20px" data-style-width="100%" data-theme="light">
            <a href="https://uk.trustpilot.com/review/luxuryflooringandfurnishings.co.uk" target="_blank" rel="noopener">Trustpilot</a>
            </div>
        </div>
      `;
  return html;
};
