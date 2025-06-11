const firstStep = (firstStepOptions) => {
  const html = `
    <div class="get-started-container" data-step="1">
        <div class="progress-dots">
            <span class="dot active" data-step="1"></span>
            <span class="dot" data-step="2"></span>
            <span class="dot" data-step="3"></span>
        </div>

        <h2 class="title">Get Started</h2>
        <p class="subtitle">What do you want to get started on?</p>

        <form class="options-grid" id="optionForm">
            ${firstStepOptions
              .map((option) => {
                return `
                    <label class="option-card">
                        <input type="radio" name="startOption" value="${option.label}" ${
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
