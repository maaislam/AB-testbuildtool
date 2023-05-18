import operatorLogo from './operatorLogo';

const bookmakerCard = (id, data) => {
  const { link, gaLabel, title } = data;
  const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" viewBox="0 0 6 13" fill="none">
    <path d="M1 1.5498L4.89793 5.88084C5.24021 6.26114 5.24021 6.83846 4.89793 7.21877L1 11.5498" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;

  const htmlStr = `
        <div 
        class="${id}__bookmakercard ${id}__bonus-intent">
            ${operatorLogo(id, data)}       
            <a href="${link}" target="_blank" data-ga-label="${gaLabel}"  class="${id}__bookmakercard-btnrow bb-title">
                <div class="operator-name" >${gaLabel}</div>
                <div class="operator-subtitle" >${title}</div>
                <div class="${id}__bluebtn"><span>Hämta bonus</span> ${arrowSvg}</div>
            </a>
        </div>`;

  return htmlStr.trim();
};

export default bookmakerCard;
