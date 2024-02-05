const benefitItem = ({ url, text }) => {
  const html = `
    <li>
        <img src="${url}" alt="Focus" width="88" height="88">
        <p>${text}</p>
    </li>
    `;

  return html.trim();
};

export default benefitItem;
