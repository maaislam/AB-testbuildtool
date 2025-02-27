import popover from './popover';

const nav = (id) => {
  const htmlStr = `
    <nav class="nav hidden xl:block ${id}__nav">
        <ul class="flex flex-wrap gap-x-4 gap-y-1 h-7 items-center">
            <li class="${id}__item">
                <div class="flex items-center ${id}__whyProtonWrapper">
                    <button id="whyProtonBtn" class="${id}__whyProton font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                    >Why Proton VPN</button>
                    <span class="${id}__arrowIcon hover:text-purple-500">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.276453 0.650867C0.361661 0.568884 0.462188 0.504495 0.57229 0.461379C0.682393 0.418263 0.799913 0.397266 0.918134 0.399588C1.03635 0.401909 1.15296 0.427505 1.26128 0.47491C1.36961 0.522315 1.46753 0.590602 1.54945 0.675867L6.00045 5.40187L10.4515 0.675869C10.6169 0.503743 10.844 0.40441 11.0828 0.399722C11.3215 0.395034 11.5523 0.485374 11.7245 0.650869C11.8966 0.816365 11.9959 1.04346 12.0006 1.28219C12.0053 1.52093 11.9149 1.75174 11.7495 1.92387L6.64945 7.32387C6.56547 7.41128 6.46469 7.48083 6.35317 7.52834C6.24164 7.57584 6.12167 7.60033 6.00045 7.60033C5.87923 7.60033 5.75926 7.57584 5.64774 7.52834C5.53621 7.48083 5.43544 7.41128 5.35145 7.32387L0.251453 1.92387C0.16947 1.83866 0.10508 1.73813 0.0619647 1.62803C0.0188489 1.51793 -0.00214836 1.40041 0.000173359 1.28219C0.00249508 1.16397 0.0280901 1.04736 0.0754956 0.939036C0.122901 0.830711 0.191188 0.73279 0.276453 0.650867Z" fill="#372580"/>
                        </svg>
                    </span>
                </div>
                ${popover(id)}
                <div id="popoverOverlay" class="hidden ${id}__popoverOverlay"></div>
            </li>
            <li class="${id}__item ${id}__pricing">
                <a href="/pricing" 
                    class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Pricing</a>
            </li">
            <li class="${id}__item ${id}__devices">
                <a href="/devices" 
                    class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Devices</a>
            </li>
            <li class="${id}__item ${id}__locations">
                <a href="/locations" 
                    class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Locations</a>
            </li>
        </ul>
    </nav>`;

  return htmlStr;
};
export default nav;
