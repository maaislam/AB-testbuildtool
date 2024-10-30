const expTimer = (id) => {
  const html = `
    <div class="${id}__timer" >
        <div class="${id}__mainDiv" style="opacity:0;">
            <div class="countdown_wrapper">
                <div class="countdown">
                  <span id="${id}__hrs" class="${id}__time">00</span>
                  <span class="${id}__text">Hrs</span> 
                </div>
                <div class="countdown">
                    <span id="${id}__minutes" class="${id}__time">00</span>
                  <span class="${id}__text">Mins</span>  
                </div>
                <div class="countdown">
                  <span id="${id}__seconds" class="${id}__time">00</span>
                  <span class="${id}__text">Secs</span>  
                </div>
            </div>
        </div>
     </div>
  
  `;
  return html.trim();
};

export default expTimer;
