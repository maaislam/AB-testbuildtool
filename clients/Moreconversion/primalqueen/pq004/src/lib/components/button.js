const button = (id, text) => {
  const html = `
        <a href="javascript:bookmarkscroll.scrollTo('join_pkg')" class="common_btn shadow-pulse ${id}__button">
              ${text}
              <img src="//primalqueen.com/cdn/shop/files/btn_img_39x33.png?v=2484361063612256245" class="btn_img" width="39" height="33" alt="icon">
        </a>
    `;
  return html.trim();
};

export default button;
