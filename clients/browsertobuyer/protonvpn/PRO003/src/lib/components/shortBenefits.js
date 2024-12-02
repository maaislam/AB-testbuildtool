import shortBenefitCards from './shortBenefitCards';

const shortBenefits = (id) => {
    const htmlStr = `
    <div class='pt-0 pb-12 container ${id}__shortBenefits'>
        <h2 class="${id}__heading">Protect yourself online and access blocked content</h2>
        <div class="container-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            ${shortBenefitCards(id)}
        </div>
        <div class="${id}__getProtonVpnWrapper">
            <a href="https://account.protonvpn.com/pricing?currency=USD&hfp=false" class="${id}__getProtonVpn">Get Proton VPN now</a>
        </div>
    </div>
    `;

    return htmlStr;
};
export default shortBenefits;
