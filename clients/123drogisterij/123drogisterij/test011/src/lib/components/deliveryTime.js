import { getNextDayFormatted } from '../helpers/utils';

const deliveryTime = (id) => {
  const htmlStr = `<div class="${id}__deliverytime">
    verwachte leverdatum: <b>${getNextDayFormatted()}</b>
  </div>`;
  return htmlStr;
};
export default deliveryTime;
