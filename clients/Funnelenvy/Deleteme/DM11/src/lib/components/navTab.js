const navTab = (id, currentStep) => {
  const stepsData = ['1. Enter your information', '2. Scan data brokers', '3. See results'];

  const steps = stepsData
    .map((step, index) => {
      return `<div class="${id}__navtab--step ${
        currentStep === index ? 'active' : ''
      }" >${step}</div> `;
    })
    .join('\n');
  const htmlStr = `
    <div class="${id}__navtab step-${currentStep + 1}" >
        ${steps}
    </div>
  `;

  return htmlStr.trim();
};

export default navTab;
