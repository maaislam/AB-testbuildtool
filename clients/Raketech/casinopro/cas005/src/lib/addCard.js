import { swish, trustly } from './icons';

const addCard = (id, casinoTitle, VARIATION) => {
  const htmlStrV1 = `
    <div class="${id}_card-container">
        <div class="${id}_card-container-infos">
            <div class="${id}_card-container-infos-texts">
                <div class="${id}_card-container-infos-texts-box">
                    <div class="${id}_card-container-infos-texts-box-icon">
                        ${swish}
                        <p>Swish</p>
                    </div>
                    <div class="${id}_card-container-infos-texts-box-icon">
                        ${trustly}
                        <p>Trustly</p>
                    </div>
                </div>
                <p>${casinoTitle}</p>
            </div>
        </div>
    </div>`;

  const htmlStrV2 = `
        <div class="${id}_card-container">
        <div class="${id}_card-container-infos">
            <div class="${id}_card-container-infos-texts">
                <p>${casinoTitle}</p>
            </div>
        </div>
    </div>`;

  return VARIATION === '1' ? htmlStrV1 : htmlStrV2;
};

export default addCard;
