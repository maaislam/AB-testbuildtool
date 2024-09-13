const notification = () => {
  const htmlStr = `
        <div id="notification" class="notification hidden">
            <span id="notification-message"></span>
            <button id="notification-close-btn" class="notification-close-btn">&times;</button>
        </div>`;

  return htmlStr;
};

export default notification;
