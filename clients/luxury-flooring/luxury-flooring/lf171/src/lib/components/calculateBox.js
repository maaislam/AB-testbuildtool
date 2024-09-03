const calculateBox = (id) => {
  const html = `
        <div class="${id}__calculateBox">
            <div class="${id}__optionsWrapper">
                <div class="${id}__options-container">
                    <div class="${id}__options-price">Price your room</div>
                    <div class="${id}__options-visualiser">
                        <div class="${id}__options-icon">
                            <img src="https://www.roomvo.com/services/vendor/vendor_images/luxuryflooringandfurnishingscouk/roomvo_icon.png">
                        </div>
                        <div class="${id}__options-text">Room Visualiser</div>
                    </div>
                </div>
            </div>
            <div class="${id}___calculateBox-form-container">
                <form class="${id}__calculateBox-form">
                    <label for="fnumber">Price your room</label>
                    <div class="${id}__calculate-control">        
                        <input type="number" id="fnumber" name="fnumber" placeholder="Room m²">
                        <button type="submit" class="${id}__submitBtn">Calculate prices</button>
                    </div>  
                    
                    <span class="${id}__clearText ${id}__hide">Clear pricing</span>
                </form>

                <div class="${id}__options-visualiser">
                    <div class="${id}__options-icon">
                        <img src="https://www.roomvo.com/services/vendor/vendor_images/luxuryflooringandfurnishingscouk/roomvo_icon.png">
                    </div>
                    <div class="${id}__options-text">Room Visualiser</div>
                </div>
            
            </div>
            
        </div>
    `;
  return html;
};

export default calculateBox;
