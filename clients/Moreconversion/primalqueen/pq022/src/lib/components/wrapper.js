const wrapper = (id, data) => {
  const html = `
        <div class="${id}__videoWrapper">
            <div class="${id}__videoContainer">
                <div class="${id}__title">Primal Queen’s State-Of-The-Art Facility In NY</div>
                <div class="${id}__content">
                    <div class="${id}__videoSection">
                        <video class="${id}__video" preload="auto" width="420" height="550" onclick="this.play()">
                            <source src="${data.videoUrl}" type="video/mp4">
                        </video>
                    </div>
                    <div class="${id}__infoSection"></div>
                </div>
            </div>
        </div>
    `;

  return html.trim();
};

export default wrapper;
