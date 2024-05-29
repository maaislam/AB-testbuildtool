export const stickySection = (id, link, name, title) => {
  const html = `
        <div class="${id}__stickySection">
            <p>${title}</p>
            <a class="${id}__link" href="${link}" target="_blank" data-casino="${name}">プレイしよう！</a>
        </div>
    `;
  return html;
};
