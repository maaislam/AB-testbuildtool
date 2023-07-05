import modalListItem from './modalListItem';

const modalContents = (id, modalItems) => {
  const htmlStr = `    
    <div class="${id}__topcasinos">
        <div class="${id}__topcasinos-header">
            <div class="header-flag"><img class="game__casino-list-header-flag" id="casino_flag" loading="lazy" src="https://img.slotjava.it/wp-content/themes/sumpan-21/dist/img/flags/svg/square/it.svg" alt="Flag"></div>
            <div class="header-headline">
            <p>DOVE GIOCARE A </p>
            </div>
            <div class="header-close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="#777">
                <path d="M12 4.5L4 12.5" stroke="#777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 4.5L12 12.5" stroke="#777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
        </div>
        <div class="${id}__topcasinos-list">    
            ${modalItems.map((item) => modalListItem(id, item)).join('\n')} 
        </div>
        <div class="${id}__topcasinos-footer">
            <div class="footer-button">CHIUDI</div>
        </div>
    </div>
  `;
  return htmlStr;
};
export default modalContents;
