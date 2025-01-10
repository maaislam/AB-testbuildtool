const announcementBar = (ID, VARIATION) => {
  const html = `<div class="${ID}__announcementBar">
    <div class="${ID}__content">🎉 New Years Special Offer ${
    VARIATION === '1' ? '- Up to' : ''
  } <span></span></div>
  </div>`;
  return html.trim();
};

export default announcementBar;
