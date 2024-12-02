import securityFeatureCards from './securityFeatureCards';

const onlineSecurityFeatures = (id) => {
    const htmlStr = `
    <div class='pt-0 pb-12 container ${id}__onlineSecurityFeatures'>
        <h2 class="${id}__heading">Protect yourself online and access blocked content</h2>
        <div class="container-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            ${securityFeatureCards(id)}
        </div>
    </div>
    `;

    return htmlStr;
};
export default onlineSecurityFeatures;
