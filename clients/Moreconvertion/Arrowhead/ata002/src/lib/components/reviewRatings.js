const reviewRatings = (id) => {
    const reviewRatingValue = document.querySelector('a .loox-rating').getAttribute('data-rating');

    const htmlStr = `<span class="${id}__reviewRating">${reviewRatingValue}</span>`;
    return htmlStr;
};
export default reviewRatings;
