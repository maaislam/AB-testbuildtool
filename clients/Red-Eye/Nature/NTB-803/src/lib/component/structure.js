/*eslint-disable max-len */
import getNumber from '../helper/getNumber';

import svgs from './svgAssets';

const svgProd = (item, id) => {
  const { icon, title } = item;
  const html = `
  <div class="${id}__fieldItem">
  <div class="${id}__svgContainer">
      ${icon}
  </div>
  <div class="${id}__text">
  ${title}
  </div>
</div>
  `;
  return html;
};

//keep all svg in one place
export const orderPlaced = (id) => {
  return `
            <div class="${id}__orderPlaced">
                <div class="${id}__svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 32C0 23.5131 3.37142 15.3737 9.37258 9.37258C15.3737 3.37142 23.5131 0 32 0C40.4869 0 48.6263 3.37142 54.6274 9.37258C60.6286 15.3737 64 23.5131 64 32C64 40.4869 60.6286 48.6263 54.6274 54.6274C48.6263 60.6286 40.4869 64 32 64C23.5131 64 15.3737 60.6286 9.37258 54.6274C3.37142 48.6263 0 40.4869 0 32H0ZM30.1739 45.696L48.5973 22.6645L45.2693 20.0021L29.5595 39.6331L18.432 30.3616L15.7013 33.6384L30.1739 45.7003V45.696Z" fill="#4F7E51"/>
                    </svg>
                </div>
                <h1 class="mtb0to1">Your order has been placed!</h1>
                <p>Thank you for ordering from Nature's Best. Your item(s) will be with you shortly.</p>
                <p>You can access your order details at any time in your account section</p>
                <div class="${id}__orderNumberContainer">
                    <span class="${id}__orderNumberText">Your order number is: <span>
                    <strong class="${id}__orderNumber" data-attr="${getNumber()}">${getNumber()}.</strong>
                </div>
            </div>
    
    `;
};
//you can make this 90% smaller using an array to store text data and running a map on it
export const fieldContent = (id) => {
  return `
            <div class="${id}__fieldContent">
               ${svgs && svgs.map((item) => svgProd(item, id)).join('\n')}
            </div>
    `;
};
export const replaceText = (id) => {
  return `
        <div class="mtb f-14 ${id}__mtb">
            Create an online account with Nature’s Best to make future ordering easier & access to some useful extra features.
        </div>
    `;
};

export const firstParentDiv = (id) => {
  return `
        <div class="${id}__firstParent"></div>
    `;
};

export const passwordContainer = (id) => {
  return `
          <div class="${id}__passwordContainer">
            <div class="${id}__newPassword"></div>
            <div class="${id}__confirmPassword"></div>
          </div>
  
  `;
};

export const passwordPosition = (id, selector, number) => {
  document
    .querySelector(`.${id}__${selector}`)
    .insertAdjacentElement(
      'beforeend',
      document.querySelectorAll(`.${id}__firstParent form label.long`)[number]
    );

  document
    .querySelector(`.${id}__${selector}`)
    .insertAdjacentElement(
      'beforeend',
      document.querySelectorAll(`.${id}__firstParent form .fullwidthonnarrow`)[number]
    );
};
//use relative path for img if possible

export const secondParentDiv = (id) => {
  return `
          <div class="${id}__secondParent">
            <div class="${id}__imageContainer ${id}__image01">
                <a href="/pharmacy/">
                  <img src="https://www.naturesbest.co.uk/images/articles/Pharm-panel-confirmation.jpg"/>
                </a>
            </div>
            <div class="${id}__imageContainer ${id}__image02">
                <img src="https://staging.reodigital.com/wp-content/uploads/2022/07/ntb-803-image.jpg"/>
            </div>
            <div class="${id}__forgetSomething">
              <p>Forgot something?</p>
              <span>No worries, head back to site
              and add to bag now.</span>
              <a href="/">Take Me Back</a>
            </div>
          </div>
      `;
};
//if you are doing forEach on elemets you dont have to make new array, you need to do this for other array method (like map for example)
export const positionChange = (id, selector, parent) => {
  [...document.querySelectorAll(selector)].forEach((item) => {
    document.querySelector(`.${id}__${parent}`).appendChild(item);
  });
};

export const orderDetails = (id) => {
  return `
        <div class="${id}__orderDetails">
            <div class="${id}__orderText">Order Details</div>
            <div class="${id}__orderPrintContainer" onclick="window.print();">
                <span class="${id}__printText">
                  Print Invoice
                </span>
                <span class="${id}__printSvg">
                    ${window.NTBprintInvoice}
                </span>
            </div>
        </div>

    `;
};

export const addressPrice = (id) => {
  return `
        <div class="${id}__Container">
            <div class="${id}__address">
            
            </div>
            <div class="${id}__priceInfo"></div>
        </div>
  
  `;
};

export const newsletterSections = () => {
  return `
      <div class="fullwidth bg-color5 mt">
          <div class="fixedwidth nogaps align-center"><div class="pad" data-width-sm="1/2"><div class="f-24 f-sbold f-color6 mb">Sign up to Nature's Best Newsletter</div><div id="ajaxNewsletterFooter"><form action="javascript:ajaxNewsletterFooter();" method="post" id="frmsignup" name="frmsignup" class="fieldbelowlabel no-gaps"><label class="screenreader" for="footeremail">SIGN ME UP!</label><div class="inline-block ml0-5 float-right"><input class="flat m0 btn-primary height2-5" type="button" onclick="ajaxNewsletterFooter()" value="SIGN ME UP!"></div><div class="hideoverflow"><input type="email" name="footeremail" id="footeremail" value="" class="flat f-15 height2-5 bd-color0 ptb0 rounded" placeholder="ENTER YOUR EMAIL ADDRESS"></div></form></div><div data-width-sm="1/2">
        <div class="f-30 flex-equalSM mt">
        <a target="_blank" href="https://www.twitter.com/naturesbest" class="f-color6 fa fa-twitter" title="Twitter"></a>
        <a target="_blank" href="https://www.facebook.com/naturesbest" class="f-color6 fa fa-facebook ml" title="facebook"></a>
        <a target="_blank" href="https://www.instagram.com/naturesbest" class="f-color6 fa fa-instagram ml" title="Instagram"></a>
        <a target="_blank" href="https://www.pinterest.com/naturesbest" class="f-color6 fa fa-pinterest ml" title="pinterest"></a>
        </div>
        </div></div></div>
      </div>`;
};

export const itemDetails = (id) => {
  return `
  <div class="container-2x1-stack mb pb hideonnarrow bd-bottomonly bd-color5  f-color3 ${id}__itemDetails">
      <div class="${id}__itemFirst">Item details</div>
      <div class="${id}__itemSecond">
        <div class="container-3x1 align-center ${id}__container-3x1">
          <div class="${id}__firstItem">Qty</div>
          <div class="align-right ${id}__secondItem">Item price</div>
          <div class="align-right ${id}__thirdtItem">Total</div>
        </div>
      </div>
  </div>
  `;
};

export const createAcoount = (id) => {
  return `
    <div class="${id}__account-creation">
      <h1 class="${id}__account-title">Want to access to some useful extra features?
      </h1>
      <a class="${id}__account-link" href="/login/?target=myaccount%5fpage">Create an account</a>
    </div>
  `;
};

export const detailsInfo = (id) => {
  return `
    <div class="${id}__details-info">
      <h1 class="${id}__details-title">Don't miss out on special content and discounts!</h1>
      <ul class="${id}__details-list">
        <li class="${id}__details-item">Personalised offers</li>
        <li class="${id}__details-item">Expertly written nutritional and health news</li>
        <li class="${id}__details-item">Exclusive access to benefits and rewards</li>
        <li class="${id}__details-item">Special offers on everyday Pharmacy products</li>
        <li class="${id}__details-item">Early access to our new and innovative products</li>
      </ul>
    </div>
  `;
};
