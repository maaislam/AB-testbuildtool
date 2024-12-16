const fakeSearchWrapper = (id, text) => {
  const html = `
    <div class="${id}__fakeSearchWrapper">
        <input class=" ${id}__inputField"
            type="text"
            aria-label="Search"
            value="${window.fakeInputValue ? window.fakeInputValue : ''}"
            placeholder="${text}"
            autocomplete="off"
            data-live-search-input="" />

        <button class="${id}__btn"
                type="button"
                aria-label="Search"
                data-live-search-submit="">
            <span class="search-icon search-icon--inactive">
                <svg aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="24"
                    fill="none"
                    viewBox="0 0 23 24">
                    <path d="M21 21L15.5 15.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"></path>
                    <circle cx="10"
                            cy="9"
                            r="8"
                            stroke="currentColor"
                            stroke-width="2"></circle>
                </svg>

            </span>
        </button>
    </div>
  `;
  return html.trim();
};

export default fakeSearchWrapper;
