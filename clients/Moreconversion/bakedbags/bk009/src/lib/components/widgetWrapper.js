export const widgetWrapper = (widgetData) => {
  const html = `
    <div class="custom_widget_wrapper">
    ${widgetData
      .map((data) => {
        return `<div class="widget_item">
        <div class="widget_img">
        <img src="${data.img_url} alt="Widget">
        </div>
        <div class="widget_text">
        <p>
        <span class="bold_text">${data.bold_text_1}</span>
        <span class="regular">${data.regular_text}</span>
        <span class="bold_text">${data.bold_text_2}</span>
        </p>
        </div>
      
      </div>`;
      })
      .join('')}
    </div>
  
  `;
  return html.trim();
};
