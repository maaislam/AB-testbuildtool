import { flavourData } from '../data/data';

const flavourItem = (item) => {
  const isFindItem = flavourData.find((flavour) =>
    flavour.title.toLowerCase().trim().includes(item.option1.toLowerCase().trim())
  );

  const html = `
  <div class="flavor-option  ${item.available ? '' : 'flavor-disabled'}" data-key="${item.option1}">
    <span>${isFindItem.icon}</span>
    <span>${item.option1 || isFindItem.title}</span>
  </div>
  `;

  return html.trim();
};

export default flavourItem;
