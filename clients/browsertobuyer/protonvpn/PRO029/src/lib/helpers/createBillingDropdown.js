const createBillingDropdown = () => {
  const pricingBoxes = document.querySelectorAll('main .pricing-box');
  const stepOnePricingBox = pricingBoxes[0];
  const stepTwoPricingBox = pricingBoxes[1];
  const stepThreePricingBox = pricingBoxes[2];
  const plans = document.querySelectorAll('.pricing-box-content-cycle');
  if (!plans.length) return;

  const dropdown = document.createElement('div');
  dropdown.className = 'billing-dropdown';

  const selected = document.createElement('div');
  selected.className = 'billing-selected';
  selected.textContent = 'Loading...';

  const menu = document.createElement('div');
  menu.className = 'billing-options';

  selected.addEventListener('click', () => {
    menu.classList.toggle('visible');
  });

  plans.forEach((plan) => {
    const radio = plan.querySelector('input[type="radio"]');
    if (!radio) return;

    const duration = plan.querySelector('strong')?.innerText.trim();
    const billedText = plan.querySelector('[id$="-billed"]')?.innerText.trim();
    const billedAmount = billedText?.match(/(?:at|at\s)?([€£$]\s?\d+[\d.,]*)/i)?.[1] || '';
    const isBest = !!plan.querySelector('.cycle-selector-label');
    const isSelected = radio.checked;

    const option = document.createElement('div');
    option.className = 'billing-option';

    const amountElem = plan.querySelector('.text-bold.h2');
    const amount = amountElem ? amountElem.textContent.trim() : '';

    console.log('amount', amountElem, amountElem.textContent);

    const label = document.createElement('div');
    label.className = 'billing-option-label';
    label.textContent = `${duration} – ${billedAmount}`;
    option.appendChild(label);

    if (isBest) {
      const badge = document.createElement('span');
      badge.className = 'billing-badge';
      badge.textContent = 'BEST VALUE';
      option.prepend(badge);
    }

    option.addEventListener('click', () => {
      radio.click(); //Triggers native selection
      selected.textContent = `${duration} – ${billedAmount}`;
      menu.classList.remove('visible');
    });

    if (isSelected) {
      selected.textContent = `${duration} – ${billedAmount}`;
    }

    menu.appendChild(option);
  });

  dropdown.appendChild(selected);
  dropdown.appendChild(menu);

  const targetPoint = stepTwoPricingBox.querySelector('.border-left');
  if (targetPoint && !document.querySelector('.billing-dropdown')) {
    targetPoint.insertAdjacentElement('afterbegin', dropdown);
  }
};

export default createBillingDropdown;
