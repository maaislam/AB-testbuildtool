const casinoItem = (ID, item) => {
  const { title, svg, points, text } = item;
  return `
    <div class='${ID}__item'>
    <a class='${ID}__description'>
        <h4>${title}</h4>
        <div class='${ID}__container'>
            ${svg}
            <span>${points}</span>
        </div>
    </a>
    <p class='${ID}__text'>
        ${text}
    </p>
    </div>
  `.trim();
};

const casinoStr = (ID, data) => {
  const html = `
        <div class='${ID}__casinoBox'>
            ${data.map((item) => casinoItem(ID, item)).join('\n')}
        </div>
    
    `;

  return html.trim();
};

export default casinoStr;
