const getReviews = () => {
  return fetch('/scan')
    .then((response) => {
      //The API call was successful!
      return response.text();
    })
    .then((html) => {
      //Convert the HTML string into a document object
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      //Get the image file
      const reviewsElems = doc.querySelectorAll('.reviews-slide');
      //console.log(reviewsElems);
      const reviewsData = [...reviewsElems].map((elem) => {
        return {
          review: elem.querySelector('.card-review-text').innerText.trim(),
          author:
            elem
              .querySelector('.card-review-author')
              .firstChild.textContent.split('on')[0]
              .trim() || '',
          reviewsSrc: elem.querySelector('.review-more').href
        };
      });
      //console.log(reviewsData);
      return reviewsData;
    });
};
export default getReviews;
