const filterFooter = (id) => {
  const htmlStr = `
    <div class="${id}__filterfooter">
        <div class="mobile-friendly">
            <label for="${id}__mobile-friendly">
                <input type="checkbox" id="${id}__mobile-friendly" name="${id}__mobile-friendly" data-filter="mobFriendly">
                <span class="checkmark"></span>
                <span class="input-text">Mobile friendly</span>
            </label>
        </div>
        <div class="${id}__clearall">
            <span>Clear all</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5267 0.293171C14.9128 0.684066 14.9128 1.31783 14.5267 1.70873L1.6878 14.7068C1.30169 15.0977 0.675689 15.0977 0.289581 14.7068C-0.0965271 14.3159 -0.0965267 13.6822 0.289581 13.2913L13.1285 0.293171C13.5146 -0.0977237 14.1406 -0.0977237 14.5267 0.293171Z" fill="#6B7280"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7104 14.7068C14.3243 15.0977 13.6983 15.0977 13.3122 14.7068L0.473265 1.70873C0.0871574 1.31783 0.0871571 0.684068 0.473265 0.293173C0.859373 -0.0977217 1.48538 -0.0977213 1.87149 0.293173L14.7104 13.2913C15.0965 13.6822 15.0965 14.3159 14.7104 14.7068Z" fill="#6B7280"/>
                </svg>
            </span>
        </div>
        <div class="${id}__filtersubmit button link-out">
            SHOW GAMES
        </div>
    </div>`;

  return htmlStr;
};

export default filterFooter;
