const secondStep = (secondStepOptions) => {
  const html = `
        <div class="get-started-container" style="display: none;" data-step="2">
            <div class="progress-dots">
                <span class="dot" data-step="1"></span>
                <span class="dot active" data-step="2"></span>
                <span class="dot" data-step="3"></span>
            </div>

            <h2 class="title">Get Started</h2>
            <p class="subtitle">What services are you interested in?</p>

            <form class="options-grid" id="checkboxForm">
                ${secondStepOptions
                  .map((option) => {
                    return `
                        <label class="option-card">
                            <input type="radio" name="service" value="${option.label}" />
                           <span class="checkmark"></span>
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

export default secondStep;
