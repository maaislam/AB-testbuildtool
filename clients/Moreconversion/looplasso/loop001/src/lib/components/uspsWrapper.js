const uspsWrapper = (id, data) => {
  const html = `
    <div class="${id}__uspsWrapper icon-lists-product extrafecuterline">
        ${data
          .map((item) => {
            return `
                <div class="first-lists-product">
                    <div class="icon-list-inimage">
                        ${item.icon}
                    </div>
                    <div class="icon-list-text">
                        <p>${item.text}</p>
                    </div>
                </div>
            `;
          })
          .join('\n')}
        
    </div>
  
  `;
  return html.trim();
};

export default uspsWrapper;
