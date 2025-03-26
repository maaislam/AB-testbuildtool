const subsButton = (id) => {
  const html = `
        <div class="${id}__subsButton">
          <a class="${id}__subsLink"
            tabindex="0"
            data-element="clicks-to-operators"
            data-operator="1xBet"
            data-placement="odds-page"
            data-type="button"
            rel="nofollow noindex"
            target="_blank"
            href="https://go.affiliationcloud.com/b40cf328-b1ec-11ed-9664-0050569e7c00">
              <p class="${id}__counter">1</p>
              <p class="${id}__number">1.23</p><span class=""></span>
          </a>
          <a class="${id}__subsLink"
            tabindex="0"
            data-element="clicks-to-operators"
            data-operator="1xBet"
            data-placement="odds-page"
            data-type="button"
            rel="nofollow noindex"
            target="_blank"
            href="https://go.affiliationcloud.com/b40cf328-b1ec-11ed-9664-0050569e7c00">
              <p class="${id}__counter">2</p>
              <p class="${id}__number">1.34</p><span class=""></span>
          </a>
        </div>
    `;
  return html.trim();
};

export default subsButton;
