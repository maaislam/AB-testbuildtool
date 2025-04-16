import { roundIcon } from '../assets/icons';

export const uspsList = (id, device) => {
  const html = `
        <ul class="${id}__lists ${id}__${device}">
            <li class="${id}__item">
                <span class="${id}__itemIcon">${roundIcon}</span>
                <span class="${id}__itemText">Made in America</span>    
            </li>
            <li class="${id}__item">
                <span class="${id}__itemIcon">${roundIcon}</span>
                <span class="${id}__itemText">60 Day No-Snooze Guarantee</span>  
            </li>
            <li class="${id}__item">
                <span class="${id}__itemIcon">${roundIcon}</span>
                <span class="${id}__itemText">Free US Shipping</span>  
            </li>
        </ul>
    `;
  return html.trim();
};
