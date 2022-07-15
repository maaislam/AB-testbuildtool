import quickLink from './quickLink';

const quickLinks = (id, quickLinksConfigs) => {
  const htmStr = `
  <div class="${id}__quicklinks">
        <div class="${id}__quicklinks--title ${id}__title">Quick Links:</div>
        <div class="${id}__quicklinks--configs">
            ${quickLinksConfigs.map((config) => quickLink(id, config)).join('\n')}
        </div>
    </div>
    `;
  return htmStr.trim();
};

export default quickLinks;
