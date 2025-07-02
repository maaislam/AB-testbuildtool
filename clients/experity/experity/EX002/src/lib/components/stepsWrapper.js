import firstStep from './firstStep';
import secondStep from './secondStep';

const stepsWrapper = (id, firstStepOptions, secondStepOptions) => {
  const html = `
    <div class="spz-form-wrap ${id}__stepsWrapper">
        <div class="spz-form-section">
            <div class="the-form">
                ${firstStep(firstStepOptions)}
                ${secondStep(secondStepOptions)}
            </div>
        </div>
    </div>
  `;
  return html.trim();
};

export default stepsWrapper;
