import { bonusWageringIcon, spinWageringIcon } from '../assets/svg';
import translationConfig from '../data/translationConfig';

const bonusBox = (id, data) => {
  const { name, bonusAmount, spinsAmount, bonusWagering, spinsWagering } = data;

  const casinoName = name.replace(/-/g, ' ');
  //const casinoName = casinoElem.querySelector('a.title').textContent.toLowerCase();
  const pageLang = document.querySelector('html').getAttribute('lang');
  const bonusText = translationConfig.bonus[pageLang];
  const spinsText = translationConfig.spins[pageLang];

  const bonusWageringText = translationConfig['bonus wagering'][pageLang];
  const spinsWageringText = translationConfig['spins wagering'][pageLang];

  const isBonusAmount = bonusAmount.toLowerCase().includes('kr');

  const htmlStr = `
      <li class='${id}__bonusBox'>
        <span class='${id}__bonusBox-name'>${casinoName}</span>
        ${isBonusAmount ? `<span class='${id}__bonusBox-bonus'>
        <span class='${id}__bonusBox-bonus-amount'>${bonusAmount}</span>
        <span class='${id}__bonusBox-bonus-text'>${bonusText}</span>
      </span>` : ''}
        ${typeof spinsAmount === 'number' ? `
        <span class='${id}__bonusBox-spins'>
          <span class='${id}__bonusBox-spins-amount'>${spinsAmount}</span>
          <span class='${id}__bonusBox-spins-text'>${spinsText}</span>
        </span>
        ` : ''}
        <span class='${id}__bonusBox-wagering'>
          <span class='${id}__bonusBox-wagering-bonus'>
            <span class='${id}__bonusWageringIcon'>${bonusWageringIcon}</span>
            <span>${bonusWageringText}
              <span class='wageringValue'>${bonusWagering}</span>
            </span>
          </span>
          <span class='${id}__bonusBox-wagering-spins'>
            <span class='${id}__spinWageringIcon'>${spinWageringIcon}</span>
            <span>${spinsWageringText}
              <span class='wageringValue'>${spinsWagering}</span>
            </span>
          </span>
        </span>
      </li>`;
  return htmlStr;
};

export default bonusBox;
