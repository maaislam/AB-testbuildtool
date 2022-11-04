import { pollerLite } from '../../../../../../../globalUtil/util';

const checkedFn = (id) => {
    return [...document.querySelectorAll(`#${id}__switch-modal fieldset input`)].every((item) => item.value !== '');
};
const collectDataFn = (id, data) => {
    document.querySelectorAll(`#${id}__switch-modal fieldset input`).forEach((item) => {
        if (item.type === 'text') {
            data.name = item.value;
        }
        if (item.type === 'number') {
            data.phone_number = item.value;
        }
        if (item.type === 'email') {
            data.email = item.value;
        }
    });
};

const distributeDataAndClick = (id, data) => {
    for (const property in data) {
        document.querySelector(`.modal.fade.glimp-modal.switch-modal.in:not(#${id}__switch-modal) form input[name="${property}"]`).value = data[property];
      }

    pollerLite([`.modal.fade.glimp-modal.switch-modal.in:not(#${id}__switch-modal) input[type="submit"]`], () => {
        setTimeout(() => {
            document.querySelector(`.modal.fade.glimp-modal.switch-modal.in:not(#${id}__switch-modal) input[type="submit"]`).click();
        }, 2000);
    });
};
const clickHandler = (id, collectData) => {
    document.body.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target.closest(`#${id}__switch-btn`)) {
            if (checkedFn(id)) {
                document.body.classList.remove('modal-open');
                document.querySelector(`#${id}__switch-modal`).style.display = 'none';
                document.querySelector(`.${id}__modal-overlay`)?.remove();
                collectDataFn(id, collectData);
            } else {
                console.log('empty information');
            }
        }

        if (event.target.closest('a.panel-sign-up-button')) {
            pollerLite(['body.modal-open', `.modal.fade.glimp-modal.switch-modal.in:not(#${id}__switch-modal)`], () => {
                distributeDataAndClick(id, collectData);
            });
        }
    });
};

export default clickHandler;
