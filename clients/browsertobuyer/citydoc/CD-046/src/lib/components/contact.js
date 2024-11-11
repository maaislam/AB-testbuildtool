import { tooltipIcon } from '../assets/icons';

const contact = (id) => {
  const html = `
    <div class="${id}__contactWrapper">
        <div class="${id}__contactContainer">
            <div class="${id}__title">
                <div class="${id}__icon">${tooltipIcon}</div>
                <div class="${id}__text">Risk if you contract</div>
            </div>
            <div class="${id}__subtitle">There is no risk for rabies and it is usually fatal.</div>
            <div class="${id}__footer">
                <div class="${id}__footer-text">Additional precautions</div>
                <div class="${id}__footer-subtext">Avoid contact with animals when travelling. If bitten, scratched or licked on an open wound, by a mammal, wash with soap and water and seek immediate medical advice. </div>
            </div>
        </div>
    </div>
  `;
  return html.trim();
};

export default contact;
