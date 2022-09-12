import { tickMark, toolTip } from './data';

export const desktopPackagePanel = (id, data) => {
  return `
        <div class="${id}__desktop-package-panel-container">
            <div class="${id}__firstSection">
                <div class="${id}__package-section">
                    <div class="${id}__package-thumbnail">
                        <img src="${data.packageThumbnail}"/>
                    </div>
                    <div class="${id}__package-details">
                        <div class="${id}__package-details-container">
                            <p class="${id}__package-header">${data.packageHeader}</p>
                            <p class="${id}__package-title">${data.packageTitle}</p>
                            <p class="${id}__package-price">${data.packagePrice}</p>    
                            <p class="tedMascotText">Protect your Camera</p>
                            <img src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Yellow-arrow+1.png" class="yellowArrow"> 
                        </div>
                        <div class="${id}__package-transactions">

                            <div class="${id}__package-add-to-cart">Add to Cart</div>
                            <div class="${id}__package-add-to-checkout">Proceed to Checkout</div>
                        </div>
                      
                    </div>
                    
                </div>
                

            </div>
            <div class="${id}__secondSection">
            <div class="package-ticks">
            <div class="tick-item">
                <div class="tick-icon"></div>
                <div class="tick-text">Priority Repair <br> Service</div>
            </div>
            <div class="tick-item">
                <div class="tick-icon"></div>
                <div class="tick-text">Loan Camera <br> Service</div>
            </div>
            <div class="tick-item">
                <div class="tick-icon"></div>
                <div class="tick-text">Sensor <br> Cleaning <div class="${id}__toolTipBox">${toolTip} <span class="tooltiptext tooltip-right">DSLR & CSC Only</span></div></div>
            </div>
            <div class="tick-item">
                <div class="tick-icon"></div>
                <div class="tick-text">Guaranteed Buy <br> Back Value</div>
            </div>
        </div>
            </div>
        </div>
    
    `;
};

export const productTilte = (id, data) => {
  return `
        <div class="${id}__product-title">
            <div>
                <div class="${id}__tick-icon">
                    ${tickMark}
                </svg>
                </div>
                <p class="${id}__pd-title">${data.packageProduct}</p>
                <span> - </span>
                <p class="${id}__pd-bold">Added to Cart!</p>
                <div class="${id}__package-cross"></div>
            </div>
            
        </div>
    `;
};

export const mobilePackagePanel = (id, data) => {
  return `
  <div class="${id}__mobile-package-panel-container">
  <div class="${id}__mobile-package-hero">
      <div class="${id}__package-thumbnail">
          <img src="${data.packageThumbnail}" />
      </div>
      <div class="${id}__package-details">
          <p class="${id}__package-header">${data.packageHeader}</p>
          <p class="${id}__package-title">${data.packageTitle}</p>
          <p class="${id}__package-price">${data.packagePrice}</p>
          <p class="tedMascotText">Protect your Camera</p>
          <img src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Yellow-arrow+1.png"
               class="yellowArrow">
          <div class="${id}__package-add-to-cart">Add to Cart</div>
          <div class="${id}__package-add-to-checkout">Proceed to Checkout</div>

      </div>

  </div>
  <div class="${id}__secondSection">
      <div class="package-ticks">
          <div class="tick-item">
              <div class="tick-icon"></div>
              <div class="tick-text">Priority Repair <br> Service</div>
          </div>
          <div class="tick-item">
              <div class="tick-icon"></div>
              <div class="tick-text">Loan Camera <br> Service</div>
          </div>
          <div class="tick-item">
              <div class="tick-icon"></div>
              <div class="tick-text">Sensor <br> Cleaning <div class="${id}__toolTipBox">${toolTip} <span
                            class="tooltiptext tooltip-right">DSLR & CSC Only</span></div>
              </div>
          </div>
          <div class="tick-item">
              <div class="tick-icon"></div>
              <div class="tick-text">Guaranteed Buy <br> Back Value</div>
          </div>
      </div>
  </div>
</div>
    
    `;
};

export const desktopPackagePanelV2 = (id, data) => {
  return `
          <div class="${id}__desktop-package-panel-container">
              <div class="${id}__firstSection">
                  <div class="${id}__package-section">
                      <div class="${id}__package-thumbnail">
                          <img src="${data.packageThumbnail}"/>
                      </div>
                      <div class="${id}__package-details">
                          <div class="${id}__package-details-container">
                              <p class="${id}__package-header">${data.packageHeader}</p>
                              <p class="${id}__package-title">${data.packageTitle}</p>
                              <p class="${id}__package-price">${data.packagePrice}</p>     
                          </div>               
                      </div>              
                  </div>

                  <div class="${id}__package-transactions">
                              <div class="${id}__package-add-to-cart">Add to Cart</div>
                             
                  </div>
                  
  
              </div>
              <div class="${id}__secondSection">
              <div class="package-ticks">
                 <div class="tick-item">
                  <div class="tick-icon"></div>
                  <div class="tick-text">Priority Repair <br> Service</div>
                </div>
                <div class="tick-item">
                  <div class="tick-icon"></div>
                  <div class="tick-text">Loan Camera <br> Service</div>
                </div>
                <div class="tick-item">
                  <div class="tick-icon"></div>
                  <div class="tick-text">Sensor <br> Cleaning <div class="${id}__toolTipBox">${toolTip} <span class="tooltiptext tooltip-right">DSLR & CSC Only</span></div></div>
                </div>
                <div class="tick-item">
                  <div class="tick-icon"></div>
                  <div class="tick-text">Guaranteed Buy <br> Back Value</div>
                </div>
              </div>
              <div class="${id}__package-add-to-checkout">Proceed to Checkout</div>
              </div>
          </div>
      
      `;
};

export const mobilePackagePanelV2 = (id, data) => {
  return `
  <div class="${id}__mobile-package-panel-container">
  <div class="${id}__mobile-package-hero">
      <div class="${id}__package-thumbnail">
          <img src="${data.packageThumbnail}" />
      </div>
      <div class="${id}__package-details">
          <p class="${id}__package-header">${data.packageHeader}</p>
          <p class="${id}__package-title">${data.packageTitle}</p>
          <div class="${id}__secondSection">
              <div class="package-ticks">
                  <div class="tick-item">
                      <div class="tick-icon"></div>
                      <div class="tick-text">Priority repair service</div>
                  </div>
                  <div class="tick-item">
                      <div class="tick-icon"></div>
                      <div class="tick-text">Loan camera service</div>
                  </div>
                  <div class="tick-item">
                      <div class="tick-icon"></div>
                      <div class="tick-text">Sensor cleaning <div class="${id}__toolTipBox">${toolTip} <span
                                    class="tooltiptext tooltip-right">DSLR & CSC Only</span></div></span></div>
                  </div>
                  <div class="tick-item">
                      <div class="tick-icon"></div>
                      <div class="tick-text">Guaranteed buy back value</div>
                  </div>
              </div>
          </div>
          <p class="${id}__package-price">${data.packagePrice}</p>
          <div class="${id}__package-add-to-cart">Add to Cart</div>
          <div class="${id}__package-add-to-checkout">Proceed to Checkout</div>

      </div>

  </div>

</div>
              
      
      `;
};

export const desktopPackagePanelV3 = (id, data) => {
  return `
            <div class="${id}__desktop-package-panel-container">
                <div class="${id}__firstSection">
                    <div class="${id}__package-section">
                        <div class="${id}__package-thumbnail">
                            <img src="${data.packageThumbnail}"/>
                        </div>
                        <div class="${id}__package-details">
                            <div class="${id}__package-details-container">
                                <p class="${id}__package-header">${data.packageHeader}</p>
                                <p class="${id}__package-title">${data.packageTitle}</p>
                                <p class="${id}__package-price">${data.packagePrice}</p>     
                            </div>               
                        </div>              
                    </div>
                </div>
            
                <div class="${id}__secondSection">
                <div class="package-ticks">
                   <div class="tick-item">
                    <div class="tick-icon"></div>
                    <div class="tick-text">Priority Repair <br> Service</div>
                  </div>
                  <div class="tick-item">
                    <div class="tick-icon"></div>
                    <div class="tick-text">Loan Camera <br> Service</div>
                  </div>
                  <div class="tick-item">
                    <div class="tick-icon"></div>
                    <div class="tick-text">Sensor <br> Cleaning <div class="${id}__toolTipBox">${toolTip} <span class="tooltiptext tooltip-right">DSLR & CSC Only</span></div></div>
                  </div>
                  <div class="tick-item">
                    <div class="tick-icon"></div>
                    <div class="tick-text">Guaranteed Buy <br> Back Value</div>
                  </div>
                </div>
                
                </div>
            </div>
        
        `;
};

export const addCheckoutStr = (id) => {
  return `
    <div class="${id}__package-transactions">
        <div class="${id}__package-add-to-cart">Add to Cart</div>
        <div class="${id}__package-add-to-checkout">Proceed to Checkout</div>                              
    </div>
    `;
};
