//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION == 'control') {

  }

  var waitForEl = function (selector, callback) {
    let count = 0;
    if (document.querySelector(selector) != null) {
        callback();
    } else if (count < 100) {
        setTimeout(() => {
            waitForEl(selector, callback, ++count);
        }, 100);
    }
};

waitForEl('#home-page-body .b-hero.b-hero-main .b-hero__content .row .row', () => {
	const subTitle = document.querySelector('#home-page-body > div.b-hero.b-hero-main > div > div.b-hero__content > div > div > div > p > b').innerText;

    const components = '<div class="row">' +
    					`<p class="col-md-12">${subTitle}</p>` +
    					'<div class="row">' +
                          '<div class="col-xs-12 col-sm-2">' +
                            '<a class="financial b-btn-holder__btn b-btn-holder__btn_default b-btn-holder__btn_sm b-btn-holder__btn_block" href="https://wf.unbiased.co.uk/pensions-retirement">' +
                            'Pensions &  <br class="hidden-xs"> Retirement' +
                            '</a>' +
                          '</div>' +
                          '<div class="col-xs-12 col-sm-2 mt-xs-8 mt-sm-0">' +
                            '<a class="financial b-btn-holder__btn b-btn-holder__btn_default b-btn-holder__btn_sm b-btn-holder__btn_block" href="https://wf.unbiased.co.uk/mortgages-property">' +
                           'Mortgages &<br class="hidden-xs"> Property' +
                            '</a>' +
                          '</div>' +
                           '<div class="col-xs-12 col-sm-2 mt-xs-8 mt-sm-0">' +
                            '<a class="financial b-btn-holder__btn b-btn-holder__btn_default b-btn-holder__btn_sm b-btn-holder__btn_block" href="https://wf.unbiased.co.uk/personal-finance">' +
                            'Personal <br class="hidden-xs"> Finance' +
                            '</a>' +
                         '</div>' +
                          '<div class="col-xs-12 col-sm-2 mt-xs-8 mt-sm-0">' +
                            '<a class="financial b-btn-holder__btn b-btn-holder__btn_default b-btn-holder__btn_sm b-btn-holder__btn_block" href="https://wf.unbiased.co.uk/insurance">' +
                           'Insurance' +
                            '</a>' +
                          '</div>' +
                         ' <div class="col-xs-12 col-sm-2 mt-xs-8 mt-sm-0">' +
                            '<a class="financial b-btn-holder__btn b-btn-holder__btn_default b-btn-holder__btn_sm b-btn-holder__btn_block" href="https://wf.unbiased.co.uk/tax-business">' +
                           'Tax & <br class="hidden-xs"> Business' +
                            '</a>' +
                          '</div>' +
                        '</div>' +
                     '</div>';
  document.querySelector('#home-page-body .b-hero.b-hero-main .b-hero__content .row .row').insertAdjacentHTML('afterend', components);

  document.querySelector('#home-page-body > div.b-hero.b-hero-main > div > div.b-hero__content > div > div > div').classList.remove('col-sm-9', 'col-md-8', 'col-lg-7');
    document.querySelector('#home-page-body > div.b-hero.b-hero-main > div > div.b-hero__content > div > div > div').classList.add('col-sm-12', 'col-md-9', 'col-lg-8');
});
};
