const firstStep = (firstStepOptions) => {
  const html = `
    <div class="get-started-container" data-step="1">
        <div class="progress-dots">
            <span class="dot active" data-step="1"></span>
            <span class="dot" data-step="2"></span>
            <span class="dot" data-step="3"></span>
        </div>

        <h2 class="title">How can we help?</h2>

        <form class="options-grid" id="optionForm">
            ${firstStepOptions
              .map((option) => {
                return `
                    <label class="option-card">
                        <input type="radio" name="startOption" value="${option.value}" ${
                  option.selected ? 'checked' : ''
                } />
                        <span class="radio-mark"></span>
                        <div class="option-content">
                            <div class="option-icon">${option.icon}</div>
                            <div class="option-label">${option.label}</div>
                        </div>
                    </label>
                `;
              })
              .join('\n')}
        </form>

        <button class="next-button">Next</button>
    </div>
  `;
  return html.trim();
};

export default firstStep;
