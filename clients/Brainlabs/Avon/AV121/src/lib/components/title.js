const prodTitle = (testId, { title, sampleUrl, varTitle, varImage }) => {
  const htmlStr = `
    <div class="${testId}__sampletitle">  
        <a class="${testId}__pdp-link" href="${sampleUrl}">
            <span>${title}</span>
        </a>
        <div class="product-variant">
            <span class="variant-image" style="background-image:url(${
              varImage?.src
            })" title="${varTitle}">
            </span>
            ${varTitle.includes('Default') ? '' : `<span class="variant-title">${varTitle}</span>`}
        </div>
    </div>`;

  return htmlStr.trim();
};

export default prodTitle;
