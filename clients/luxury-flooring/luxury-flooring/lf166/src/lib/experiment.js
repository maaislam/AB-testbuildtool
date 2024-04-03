import setup from './services/setup';
import shared from './shared/shared';
import { fakeButton } from './components/fakebutton';
import { modal } from './components/modal';
import { addJsToPage, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const orderSampleBtn = document.querySelector('.sample-add-form');
  if (document.querySelector(`.${ID}__fakeATB`)) {
    document.querySelector(`.${ID}__fakeATB`).remove();
  }
  if (document.querySelector(`.${ID}__modal`)) {
    document.querySelector(`.${ID}__modal`).remove();
  }
  orderSampleBtn.insertAdjacentHTML('beforebegin', fakeButton(ID));
  document.body.insertAdjacentHTML('beforeend', modal(ID)); //
};

const modalOpen = () => {
  document.querySelector(`.${ID}__modal .sidebar`).classList.add('open');
  document.querySelector(`.${ID}__modal .sidebar-overlay`).classList.add('active');
  document.querySelector(`.${ID}__modal .sidebar-close`).classList.add('active');
};

const modalClose = () => {
  document.querySelector(`.${ID}__modal .sidebar`).classList.remove('open');
  document.querySelector(`.${ID}__modal .sidebar-overlay`).classList.remove('active');
  document.querySelector(`.${ID}__modal .sidebar-close`).classList.remove('active');
};

export default () => {
  setup();
  console.log(ID);

  if (VARIATION === 'control') {
    return;
  }

  document.body.addEventListener('click', (e) => {
    if (e.target.closest(`.${ID}__fakeATB`)) {
      modalOpen();
    }
    if (
      e.target.closest(`.${ID}__modal .sidebar-close`) ||
      e.target.closest(`.${ID}__modal .sidebar-overlay`)
    ) {
      modalClose();
    }
  });

  addJsToPage('//js.hsforms.net/forms/embed/v2.js', `${ID}__hbspt`);
  pollerLite([() => typeof window.hbspt !== 'undefined'], () => {
    init();
    window.hbspt.forms.create({
      region: 'na1',
      portalId: '4544336',
      formId: 'add62d11-d7e9-440e-8811-9123fea1d1aa',
      target: `.${ID}__formContainer`,
      onFormReady: ($form, ctx) => {
        $form.addClass(`${ID}__form`);
        $form.find('label').css('font-weight', '700');
        $form.find('input').css({
          border: '1px solid #000',
          padding: '24px'
        });
        $form.find('input[type="submit"]').css({
          border: 'none',
          'font-weight': '400',
          'font-size': '14px',
          padding: '18px 24px',
          'border-radius': '0'
        });
        $form.find('input[type="submit"]').parent().css('text-align', 'left');

        $form.validate({
          submitHandler: (form) => {
            form.submit();
            document.querySelector(`.${ID}__header`).classList.add(`${ID}__hide`);
            document.querySelector(`.${ID}__formMessage`).classList.remove(`${ID}__hide`);
          }
        });
      }
    });
  });
};
