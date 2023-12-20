export const progressBar = (ID) => {
  const html = `
    <div class="${ID}__progress-wrapper">
      <div class="progress-bar-width" data-progress-bar-percent="100">
        <span>$60 away from FREE Shipping</span>
      </div>
      <div class="progress-bar-anim"></div>
    </div>
    `;

  return html.trim();
};
