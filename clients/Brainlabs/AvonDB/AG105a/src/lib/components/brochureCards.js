import brochureCard from './brochureCard';

const brochureCards = (id, brochuresData, numberOfBrochures) => {
  const htmlStr = `<div class="${id}__brochurecards">
        <div class="${id}__brochurecards--wrapper">
            ${brochuresData
              .map((brochureData, idx) => brochureCard(id, brochureData, numberOfBrochures, idx))
              .join('\n')}
        </div>
    </div>`;

  return htmlStr.trim();
};

export default brochureCards;
