export const contactInfoStr = (ID) => {
  const html = `
        <div class="${ID}__contactInfo">
            <div class="${ID}__phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_0_883)">
                    <path d="M14.4223 11.4448L12.5173 11.2273C12.0598 11.1748 11.6098 11.3323 11.2873 11.6548L9.90729 13.0348C7.78479 11.9548 6.04479 10.2223 4.96479 8.09232L6.35229 6.70482C6.67479 6.38232 6.83229 5.93232 6.77979 5.47482L6.56229 3.58482C6.47229 2.82732 5.83479 2.25732 5.06979 2.25732H3.77229C2.92479 2.25732 2.21979 2.96232 2.27229 3.80982C2.66979 10.2148 7.79229 15.3298 14.1898 15.7273C15.0373 15.7798 15.7423 15.0748 15.7423 14.2273V12.9298C15.7498 12.1723 15.1798 11.5348 14.4223 11.4448Z" fill="#6DAFC9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_0_883">
                        <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <div class="${ID}__text">800.775.1388 | Mon-Fri 9 a.m.-4:30 p.m. EST</div>
            </div>
            <div class="${ID}__email">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_0_888)">
                    <path d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM14.25 13.5H3.75C3.3375 13.5 3 13.1625 3 12.75V6L8.205 9.255C8.6925 9.5625 9.3075 9.5625 9.795 9.255L15 6V12.75C15 13.1625 14.6625 13.5 14.25 13.5ZM9 8.25L3 4.5H15L9 8.25Z" fill="#6DAFC9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_0_888">
                        <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <div class="${ID}__text">support@goosecreekinc.com</div>
            </div>
        </div>
    `;

  return html.trim();
};
