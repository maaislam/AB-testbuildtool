import atcBtn from './components/atcBtn';
import shieldForm from './components/shieldForm';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const oneTimeRadios = document.querySelectorAll('.product-form__input > input[type="radio"]');
  oneTimeRadios.forEach((radio) => {
    radio.checked = false;
  });

  const attachPoint = document.querySelector('.product-form__input');
  const ctrlAtcBtn = document.querySelector('.product-form__buttons:not(.prod-form-button)');
  const firstOneTimeLabel = document.querySelector('.product-form__input>label');
  const lastOneTimeIndex = document.querySelectorAll('.product-form__input>label').length - 1;
  const lastOneTimeLabel = document.querySelectorAll('.product-form__input>label')[lastOneTimeIndex];

  ctrlAtcBtn.classList.add(`${ID}__hide`);
  firstOneTimeLabel.classList.add(`${ID}__firstLabel`);
  lastOneTimeLabel.classList.add(`${ID}__lastLabel`);

  const packagesHTML = `
  <div class='${ID}__packages'>
    <div class='${ID}__autoship'>
      <div class='${ID}__autoship-text'>Autoship and Save</div>
      <div class='${ID}__autoship-label'>
        <input type="radio" id='autoship' name="Size" value="1 Set" checked="true">

        <label 
          for="autoship" 
          style="margin-bottom: 0px; margin-top: 12px; margin-right: 0px; border-radius: 10px; width: 100%; font-size: 18px; box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);">
            <div style="text-align: left; margin-left: 0px; min-width: 250px;" 
            class="variant-info">  
              <h3 style="padding-left: 0px !important;">Autoship - 1 Set<span class='desktop-savings-text'>, Save 50% </span></h3>
              <h3 class="visually-hidden">Variant sold out or unavailable</h3>
              <h3 style="position: absolute; right: 0; margin-right: 90px; text-decoration: line-through; font-weight: normal; font-size: 14px; margin-top: 2px;" class="strikethru-variant-price">$76.97</h3>
              <h3 style="position: absolute; right: 0; margin-right: 22px;" class="variant-price">$38.48</h3>
              <br>
              <h5 style="margin: 16px 0 0 0; padding: 0px; font-size: 16px;" class="variant-discount">
                ✅ Delivery every 60 days<br>
                ✅ 2-Month Supply <br>
                ✅ Easily cancel or reschedule anytime in the <a href='https://myshieldsystem.com/account/login'>customer portal</a> or by emailing info@mysheildsystem.com
              </h5>
            </div>
        </label>
      </div>
    </div>
    <div class='${ID}__oneTimePurchase'>One time Purchase</div>
  </div>`;

  if (!document.querySelector(`.${ID}__packages`)) {
    attachPoint.insertAdjacentHTML('afterbegin', packagesHTML);
    ctrlAtcBtn.insertAdjacentHTML('afterend', atcBtn(ID));
    attachPoint.insertAdjacentHTML('beforebegin', shieldForm(ID));
  }
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    const ctrlAtcBtn = document.querySelector('.product-form__buttons:not(.prod-form-button)');
    const varAtcBtn = document.querySelector(`.${ID}__atcBtn`);
    if (target.closest('[for="autoship"]')) {
      const oneTimeRadios = document.querySelectorAll('.product-form__input > input[type="radio"]');

      oneTimeRadios.forEach((radio) => {
        radio.checked = false;
      });

      varAtcBtn.classList.remove(`${ID}__hide`);
      ctrlAtcBtn.classList.add(`${ID}__hide`);
    } else if (target.closest('input[type="radio"]:not(#autoship)')) {
      const autoshipRadio = document.querySelector('.product-form__input #autoship');
      autoshipRadio.checked = false;

      ctrlAtcBtn.classList.remove(`${ID}__hide`);
      varAtcBtn.classList.add(`${ID}__hide`);
    } else if (target.closest(`.${ID}__atcBtn`)) {
      const formBtn = document.querySelector('.product-form__buttons.prod-form-button button[type="submit"]');
      const varBtn = target.closest(`.${ID}__atcBtn`).querySelector('button[type="button"]');
      const varBtnText = target.closest(`.${ID}__atcBtn`).querySelector('.atc-text');
      varBtn.disabled = true;
      varBtnText.classList.add(`${ID}__hide`);
      varBtn.querySelector('.loading-overlay__spinner').classList.remove('hidden');

      formBtn.click();
    }
  });

  init();
};
