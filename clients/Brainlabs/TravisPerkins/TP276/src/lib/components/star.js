export const star = (ID) => {
  const html = `
    <div class="${ID}__stars">
        <div data-test-id="rating-stars" class="sc-cjbZfG MRSsS">
            <svg data-test-id="rating-stars-star100" class="sc-jIZahH kfrhuQ">
            <use xlink:href="#service-icon-star100-16"></use></svg
            ><svg data-test-id="rating-stars-star100" class="sc-jIZahH kfrhuQ">
            <use xlink:href="#service-icon-star100-16"></use></svg
            ><svg data-test-id="rating-stars-star100" class="sc-jIZahH kfrhuQ">
            <use xlink:href="#service-icon-star100-16"></use></svg
            ><svg data-test-id="rating-stars-star100" class="sc-jIZahH kfrhuQ">
            <use xlink:href="#service-icon-star100-16"></use></svg
            ><svg data-test-id="rating-stars-star75" class="sc-jIZahH kfrhuQ">
            <use xlink:href="#service-icon-star75-16"></use>
            </svg>
        </div>
    </div>
    `;

  return html.trim();
};
