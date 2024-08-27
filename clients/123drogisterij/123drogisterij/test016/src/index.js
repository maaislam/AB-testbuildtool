import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const getCookie = (name) => {
    const value = `; ${document.cookie}`;

    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return null;
};

const setCookie = (cName, cValue, expDays = 90) => {
    const date = new Date();

    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);

    const expires = `expires=${date.toUTCString()}`;

    document.cookie = `${cName}=${cValue}; ${expires}`;
};

window.setCookie = setCookie;

if (getCookie('activate-049')) {
    pollerLite([() => document.querySelectorAll('.cart.item .item-info').length > 0], activate);
}
