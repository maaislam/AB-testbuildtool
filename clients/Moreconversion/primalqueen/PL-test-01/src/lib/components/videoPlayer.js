export const videoPlayer = (id) => {
  const html = `
        <div class="${id}__videoContainer s6_product_model">
            <video id="video1" class="${id}__video" 
                preload="auto" width="420" height="550" onclick="this.play()">
                <source src="https://salyenz.s3.amazonaws.com/4.8_Podcast+Spokesperson_9x16_FS.mp4" type="video/mp4" />
            </video>
        </div>
  `;
  return html;
};
