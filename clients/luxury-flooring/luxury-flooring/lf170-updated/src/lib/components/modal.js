const modal = (id) => {
  const html = `
    <div class="${id}__modal hide_content">
        <div class="bg-overlay"></div>
        <div class="overlay-contents">  
                <div class="search-header">Got something in mind?</div>
                <div class="search_content">
                    <div class="header-usps-search"></div>  
                    <div class="custom_cross_wrapper-mobile">
                        <svg class="custom_cross_btn" xmlns="http://www.w3.org/2000/svg" width="13.6" height="13.6" viewBox="0 0 13.6 13.6">
                          <path id="Path_7" data-name="Path 7" d="M14.8,2,14,1.2l-6,6-6-6L1.2,2l6,6-6,6,.8.8L8,8.9l6,5.9.8-.8L8.9,8Z" transform="translate(-1.2 -1.2)"></path>
                        </svg>
                    </div> 
                </div>                
        </div>
        <div class="custom_cross_wrapper">
            <svg class="custom_cross_btn" xmlns="http://www.w3.org/2000/svg" width="13.6" height="13.6" viewBox="0 0 13.6 13.6">
              <path id="Path_7" data-name="Path 7" d="M14.8,2,14,1.2l-6,6-6-6L1.2,2l6,6-6,6,.8.8L8,8.9l6,5.9.8-.8L8.9,8Z" transform="translate(-1.2 -1.2)"></path>
            </svg>
        </div> 
    </div>
    `;
  return html;
};

export default modal;
