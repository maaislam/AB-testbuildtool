import { bonusWageringIcon, spinWageringIcon } from '../assets/svg';
import translationConfig from '../data/translationConfig';
import checkLength from '../helpers/checkLength';

const bonusBox = (id, data) => {
  const { name, bonusAmount, spinsAmount, bonusWagering, spinsWagering, displayName } = data;

  const casinoName = name.replace(/-/g, ' ');
  //const casinoName = casinoElem.querySelector('a.title').textContent.toLowerCase();
  const pageLang = document.querySelector('html').getAttribute('lang');
  const bonusText = translationConfig.bonus[pageLang];
  const spinsText = translationConfig.spins[pageLang];

  const bonusWageringText = translationConfig['bonus wagering'][pageLang];
  const spinsWageringText = translationConfig['spins wagering'][pageLang];

  const isBonusAmount = bonusAmount.toLowerCase().includes('kr');
  const isLength = checkLength(spinsAmount);

  //const isBonusWagering = bonusWagering.length > 1;
  //const isSpinsWagering = spinsWagering.length > 1;

  const htmlStr = `
      <li class='${id}__bonusBox'>
        <span class='${id}__bonusBox-name'>${displayName}</span>
        <span class='${id}__bonusBox-bonus ${isBonusAmount ? '' : `${id}__bonusAsText`}'>
          <span class='${id}__bonusBox-bonus-amount'>${bonusAmount}</span>
          <span class='${id}__bonusBox-bonus-text'>${isBonusAmount ? bonusText : ''}</span>
        </span>
        <span class='${id}__bonusBox-spins ${isLength ? '' : `${id}__spinsAsText`}'>
          <span class='${id}__bonusBox-spins-amount'>${spinsAmount}</span>
          <span class='${id}__bonusBox-spins-text'>${isLength ? spinsText : ''}</span>
        </span>
        <span class='${id}__bonusBox-wagering'>
          <span class='${id}__bonusBox-wagering-bonus'>
            <span class='${id}__bonusWageringIcon'>${bonusWageringIcon}</span>
            <span>${
              bonusWagering && bonusWagering !== '-' ? bonusWageringText : 'Bonus ej tillgänglig'
            }
              <span class='wageringValue'>${
                bonusWagering && bonusWagering !== '-' ? bonusWagering : ''
              }</span>
            </span>
          </span>
          <span class='${id}__bonusBox-wagering-spins'>
            <span class='${id}__spinWageringIcon'>${spinWageringIcon}</span>
            <span>${
              spinsWagering && spinsWagering !== '-'
                ? spinsWageringText
                : 'Free spins ej tillgängligt'
            }
              <span class='wageringValue'>${
                spinsWagering && spinsWagering !== '-' ? spinsWagering : ''
              }</span>
            </span>
          </span>
        </span>
      </li>`;
  return htmlStr;
};

export default bonusBox;
