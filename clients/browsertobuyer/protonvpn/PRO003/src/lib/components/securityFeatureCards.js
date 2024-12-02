import { securityFeatures } from '../data/data';
import securityFeatureCard from './securityFeatureCard';

const securityFeatureCards = (id) => {
    const htmlStr = `${securityFeatures.map((cardData) => securityFeatureCard(id, cardData)).join('')}`;

    return htmlStr;
};

export default securityFeatureCards;
