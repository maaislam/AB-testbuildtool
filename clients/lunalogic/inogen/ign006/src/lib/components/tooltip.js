const tooltip = (id) => {
  const html = `
    <div class="tooltip-wrapper ${id}__tooltip" tabindex="0" aria-label="A valid prescription is required to purchase an oxygen device.">
        <span class="tooltip-icon" aria-hidden="true">i</span>
        <div class="tooltip-text" role="tooltip">
            A valid prescription is required to purchase an oxygen device.
        </div>
    </div>
  `;
  return html.trim();
};

export default tooltip;
