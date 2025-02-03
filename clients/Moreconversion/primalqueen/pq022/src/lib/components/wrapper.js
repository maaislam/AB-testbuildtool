import { muteIcon, unmuteIcon } from '../assets/icons';

const wrapper = (id, data, VARIATION) => {
  const html = `
        <div class="${id}__videoWrapper">
            <div class="${id}__videoContainer container">
                <div class="${id}__title">Primal Queen’s State-Of-The-Art Facility In NY</div>
                <div class="${id}__content">
                    <div class="${id}__videoSection">
                        <div class="${id}__bgWrapper">
                            <img src="https://cdn-3.convertexperiments.com/uf/10042057/10049555/group-16-67a083a32e6df_67a0d624e9e55.png"/>
                        </div>
                        <div class="${id}__videoContent">
                            <video class="${id}__video" preload="auto" ${
    VARIATION === '3' ? 'autoplay muted' : ''
  }>
                                <source src="${data.videoUrl}" type="video/mp4">
                                
                            </video>
                            <div class="${id}__audioController" data-attr="mute">
                                    <span class="${id}__icon muted">
                                        ${muteIcon}
                                    </span>
                                    <span class="${id}__icon unmuted">
                                        ${unmuteIcon}
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div class="${id}__infoSection">
                        <p class="${id}__info">We take grass-fed, pasture-raised beef organs and freeze-dry them to preserve their nutrients. Our certified facility grinds and encapsulates them under strict safety protocols. Each order is freshly packaged and shipped to your door.</p>
                        <p class="${id}__info">We’re proud to be transparent about our process. From start to finish, we ensure quality and purity in every capsule.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

  return html.trim();
};

export default wrapper;
