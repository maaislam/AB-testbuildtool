import { securityFeatures } from '../data/data';
import shortBenefitCard from './shortBenefitCard';

const shortBenefitCards = (id) => {
    const htmlStr = `${securityFeatures.map((cardData) => shortBenefitCard(id, cardData)).join('')}`;

    return htmlStr;
};

export default shortBenefitCards;
