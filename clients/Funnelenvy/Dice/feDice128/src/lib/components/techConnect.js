import techConnectData from '../data/techConnectData';
import { list } from './list';

const techConnect = (ID) => {
  const html = `
        <div class="${ID}__techConnectContainer">
            <h3 class="${ID}__title">Where tech connects</h3>
            <h4 class="${ID}__subTitle">With over 6.2M members on Dice, we’re here to help you connect with the tech talent to power your business forward.</h4>
            <ul class="${ID}__lists">
                ${techConnectData.map((item) => list(item, ID)).join('\n')}
            </ul>
            <div class="${ID}__contactUs">
                <span class="${ID}__contactUsTitle">
                  <span class="${ID}__bold">Contact us today,</span> and let one of our team members show you why Dice is the trusted partner by companies that are transforming the world through technology.
                </span>
            </div>
        </div>
    `;

  return html.trim();
};

export default techConnect;
