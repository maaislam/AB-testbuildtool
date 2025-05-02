const researchBanner = (id) => {
  const html = `
     <div class="${id}__bannerConatiner">
        <div class="${id}__banner s10_data_row">
            <p class="s10_data_text">
            <img src="//primalqueen.com/cdn/shop/files/s10_data_icon_e0827290-c087-48d6-a71f-be0fb09ddefb_48x48.png?v=4954781138822176930" width="48" height="48" alt="icon">
            See 3rd Party Lab Results
            </p>
            <a href="javascript:void(0);" class="medical_data_btn openwhitepaper ${id}__researchBtn">View</a>
        </div>
      </div>
    `;

  return html.trim();
};

export default researchBanner;
