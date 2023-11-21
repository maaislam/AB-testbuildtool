import discountPriceCal from '../helpers/discountPriceCal';

const discountBadge = (id) => {
    const htmlStr = `
    <span class="${id}__saveAmount">
      Save $${discountPriceCal()}
    </span>
  `;
    return htmlStr;
};
export default discountBadge;
