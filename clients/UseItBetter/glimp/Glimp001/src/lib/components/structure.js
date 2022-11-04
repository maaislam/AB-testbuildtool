export const modelStructure = (id) => {
  return `
    <div class="modal fade glimp-modal switch-modal in" id="${id}__switch-modal" style="display:block;">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
          <div class="modal-body">   
            <div class="switch-deal-cover"> 
              <h2 id="default-message">You'r about to find the best broadband in New Zealand</h2>
              <p>Enter your details</p>
            </div>
            
           <form name="switchForm" class="${id}__switchForm">
            <div class="field-cover">
              <div class="fields">
                <fieldset class="switch-form">
                  <input type="text" name="name" required class="switch-input ${id}__input-name" placeholder="Your Name" required="required">
                  <input type="number" name="phone_number" required class="switch-input ${id}__input-phone" placeholder="Contact Number" required="required" title="Mobile number entered has to be between 9 to 15 characters.">
                  <input type="email" name="email" required class="switch-input ${id}__input-email" placeholder="Email" required="required">  
                  <input type="submit" name="commit" value="Vew Deals →" id="${id}__switch-btn" class="btn btn-lg successful-broadband-switch" >
                  </fieldset>
              </div>
            </div>
          </form></div>
          <div class="modal-footer">
            <p class="highlight">Our service is FREE. No spam, ever.</p>
            <span style="font-size: 1.2rem;">By clicking Visit Provider you accept the <a href="https://www.glimp.co.nz/legal/disclaimer" target="_blank">Website Terms of Use</a> and <a href="https://www.glimp.co.nz/legal/privacy" target="_blank">Privacy Policy</a>. </span>
          </div>
      </div>
    </div>
  </div>
    
    `;
};

export const modalOverlay = (id) => {
  return `<div class="${id}__modal-overlay modal-backdrop fade in"></div>`;
};
