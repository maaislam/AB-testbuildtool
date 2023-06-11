import getTopSlots from './helpers/getTopSlots';
import piwikTrack from './services/gaTracking';
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

let game_name = document.querySelector('.game__iframe').dataset.slotName;

const init = (game_name) => {
  document.body.classList.add('test_001');

  document
    .querySelector('.game .game__controls')
    .insertAdjacentHTML(
      'afterbegin',
      `<button class="button game-control-button" id="refillButton_custom" aria-label="Refill Credits"><i class="game-control-button__icon game-control-button__icon_refill" data-fa-i2svg=""><svg class="svg-inline--fa fa-retweet fa-w-20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="retweet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z"></path></svg></i> <span class="game-control-button__label game-control-button__label_no-mobile">Ricarica i crediti</span></button>`
    );

  document.querySelector('.game__window').insertAdjacentHTML(
    'beforeend',
    `<div class="modal_bg hide_content"></div>
      <div class="first_pop_up hide_content">
      <p class="pop_up_heading">Continua nel casinò</p>
      <p class="pop_up_sub_heading">Vuoi fare un po' di soldi giocando a questa slot?</p>
      <div class="button_div">
        <div class="first_btn">No, gioca gratis</div>
        <div class="second_btn">Sì, gioca con soldi veri</div>
      </div>
      <div class="modal__close-button" id="custom_modal_close">×</div>
    </div>
    
    `
  );

  getTopSlots().then((second_popUp_contents) => {
    document.querySelector('main').insertAdjacentHTML(
      'beforeend',
      `<div class="second_popUp_overlay hide_content">
      <div class="second_popup">
        <div class="top_content">
          <img class="game__casino-list-header-flag" id="casino_flag" loading="lazy" src="https://img.slotjava.it/wp-content/themes/sumpan-21/dist/img/flags/svg/square/it.svg" alt="Flag" />
          <p>Dove giocare a <span>"${game_name}"</span></p>
        </div>
        <div class="overallContentWrapper"></div>
        
      </div>
    </div>
    
    `
    );

    second_popUp_contents.forEach((data) => {
      document.querySelector('.overallContentWrapper').insertAdjacentHTML(
        'afterend',
        `<div class="main_contents_wrapper">
          <div class="main_content">
            <div class="content_top">
              <a class="casino-list__logo" style="${data.backColor}" href="${
          data.target_url
        }" target="_blank">
                <img src="${
                  data.img_url
                }" width="30" height="30" loading="lazy" class="casino-list__logo-image" alt="${
          data.alt_tag
        }" />
              </a>
              <div class="casino-list__offer_text">
                <h4>${data.main_heading}</h4>
                <div class="sub_heading_div">
                  <span>${data.sub_heading_1}</span>
                  <span>${data.sub_heading_2 || ''}</span>
                </div>
              </div>
              <a href="${
                data.target_url
              }" class="custom_popUP_btn" target="_blank" rel="nofollow noopener">${
          data.button_text
        }</a>
            </div>
            <div class="content_bottom">
              <div class="tnc_text_div">
                <p>${data.tnc_text}</p>
              </div>
            </div>
            
          </div>
        </div>`
      );
    });

    document
      .querySelector('.second_popup')
      .insertAdjacentHTML('beforeend', `<span class="cancel_btn">cancel</span>`);
  });
};

function first_popUp_show() {
  document.querySelector('.modal_bg').classList.remove('hide_content');
  document.querySelector('.first_pop_up').classList.remove('hide_content');
}
function first_popUp_hide() {
  document.querySelector('.modal_bg').classList.add('hide_content');
  document.querySelector('.first_pop_up').classList.add('hide_content');
}

function second_popup_show() {
  document.querySelector('.second_popUp_overlay').classList.remove('hide_content');
  document.querySelector('body').classList.add('no_scroll');
}
function second_popup_hide() {
  document.querySelector('.second_popUp_overlay').classList.add('hide_content');
  document.querySelector('body').classList.remove('no_scroll');
}

export default () => {
  setup(); //use if needed
  //show operator name
  //control tracking for refill button
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    console.log(target);

    if (
      target.closest('a[href*="/visita/"]') &&
      target.closest('.featured-casino .featured-casino__button')
    ) {
      const href = target.closest('a').href;
      const operatorName = href.split('/visita/')[1];
      piwikTrack(
        `008 | Variant ${VARIATION} | Slot Review Page | ${game_name} | ${operatorName} | CTA Clicks to ${operatorName} (Bonus Intent)`
      );
    } else if (target.closest('a[href*="/visita/"]') && target.closest('.casino-list__item')) {
      const href = target.closest('a').href;
      const operatorName = href.split('/visita/')[1];
      piwikTrack(
        `008 | Variant ${VARIATION} | Slot Review Page | ${game_name} | ${operatorName} | CTA Clicks to ${operatorName} (Bonus Intent)`
      );
    } else if (target.closest('.game__controls #refillButton_custom')) {
      document.querySelector('.game__controls #refillButton').click();
      piwikTrack(
        `008 | Variant ${VARIATION} | Slot Review Page | Recharge Credits | Clicks on Trigger`
      );
      first_popUp_show();
    } else if (target.closest('.game__controls #refillButton')) {
      piwikTrack(
        `008 | Variant ${VARIATION} | Slot Review Page | Recharge Credits | Clicks on Trigger`
      );
    } else if (target.closest('#likeButton')) {
      piwikTrack(
        `008 | Variant ${VARIATION} | Slot Review Page | Recharge Credits | Clicks on Trigger`
      );
      first_popUp_show();
    } else if (target.closest('.game__controls .favourite-button')) {
      piwikTrack(
        `008 | Variant ${VARIATION} | Slot Review Page | Recharge Credits | Clicks on Trigger`
      );
      first_popUp_show();
    } else if (target.closest('#custom_modal_close')) {
      piwikTrack(
        `008 | Variant ${VARIATION} | 1st Popup | ${game_name}  | Clicks on 'Close Popup'`
      );
      first_popUp_hide();
    } else if (target.closest('.first_btn')) {
      piwikTrack(`008 | Variant ${VARIATION} | 1st Popup | Clicks on 'No, Play for Free'`);
      first_popUp_hide();
    } else if (target.closest('.second_btn')) {
      piwikTrack(`008 | Variant ${VARIATION} | 1st Popup | Clicks on 'Yes, Play with real money'`);
      second_popup_show();
      first_popUp_hide();
    } else if (target.closest('a[href*="/visita/"]') && target.closest('.second_popup')) {
      const href = target.closest('a').href;
      const operatorName = href.split('/visita/')[1];
      piwikTrack(
        `008 | Variant ${VARIATION} | 2nd Popup | ${game_name} | ${operatorName} | Clicks to Reviews`
      );
    } else if (target.closest('.cancel_btn')) {
      piwikTrack(
        `008 | Variant ${VARIATION} | 2nd Popup | ${game_name}  | Clicks on 'Close Popup'`
      );
      second_popup_hide();
    }
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  init(game_name);
};
