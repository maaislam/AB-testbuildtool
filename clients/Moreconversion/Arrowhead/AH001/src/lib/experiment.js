import setup from './services/setup';

export default () => {
  setup();
  const attachPoint = document.querySelector('.product-description h5[data-mce-fragment="1"]');
  const newHtml = `<h4 style="font-weight: bold;" data-mce-fragment="1"><strong>As Featured On Joe Rogan</strong></h4>
  <div data-vimeo-initialized="true" data-video-id="919193904" data-type="vimeo" class="video-div" id="Vimeo-template--16808308998403__hero_video_BTcaQ8"><div class="video-wrapper"><iframe data-ready="true" title="Colion Noir and Joe Rogan on Arrowhead Tactical Apparel" height="240" width="426" src="https://player.vimeo.com/video/919193904?title=0&amp;byline=0&amp;portrait=0&amp;muted=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963" tabindex="-1" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" frameborder="0"></iframe></div></div>
  <div data-vimeo-initialized="true" data-video-id="919193904" data-type="vimeo" class="video-div"></div>`;
  attachPoint.style.display = 'none';
  attachPoint.insertAdjacentHTML('afterend', newHtml);
};
