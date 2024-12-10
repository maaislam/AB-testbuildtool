import shortBenefitCards from './shortBenefitCards';

const shortBenefits = (id) => {
    const htmlStr = `
    <div class='pt-0 pb-12 container ${id}__shortBenefits'>
        <h2 class="${id}__heading">Protect yourself online and access blocked content</h2>
        <div class="container-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            ${shortBenefitCards(id)}
        </div>
        <div class="${id}__getProtonVpnWrapper">
            <div class="${id}__getProtonVpn ${id}__redirectLink">Get Proton VPN now</div>
        </div>
    </div>
    `;

    return htmlStr;
};
export default shortBenefits;
