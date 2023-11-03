const productCard = (id, data) => {
  const content = data.innerHTML;
  const htmlStr = `
    <li class='${id}__productCard swiper-slide'>
      ${content}
    </li>`;
  return htmlStr;
};

export default productCard;
