const discountProd = (id) => {
  const html = `
   
            <div class="${id}__tag-2">
                <div class="${id}__tag-top-style-2">
                </div>
                <div class="${id}__tag-bottom-style-2">
                    <div class="${id}__discount-container-2">
                        <p class="${id}__discount-tag-heading">Get an extra</p>
                        <p class="${id}__discount-tag-text">10% OFF</p>
                        <span class="${id}__discount-tag-text-small">everything</span>
                         <button class="${id}__plpClaimBtn">Claim Discount</button>
                    </div>
                </div>
            </div>
     
  
  `;
  return html.trim();
};

export default discountProd;
