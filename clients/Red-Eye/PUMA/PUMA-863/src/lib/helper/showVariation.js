const showVariation = (id) => {
  if (!document.querySelector(`.${id}__searchStructure`).classList.contains(`${id}__show`)) {
    document.querySelector(`.${id}__searchStructure`).classList.add(`${id}__show`);
  }
};
export default showVariation;
