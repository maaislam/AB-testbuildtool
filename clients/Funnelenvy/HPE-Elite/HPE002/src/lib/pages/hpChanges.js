import { pollerLite } from '../../../../../../../globalUtil/util';

import hpCard from '../components/hpCard';
import { hpCardData } from '../data';
import { live } from '../helpers/utils';

const homePageChanges = () => {
  //console.log('homePageChanges');

  const feAboveHeroBannerTestUser = `
    <div class="fe-above-hero-banner">
    <a href="https://sites.google.com/view/matinfo-5-lot-4-hpe/accueil" target="_blank">
    <img src="https://fe-hpe-public.s3.amazonaws.com/images/2022-07-01Matinfo_portal_banner.png" class="fe-mbanner-img"></a>
    </div>
    <p class="fe-gen-hero-text">Amélioration du portail en cours – vision rapide de tous les modèles configurables avec toutes les options pour les catégories majeures.</p>
    <p class="fe-gen-hero-text fe-gen-hero-text-contact">Contactez votre <a href="https://b2b.hpe.com/navigation/openContactPDF?fileName=Portail%20Matinfo%205%20Lot%204_Organisation%20HPE.pdf" target="_blank"> équipe commerciale</a>  pour les options qui ne sont pas visibles sur le portail comme par exemple certaines garanties 6/7 ans.</p>
    <p class="fe-gen-hero-text">Pour suivre vos commandes, écrivez à <a href="mailto:commandes-matinfo-lot4@hpe.com">commandes-matinfo-lot4@hpe.com</a> avec votre numéro de commande HPE.</p>
      <div class="fe-click-banner">
          <a href="https://b2b.hpe.com/orderStatus" class="fe-click-link">Statut de commande</a>
      </div>
      <div class="row products-inner fe-homepage-products">
          ${hpCardData.map((data) => hpCard(data)).join('\n')}
      </div>`;

  const init = () => {
    document.querySelector('body').classList.add('fe-home-phase');
    document
      .querySelector('.header-bottom .title-container')
      .insertAdjacentHTML('beforeend', feAboveHeroBannerTestUser);

    //click on product

    live('.fe-homepage-products>div.fe-home-prod', 'click', function (e) {
      const product = this.querySelector('a.row').innerHTML;
      const prodList = document.querySelectorAll('.nav-catalogs > li >  a');
      prodList.forEach((el) => {
        if (el && el.innerHTML.includes(product)) {
          el.click();
        }
      });
    });
  };

  pollerLite(['.header-bottom .title-container'], init);
};
export default homePageChanges;

//background: url('https://bm-test-dev.s3.us-east-2.amazonaws.com/FE/HPE+Elite/HPE+Elite+-+Matinfo+banner+needed/Banner-image-Option2.jpg');
