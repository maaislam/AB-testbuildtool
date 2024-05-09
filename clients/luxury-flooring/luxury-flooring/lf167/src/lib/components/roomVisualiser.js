export const roomVisualiser = (ID) => {
  const html = `
        <div class="${ID}__room-visualiser">
            <div class="${ID}__room-visualiser-box">
                <div class="${ID}__room-visualiser-box-icon">
                  <img src="https://luxury-flooring.s3.amazonaws.com/large-icon_roomvisualiser.png"/>
                </div>
            </div>
            
        </div>
    `;
  return html.trim();
};
