import generateStar from './generateStar';

const review = (id, data) => {
  const { name, review, rating, reviewUrl } = data;
  const htmlStr = `
    <a href="${reviewUrl}" target="_blank" class="${id}__review swiper-slide">
        <div class="${id}__review--stars">${generateStar(Math.round(rating))}</div>
        <div class="${id}__review--reviewer">${name}</div>
        <div class="${id}__review--review">${review}</div>
    </a>`;

  return htmlStr;
};
export default review;
