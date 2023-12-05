export const timerStr = (ID, timer) => {
  const html = `
   <div class="row text-center mt-3">
    <div class="col-12">
        <center class="${ID}__timer">
            <p>or fastest delivery🚚<strong> ${timer}</strong>. order within</p>
            <strong id="timeLeft"></strong>
        </center>
    </div>
   </div>
    
    `;

  return html.trim();
};
