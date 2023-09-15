import { casinoLicenseData } from '../casinodata';
import modalStageOne from './modalStageOne';
import modalStageTwo from './modalStageTwo';

const modal = (id) => {
  const htmlStr = `
    <div class="${id}__modal ">
         ${modalStageOne(id)}
         ${modalStageTwo(id, casinoLicenseData)}
    </div>`;
  return htmlStr;
};
export default modal;
