import { testimonial } from '../data';
import reelBtn from './reelButton';

const reelItem = (id, title, index) => {
  const IMAGE_STORAGE_BASE = 'https://ucds.ams3.digitaloceanspaces.com/GCOR011';
  const lastSlideLinkBtn = {
    text: 'Démarrer gratuitement',
    link: 'https://manage.gocardless.com/signup?lang=fr',
    classSuffix: 'pill-slidelast'
  };
  const lastSlideDivBtn = {
    text: "Continuer à lire l'article",
    link: '',
    classSuffix: 'link-slidelast'
  };
  const testimonials = `
    <div class="${id}__fig-section">
      <img src="${IMAGE_STORAGE_BASE}/UK/reviewer-logo.png" alt="bike club">
      <figure>
          <blockquote>
              ${testimonial.quote}
          </blockquote>
          <figcaption>- ${testimonial.reviewer}</figcaption>
          <span>${testimonial.advertMsg}</span>
      </figure>
    </div>`;

  const lastSlideBtns = `<div class="${id}__btn-container">
        ${reelBtn(id, lastSlideLinkBtn, 'link')}
        ${reelBtn(id, lastSlideDivBtn)}
    </div>`;

  const reelImg = `${IMAGE_STORAGE_BASE}/FR/GCOR011_reel${index + 1}.png`;

  const htmlStr = `<div class="${id}__reelitem swiper-slide ${id}__reelitem--${index}">
        <div class="${id}__reelitem--title">${title}</div>
        <div class="${id}__reelitem--body">
            ${index === 6 ? testimonials : `<img src="${reelImg}" alt="${title}">`}
        </div>
        ${index === 6 ? lastSlideBtns : ''}
    </div>`;

  return htmlStr.trim();
};

export default reelItem;
