const cardClose = (id) => {
  const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 10 10" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.39776 0.99313C2.00524 0.682304 1.4334 0.708206 1.07077 1.07084C0.680241 1.46136 0.680241 2.09453 1.07077 2.48505L3.89919 5.31348L1.07077 8.1419L0.993059 8.22912C0.682234 8.62164 0.708136 9.19349 1.07077 9.55612C1.46129 9.94664 2.09445 9.94664 2.48498 9.55612L5.31341 6.72769L8.14183 9.55612L8.22905 9.63382C8.62157 9.94465 9.19342 9.91875 9.55605 9.55612C9.94657 9.16559 9.94657 8.53243 9.55605 8.1419L6.72762 5.31348L9.55605 2.48505L9.63375 2.39783C9.94458 2.00531 9.91868 1.43347 9.55605 1.07084C9.16552 0.680312 8.53236 0.680311 8.14183 1.07084L5.31341 3.89926L2.48498 1.07084L2.39776 0.99313Z" fill="white"/>
                    </svg>`;
  const htmlStr = `
    <span class="close-icon">${closeIcon}</span>
    <div class="${id}__cardclose">
        <div class="text">Bestsellers</div>
    </div>
    `;

  return htmlStr.trim();
};

export default cardClose;
