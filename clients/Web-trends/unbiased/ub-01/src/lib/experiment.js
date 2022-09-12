// import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { data } from './data';

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
};

const addNavItem = (selector) => {
  const node = document.querySelector(selector);

  const clone = node.cloneNode(true);

  node.parentNode.insertBefore(clone, node.nextSibling);
};

const appendElement = () => {
  addNavItem('#main-nav > ul > li:nth-child(3)');

  addNavItem('#main-nav > ul > li:nth-child(3)');

  addNavItem('#main-nav > ul > li:nth-child(3)');

  addNavItem('#main-nav > ul > li:nth-child(3)');

  addNavItem('#main-nav > ul > li:nth-child(3)');

  document.querySelector('#main-nav > ul > li:nth-child(1)').style.display = 'none';

  document.querySelector('#main-nav > ul > li:nth-child(2)').style.display = 'none';

  document.querySelector('#main-nav > ul > li:nth-child(3)').style.display = 'none';

  console.log(Array.from(document.querySelectorAll('#main-nav > ul > li')));

  const setDdItems = (id) => {
    const leftPart = data[id].left.items
      .map((d) => {
        return `<a href="${d.link}">${d.title}</a>`;
      })
      .join('\n');
    const rightPart = data[id].right.items
      .map((d) => {
        return `<a href="${d.link}">${d.title}</a>`;
      })
      .join('\n');

    return `<div class="${ID}-dropdown-item">
              <div class="${ID}-dropdown-item-left">
                <div class="${ID}-dropdown-item-left-content">
                  <p>${data[id].left.title}</p>
                  ${leftPart}
                  <div class="${ID}-dropdown-item-left-content--footer">
                    <a href="${data[id].left.overviewLink}">Overview</a>
                  </div>
                </div>
              </div>
              <div class="${ID}-dropdown-item-right">
                <div class="${ID}-dropdown-item-right-content">
                  <p>${data[id].right.title}</p>
                  ${rightPart}
                </div>
              </div>
            </div>`;
  };

  Array.from(document.querySelectorAll('#main-nav > ul > li')).forEach((li, index) => {
    if (index > 2) {
      // eslint-disable-next-line no-param-reassign
      li.querySelector('button').innerText = data[index].name;
      const component = setDdItems(index);
      console.log(component);
      document.querySelector(`#main-nav > ul > li:nth-child(${index + 1}) > div`).innerHTML =
        component;
    }
    // console.log(data[index].name);
    li.addEventListener('click', () => {
      document
        .querySelector(`#main-nav > ul > li:nth-child(${index + 1}) > div`)
        .classList.toggle(`${ID}-block`);

      Array.from(document.querySelectorAll('#main-nav > ul > li')).forEach((lix, ix) => {
        if (ix !== index) {
          document
            .querySelector(`#main-nav > ul > li:nth-child(${ix + 1}) > div`)
            .classList.remove(`${ID}-block`);
        }
      });
    });
  });
};

export default () => {
  // setup(); //use if needed

  console.log(ID);

  // -----------------------------

  // If control, bail out from here

  // -----------------------------

  if (VARIATION === 'control') {
    return;
  }

  setUniqueClass();

  appendElement();

  // -----------------------------

  // Write experiment code here

  // -----------------------------

  // ...
};
