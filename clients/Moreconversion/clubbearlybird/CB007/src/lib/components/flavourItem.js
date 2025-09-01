import { flavourData } from '../data/data';

const flavourItem = (item) => {
  const isFindItem = flavourData.find((flavour) =>
    flavour.title.toLowerCase().trim().includes(item.toLowerCase().trim())
  );

  const html = `
  <div class="flavor-option ${isFindItem.isActive ? 'flavor-active' : ''}" data-key="${item}">
    <span>${isFindItem.icon}</span>
    <span>${isFindItem.title}</span>
  </div>
  `;

  return html.trim();
};

export default flavourItem;
