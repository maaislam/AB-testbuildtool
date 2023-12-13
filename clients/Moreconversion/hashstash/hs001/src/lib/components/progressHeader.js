export const progressHeader = (ID) => {
  const html = `
    <div class="${ID}__progressHeader">
    <div class="group-item">420 Days Guarantee</div>
    <div class="group-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
        <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
      </svg>
    </div>
    <div class="group-item">30 Days Money Back</div>
    <div class="group-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
        <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
      </svg>
    </div>
    <div class="group-item">Free Shipping</div>
  </div>
  
    `;

  return html.trim();
};
