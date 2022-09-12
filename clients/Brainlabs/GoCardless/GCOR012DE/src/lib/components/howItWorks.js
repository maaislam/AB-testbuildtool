import { howitworksList } from '../data';
import howitworkStep from './howitworksStep';

const howitworks = (id) => {
  const htmlStr = `<div class="${id}__howitworks--heroImage">
    <h2 class="title">So erhalten Sie Zahlungen mit GoCardless</h2>
    <div class="image-wrapper"></div>
      <div class="${id}__howitworks--steps">
            ${howitworksList.map((item) => howitworkStep(id, item)).join('\n')}
      </div>
</div>`;
  return htmlStr;
};
export default howitworks;
