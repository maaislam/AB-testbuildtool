import volumeDiscount from '../components/volumeDiscount';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const attachpoint = document.getElementById('productVariantAndPrice');

  if (document.querySelector('.volume-discount-container')) return;

  const firstSize = document.getElementById('ancLink');
  firstSize.click();
  attachpoint.insertAdjacentHTML('afterend', volumeDiscount(ID));

  const quantitySlider = document.getElementById('quantity-slider');
  const quantityInput = document.getElementById('quantity-input');
  const savingsMessage = document.getElementById('savings-message');
  const addToBagBtn = document.getElementById('add-to-bag-btn');
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');
  const notificationCloseBtn = document.getElementById('notification-close-btn');

  const calculateSavings = (quantity) => {
    if (quantity >= 11) return 40;
    if (quantity >= 6) return 30;
    if (quantity >= 2) return 20;
    return 0;
  };

  const updateSavingsMessage = (quantity) => {
    const savings = calculateSavings(quantity);
    savingsMessage.textContent = `You would save ${savings}%`;
  };

  const syncSliderAndInput = (value) => {
    if (value > 20) {
      quantitySlider.value = 20;
    } else {
      quantitySlider.value = value;
    }
    quantityInput.value = value;
    updateSavingsMessage(value);
  };

  quantitySlider.addEventListener('input', () => {
    syncSliderAndInput(quantitySlider.value);
  });

  quantityInput.addEventListener('input', () => {
    let quantity = quantityInput.value;
    if (quantity < 1) quantity = 1;
    syncSliderAndInput(quantity);
  });

  const getColorCodeFromHash = () => {
    const { hash } = window.location;
    const params = new URLSearchParams(hash.substring(1));
    return params.get('colcode') || '';
  };

  const showNotification = (message) => {
    notificationMessage.textContent = message;
    notification.classList.remove('hidden');
    notification.classList.add('visible');

    let hideTimeout = setTimeout(() => {
      notification.classList.remove('visible');
      notification.classList.add('hidden');
    }, 2000);

    notification.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout);
    });

    notification.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(() => {
        notification.classList.remove('visible');
        notification.classList.add('hidden');
      }, 2000);
    });

    notificationCloseBtn.addEventListener('click', () => {
      notification.classList.remove('visible');
      notification.classList.add('hidden');
    });
  };

  addToBagBtn.addEventListener('click', async () => {
    const quantity = quantityInput.value;

    const savings = calculateSavings(quantity);
    const originalPriceElem = document.querySelector('.pdpPrice');
    const originalPrice = originalPriceElem
      ? parseFloat(originalPriceElem.textContent.replace(/[^0-9.]/g, ''))
      : 0;
    const totalPrice = (originalPrice * quantity * (100 - savings)) / 100;

    const sizeVariantElement = document.querySelector('.sizeVariantHighlight');
    const sizeVarId = sizeVariantElement ? sizeVariantElement.getAttribute('data-sizevarid') : null;
    const colorCode = getColorCodeFromHash();
    const sizeVariantId = colorCode && sizeVarId ? `${colorCode}${sizeVarId}` : null;

    if (!sizeVariantId) {
      console.log('Failed to add items to the basket. Size variant ID not found.');
      return;
    }

    addToBagBtn.disabled = true;
    addToBagBtn.textContent = 'Adding...';

    try {
      const response = await fetch('/cart/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([
          {
            sizeVariantId,
            quantity,
            printessDetails: null,
            personalisation: [],
            isProductRec: false
          }
        ])
      });

      if (response.ok) {
        addToBagBtn.textContent = 'Added To Bag';
        showNotification(
          `You have added ${quantity} items to your basket at a total of ${totalPrice}, saving you ${savings}%`
        );
        setTimeout(() => {
          addToBagBtn.textContent = 'Add To Bag';
          addToBagBtn.disabled = false;
        }, 1500);
      } else {
        console.log('Failed to add items to the basket');
        addToBagBtn.disabled = false;
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('An error occurred while adding items to the basket');
      addToBagBtn.disabled = false;
    }
  });
};

export default () => {
  setup();

  init();

  document.addEventListener('input', (event) => {
    if (event.target.type === 'range') {
      const { value } = event.target;
      const { max } = event.target;
      const percentage = Math.round(((value / max) * 100) - 1);
      event.target.style.setProperty('--filled-percentage', `${percentage}%`);
    }
  });
};
