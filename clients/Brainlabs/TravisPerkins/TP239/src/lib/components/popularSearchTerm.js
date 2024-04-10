/*eslint-disable implicit-arrow-linebreak */
const popularSearchTerm = (id, { searchTerm, link }) =>
  `<a class="${id}__popularsearch--term" href="${link}">${searchTerm}</a>`;

export default popularSearchTerm;
