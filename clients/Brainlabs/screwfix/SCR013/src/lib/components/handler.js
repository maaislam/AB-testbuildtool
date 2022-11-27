const clickHandler = (shared, target, fireEvent, selectedSize) => {
  const { ID } = shared;
  console.log(selectedSize.toUpperCase());
  if (target.closest('.dropdown-menu ul li')) {
    const targetElem = target.closest('.dropdown-menu ul li');
    document.querySelectorAll(`.${ID}__dropdown-container ul li.selected`).forEach((item) => {
      item.classList.remove('selected');
    });
    targetElem.classList.add('selected');
    fireEvent('User chooses a size', shared);
  } else if (target.closest(`.${ID}__fakeDelivery`)) {
    document.querySelector(`.${ID}__errorMessage`).classList.remove(`${ID}__disable`);
    fireEvent('User sees error message on PDP', shared);
  } else if (target.closest(`#add_for_collection_button_${selectedSize.toUpperCase()}`)) {
    fireEvent('User interacts with click & collect on pdp', shared);
  } else if (target.closest('#product_add_to_trolley_image')) {
    fireEvent('User interacts with Delivery on pdp', shared);
  } else if (target.closest('#recommendations_container .sl__full')) {
    fireEvent('User interacts with best sellers product recomendations', shared);
  }
};

export default clickHandler;
