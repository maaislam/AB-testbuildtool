import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

(() => {
  const html = `
<div id="container" class="experiment">
  <div class="heroSection heroSection--top" style="height: max-content;">
    <div class="heronewsec heronewsec--top">
      

      <div class="header_txt header_txt--top">
        <h1>An Inogen POC may be covered by Medicare or other Insurance!</h1>
        <img decoding="async" src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png"
          alt="Medicare Insurance bg"
          class="medicare_img medicare_img--top perfmatters-lazy entered pmloaded"
          data-src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png" data-ll-status="loaded">
        <noscript>
          <img decoding="async" src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png"
            alt="Medicare Insurance bg" class="medicare_img medicare_img--top" />
        </noscript>
      </div>

      <div class="innerContainer innerContainer--top">
        <div class="formSection formSection--top  desktopDisplay--top" id="formSection">
          <form id="leadForm" class="W8form W8form--top trustedform trustedform--top lead_form lead_form--top"
            data-page="1" novalidate="novalidate" action="/" method="post" data-np-autofill-form-type="identity"
            data-np-checked="1" data-np-watching="1">
            <input type="hidden" id="_lead_form_nonce" name="_lead_form_nonce" value="4f28af7d0e">
            <input type="hidden" name="_wp_http_referer" value="${window.location.pathname}">
            <input type="hidden" name="form_location" value="landing page (top)">

            <div class="bluebg bluebg--top">
              <div class="formImgs formImgs--top">
                <img decoding="async" src="//cdn.inogen.com/wp-content/uploads/2025/08/Orange-Disc.png" alt=""
                  class="perfmatters-lazy entered pmloaded perfmatters-lazy--top entered--top pmloaded--top"
                  data-src="//cdn.inogen.com/wp-content/uploads/2025/08/Orange-Disc.png" data-ll-status="loaded">
                <noscript>
                  <img decoding="async" src="//cdn.inogen.com/wp-content/uploads/2025/08/Orange-Disc.png" alt="">
                </noscript>

                <img decoding="async" style="display:none;"
                  class="inogen_magazine inogen_magazine--top summer_fg summer_fg--top perfmatters-lazy entered pmloaded perfmatters-lazy--top entered--top pmloaded--top"
                  src="//cdn.inogen.com/wp-content/uploads/2025/09/info_guide20250815.jpg"
                  alt="Doctor Discussion Guide Cover"
                  data-src="//cdn.inogen.com/wp-content/uploads/2025/09/info_guide20250815.jpg" data-ll-status="loaded">
                <noscript>
                  <img decoding="async" style="display:none;"
                    class="inogen_magazine inogen_magazine--top summer_fg summer_fg--top"
                    src="//cdn.inogen.com/wp-content/uploads/2025/09/info_guide20250815.jpg"
                    alt="Doctor Discussion Guide Cover">
                </noscript>
              </div>

              <p class="mobile_form_basic_header mobile_form_basic_header--top">Please send me a <span>FREE
                  Guide</span>!</p>
            </div>

            <fieldset class="lead_form_page lead_form_page--top lead_form_page1 lead_form_page1--top">

              <div class="form_field_container form_field_container--top">
                <label class="form_label form_label--top screen-reader-text screen-reader-text--top"
                  for="full_name_top">Name</label>
                <input type="text" class="form_input_text form_input_text--top" id="full_name_top" name="full_name"
                  placeholder="Full Name" maxlength="50" required="" data-np-autofill-field-type="fullName">
              </div>

              <div class="form_field_container form_field_container--top">
                <label class="form_label form_label--top screen-reader-text screen-reader-text--top"
                  for="email_top">Email</label>
                <input type="email" class="form_input_text form_input_text--top" id="email_top" name="email"
                  placeholder="Email" maxlength="100" required="" data-np-autofill-field-type="email">
              </div>

              <div class="form_field_container form_field_container--top">
                <label class="form_label form_label--top screen-reader-text screen-reader-text--top"
                  for="phone_top">Phone</label>
                <input type="tel" class="form_input_text form_input_text--top" id="phone_top" name="phone"
                  placeholder="Phone" maxlength="14" required="" data-np-autofill-field-type="phone">
              </div>

              <div
                class="form_field_container form_field_container--top prescribed_o2_patient_container prescribed_o2_patient_container--top">
                <p>Do you or a loved one have a prescription for oxygen?</p>
                <div>
                  <input name="prescribed_o2_patient" id="prescribed_o2_patient_bottom" type="hidden" value="">
                  <input name="prescribed_o2_patient_yes"
                    class="form_button_white form_button_white--top prescribed_o2_patient_button prescribed_o2_patient_button--top"
                    type="button" id="rx_yes_bottom" value="Yes">
                  <input name="prescribed_o2_patient_no"
                    class="form_button_white form_button_white--top prescribed_o2_patient_button prescribed_o2_patient_button--top"
                    type="button" id="rx_no_bottom" value="No">
                </div>
              </div>

              <div class="form_field_container form_field_container--top">
                <p>
                  <label class="checkbox_container checkbox_container--top term_link term_link--top">I agree to Inogen’s
                    <a href="/terms-of-use/" target="_blank">Terms of Use</a> and authorize Inogen to contact me
                    including by phone and sms text messaging.
                    <input type="checkbox" name="terms" required="required">
                    <span class="checkmark checkmark--top"></span>
                  </label>
                </p>
              </div>

              <div class="form_system_error form_system_error--top">
                <h2>System Error</h2>
                <p>We are currently experiencing technical difficulties. Please try submitting your information again or
                  call us at:<br><br><a href="tel:+18335121230"
                    class="marketing_phone_link marketing_phone_link--top">1-833-512-1230</a></p>
              </div>

              <div class="btn_submit btn_submit--top">
                <input type="submit" class="form_button form_button--top inogen-button-orange inogen-button-orange--top"
                  value="GET MY FREE GUIDE" disabled="disabled">
                <div class="form_button_loading form_button_loading--top" style="display:none"><i
                    class="fas fa-spinner fa-pulse fas--top fa-spinner--top fa-pulse--top"></i></div>
              </div>

              <div class="form_footer form_footer--top">
                <p>We take your privacy concerns seriously.<br>
                  <a href="/privacy/">Learn more about our privacy policy.</a>
                </p>
              </div>
            </fieldset>

            <fieldset class="lead_form_page lead_form_page--top lead_form_page4 lead_form_page4--top">
              <p>Your information has been received and a representative will contact you soon!</p>
              <p>If you would prefer to speak to an Inogen representative now, please call (toll-free):</p>
              <div class="lead_form_thankyou_centered lead_form_thankyou_centered--top">
                <div class="header__phone header__phone--top">
                  1-833-512-1230
                </div>
                <p>
                  <a class="form_button form_button--top download_link download_link--top"
                    href="//cdn.inogen.com/mobility/pdf/Inogen%20Doctor%20Discussion%20Guide.pdf"
                    target="_blank">DOWNLOAD GUIDE NOW</a>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>

    <div class="heroTextSection heroTextSection--top">
      <div class="innerContainer_new innerContainer_new--top">
        <div class="globalLeader globalLeader--top">
          <div class="globalText globalText--top">
            <h3>
              Feel Peace of Mind to Leave the Home with Portable Oxygen Therapy
            </h3>
            <ul>
              <li>Call to ask about insurance coverage and flexible financing options.*</li>
              <li>You may qualify to rent an Inogen at little to no additional cost.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mob_dis mob_dis--bottom">
    <div class="footerForm footerForm--bottom formSection formSection--bottom" id="footerForm">
      <form id="leadForm2" class="W8form W8form--bottom trustedform trustedform--bottom lead_form lead_form--bottom"
        data-page="1" novalidate="novalidate" action="/" method="post" data-np-autofill-form-type="identity"
        data-np-checked="1" data-np-watching="1">
        <input type="hidden" id="_lead_form_nonce" name="_lead_form_nonce" value="4f28af7d0e">
        <input type="hidden" name="_wp_http_referer" value="${window.location.pathname}">
        <input type="hidden" name="form_location" value="landing page (bottom)">

        <div class="bluebg bluebg--bottom">
          <div class="formImgs formImgs--bottom" >
            <img decoding="async"
              src="//cdn.inogen.com/wp-content/uploads/2025/08/Orange-Disc.png"
              alt="Orange-Disc" class="perfmatters-lazy perfmatters-lazy--bottom"
              data-src="//cdn.inogen.com/wp-content/uploads/2025/08/Orange-Disc.png">
            <noscript>
              <img decoding="async" src="//cdn.inogen.com/wp-content/uploads/2025/08/Orange-Disc.png"
                alt="Orange-Disc">
            </noscript>

            <img decoding="async" style="display:none;"
              class="inogen_magazine inogen_magazine--bottom summer_fg summer_fg--bottom perfmatters-lazy perfmatters-lazy--bottom"
              src="//cdn.inogen.com/wp-content/uploads/2025/09/info_guide20250815.jpg"
              alt="Doctor Discussion Guide Cover"
              data-src="//cdn.inogen.com/wp-content/uploads/2025/09/info_guide20250815.jpg">
            <noscript>
              <img decoding="async" style="display:none;"
                class="inogen_magazine inogen_magazine--bottom summer_fg summer_fg--bottom"
                src="//cdn.inogen.com/wp-content/uploads/2025/09/info_guide20250815.jpg"
                alt="Doctor Discussion Guide Cover">
            </noscript>
          </div>

          <p class="mobile_form_basic_header mobile_form_basic_header--bottom">Please send me a <span>FREE
              Guide</span>!</p>
        </div>

        <fieldset class="lead_form_page lead_form_page--bottom lead_form_page1 lead_form_page1--bottom">

          <div class="form_field_container form_field_container--bottom">
            <label class="form_label form_label--bottom screen-reader-text screen-reader-text--bottom"
              for="full_name_bottom">Name</label>
            <input type="text" class="form_input_text form_input_text--bottom" id="full_name_bottom" name="full_name"
              placeholder="Full Name" maxlength="50" required="" data-np-autofill-field-type="fullName">
          </div>

          <div class="form_field_container form_field_container--bottom">
            <label class="form_label form_label--bottom screen-reader-text screen-reader-text--bottom"
              for="email_bottom">Email</label>
            <input type="email" class="form_input_text form_input_text--bottom" id="email_bottom" name="email"
              placeholder="Email" maxlength="100" required="" data-np-autofill-field-type="email">
          </div>

          <div class="form_field_container form_field_container--bottom">
            <label class="form_label form_label--bottom screen-reader-text screen-reader-text--bottom"
              for="phone_bottom">Phone</label>
            <input type="tel" class="form_input_text form_input_text--bottom" id="phone_bottom" name="phone"
              placeholder="Phone" maxlength="14" required="" data-np-autofill-field-type="phone">
          </div>

          <div
            class="form_field_container form_field_container--bottom prescribed_o2_patient_container prescribed_o2_patient_container--bottom">
            <p>Do you or a loved one have a prescription for oxygen?</p>
            <div>
              <input name="prescribed_o2_patient" id="prescribed_o2_patient_bottom" type="hidden" value="">
              <input name="prescribed_o2_patient_yes"
                class="form_button_white form_button_white--bottom prescribed_o2_patient_button prescribed_o2_patient_button--bottom"
                type="button" id="rx_yes_bottom" value="Yes">
              <input name="prescribed_o2_patient_no"
                class="form_button_white form_button_white--bottom prescribed_o2_patient_button prescribed_o2_patient_button--bottom"
                type="button" id="rx_no_bottom" value="No">
            </div>
          </div>

          <div class="form_field_container form_field_container--bottom">
            <p>
              <label class="checkbox_container checkbox_container--bottom term_link term_link--bottom">I agree to Inogen’s
                <a href="/terms-of-use/" target="_blank">Terms of Use</a> and authorize Inogen to contact me including by
                phone and sms text messaging.
                <input type="checkbox" name="terms" required="required">
                <span class="checkmark checkmark--bottom"></span>
              </label>
            </p>
          </div>

          <div class="form_system_error form_system_error--bottom">
            <h2>System Error</h2>
            <p>We are currently experiencing technical difficulties. Please try submitting your information again or call
              us at:<br><br><a href="tel:+18335121230"
                class="marketing_phone_link marketing_phone_link--bottom">1-833-512-1230</a></p>
          </div>

          <div class="btn_submit btn_submit--bottom">
            <input type="submit"
              class="form_button form_button--bottom inogen-button-orange inogen-button-orange--bottom"
              value="GET MY FREE GUIDE" disabled="disabled">
            <div class="form_button_loading form_button_loading--bottom" style="display:none"><i
                class="fas fa-spinner fa-pulse fas--bottom fa-spinner--bottom fa-pulse--bottom"></i></div>
          </div>

          <div class="form_footer form_footer--bottom">
            <p>We take your privacy concerns seriously.<br>
              <a href="/privacy/">Learn more about our privacy policy.</a>
            </p>
          </div>
        </fieldset>

        <fieldset class="lead_form_page lead_form_page--bottom lead_form_page4 lead_form_page4--bottom">
          <p>Your information has been received and a representative will contact you soon!</p>
          <p>If you would prefer to speak to an Inogen representative now, please call (toll-free):</p>
          <div class="lead_form_thankyou_centered lead_form_thankyou_centered--bottom">
            <div class="header__phone header__phone--bottom">
              1-833-512-1230
            </div>
            <p>
              <a class="form_button form_button--bottom download_link download_link--bottom"
                href="//cdn.inogen.com/mobility/pdf/Inogen%20Doctor%20Discussion%20Guide.pdf"
                target="_blank">DOWNLOAD GUIDE NOW</a>
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</div>

`;

  const insert = () => {
    const validUrls = [
      '/lp/sem-freeguide-form-nb-poc',
      '/lp/sem-freeguide-form-qq3',
      'lp/freedoctorguide',
      '/lp/soc-freeguide-form-seed',
      '/lp/sem-freeguide-form-nb-medicare',
      '/lp/sem-google-medicare-sl'
    ];
    const oddpageUrl = '/lp/soc-freeguide-form-seed';
    const container =
      !window.location.pathname.includes(oddpageUrl) &&
      !window.location.pathname.includes('/lp/freedoctorguide')
        ? document.querySelector('#container')
        : document.querySelector('header');
    console.log('🚀 ~ insert ~ container:', container);
    const attachPos = !window.location.pathname.includes(oddpageUrl) ? 'beforebegin' : 'afterend';
    if (!container || !validUrls.some((validUrl) => window.location.pathname.includes(validUrl))) {
      return false;
    }

    //make sure not inserted already
    if (document.querySelector('.experiment')) {
      return true;
    }

    container.insertAdjacentHTML(attachPos, html);
    //get nonce value
    const nonceInput = document.querySelector('[id="_lead_form_nonce"]');
    if (nonceInput) {
      const nonceValue = nonceInput.value;
      //set nonce value in bottom form

      //make sure all the form with id containing leadForm has same nonce
      const allForms = document.querySelectorAll('form[id*="leadForm"]');
      allForms.forEach((form) => {
        const formNonceInput = form.querySelector('input[id="_lead_form_nonce"]');
        if (formNonceInput) {
          formNonceInput.value = nonceValue;
        }
      });
    }
    if (window.location.pathname.includes('/lp/soc-freeguide-form-seed')) {
      document.body.classList.add('oddpage');
      const pageWrapper = document.querySelector('#wrapper');
      const headerel = document.querySelector('header');
      if (headerel) {
        pageWrapper.insertAdjacentElement('afterbegin', headerel);
      }
    }
    return true;
  };

  //try immediately
  if (insert()) return;

  //fallback poller (SPA / async safe)
  const interval = setInterval(() => {
    if (insert()) {
      clearInterval(interval);
    }
  }, 50);

  //safety stop
  setTimeout(() => clearInterval(interval), 10000);
})();

pollerLite(['body'], activate);
