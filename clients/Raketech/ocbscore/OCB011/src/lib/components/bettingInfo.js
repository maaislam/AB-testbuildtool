import additionalInfoWrapper from './additionalInfoWrapper';

const bettingInfo = (id) => {
  const html = `
        <div class="${id}__bettingInfoContainer">
            <div class="${id}__bettingInfo">

                <div class="${id}__bettingInfoAdditional">
                    ${additionalInfoWrapper(id)}
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default bettingInfo;
