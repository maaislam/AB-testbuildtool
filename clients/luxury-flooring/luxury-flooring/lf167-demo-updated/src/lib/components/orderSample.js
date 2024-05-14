export const orderSample = (id) => {
  const html = `
            <div class="${id}__orderSampleWrapper-button">

            </div>
            <div class="${id}__orderSampleWrapper-text">
                <ul class="${id}__uspsList">
                    <li class="${id}__uspsList-item">XL samples</li>
                    <li class="${id}__uspsList-item">Next-day-delivery</li>
                </ul>
            </div>
        
    `;
  return html;
};
