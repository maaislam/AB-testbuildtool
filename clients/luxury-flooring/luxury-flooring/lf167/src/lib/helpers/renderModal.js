const renderModal = (ID) => {
    //render modal
    const modal = document.createElement('div');
    modal.id = `${ID}__modal`;

    modal.innerHTML = `
      <div id="${ID}__overlay" class="${ID}__overlay ${ID}__hide"></div>
      <div id="${ID}__modal" class="${ID}__modal ${ID}__hide">
          <div class="${ID}__modal-content">
            <div class="modal-details">
                <div class="${ID}__close">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill="none">
                        <line y1="-1"
                            x2="13.6614"
                            y2="-1"
                            transform="matrix(-0.68132 0.731986 -0.792628 -0.609706 9.30786 0)"
                            stroke="#1F1F1F"
                            stroke-width="2" />
                        <line y1="-1"
                            x2="13.6615"
                            y2="-1"
                            transform="matrix(-0.681367 -0.731942 0.79259 -0.609755 11.0009 9.99945)"
                            stroke="#1F1F1F"
                            stroke-width="2" />
                    </svg>
                </div>
                <div class="${ID}__title">Calculator coming soon</div>
            
          </div>
      </div>`;
    //modal overlay
    const overlay = document.createElement('div');
    overlay.id = `${ID}__overlay`;
    overlay.classList.add('modal-overlay');

    document.body.appendChild(modal);
};
export default renderModal;
