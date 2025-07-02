import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  const injectTarget = document.querySelector('.csmtcart-right');
  const priceEl = document.querySelector('.js-cart_subtotal .money');

  if (!injectTarget || !priceEl) return;

  //Extract numeric value
  const cartText = priceEl.textContent.trim();
  const currentValue = parseFloat(cartText.replace(/[^0-9.]/g, '')) || 0;

  const thresholds = [
    {
      amount: 50,
      label: 'FREE shipping'
    },
    {
      amount: 110,
      label: 'FREE Lytlift Brightening Under-Eye-Oil-Serum'
    }
  ];
  const maxThreshold = Math.max(...thresholds.map((t) => t.amount));

  //Wrapper
  const wrapper = document.createElement('div');
  wrapper.id = 'threshold-bar-wrapper';

  //Progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'threshold-progress-bar';

  const fill = document.createElement('div');
  fill.className = 'threshold-fill';
  fill.style.width = `${Math.min((currentValue / maxThreshold) * 100, 100)}%`;
  progressBar.appendChild(fill);

  thresholds.forEach((thresh) => {
    const marker = document.createElement('div');
    marker.className = 'threshold-marker';
    marker.style.left = `${(thresh.amount / maxThreshold) * 100}%`;
    marker.innerHTML = `<span>${thresh.label}</span>`;
    //progressBar.appendChild(marker);
  });

  //Message
  const message = document.createElement('p');
  message.className = 'threshold-message';

  const nextThreshold = thresholds.find((t) => currentValue < t.amount);
  if (nextThreshold) {
    const remaining = (nextThreshold.amount - currentValue).toFixed(2);
    message.innerHTML = `You are <strong>$${remaining}</strong> away from getting a <strong>${nextThreshold.label}</strong>`;
  } else {
    message.innerHTML = "<strong>You've unlocked all available rewards!</strong>";
  }

  //Render
  wrapper.appendChild(progressBar);
  wrapper.appendChild(message);
  injectTarget.prepend(wrapper);
};
