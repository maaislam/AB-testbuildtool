import { getCookie } from '../helpers/utils';

const discountProd = (id, data, VARIATION) => {
    const isEmailSubmited = getCookie(`${id}__emailSubmitted`);

    const discountCode = VARIATION === '1' ? 'EVERYTHING10' : 'ALLRUGS10';

    const html = `
        <div class="${id}__tag-2 ${isEmailSubmited ? `${id}__emailSubmited` : ''}">
            <div class="${id}__tag-top-style-2">
            </div>
            <div class="${id}__tag-bottom-style-2">
                <div class="${id}__discount-container-2">
                    <p class="${id}__discount-tag-heading">Get an extra</p>
                    <p class="${id}__discount-tag-text">10% OFF</p>
                    <span class="${id}__discount-tag-text-small">${data.mainText}</span>
                    <div class="${id}__discountCode">
                        <p class="${id}__discountCodeMsg">Enter code at checkout:</p>
                        <p class="${id}__discountCodeText">${discountCode}</p>
                    </div>
                    <button class="${id}__plpClaimBtn">Claim Discount</button>
                </div>
            </div>
        </div>
    `;
    return html.trim();
};

export default discountProd;
