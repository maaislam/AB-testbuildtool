const tooltipWrapper = (id, text) => {
  const html = `
    <div class="${id}__tooltip-wrapper">
        <button class="tooltip-icon" aria-label="More info" aria-expanded="false" type="button">?</button>
        <div class="tooltip-content" role="tooltip">
            ${text}
            <svg class="tooltip-arrow" xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none"> <path d="M1.2 0L5.5 5L9.8 0" fill="white" stroke="#373A3C"></path> </svg>
        </div>
    </div>
  `;
  return html.trim();
};
export default tooltipWrapper;
