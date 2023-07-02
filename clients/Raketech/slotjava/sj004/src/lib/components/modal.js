const modal = (id, modalContent) => {
  const htmlStr = `
    
    <div id="${id}__modal" class="${id}__modal hide_content">

        <div class="modal-content">
            ${modalContent}
        </div>
  
    </div>`;

  return htmlStr;
};

export default modal;
