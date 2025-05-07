import { tickIcon } from '../assets/icons';

const progressWrapper = (id) => {
  const html = `
        <div class="steps-container">
        <div class="steps-wrapper">
            <div class="steps">
                <span class="step active">
                    ${tickIcon}
                </span>
                <span class="step active">2</span>
                <span class="step">3</span>
                <div class="progress-bar">
                    <span class="progress" style="width: 100%;"></span>
                </div>
            </div>
        </div>
        </div>
    `;
  return html.trim();
};

export default progressWrapper;
