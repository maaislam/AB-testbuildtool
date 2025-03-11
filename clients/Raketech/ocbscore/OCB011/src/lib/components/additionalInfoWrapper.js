const additionalInfoWrapper = (id) => {
  const html = `
        <div class="${id}__additionalInfoWrapper">
            <div class="${id}__perk-container"
                style="grid-area: PERK1;"><span class="value">6x</span> <span class="title">if required deposit</span></div>
            <div class="${id}__perk-container"
                style="grid-area: PERK2;"><span class="value">6x</span> <span class="title">response time chat</span></div>
            <div class="${id}__perk-container"
                style="grid-area: PERK3;"><span class="value">6x</span> <span class="title">withdrawal time Swish</span></div>
        </div>
    `;

  return html.trim();
};

export default additionalInfoWrapper;
