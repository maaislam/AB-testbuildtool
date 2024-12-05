import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  //Initialize experiment-specific functionality here
  const targetElement = document.querySelector('#join_pkg');
  targetElement.querySelectorAll('.package').forEach((item) => {
    if (!item.querySelector(`.${ID}__wrapper`)) {
      item
        .querySelector('.packge_button_outer')
        .insertAdjacentHTML(
          'afterend',
          `<div class="${ID}__wrapper">Lab Verified -&nbsp;
          <a href="https://cdn.shopify.com/s/files/1/0805/3971/3813/files/20240024_COA_of_Beef_Organs_Primal_Queen_Capsule_60ct..pdf?v=1722958015" target="_blank">View Results</a></div>`
        );
    }
  });
};

export default () => {
  setup();

  init();

  const pdfPopup = document.createElement('div');
  pdfPopup.id = 'pdf-popup';
  pdfPopup.innerHTML = `
    <div class="popup-content">
        <button class="close-btn">&times;</button>
        <iframe src="https://cdn.shopify.com/s/files/1/0805/3971/3813/files/20240024_COA_of_Beef_Organs_Primal_Queen_Capsule_60ct..pdf?v=1722958015"></iframe>
    </div>
`;
  document.body.appendChild(pdfPopup);

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    const popup = document.getElementById('pdf-popup');

    if (target.closest(`.${ID}__wrapper > a`)) {
      e.preventDefault(); //Prevent default link behavior
      popup.style.display = 'flex'; //Show the popup
    } else if (target.closest('.close-btn')) {
      popup.style.display = 'none'; //Hide the popup
    } else if (target.closest('#pdf-popup')) {
      popup.style.display = 'none'; //Hide the popup
    }
  });
};
