const formModal = (id) => {
  const html = `
        <div class="${id}__formModal">
            <div class="${id}__formModalWrapper">
                <div class="${id}__formModalWrapper-section"">
                    <div class="${id}__from"></div>
                </div>
            </div>
      </div>
    `;
  return html.trim();
};

export default formModal;
