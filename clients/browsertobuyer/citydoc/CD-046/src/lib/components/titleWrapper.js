import button from './button';

const titleWrapper = (id, title) => {
  const html = `
    <div class="${id}__titleWrapper">
        <h1 class="${id}__c-info-hero__sash__title">${title}</h1>
        ${button(id)}
    </div>
  `;
  return html.trim();
};

export default titleWrapper;
