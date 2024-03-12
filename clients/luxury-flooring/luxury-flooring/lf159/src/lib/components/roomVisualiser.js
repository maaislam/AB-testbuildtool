export const roomVisualiser = (ID) => {
  const html = `
        <div class="${ID}__room-visualiser">
            <div class="${ID}__room-visualiser-box">
                <div class="${ID}__room-visualiser-box-text">See it in your room</div>
                <div class="${ID}__room-visualiser-box-icon"></div>
            </div>
            
        </div>
    `;
  return html.trim();
};
