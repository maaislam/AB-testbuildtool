const ratingStars = (rating, className) => {
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    const rounderRating = Math.floor(rating);
    if (i <= rounderRating) {
      stars.push(`<i class="stamped-fa stamped-fa-star ${className}"></i>`);
    } else if (i === rounderRating + 1 && (rating * 10) % 5) {
      stars.push(`<i class="stamped-fa stamped-fa-star-0 ${className}"></i>`);
    } else {
      stars.push(`<i class="stamped-fa stamped-fa-star-0 ${className}"></i>`);
    }
  }

  const htmlStr = `
        
            <div >
               ${stars.map((star) => star).join('\n')}
            </div>    
        
    `;

  return htmlStr;
};

export default ratingStars;
