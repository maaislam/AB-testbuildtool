const deleteHandler = (id, target, fireEvent, shared) => {
  //get currently deleted items
  const delItem = target
    .closest(`.${id}__sampleupsell--row`)
    .dataset.title.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const deletedItems = JSON.parse(sessionStorage.getItem(`${id}__delList`));
  const newEvent = new CustomEvent('rerender');
  fireEvent('User removes a product from the sample list', shared);
  if (!deletedItems) {
    const arr = JSON.stringify([delItem]);
    sessionStorage.setItem(`${id}__delList`, arr);
    document.body.dispatchEvent(newEvent);
    return;
  }

  deletedItems.push(delItem);
  sessionStorage.setItem(`${id}__delList`, JSON.stringify(deletedItems));

  document.body.dispatchEvent(newEvent);
};

export default deleteHandler;
