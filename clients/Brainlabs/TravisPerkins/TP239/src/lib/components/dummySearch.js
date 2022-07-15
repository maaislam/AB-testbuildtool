import { searIcon } from '../data';

const dummySearch = (id) => {
  const htmlStr = `
    <div class="${id}__dummySearch">
        <div class="${id}__dummySearch--title ${id}__title">Find trade products with your trade pricing:</div>
        <div class="${id}__dummySearch--container">
            <input class="${id}__dummySearch--input"
                type="search"
                placeholder="Start searching">
            <span class="${id}__dummySearch--searchicon">
                ${searIcon}
            </span>
        </div>
    </div>`;

  return htmlStr.trim();
};

export default dummySearch;
