export const betItem = (ID, { name, ImageUrl, url }) => {
  const item = `
    <div class="betrow ${ID}__added">
    <a target="_blank" class="bookmaker ${name}" href="${url}" rel="nofollow">
      <img src="${ImageUrl}" data-src="${ImageUrl}" alt="${
    name.charAt(0).toUpperCase() + name.slice(1)
  } icon" class="lazyload" loading="lazy">
    </a>
    <div class="odds">
      <span class="odds" id="modal__${name}_odds">-</span>
    </div>
    <div class="visit">
      <a target="_blank" id="modal__${name}_visit" rel="nofollow" href="${url}">
        Bet <i class="fas fa-angle-double-right"></i>
      </a>
    </div>
  </div>
    `;

  return item;
};
