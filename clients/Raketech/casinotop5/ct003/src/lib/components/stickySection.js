export const stickySection = (id, link, title) => {
  const html = `
        <div class="${id}__stickySection">
            <p>${title}</p>
            <a class="${id}__link" href="${link}" target="_blank">プレイしよう！</a>
        </div>
    `;
  return html;
};
