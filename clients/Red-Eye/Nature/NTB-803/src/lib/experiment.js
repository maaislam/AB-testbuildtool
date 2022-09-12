/*eslint-disable object-curly-newline */
import { pollerLite } from '../../../../../../globalUtil/util';
import shared from './shared/shared';
import getNumber from './helper/getNumber';

import {
  orderPlaced,
  replaceText,
  fieldContent,
  firstParentDiv,
  orderDetails,
  positionChange,
  secondParentDiv,
  addressPrice,
  passwordContainer,
  passwordPosition,
  newsletterSections,
  itemDetails,
  createAcoount,
  detailsInfo
  //eslint-disable-next-line import/extensions
} from './component/structure';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
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
  document.body.classList.add(`${ID}`);
  document.querySelector(`#main .progressbar ~ .${ID}__orderPlaced`)?.remove();
  document
    .querySelector('#main .progressbar ~ .fixedwidth')
    ?.insertAdjacentHTML('beforebegin', orderPlaced(ID));

  sessionStorage.setItem('orderID', `${getNumber()}`);

  document
    .querySelector(`#main .progressbar ~ .fixedwidth .bg-color5 .mtb.f-14.${ID}__mtb`)
    ?.remove();

  document
    .querySelector(`#main .progressbar ~ .fixedwidth .bg-color5 .${ID}__fieldContent`)
    ?.remove();

  document.querySelector(`.${ID}__firstParent`)?.remove();
  document.querySelector(`${ID}__secondParent`)?.remove();

  pollerLite(['#main .progressbar ~ .fixedwidth'], () => {
    if (document.querySelector('#main .progressbar ~ .fixedwidth')) {
      document
        .querySelector('#main .progressbar ~ .fixedwidth .bg-color5 h3')
        ?.insertAdjacentHTML('beforebegin', fieldContent(ID));
      document
        .querySelector('#main .progressbar ~ .fixedwidth .bg-color5 .mtb.f-14')
        ?.insertAdjacentHTML('beforebegin', replaceText(ID));

      document
        .querySelector('#main .progressbar ~ .fixedwidth .pad')
        ?.insertAdjacentHTML('beforeend', firstParentDiv(ID));

      pollerLite([`#main .progressbar ~ .fixedwidth .pad > div:not(.${ID}__firstParent`], () => {
        positionChange(
          ID,
          `#main .progressbar ~ .fixedwidth .pad > div:not(.${ID}__firstParent)`,
          'firstParent'
        );
        pollerLite([`.${ID}__firstParent .mtb2 > h3`], () => {
          if (
            document.querySelector(`.${ID}__firstParent .mtb2 > h3`).innerText === 'Order details'
          ) {
            document
              .querySelector(`.${ID}__firstParent .mtb2 > h3`)
              .classList.add(`${ID}__displayNone`);
          }
          document
            .querySelector('#main .progressbar ~ .fixedwidth .pad')
            ?.insertAdjacentHTML('beforeend', secondParentDiv(ID));

          document
            .querySelector(`.${ID}__firstParent form label.long`)
            ?.insertAdjacentHTML('beforebegin', passwordContainer(ID));
          if (document.querySelector(`.${ID}__passwordContainer`)) {
            passwordPosition(ID, 'newPassword', 0);
            passwordPosition(ID, 'confirmPassword', 1);
          }

          document
            .querySelector(
              `#main .progressbar ~ .fixedwidth .${ID}__firstParent .mtb2:last-child >h3`
            )
            ?.insertAdjacentHTML('afterend', orderDetails(ID));

          document
            .querySelector(
              '#main .progressbar ~ .fixedwidth .NTB-803__firstParent > .mtb2:last-child .container-2x1-stack.hideonnarrow'
            )
            ?.insertAdjacentHTML('beforebegin', itemDetails(ID));

          document
            .querySelector(
              '#main .progressbar ~ .fixedwidth .NTB-803__firstParent > .mtb2:last-child .container-2x1-stack.mb0-5'
            )
            ?.insertAdjacentHTML('beforebegin', addressPrice(ID));

          positionChange(ID, '.bd-xlight.inline-block-children', 'address');
          positionChange(ID, '.container-2x1-stack.mb0-5', 'priceInfo');

          document
            .querySelectorAll(
              `.${ID}__priceInfo > div.mb0-5:last-child > div:last-child > div >div`
            )
            .forEach((item) => {
              if (item.innerText.includes('Grand') || item.innerText.includes('£')) {
                item.classList.add(`${ID}__special`);
              }
              if (item.innerText.includes('£')) {
                item.classList.add(`${ID}__specialPrice`);
              }
            });

          if (!document.querySelector('#main .progressbar ~ .fixedwidth .bg-color5')) {
            document.querySelectorAll(`.${ID}__firstParent .mtb2`)[0].classList.add(`${ID}__mtb20`);
            document.querySelectorAll(`.${ID}__firstParent .mtb2`)[1].classList.add(`${ID}__mtb21`);
          } else {
            //save button add
            pollerLite(['#passwordstrength span.passStrengthify'], () => {
              document
                .querySelector('#passwordstrength span.passStrengthify')
                ?.insertAdjacentHTML(
                  'afterend',
                  '<input type="submit" value="Save" class="fulltohalfwidth mb0">'
                );
            });
          }

          //amends
          if (document.querySelector('#main .progressbar ~ .fixedwidth .bg-color5')) {
            document
              .querySelector(`.${ID}__secondParent`)
              .insertAdjacentHTML('beforebegin', createAcoount(ID));
          }

          document
            .querySelector('#main .progressbar ~ .fixedwidth')
            ?.insertAdjacentHTML('afterend', newsletterSections());

          document
            .querySelector('#main .progressbar ~ .fullwidth')
            .insertAdjacentHTML('beforebegin', detailsInfo(ID));
        });
      });
    }
  });
};
