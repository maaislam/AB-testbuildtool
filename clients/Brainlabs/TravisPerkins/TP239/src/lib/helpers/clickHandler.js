const clickHandler = (target, shared, fireEvent) => {
  const { ID } = shared;
  const targetMatched = (desiredMatch) =>
    target.matches(desiredMatch) || target.closest(desiredMatch);

  if (
    targetMatched(`.${ID}__dummySearch--input`) ||
    targetMatched(`.${ID}__dummySearch--searchicon`)
  ) {
    document.querySelector('[class^="Search__SearchForm-sc-"] input')?.focus();
    document
      .querySelector('[class^="Search__SearchOverlay-sc-"]')
      ?.classList.add(`${ID}__opacity-60`);
    document.querySelector('[data-test-id="header-search-button"]')?.click();
    fireEvent(`User clicks search`, shared);
  } else if (targetMatched(`.${ID}__quicklink--yellow`)) {
    fireEvent('Customer clicks Order History CTA', shared);
  } else if (targetMatched(`.${ID}__quicklink--white`)) {
    fireEvent('Customer clicks Invoice CTA', shared);
  } else if (targetMatched(`.${ID}__popularsearch--term`)) {
    const searchTerm = target.innerText.replace('&', 'and');
    fireEvent(`User clicks a recommended search term (${searchTerm})`, shared);
  }
};

export default clickHandler;
