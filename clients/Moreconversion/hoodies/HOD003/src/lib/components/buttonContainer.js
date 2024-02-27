export const buttonContainer = (ID, message) => {
  const html = `
        <div class="${ID}__buttonContainer">${message}</div>
    `;

  return html.trim();
};
