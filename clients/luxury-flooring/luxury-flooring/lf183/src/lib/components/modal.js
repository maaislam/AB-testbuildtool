const modal = (id) => {
  const html = `
        <div class="${id}__modal modals-wrapper">
            <aside role="dialog"
                class="modal-popup modal-slide _inner-scroll ${id}__modalContainer"
                aria-labelledby="modal-title-0"
                aria-describedby="modal-content-0"
                data-role="modal"
                data-type="popup"
                tabindex="0"
                style="z-index: 9999;">
                <div data-role="focusable-start"
                    tabindex="0"></div>
                <div class="modal-inner-wrap"
                    data-role="focusable-scope">
                    <header class="modal-header">
                          <div class="modal-inner-description">
                                
                          </div>
                        <button class="action-close"
                                data-role="closeBtn"
                                type="button">
                            <span>Close</span>
                        </button>
                    </header>
                    <div id="modal-content-0"
                        class="modal-content"
                        data-role="content">
                        <div id="modal-content"
                            class="customer-gallery-modal">
                            <div class="modal-inner-content">
                            </div>
                        </div>
                    </div>
                    <div class="modal-inner-button">
                        
                    </div>
                </div>
                <div data-role="focusable-end"
                    tabindex="0"></div>
            </aside>
            
        </div>
    `;

  return html.trim();
};

export default modal;
