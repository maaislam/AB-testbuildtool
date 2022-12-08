import { iconsConfig } from '../data';

const howItWorks = (id) => {
  const renderStep = ({ icon, name }) => {
    const stepHtml = `<div class="${id}__howitworks--step">
        <span class="icon">${icon}</span>
        <span class="step">${name}</span>
    </div>`;

    return stepHtml;
  };

  const htmlStr = `<div class="${id}__howitworks">
        <div class="${id}__howitworks--title">How does it work?</div>
        <div class="${id}__howitworks--steps">
            ${iconsConfig.map((data) => renderStep(data)).join('\n')}
        </div>
    </div>`;

  return htmlStr;
};

export default howItWorks;
