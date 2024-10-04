import banner from '../components/banner';
import subBanner from '../components/subBanner';
import { pollerLite } from '../helpers/utils';

const productLandingPage = (ID) => {
    document.body.classList.add(`${ID}__plp`);

    pollerLite(['.nav-sections'], () => {
        const attachPoint = document.querySelector('.nav-sections');

        if (!document.querySelector(`.${ID}__banner`)) {
            const banners = `${banner(ID)}${subBanner(ID)}`;
            attachPoint.insertAdjacentHTML('afterend', banners);
        }
    });
};
export default productLandingPage;
