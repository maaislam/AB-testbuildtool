const appoinmentItem = (id, data) => {
  const { icon, text, subtext, isKeyPoints } = data;

  const html = `
        <div class="${id}__appoinment-item">
            <div class="${id}__appoinment-item-header">
                <div class="${id}__icon">
                  <img src="${icon}"/>
                </div>
                <span class="${id}__text">${text}</span>
            </div>
            <div class="${id}__appoinment-item-text">
                ${subtext}
            </div>
            ${
              isKeyPoints && isKeyPoints.length
                ? `
                <ul class="${id}__appoinment-keyPoints">
                    ${isKeyPoints
                      .map((item) => {
                        return `
                                <li class="${id}__appoinment-keyPoints-item">${item}</li>
                            `;
                      })
                      .join('\n')}  
                </ul>
                `
                : ''
            }
        </div>
    `;
  return html.trim();
};

export default appoinmentItem;
