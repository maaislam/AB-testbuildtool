import button from './button';
import checkmark from './checkmarck';
import loader from './loader';
import productRows from './productRows';

const sampleUpSell = (id, data) => {
  const varinatIds = data && data.map((item) => item.variantToUse.id);
  const addAllBtnConfig = {
    0: `${checkmark}&nbsp;&nbsp;&nbsp;Offer complete`,
    1: 'Add 1 more for FREE',
    3: 'Add all 3 samples for £1',
    2: 'Add both to complete offer'
  };
  const htmlStr = `
  <div class="${id}__sampleupsell">
        <div class="inner">
            <div class="${id}__sampleupsell--header">
                <div class="header-text">
                    <h4>Explore our samples</h4>
                    <p>Try something new with our 3 for £1 samples</p>
                </div>
                <div class="header-cta">
                    ${
                      data
                        ? button(id, addAllBtnConfig[varinatIds.length], varinatIds, 'multi-add')
                        : ''
                    }
                </div>
            </div>
            ${
              data
                ? `<div class="${id}__sampleupsell--products">${productRows(id, data)}</div>`
                : `<div class="${id}__spinner">${loader}</div>`
            }
            ${
              data && data.length > 0
                ? `<div class="${id}__sampleupsell--footer">
                        <a href="/collections/sample" class="${id}__button see-all-sample">
                            Choose different samples
                        </a>
                  </div>`
                : ''
            }
        </div>
    </div>
    <a href="javascript:history.back();" class="${id}__back-btn continue-shopping"><svg aria-hidden="true" class="icon icon-arrow-left" viewBox="0 0 16 14"><path d="m6.59 0 1.012 1.074L2.74 6.238H16v1.524H2.74l4.862 5.164L6.591 14 0 7l6.59-7z"></path></svg> Continue shopping</a>`;

  return htmlStr.trim();
};

export default sampleUpSell;
