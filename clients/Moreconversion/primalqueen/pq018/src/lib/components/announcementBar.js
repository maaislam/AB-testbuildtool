const announcementBar = (ID) => {
  const html = `<div class="${ID}__announcementBar">
    <div class="${ID}__content">🎉 New Years Special Offer - Up to <span></span></div>
  </div>`;
  return html.trim();
};

export default announcementBar;
