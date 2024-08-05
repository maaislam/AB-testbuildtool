//eslint-disable-next-line no-shadow
const text = (id, text) => {
  const html = `
        <div class="${id}__limitedTimeOffer">
            ${text}
        </div>
    `;
  return html.trim();
};

export default text;
