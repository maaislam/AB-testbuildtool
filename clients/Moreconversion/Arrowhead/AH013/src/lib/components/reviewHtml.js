const reviewHtml = (review) => {
  const reviewHTML = `
    <div class="review_wrapper">
        <div class="review">
        <div class="img_div">
        <img src="${review.imgUrl}" alt="Review Image">
        </div>
        <div class="reviewText_div">
            <p class="user_review">${review.reviewText}</p>
            <div class="review_name_div">
            <div class="name_contents">
            
            <p>${review.name}</p>
            <div class="verified_div">
            <img src="https://cdn.shopify.com/s/files/1/0346/8741/8505/files/Img_-_Verified_purchase.svg?v=1722389526" alt="Verified Icon">
            <span>Verified</span>
            </div>
            </div>
            <div class="rating_div"><svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" role="presentation"><title>4.9 rating (33 votes)</title><use href="#looxicons-rating-icon"></use></svg><svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" aria-hidden="true"><use href="#looxicons-rating-icon"></use></svg><svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" aria-hidden="true"><use href="#looxicons-rating-icon"></use></svg><svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" aria-hidden="true"><use href="#looxicons-rating-icon"></use></svg><svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" aria-hidden="true"><use href="#looxicons-rating-icon"></use></svg></div>
            
            </div>
            </div>
        </div>
        
        </div>
    </div>
  `;

  return reviewHTML.trim();
};

export default reviewHtml;
