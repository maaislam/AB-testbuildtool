const uspsWrapper = (id, data) => {
  const html = `
        <div class="${id}__usps-wrapper">
            ${data
              .map((item) => {
                return `
                    <div class="usps-item">
                        <div class="usps-icon">
                            ${item.icon}
                        </div>
                        <div class="usps-text">
                            ${item.text}
                        </div>
                    </div>
                `;
              })
              .join('\n')}                 
        </div>
    `;

  return html.trim();
};

export default uspsWrapper;
