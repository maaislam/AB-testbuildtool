const tooltip = (id) => {
  const html = `
    <div class="tooltip-wrapper ${id}__tooltip" tabindex="0" aria-label="A valid prescription is required to purchase an oxygen device.">
        <span class="tooltip-icon" aria-hidden="true">i</span>
        <div class="tooltip-text" role="tooltip">
            A valid prescription is required to purchase an oxygen device.
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false" class="tooltip-svg">
              <line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
              <line x1="15" y1="1" x2="1" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line>
            </svg>
        </div>
    </div>
  `;
  return html.trim();
};

export default tooltip;
