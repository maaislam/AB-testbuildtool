const reviews = (id, element) => {
  const listContainer = element.querySelector('.pdp-reviews-list-container');
  const actualHeiight = window.getComputedStyle(listContainer).height;
  listContainer.setAttribute('data-heiight', actualHeiight);

  const lists = Array.from(element.querySelectorAll('.pdp-review'));
  const firstReviewHeight = lists[0].getBoundingClientRect().height;
  listContainer.style.height = `${firstReviewHeight}px`;

  lists.slice(1).forEach((list) => {
    list.classList.add(`${id}__hide`);
  });
};
export default reviews;
