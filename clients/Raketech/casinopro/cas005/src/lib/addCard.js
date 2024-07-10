import { swish, trustly } from './icons';

const addCard = (id, casinoTitle) => {
  const htmlStr = `
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
  return htmlStr;
};

export default addCard;
