import header from '../components/header';

const scanPage = (id) => {
  const currLocal = sessionStorage.getItem(`${id}__currentlocation`);

  const htmlStr = `
    ${header(id, true)}
      <div class="${id}__confirmlocation ${id}__container site">
        <div class="${id}__page-wrapper">
          <div class="${id}__confirmlocation--col1">
            <div class="${id}__confirmlocation--row1">
                <div class="${id}__confirmlocation--title">
                    <h2>
                        Are you from <br> ${currLocal} ?
                    </h2>
                </div>
                <div class="subheading">
                    <p>
                        Please confirm your location. We will use this data to scan people-search sites to find those that
                        expose your personal information.
                    </p>
                </div>
                <div class="button-row">
                    <button class="${id}__pill-button ${id}__brand-yellow" data-btn="local-correct">
                        Yes
                    </button>
                    <button class="${id}__pill-button ${id}__brand-white" data-btn="local-incorrect">
                        No
                    </button>
                </div>
            </div>
            <div class="${id}__confirmlocation--row2 ${id}__hide">
              <div class="${id}__confirmlocation--title">
                  <h2>
                      Please provide your location
                  </h2>
              </div>
              <div class="subheading">
                  <p>
                      We will use this data to scan people-search sites to find those that <br />
                      expose your personal information.
                  </p>
              </div>
              <div class="getlocation-form">
                <form autocomplete="off"
                      class="${id}__getlocal--form">
                    <span>
                        <input name="getlocal"
                              required
                              type="text"
                              list="${id}__searchsuggestions"
                              class="${id}__getlocal--input common-input not-colored"
                              id="${id}__getlocal--input">
                        <label for="${id}__getlocal--input">
                            City, State
                        </label>
                    </span>
                    <input type="submit"
                          value="Submit"
                          class="${id}__getlocal--submit common-submit">
                </form>
              </div>
            </div>
          </div>

          <div class="${id}__confirmlocation--col2">
            <div class="exposed-indivivualrecords">
                <h3>
                    55
                </h3>
                <p>
                    records about one individual <br> are found and removed within <br> the first month, on average
                </p>
            </div>
            <div class="exposed-overallrecords">
                <h3>
                    2,389
                </h3>
                <p>
                    exposed personal records <br> about one individual are found <br> and removed over two years
                </p>
            </div>
          </div>
        </div>
      </div>`;

  return htmlStr.trim();
};
//window.feDm11ScanPage = scanPage;
export default scanPage;
