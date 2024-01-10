const bonusBox = (id, data) => {
  const { name, bonusAmount, spinsAmount, bonusWagering, spinsWagering } = data;

  const casinoName = name.replace(/-/g, ' ');
  //const casinoName = casinoElem.querySelector('a.title').textContent.toLowerCase();

  const htmlStr = `
      <li class='${id}__bonusBox'>
        <span class='${id}__bonusBox-name'>${casinoName}</span>
        <span class='${id}__bonusBox-bonus'>
          <span class='${id}__bonusBox-bonus-amount'>${bonusAmount}</span>
          <span class='${id}__bonusBox-bonus-text'>Bonus</span>
        </span>
        ${typeof spinsAmount === 'number' ? `
        <span class='${id}__bonusBox-spins'>
          <span class='${id}__bonusBox-spins-amount'>${spinsAmount}</span>
          <span class='${id}__bonusBox-spins-text'>Free Spins</span>
        </span>
        ` : ''}
        <span class='${id}__bonusBox-wagering'>
          <span class='${id}__bonusBox-wagering-bonus'>
            Bonus wagering 
            <span class='wageringValue'>${bonusWagering}</span>
          </span>
          <span class='${id}__bonusBox-wagering-spins'>
            Spins wagering 
            <span class='wageringValue'>${spinsWagering}</span>
          </span>
        </span>
      </li>`;
  return htmlStr;
};

export default bonusBox;
