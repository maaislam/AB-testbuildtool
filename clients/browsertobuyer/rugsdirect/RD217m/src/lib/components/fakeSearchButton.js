const fakeSearchButton = (id) => {
  const html = `
    <button class="${id}__fakeSearchButton">

    <div class="site-header-mobile-search-button--button"
         tabindex="-1">
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

        <span class="visually-hidden">Search</span>
    </div>

</button>
  `;
  return html.trim();
};

export default fakeSearchButton;
