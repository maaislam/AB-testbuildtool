const plpCard = (id, productData) => {
  const { imageSrc, title, specList, labels, price } = productData;

  const labelConfig = {
    'energy star':
      '<a href="https://www.energystar.gov/productfinder/?s=mega" target="_blank"><img title="Energy Star" src="https://fe-test-dev.s3.amazonaws.com/hpe/hpe-elite-matinfo-rfp-portal-including-carbon-footprints/Energy_Star_Logo.png"></a>',
    epeat:
      '<a href="https://epeat.net/search-servers" target="_blank"><img title="Epeat" src="https://fe-test-dev.s3.amazonaws.com/hpe/hpe-elite-matinfo-rfp-portal-including-carbon-footprints/EPEAT_logo_transprent_bg.png"></a>',
    'tco certified':
      '<a href="https://tcocertified.com/" target="_blank"><img title="TCO Certified" src="https://fe-test-dev.s3.amazonaws.com/hpe/hpe-elite-matinfo-rfp-portal-including-carbon-footprints/TCO_logo_transparent_bg.png"></a>'
  };

  const htmlStr = `
  <div class="${id}__plpCard col323 mobile100 padding15 bg-cloud prodListBox center fe-card-show" >
  <aside class="width_fix">
    <span class="none" data-bind="text: 'image content source: ' + imageSource()"
      >image content source: EP</span
    >
    <a href="javascript:void(0)" class="block center lock_width instantLoad">
      <!-- ko if: imageUrl() --><!-- /ko -->
      <!-- ko ifnot:imageUrl() -->
      <img
        class="productCatalogLink clear fe_compareThumb"
        data-bind="attr:{src: headerData.defaultHPELogo, sku: sku()}"
        src="${imageSrc}"
        sku="EC-SYS-BAND_42121174"
      />
      <!-- /ko -->
    </a>
  </aside>

  <aside class="row">
    <p class="row"></p>
    <div class="col100 maxheight80px relative">
      <!-- ko if:shortDescription -->
      <i class="bar"></i>
      <a
        class="productCatalogLink black ellip instantLoad align-left fe_compareThumb"
        href="javascript:void(0)"
        data-bind="text: shortDescription(),  attr: {title: shortDescription(),sku: sku()}"
        title="${title}"
        sku="EC-SYS-BAND_42121174"
        >${title}</a
      >
      <!-- ko if: $data.configurationSource &&  ($data.configurationSource() == "PRE-FIX" || $data.configurationSource() == "PRE-BAND") --><!-- /ko -->
      <!-- /ko -->
    </div>

    <!-- ko ifnot:shortDescription --><!-- /ko -->

    <div class="darkgray small2 y-margin05 col100 ellipsis align-left metriclight minheight30px" style="opacity: 0">
      <!-- ko ifnot: $data.isBundle() -->
      <!-- ko if: $data.isConfigProduct() && $data.productType() == "OCCBundle" --><!-- /ko -->
      <!-- ko if: $data.isConfigProduct() && $data.productType() != "OCCBundle" -->
      ID du modèle de référence&nbsp;:
      <!-- ko text: configurationId -->42121174<!-- /ko -->
      <!-- /ko -->
      <!-- ko ifnot: $data.isConfigProduct--><!-- /ko -->

      <!-- /ko -->
      <!-- ko if: $data.isBundle() --><!-- /ko -->
    </div>
    <p></p>

    <article class="windows-xp align-left b-margin25px">
      <span class="none" data-bind="text: 'keyspecs content source: ' + specSource()"
        >keyspecs content source: EP</span
      >
      <ul class="plongdesc" data-bind="html: $root.getLongDescription(longDescription())">
        <li>
          ${specList[0]}
        </li>
        <li>${specList[1]}</li>
        <li>
            ${specList[2]}
        </li>
      </ul>
    </article>

    <div class="magnifying_glass"></div>
  </aside>
  <span class="col100 tablet100 mobile100 margin0 r-padding025 center custom_price_details">
   
        <span
        data-bind="visible:headerData.displayCurrency, text:headerData.displayCurrency"
        class="center large-currency"
        >EUR HT</span>
        <span
        data-bind="visible:!(headerData.displayCurrency), text:headerData.currency"
        class="large-currency"
        style="display: none"
        >EUR HT</span>
        <span
        id="test"
        class="large-tprice"
        >${price.split('T ')[1]}</span>
    <span class="fe_labels">
        ${labels.map((label) => labelConfig[label] || '').join('')}
    </span></span>
    <span
    class="${id}__contactcommercial add-to-cart-icon t-inline-block"
    ><a target="_blank" href="https://b2b.hpe.com/navigation/openContactPDF?fileName=Portail%20Matinfo%205%20Lot%204_Organisation%20HPE.pdf">Contactez votre  équipe commerciable</a>
    </span>
  
</div>

  `;

  return htmlStr.trim();
};

export default plpCard;
