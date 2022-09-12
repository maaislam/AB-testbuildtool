const ratingStars = (id, ratingData) => {
  const { rating } = ratingData;
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    const rounderRating = Math.floor(rating);
    if (i <= rounderRating) {
      stars.push(`<span class="${id}__yotpo-icon"></span>`);
    } else if (i === rounderRating + 1 && (rating * 10) % 5) {
      stars.push(`<span class="${id}__yotpo-icon half-star"></span>`);
    } else {
      stars.push(`<span class="${id}__yotpo-icon empty-star"></span>`);
    }
  }

  const htmlStr = `
        <div class="${id}__yotpo-bottomline ">
            <div class="${id}__yotpo-stars">
               ${stars.map((star) => star).join('\n')}
            </div>    
        </div>
    `;

  return htmlStr;
};

export default ratingStars;
