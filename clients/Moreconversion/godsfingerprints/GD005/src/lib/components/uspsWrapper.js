const uspsWrapper = (id) => {
  const html = `
    <div class="${id}__usps-wrapper">
      <div class="${id}__usps-container">
            <div class="${id}__usps-item">
                <img src="https://godsfingerprints.co/cdn/shop/files/icon-satisfaction_c8bd216a-af6e-481c-a375-3cd0ebaa1b61.webp?v=1715278964&width=356"/>
            </div>
            <div class="${id}__usps-item">
                <img src="https://godsfingerprints.co/cdn/shop/files/icons-refund.png?v=1715279101&width=256"/>
            </div>
            <div class="${id}__usps-item">
                <img src="https://godsfingerprints.co/cdn/shop/files/icon-premium_12f8d5b5-3fc6-4a3a-9f8c-2b013a2bd30f.webp?v=1715281943&width=256"/>
            </div>
      </div>
      
    </div>
  `;
  return html.trim();
};

export default uspsWrapper;
