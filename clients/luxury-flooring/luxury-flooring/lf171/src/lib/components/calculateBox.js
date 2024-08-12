const calculateBox = (id) => {
  const html = `
        <div class="${id}__calculateBox">
            <form class="${id}__calculateBox-form">
                <label for="fnumber">Price your room</label>
                <div class="${id}__calculate-control">        
                    <input type="number" id="fnumber" name="fnumber" placeholder="Room m²">
                    <button type="submit" class="${id}__submitBtn">Calculate prices</button>
                </div>  
                
                <span class="${id}__clearText ${id}__hide">Clear pricing</span
            </form>
        </div>
    `;
  return html;
};

export default calculateBox;
