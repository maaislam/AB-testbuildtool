import reelBtn from './reelButton';

const reelItem = (id, title, index) => {
  const lastSlideLinkBtn = {
    text: 'Get started for free',
    link: 'https://manage.gocardless.com/sign-up',
    classSuffix: 'pill-slidelast'
  };
  const lastSlideDivBtn = {
    text: 'Continue reading the article',
    link: '',
    classSuffix: 'link-slidelast'
  };
  const lastSlideBtns = `<div class="${id}__btn-container">
        ${reelBtn(id, lastSlideLinkBtn, 'link')}
        ${reelBtn(id, lastSlideDivBtn)}
    </div>`;

  const reelImg = `https://ucds.ams3.digitaloceanspaces.com/GCOR011/UK/GCOR011_reel${
    index + 1
  }.png`;

  const htmlStr = `<div class="${id}__reelitem swiper-slide ${id}__reelitem--${index}">
        <div class="${id}__reelitem--title">${title}</div>
        <div class="${id}__reelitem--body">
            <img src="${reelImg}" alt="${title}">
        </div>
        ${index === 6 ? lastSlideBtns : ''}
    </div>`;

  return htmlStr.trim();
};

export default reelItem;
