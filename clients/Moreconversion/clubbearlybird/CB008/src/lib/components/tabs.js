const tabs = (id) => {
  const html = `
      <div class="zpa-tabs-element zp ea-4456098 ${id}__tabs"
     data-id="4456098"
     data-zp-init="true">
    <div class="zpa-tabs-element-switcher zpa-offset-bottom-sm zpa-tabs-element-switcher--underlined zp ewa-4456098">
        <button type="button"
                class="${id}__button zpa-btn-custom zpa-tabs-element-switcher__item zpa-tabs-element-switcher__item--active"
                data-tab-switcher="4456099" data-key="description"> Description </button> <button type="button"
                class="${id}__button zpa-btn-custom zpa-tabs-element-switcher__item"
                data-tab-switcher="4456103" data-key="ingredients"> Ingredients </button> <button type="button"
                class="${id}__button zpa-btn-custom zpa-tabs-element-switcher__item"
                data-tab-switcher="4456101" data-key="flavors"> Flavors </button>
    </div>
    <div class="flex-row">
        <div class="zpa-flex--column zpa-flex xs-12 sm-12 lg-12 md-12">
            <div class="zp ca-3673309 zpa-column-content">
                <div class="${id}__description ${id}__info zpa-tabs-element__tab zpa-tabs-element__tab--opened"
                     data-tab="4456099">
                    <div class="zpa-flex--column zpa-flex xs-12 sm-12 lg-12 md-12">
                        <div class="zp ca-3673310 zpa-column-content">
                             <div class="pack-info">
                                <h3 class="pack-title">EarlyBird Morning Cocktail:</h3>
                                <ul class="pack-list">
                                    <li>Free Cocktail Shaker</li>
                                    <li>Free E-book</li>
                                    <li>Free Shipping</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="${id}__ingredients ${id}__info flex-row zpa-tabs-element__tab"
                     data-tab="4456103">
                    <div class="zpa-flex--column zpa-flex xs-12 sm-12 lg-12 md-12">
                        <div class="zp ca-3673312 zpa-column-content">
                            <div class="zpa-position--relative zp mcwa-4456179 zpa-el-image">
                                <div class="zp zpa-image-container mca-4456179"
                                     data-id="4456179"> <img
                                         src="https://cdn05.zipify.com/jHVdN-c9swYDN-3vwqKTgb3reaE=/fit-in/3840x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png"
                                         sizes="3840px,2048px,1940px,1680px,1536px,1376px,1080px,840px,540px"
                                         srcset="https://cdn05.zipify.com/WnmFLId-wJ1yH7Eo2wegxmrDW5o=/fit-in/540x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png 540w, https://cdn05.zipify.com/Z3kVeQhkWtklVf7Nx4aaxz1Jvog=/fit-in/840x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png 840w, https://cdn05.zipify.com/YOZdwKoxjCzd7cPHVUfBzTvXcsM=/fit-in/1080x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png 1080w, https://cdn05.zipify.com/YaVtkhZj6gtPxVZrcRZX5sQ6pQU=/fit-in/1376x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png 1376w, https://cdn05.zipify.com/o7wJNMvvEj50eDThigHxIgO0hDc=/fit-in/1536x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png 1536w, https://cdn05.zipify.com/Gqt7kt6zszSkSm3MXYtXy6YUanI=/fit-in/1680x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png 1680w, https://cdn05.zipify.com/1t5LDv-vqW0pSfuP-28jTFCrK5c=/fit-in/1940x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png 1940w, https://cdn05.zipify.com/jPyT4S-SvH02C0whoe1w6Smd0lg=/fit-in/2048x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png 2048w, https://cdn05.zipify.com/jHVdN-c9swYDN-3vwqKTgb3reaE=/fit-in/3840x0/b63dc61e984f4e6fb18bfccc52b3517f/bom_newsupp-01-1.png 3840w"
                                         width="1080"
                                         height="1080"
                                         class="zpa-img-fluid zp eswb-4456179 ea-4456179"> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="${id}__flavors ${id}__info flex-row zpa-tabs-element__tab"
                     data-tab="4456101">
                    <div class="zpa-flex--column zpa-flex xs-12 sm-12 lg-12 md-12">
                        <div class="zp ca-3673311 zpa-column-content">
                            <div class="pack-info">
                                <h3 class="pack-title">Flavors info</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    `;
  return html.trim();
};

export default tabs;
