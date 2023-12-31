const bonusBox = (id, data, casinoElem) => {
    const { bonus, spins } = data;

    const casinoName = casinoElem.querySelector('a.title').textContent.toLowerCase();
    const bonusElem = casinoElem.querySelector(`.${bonus}`).outerHTML;
    const spinsElem = casinoElem.querySelector(`.${spins}`).outerHTML;

    console.log('bonusElem', bonusElem);
    console.log('spinsElem', spinsElem);
    const htmlStr = `
      <li class='${id}__bonusBox'>
        <span class='${id}__bonusBox-name'>${casinoName}</span>
        <span class='${id}__bonusBox-bonus'>${bonusElem}</span>
        <span class='${id}__bonusBox-spins'>${spinsElem}</span>
      </li>`;
    return htmlStr;
};

export default bonusBox;
