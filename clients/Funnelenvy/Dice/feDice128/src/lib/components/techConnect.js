import { techList } from '../assets/techList';
import { list } from './list';

const techConnect = (ID) => {
  const html = `
        <div class="${ID}__staticPageContainer"/>
            <h3 class="${ID}__staticPageTitle">Where tech connects</h3>
            <h4 class="${ID}__staticPageSubtitle">With over 6.2M members on Dice, we’re here to help you connect with the tech talent to power your business forward.</h4>
            <ul class="${ID}__staticPageLists">
                ${techList.map((item) => list(item, ID)).join('\n')}
            </ul>
            <div class="${ID}__staticPageContactUs">
                <span class="${ID}__staticPageContactUsTitle">
                  <span class="${ID}__bold">Contact us today,</span> and let one of our team members show you why Dice is the trusted partner by companies that are transforming the world through technology.
                </span>
            </div>
        </div>
    `;

  return html.trim();
};

export default techConnect;
