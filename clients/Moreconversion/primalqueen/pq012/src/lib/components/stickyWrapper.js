import { giftBox } from '../assets/icons';

const stickyWrapper = (id) => {
  const html = `
        <div class="${id}__stickyWrapper">
            <div class="${id}__stickyContainer">
                <a class="${id}__contentBox" href="javascript:bookmarkscroll.scrollTo('join_pkg')">
                    <div class="${id}__icon">${giftBox}</div>
                    <div class="${id}__text">
                        Black Friday Special Offer <br><span>- Get 4 Free Gifts</span>
                    </div>
                </a>
            </div>
        </div>
    `;
  return html.trim();
};
export default stickyWrapper;
