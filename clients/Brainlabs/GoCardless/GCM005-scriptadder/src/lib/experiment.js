import { pollerLite } from '../../../../../../globalUtil/util';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  const addJsToPage = (src, id, cb, classes) => {
    if (document.querySelector(`#${id}`)) {
      return;
    }

    const s = document.createElement('script');
    if (typeof cb === 'function') {
      s.onload = cb;
    }

    if (classes) {
      s.className = classes;
    }

    s.src = src;
    s.setAttribute('id', id);
    document.body.insertAdjacentElement('beforeend', s);
  };

  const iframeResizer =
    'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.1/iframeResizer.min.js';

  const chilipiper = 'https://js.chilipiper.com/marketing.js';
  addJsToPage(iframeResizer, `${ID}__iframeResizer`);
  addJsToPage(chilipiper, `${ID}__chilipiper`);

  pollerLite(
    [() => typeof window.iFrameResize === 'function', () => typeof window.ChiliPiper === 'object'],
    () => {
      let leadObj = null;
      window.iFrameResize({
        log: false,
        onMessage({ message }) {
          if (message.message === 'PARDOT_DATA_READY' && message.data) {
            leadObj = message.data;
            return;
          }
          if (
            message.message === 'PARDOT_FORM_SUCCESS' &&
            leadObj &&
            leadObj.CPTenantDomain &&
            leadObj.CPTenantRouter &&
            window.ChiliPiper
          ) {
            window.ChiliPiper.submit(leadObj.CPTenantDomain, leadObj.CPTenantRouter, {
              map: true,
              lead: leadObj
            });
          }
        }
      });
    }
  );
};
