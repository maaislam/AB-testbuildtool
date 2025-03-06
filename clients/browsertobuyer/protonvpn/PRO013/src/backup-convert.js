if (typeof (btbTestTracking) != "undefined" && btbTestTracking.running) { btbTestTracking.running.pro013 = "v1"; }

(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var shared = {
	    ID: "PRO013",
	    VARIATION: "1",
	    CLIENT: "browsertobuyer",
	    SITE: "protonvpn"
	  };
	var shared$1 = getDefaultExportFromCjs(shared);

	const setup = () => {
	  const { ID, VARIATION } = shared$1;
	  document.documentElement.classList.add(ID);
	  document.documentElement.classList.add(`${ID}-${VARIATION}`);
	};

	const popover = (id) => {
	    const htmlStr = `
      <div id="whyProtonPopOver" class="${id}__popOver hidden">
          <ul>
              <li>
                  <a class="${id}__whyVpnLink block p-4 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <div class="${id}__vpnText font-semibold">Why do I need a VPN?</div>
                      <p class="text-sm text-body">Find out how a VPN can help you</p>
                  </a>
              </li>
              <li>
                  <a class="${id}__featuresLink block p-4 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <div class="${id}__vpnText font-semibold">All Features</div>
                      <p class="text-sm text-body">Learn how our advanced security and privacy features allow you to browse the web with peace of mind</p>
                  </a>
              </li>
              <li>
                  <a class="${id}__streamingLink block p-4 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <div class="${id}__vpnText font-semibold">VPN for Streaming</div>
                      <p class="text-sm text-body">Watch what you want, when you want, from wherever you want with Proton VPN</p>
                  </a>
              </li>
              <li>
                  <a class="${id}__whyProtonVpnLink block p-4 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <div class="${id}__vpnText font-semibold">Why Proton VPN</div>
                      <p class="text-sm text-body">See how we compare with other VPN providers</p>
                  </a>
              </li>
          </ul>
      </div>`;
	    return htmlStr;
	};

	const nav = (id) => {
	  const htmlStr = `
    <nav class="nav hidden xl:block ${id}__nav">
        <ul class="flex flex-wrap gap-x-4 gap-y-1 h-7 items-center">
            <li class="${id}__item">
                <div class="flex items-center ${id}__whyProtonWrapper">
                    <div id="whyProtonBtn" class="${id}__whyProton font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                    >Why Proton VPN
                    </div>
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
                <a href="#pricing" class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Pricing</a>
            </li">
            <li class="${id}__item ${id}__devices">
                <a class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Devices</a>
            </li>
            <li class="${id}__item ${id}__locations">
                <a class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Locations</a>
            </li>
        </ul>
    </nav>`;
	  return htmlStr;
	};

	const protonLogo = () => {
	    const htmlStr = `
    <div class="flex h-7 flex-none xl:w-40">
        <div class="inline-flex flex-row items-center justify-between w-auto h-full"
            style="aspect-ratio:171.45749999999998/36">
            <picture class="inline-flex w-auto h-full">
                <source sizes="(min-width: 36px) 36px, 100vw"
                    srcset="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ficons%2Fvpn_f9embt.svg"
                    height="36" width="36"><img
                    src="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ficons%2Fvpn_f9embt.svg"
                    alt="" loading="eager" decoding="async" class="inline-flex w-auto h-full opacity-100">
            </picture>
            <div class="relative top-[10%] flex h-[62%] justify-center">
                <div class="inline-flex flex-row justify-between h-full w-auto"
                    style="aspect-ratio:177/32;gap:5.649717514124294%">
                    <picture class="w-auto h-full">
                        <source sizes="(min-width: 98px) 98px, 100vw"
                            srcset="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg"
                            height="32" width="98"><img
                            src="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg"
                            alt="Proton" loading="eager" decoding="async" class="w-auto h-full opacity-100">
                    </picture>
                    <picture class="w-auto h-full">
                        <source sizes="(min-width: 69px) 69px, 100vw"
                            srcset="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fvpn-purple_afexu9.svg"
                            height="32" width="69"><img
                            src="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fvpn-purple_afexu9.svg"
                            alt="VPN" loading="eager" decoding="async" class="w-auto h-full opacity-100">
                    </picture>
                </div>
            </div>
        </div>
    </div>
    `;
	    return htmlStr;
	};

	const sideBarMenu = (id) => {
	    const htmlStr = `
      <div class="${id}__sideBarMenuOverlay hidden fixed inset-0 z-menu bg-gray-900 opacity-50" aria-hidden="true"></div>
      <div class="${id}__sideBarMenu fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-md flex-col bg-white transform translate-x-full transition-transform duration-300 ease-in-out">
          <div class="flex h-12 items-center justify-between border-b border-gray-200 px-4">
              <a href="/" aria-current="page" class="flex h-7 flex-none">
                  <div class="inline-flex flex-row items-center justify-between w-auto h-full"
                      style="aspect-ratio: 171.457 / 36;">
                      <picture class="inline-flex w-auto h-full">
                          <source sizes="(min-width: 36px) 36px, 100vw"
                              srcset="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ficons%2Fvpn_f9embt.svg"
                              height="36" width="36" />
                          <img alt="Proton VPN" loading="eager" decoding="async"
                              class="inline-flex w-auto h-full opacity-100"
                              src="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ficons%2Fvpn_f9embt.svg" />
                      </picture>
                      <div class="relative top-[10%] flex h-[62%] justify-center">
                          <div class="inline-flex flex-row justify-between h-full w-auto"
                              style="aspect-ratio: 177 / 32; gap: 5.64972%; ">
                              <picture class="w-auto h-full">
                                  <source sizes="(min-width: 98px) 98px, 100vw"
                                      srcset="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg"
                                      height="32" width="98" />
                                  <img alt="Proton" loading="eager" decoding="async" class="w-auto h-full opacity-100"
                                      src="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg" />
                              </picture>
                              <picture class="w-auto h-full">
                                  <source sizes="(min-width: 69px) 69px, 100vw"
                                      srcset="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fvpn-purple_afexu9.svg"
                                      height="32" width="69" />
                                  <img alt="VPN" loading="eager" decoding="async" class="w-auto h-full opacity-100"
                                      src="https://vpncdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fvpn-purple_afexu9.svg" />
                              </picture>
                          </div>
                      </div>
                  </div>
              </a>
              <button id="closeSidebarBtn" class="${id}__closeSidebarBtn" type="button"
                  class="block text-gray-900 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                  <span class="sr-only">Close menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-7 w-7">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                  </svg>
              </button>
          </div>
          <nav class="relative flex h-full flex-grow flex-col overflow-y-auto overflow-x-hidden">
              <ul class="flex h-full flex-grow flex-col gap-2 overflow-y-auto overflow-x-hidden pe-4 ps-8 ${id}__mobileMenu">
                  <li class="${id}__mobileMenuItem">
                      <button class="${id}__whyProtonBtn w-full font-semibold text-left flex items-center justify-between text-lg text-purple-800 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                          <span>Why Proton VPN</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                          </svg>
                      </button>
                  </li>
                  <li class="${id}__mobileMenuItem ${id}__pricing">
                      <a href="#pricing" class="w-full font-semibold text-left flex items-center justify-between text-lg text-purple-800 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                          Pricing
                      </a>
                  </li>
                  <li class="${id}__mobileMenuItem ${id}__devices">
                      <a class="w-full font-semibold text-left flex items-center justify-between text-lg text-purple-800 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                          Devices
                      </a>
                  </li>
                  <li class="${id}__mobileMenuItem ${id}__locations">
                      <a class="w-full font-semibold text-left flex items-center justify-between text-lg text-purple-800 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                          Locations
                      </a>
                  </li>
              </ul>
          </nav>
          <!-- Submenu for Why Proton VPN -->
          <div id="whyProtonSubMenu" class="fixed bottom-0 right-0 top-0 z-50 block w-full max-w-md bg-white transform translate-x-full transition-transform duration-300 ease-in-out">
              <div class="flex h-12 items-center px-4 ${id}__backBtnWrapper">
                  <button id="closeWhyProtonSubMenu" type="button" class="flex items-center text-purple-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M8.5 16.5L1 9M1 9L8.5 1.5M1 9H19" stroke="#372580" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="${id}__backText text-lg font-semibold">Back / <span>Why Proton VPN</span></span>
                  </button>
              </div>
              <nav class="space-y-4 ${id}__mobileNav">
                  <a class="${id}__mobileNavItem ${id}__whyVpnLink block pl-4 pr-4 pt-5 pb-5 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <h2 class="text-lg font-semibold text-gray-900">Why do I need a VPN?</h2>
                      <p class="text-gray-600 text-sm">Find out how a VPN can help you</p>
                  </a>
                  <a class="${id}__mobileNavItem ${id}__featuresLink block pl-4 pr-4 pt-5 pb-5 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25" >
                      <h2 class="text-lg font-semibold text-gray-900">All Features</h2>
                      <p class="text-gray-600 text-sm">Learn how our advanced security and privacy features allow you to browse the web with peace of mind</p>
                  </a>
                   <a class="${id}__mobileNavItem ${id}__streamingLink block pl-4 pr-4 pt-5 pb-5 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <h2 class="text-lg font-semibold text-gray-900">VPN for Streaming</h2>
                      <p class="text-gray-600 text-sm">Watch what you want, when you want, from wherever you want with Proton VPN</p>
                  </a>
                   <a class="${id}__mobileNavItem ${id}__whyProtonVpnLink block pl-4 pr-4 pt-5 pb-5 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <h2 class="text-lg font-semibold text-gray-900">Why Proton VPN</h2>
                      <p class="text-gray-600 text-sm">See how we compare with other VPN providers</p>
                  </a>
              </nav>
          </div>
      </div>
      `;
	    return htmlStr;
	};

	const header = (id) => {
	    const htmlStr = `<div class="header ${id}__header">
        <div class="container flex h-12 items-center gap-5 duration-150 ease-linear md:h-16 xl:gap-8">
            <div class="flex flex-grow justify-between xl:justify-start">
                ${protonLogo()}
                ${nav(id)}
                <button data-testid="hamburger-menu" type="button" class="${id}__hamburgerBtn block xl:hidden text-gray-900 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                    <span class="sr-only">Open menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-7 w-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button>
            </div>
        </div>
        ${sideBarMenu(id)}
    </div>`;
	    return htmlStr;
	};

	const scrollToSection = (selector, offsetValue = 90) => {
	    const element = document.querySelector(selector);
	    if (element) {
	        const offset = offsetValue;
	        const elementTop = element.getBoundingClientRect().top + window.scrollY;
	        window.scrollTo({
	            top: elementTop - offset, behavior: 'smooth'
	        });
	    }
	};

	const { ID: ID$1 } = shared$1;
	const pollerLite = (conditions, callback, maxTime = 10000) => {
	  const POLLING_INTERVAL = 25;
	  const startTime = Date.now();
	  const interval = setInterval(() => {
	    const allConditionsMet = conditions.every((condition) => {
	      if (typeof condition === 'function') {
	        return condition();
	      }
	      return !!document.querySelector(condition);
	    });
	    if (allConditionsMet) {
	      clearInterval(interval);
	      callback();
	    } else if (Date.now() - startTime >= maxTime) {
	      clearInterval(interval);
	      console.error('Polling exceeded maximum time limit');
	    }
	  }, POLLING_INTERVAL);
	};
	const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
	  const target = document.querySelector(`${targetSelectorString}`);
	  if (!target) return;
	  const config = configObject || {
	    childList: true,
	    subtree: true,
	    attributes: true,
	    characterData: true,
	    characterDataOldValue: true
	  };
	  const observer = new MutationObserver((mutations) => {
	    mutations.forEach((mutation) => {
	      observer.disconnect();
	      callbackFunction(mutation);
	      observer.observe(target, config);
	    });
	  });
	  observer.observe(target, config);
	};
	const openSidebar = () => {
	  const sidebarMenu = document.querySelector(`.${ID$1}__sideBarMenu`);
	  const sidebarOverlay = document.querySelector(`.${ID$1}__sideBarMenuOverlay`);
	  document.documentElement.style.overflow = 'hidden';
	  sidebarMenu.classList.remove('translate-x-full');
	  sidebarMenu.classList.add('translate-x-0');
	  sidebarOverlay.classList.remove('hidden', 'opacity-0');
	  sidebarOverlay.classList.add('opacity-50');
	};
	const closeSidebar = () => {
	  const sidebarMenu = document.querySelector(`.${ID$1}__sideBarMenu`);
	  const sidebarOverlay = document.querySelector(`.${ID$1}__sideBarMenuOverlay`);
	  document.documentElement.style.overflow = 'auto';
	  sidebarMenu.classList.remove('translate-x-0');
	  sidebarMenu.classList.add('translate-x-full');
	  sidebarOverlay.classList.add('opacity-0');
	  setTimeout(() => sidebarOverlay.classList.add('hidden'), 300);
	};
	const openSubMenu = () => {
	  const subMenu = document.getElementById('whyProtonSubMenu');
	  subMenu.classList.remove('translate-x-full');
	  subMenu.classList.add('translate-x-0');
	};
	const closeSubMenu = () => {
	  const subMenu = document.getElementById('whyProtonSubMenu');
	  subMenu.classList.add('translate-x-full');
	};

	const closePopover = (id) => {
	    const popover = document.getElementById('whyProtonPopOver');
	    const overlay = document.getElementById('popoverOverlay');
	    const protonBtnElem = document.querySelector(`.${id}__whyProtonWrapper`);
	    protonBtnElem.classList.remove(`${id}__whyProtonBtnActive`);
	    popover.classList.add('hidden');
	    overlay.classList.add('hidden');
	};
	const clickHandler = (id, target) => {
	    if (target.closest(`.${id}__whyProtonWrapper`)) {
	        const clickedBtn = target.closest(`.${id}__whyProtonWrapper`);
	        const popover = document.getElementById('whyProtonPopOver');
	        const overlay = document.getElementById('popoverOverlay');
	        const isHidden = popover.classList.contains('hidden');
	        clickedBtn.classList.add(`${id}__whyProtonBtnActive`);
	        overlay.classList.toggle('hidden', !isHidden);
	        popover.classList.toggle('hidden');
	    } else if (target.closest('#popoverOverlay')) {
	        closePopover(id);
	    } else if (target.closest(`.${id}__hamburgerBtn`)) {
	        window._conv_q.push(['triggerConversion', '100486511']);
	        openSidebar();
	    } else if (target.closest(`.${id}__closeSidebarBtn`) || target.closest(`.${id}__sideBarMenuOverlay`)) {
	        closeSidebar();
	    } else if (target.closest(`.${id}__whyProtonBtn`)) {
	        openSubMenu();
	    } else if (target.closest('#closeWhyProtonSubMenu')) {
	        closeSubMenu();
	    } else if (
	        target.closest(`.${id}__defaultDropdownWrapper`) &&
	        target.closest(`.${id}__selectedCountryDropdown:not(.${id}__open)`)
	    ) {
	        const clickedItem = target.closest(`.${id}__defaultDropdownWrapper`);
	        const dropdownWrapper = clickedItem.closest(`.${id}__selectedCountryDropdown`);
	        const mainWrapper = dropdownWrapper.closest(`.${id}__vpnLocationsWrapper`);
	        const countryWrapper = mainWrapper.querySelector(`.${id}__countriesWrapper`);
	        dropdownWrapper.classList.add(`${id}__open`);
	        countryWrapper.classList.remove(`${id}__close`);
	    } else if (
	        target.closest(`.${id}__defaultDropdownWrapper`) &&
	        target.closest(`.${id}__selectedCountryDropdown.${id}__open`)
	    ) {
	        const clickedItem = target.closest(`.${id}__defaultDropdownWrapper`);
	        const dropdownWrapper = clickedItem.closest(`.${id}__selectedCountryDropdown`);
	        const mainWrapper = dropdownWrapper.closest(`.${id}__vpnLocationsWrapper`);
	        const countryWrapper = mainWrapper.querySelector(`.${id}__countriesWrapper`);
	        dropdownWrapper.classList.remove(`${id}__open`);
	        countryWrapper.classList.add(`${id}__close`);
	    } else if (target.closest(`.${id}__countryItem`)) {
	        const clickedItem = target.closest(`.${id}__countryItem`);
	        const allCountryItems = document.querySelectorAll(`.${id}__countryItem`);
	        const dropdownWrapper = document.querySelector(`.${id}__selectedCountryDropdown`);
	        const mainWrapper = dropdownWrapper.closest(`.${id}__vpnLocationsWrapper`);
	        const countryWrapper = mainWrapper.querySelector(`.${id}__countriesWrapper`);
	        const selectedCountry = mainWrapper.querySelector(`.${id}__selectedCountryDropdown .${id}__text`);
	        const searchIconElem = mainWrapper.querySelector(`.${id}__selectedCountryDropdown .${id}__searchIcon`);
	        const selectedFlag = mainWrapper.querySelector(`.${id}__selectedCountryDropdown .${id}__flagIcon`);
	        const countryName = clickedItem.getAttribute('data-name');
	        const flag = clickedItem.getAttribute('data-flag');
	        selectedCountry.textContent = countryName;
	        searchIconElem.innerHTML = '';
	        selectedFlag.innerHTML = `<img src="${flag}"/>`;
	        allCountryItems.forEach((item) => item.classList.remove(`${id}__active`));
	        dropdownWrapper.classList.remove(`${id}__open`);
	        clickedItem.classList.add(`${id}__active`);
	        dropdownWrapper.classList.add(`${id}__countrySelected`);
	        countryWrapper.classList.add(`${id}__close`);
	    } else if (target.closest(`.${id}__devices`)) {
	        window._conv_q.push(['triggerConversion', '100486504']);
	        closePopover(id);
	        closeSidebar();
	        scrollToSection('[src*="available_for_all_your_devices"]', 300);
	    } else if (target.closest(`.${id}__locations`)) {
	        window._conv_q.push(['triggerConversion', '100486505']);
	        closePopover(id);
	        closeSidebar();
	        scrollToSection(`.${id}__vpnLocationsWrapper`, 400);
	    } else if (target.closest(`.${id}__pricing`)) {
	        window._conv_q.push(['triggerConversion', '100486506']);
	        closePopover(id);
	        closeSidebar();
	    } else if (target.closest(`.${id}__whyVpnLink`)) {
	        window._conv_q.push(['triggerConversion', '100486507']);
	        const faqBtn = document.querySelector('[data-testid="faq-section"] button');
	        const isFaqBtnClosed = faqBtn.getAttribute('aria-expanded') === 'false';
	        closePopover(id);
	        closeSidebar();
	        if (isFaqBtnClosed) faqBtn.click();
	        scrollToSection('[data-testid="faq-section"]');
	    } else if (target.closest(`.${id}__featuresLink`)) {
	        window._conv_q.push(['triggerConversion', '100486508']);
	        closePopover(id);
	        closeSidebar();
	        scrollToSection('.bg-white.text-purple-800[data-testid="grid-section"]', 200);
	    } else if (target.closest(`.${id}__streamingLink`)) {
	        window._conv_q.push(['triggerConversion', '100486510']);
	        closePopover(id);
	        closeSidebar();
	        scrollToSection('[src*="protect_yourself_online"]', 400);
	    } else if (target.closest(`.${id}__whyProtonVpnLink`)) {
	        window._conv_q.push(['triggerConversion', '100486509']);
	        closePopover(id);
	        closeSidebar();
	        scrollToSection('.new-comparison-table', 250);
	    }
	};

	const countryData = [
	{
		"name": "Afghanistan",
		"flag": "https://protonvpn.com/images/flags/af.svg",
		"servers": 2,
		"cities": 1
	},
	{
		"name": "Albania",
		"flag": "https://protonvpn.com/images/flags/al.svg",
		"servers": 15,
		"cities": 1
	},
	{
		"name": "Algeria",
		"flag": "https://protonvpn.com/images/flags/dz.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Angola",
		"flag": "https://protonvpn.com/images/flags/ao.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Argentina",
		"flag": "https://protonvpn.com/images/flags/ar.svg",
		"servers": 16,
		"cities": 1
	},
	{
		"name": "Australia",
		"flag": "https://protonvpn.com/images/flags/au.svg",
		"servers": 148,
		"cities": 5
	},
	{
		"name": "Austria",
		"flag": "https://protonvpn.com/images/flags/at.svg",
		"servers": 104,
		"cities": 1
	},
	{
		"name": "Azerbaijan",
		"flag": "https://protonvpn.com/images/flags/az.svg",
		"servers": 24,
		"cities": 1
	},
	{
		"name": "Bahrain",
		"flag": "https://protonvpn.com/images/flags/bh.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Bangladesh",
		"flag": "https://protonvpn.com/images/flags/bd.svg",
		"servers": 24,
		"cities": 1
	},
	{
		"name": "Belarus",
		"flag": "https://protonvpn.com/images/flags/by.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Belgium",
		"flag": "https://protonvpn.com/images/flags/be.svg",
		"servers": 70,
		"cities": 1
	},
	{
		"name": "Bhutan",
		"flag": "https://protonvpn.com/images/flags/bt.svg",
		"servers": 8,
		"cities": 1
	},
	{
		"name": "Bosnia & Herzegovina",
		"flag": "https://protonvpn.com/images/flags/ba.svg",
		"servers": 10,
		"cities": 1
	},
	{
		"name": "Brazil",
		"flag": "https://protonvpn.com/images/flags/br.svg",
		"servers": 108,
		"cities": 1
	},
	{
		"name": "Bulgaria",
		"flag": "https://protonvpn.com/images/flags/bg.svg",
		"servers": 41,
		"cities": 1
	},
	{
		"name": "Cambodia",
		"flag": "https://protonvpn.com/images/flags/kh.svg",
		"servers": 12,
		"cities": 1
	},
	{
		"name": "Canada",
		"flag": "https://protonvpn.com/images/flags/ca.svg",
		"servers": 503,
		"cities": 3
	},
	{
		"name": "Chad",
		"flag": "https://protonvpn.com/images/flags/td.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Chile",
		"flag": "https://protonvpn.com/images/flags/cl.svg",
		"servers": 8,
		"cities": 1
	},
	{
		"name": "Colombia",
		"flag": "https://protonvpn.com/images/flags/co.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Comoros",
		"flag": "https://protonvpn.com/images/flags/km.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Costa Rica",
		"flag": "https://protonvpn.com/images/flags/cr.svg",
		"servers": 8,
		"cities": 1
	},
	{
		"name": "Croatia",
		"flag": "https://protonvpn.com/images/flags/hr.svg",
		"servers": 48,
		"cities": 1
	},
	{
		"name": "Cyprus",
		"flag": "https://protonvpn.com/images/flags/cy.svg",
		"servers": 10,
		"cities": 1
	},
	{
		"name": "Czechia",
		"flag": "https://protonvpn.com/images/flags/cz.svg",
		"servers": 55,
		"cities": 1
	},
	{
		"name": "Côte d’Ivoire",
		"flag": "https://protonvpn.com/images/flags/ci.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Denmark",
		"flag": "https://protonvpn.com/images/flags/dk.svg",
		"servers": 94,
		"cities": 1
	},
	{
		"name": "Ecuador",
		"flag": "https://protonvpn.com/images/flags/ec.svg",
		"servers": 8,
		"cities": 1
	},
	{
		"name": "Egypt",
		"flag": "https://protonvpn.com/images/flags/eg.svg",
		"servers": 16,
		"cities": 1
	},
	{
		"name": "El Salvador",
		"flag": "https://protonvpn.com/images/flags/sv.svg",
		"servers": 53,
		"cities": 1
	},
	{
		"name": "Eritrea",
		"flag": "https://protonvpn.com/images/flags/er.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Estonia",
		"flag": "https://protonvpn.com/images/flags/ee.svg",
		"servers": 20,
		"cities": 1
	},
	{
		"name": "Ethiopia",
		"flag": "https://protonvpn.com/images/flags/et.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Finland",
		"flag": "https://protonvpn.com/images/flags/fi.svg",
		"servers": 41,
		"cities": 1
	},
	{
		"name": "France",
		"flag": "https://protonvpn.com/images/flags/fr.svg",
		"servers": 294,
		"cities": 2
	},
	{
		"name": "Georgia",
		"flag": "https://protonvpn.com/images/flags/ge.svg",
		"servers": 8,
		"cities": 1
	},
	{
		"name": "Germany",
		"flag": "https://protonvpn.com/images/flags/de.svg",
		"servers": 482,
		"cities": 2
	},
	{
		"name": "Ghana",
		"flag": "https://protonvpn.com/images/flags/gh.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Greece",
		"flag": "https://protonvpn.com/images/flags/gr.svg",
		"servers": 64,
		"cities": 1
	},
	{
		"name": "Hong Kong SAR China",
		"flag": "https://protonvpn.com/images/flags/hk.svg",
		"servers": 42,
		"cities": 1
	},
	{
		"name": "Hungary",
		"flag": "https://protonvpn.com/images/flags/hu.svg",
		"servers": 24,
		"cities": 1
	},
	{
		"name": "Iceland",
		"flag": "https://protonvpn.com/images/flags/is.svg",
		"servers": 24,
		"cities": 1
	},
	{
		"name": "India",
		"flag": "https://protonvpn.com/images/flags/in.svg",
		"servers": 30,
		"cities": 1
	},
	{
		"name": "Indonesia",
		"flag": "https://protonvpn.com/images/flags/id.svg",
		"servers": 20,
		"cities": 1
	},
	{
		"name": "Iraq",
		"flag": "https://protonvpn.com/images/flags/iq.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Ireland",
		"flag": "https://protonvpn.com/images/flags/ie.svg",
		"servers": 49,
		"cities": 1
	},
	{
		"name": "Israel",
		"flag": "https://protonvpn.com/images/flags/il.svg",
		"servers": 14,
		"cities": 2
	},
	{
		"name": "Italy",
		"flag": "https://protonvpn.com/images/flags/it.svg",
		"servers": 74,
		"cities": 2
	},
	{
		"name": "Japan",
		"flag": "https://protonvpn.com/images/flags/jp.svg",
		"servers": 79,
		"cities": 2
	},
	{
		"name": "Jordan",
		"flag": "https://protonvpn.com/images/flags/jo.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Kazakhstan",
		"flag": "https://protonvpn.com/images/flags/kz.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Kenya",
		"flag": "https://protonvpn.com/images/flags/ke.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Kuwait",
		"flag": "https://protonvpn.com/images/flags/kw.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Latvia",
		"flag": "https://protonvpn.com/images/flags/lv.svg",
		"servers": 20,
		"cities": 1
	},
	{
		"name": "Libya",
		"flag": "https://protonvpn.com/images/flags/ly.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Lithuania",
		"flag": "https://protonvpn.com/images/flags/lt.svg",
		"servers": 56,
		"cities": 2
	},
	{
		"name": "Luxembourg",
		"flag": "https://protonvpn.com/images/flags/lu.svg",
		"servers": 40,
		"cities": 1
	},
	{
		"name": "Malaysia",
		"flag": "https://protonvpn.com/images/flags/my.svg",
		"servers": 36,
		"cities": 2
	},
	{
		"name": "Malta",
		"flag": "https://protonvpn.com/images/flags/mt.svg",
		"servers": 8,
		"cities": 1
	},
	{
		"name": "Mauritania",
		"flag": "https://protonvpn.com/images/flags/mr.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Mauritius",
		"flag": "https://protonvpn.com/images/flags/mu.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Mexico",
		"flag": "https://protonvpn.com/images/flags/mx.svg",
		"servers": 76,
		"cities": 2
	},
	{
		"name": "Moldova",
		"flag": "https://protonvpn.com/images/flags/md.svg",
		"servers": 36,
		"cities": 1
	},
	{
		"name": "Montenegro",
		"flag": "https://protonvpn.com/images/flags/me.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Morocco",
		"flag": "https://protonvpn.com/images/flags/ma.svg",
		"servers": 33,
		"cities": 1
	},
	{
		"name": "Mozambique",
		"flag": "https://protonvpn.com/images/flags/mz.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Myanmar (Burma)",
		"flag": "https://protonvpn.com/images/flags/mm.svg",
		"servers": 8,
		"cities": 1
	},
	{
		"name": "Nepal",
		"flag": "https://protonvpn.com/images/flags/np.svg",
		"servers": 52,
		"cities": 1
	},
	{
		"name": "Netherlands",
		"flag": "https://protonvpn.com/images/flags/nl.svg",
		"servers": 284,
		"cities": 1
	},
	{
		"name": "New Zealand",
		"flag": "https://protonvpn.com/images/flags/nz.svg",
		"servers": 33,
		"cities": 1
	},
	{
		"name": "Nigeria",
		"flag": "https://protonvpn.com/images/flags/ng.svg",
		"servers": 40,
		"cities": 2
	},
	{
		"name": "North Macedonia",
		"flag": "https://protonvpn.com/images/flags/mk.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Norway",
		"flag": "https://protonvpn.com/images/flags/no.svg",
		"servers": 56,
		"cities": 1
	},
	{
		"name": "Oman",
		"flag": "https://protonvpn.com/images/flags/om.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Pakistan",
		"flag": "https://protonvpn.com/images/flags/pk.svg",
		"servers": 12,
		"cities": 1
	},
	{
		"name": "Peru",
		"flag": "https://protonvpn.com/images/flags/pe.svg",
		"servers": 8,
		"cities": 1
	},
	{
		"name": "Philippines",
		"flag": "https://protonvpn.com/images/flags/ph.svg",
		"servers": 12,
		"cities": 1
	},
	{
		"name": "Poland",
		"flag": "https://protonvpn.com/images/flags/pl.svg",
		"servers": 41,
		"cities": 1
	},
	{
		"name": "Portugal",
		"flag": "https://protonvpn.com/images/flags/pt.svg",
		"servers": 20,
		"cities": 1
	},
	{
		"name": "Puerto Rico",
		"flag": "https://protonvpn.com/images/flags/pr.svg",
		"servers": 8,
		"cities": 1
	},
	{
		"name": "Qatar",
		"flag": "https://protonvpn.com/images/flags/qa.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Romania",
		"flag": "https://protonvpn.com/images/flags/ro.svg",
		"servers": 50,
		"cities": 1
	},
	{
		"name": "Russia",
		"flag": "https://protonvpn.com/images/flags/ru.svg",
		"servers": 53,
		"cities": 1
	},
	{
		"name": "Rwanda",
		"flag": "https://protonvpn.com/images/flags/rw.svg",
		"servers": 27,
		"cities": 1
	},
	{
		"name": "Saudi Arabia",
		"flag": "https://protonvpn.com/images/flags/sa.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Senegal",
		"flag": "https://protonvpn.com/images/flags/sn.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Serbia",
		"flag": "https://protonvpn.com/images/flags/rs.svg",
		"servers": 48,
		"cities": 1
	},
	{
		"name": "Singapore",
		"flag": "https://protonvpn.com/images/flags/sg.svg",
		"servers": 30,
		"cities": 1
	},
	{
		"name": "Slovakia",
		"flag": "https://protonvpn.com/images/flags/sk.svg",
		"servers": 36,
		"cities": 1
	},
	{
		"name": "Slovenia",
		"flag": "https://protonvpn.com/images/flags/si.svg",
		"servers": 64,
		"cities": 1
	},
	{
		"name": "Somalia",
		"flag": "https://protonvpn.com/images/flags/so.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "South Africa",
		"flag": "https://protonvpn.com/images/flags/za.svg",
		"servers": 35,
		"cities": 1
	},
	{
		"name": "South Korea",
		"flag": "https://protonvpn.com/images/flags/kr.svg",
		"servers": 12,
		"cities": 1
	},
	{
		"name": "South Sudan",
		"flag": "https://protonvpn.com/images/flags/ss.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Spain",
		"flag": "https://protonvpn.com/images/flags/es.svg",
		"servers": 114,
		"cities": 2
	},
	{
		"name": "Sri Lanka",
		"flag": "https://protonvpn.com/images/flags/lk.svg",
		"servers": 52,
		"cities": 1
	},
	{
		"name": "Sudan",
		"flag": "https://protonvpn.com/images/flags/sd.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Sweden",
		"flag": "https://protonvpn.com/images/flags/se.svg",
		"servers": 152,
		"cities": 1
	},
	{
		"name": "Switzerland",
		"flag": "https://protonvpn.com/images/flags/ch.svg",
		"servers": 519,
		"cities": 1
	},
	{
		"name": "Syria",
		"flag": "https://protonvpn.com/images/flags/sy.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Taiwan",
		"flag": "https://protonvpn.com/images/flags/tw.svg",
		"servers": 20,
		"cities": 2
	},
	{
		"name": "Tajikistan",
		"flag": "https://protonvpn.com/images/flags/tj.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Tanzania",
		"flag": "https://protonvpn.com/images/flags/tz.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Thailand",
		"flag": "https://protonvpn.com/images/flags/th.svg",
		"servers": 36,
		"cities": 1
	},
	{
		"name": "Togo",
		"flag": "https://protonvpn.com/images/flags/tg.svg",
		"servers": 28,
		"cities": 1
	},
	{
		"name": "Tunisia",
		"flag": "https://protonvpn.com/images/flags/tn.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Turkmenistan",
		"flag": "https://protonvpn.com/images/flags/tm.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Türkiye",
		"flag": "https://protonvpn.com/images/flags/tr.svg",
		"servers": 36,
		"cities": 1
	},
	{
		"name": "Ukraine",
		"flag": "https://protonvpn.com/images/flags/ua.svg",
		"servers": 64,
		"cities": 1
	},
	{
		"name": "United Arab Emirates",
		"flag": "https://protonvpn.com/images/flags/ae.svg",
		"servers": 16,
		"cities": 1
	},
	{
		"name": "United Kingdom",
		"flag": "https://protonvpn.com/images/flags/gb.svg",
		"servers": 553,
		"cities": 5
	},
	{
		"name": "United States",
		"flag": "https://protonvpn.com/images/flags/us.svg",
		"servers": 2657,
		"cities": 17
	},
	{
		"name": "Uzbekistan",
		"flag": "https://protonvpn.com/images/flags/uz.svg",
		"servers": 4,
		"cities": 1
	},
	{
		"name": "Venezuela",
		"flag": "https://protonvpn.com/images/flags/ve.svg",
		"servers": 119,
		"cities": 1
	},
	{
		"name": "Vietnam",
		"flag": "https://protonvpn.com/images/flags/vn.svg",
		"servers": 12,
		"cities": 1
	},
	{
		"name": "Yemen",
		"flag": "https://protonvpn.com/images/flags/ye.svg",
		"servers": 4,
		"cities": 1
	}
	];

	const dropdownArrow = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.52985 9.28015C9.38922 9.4206 9.1986 9.49949 8.99985 9.49949C8.8011 9.49949 8.61047 9.4206 8.46985 9.28015L0.969847 1.78015C0.837366 1.63798 0.765243 1.44993 0.768672 1.25563C0.7721 1.06133 0.850812 0.875944 0.988225 0.738532C1.12564 0.601118 1.31102 0.522407 1.50532 0.518978C1.69963 0.51555 1.88767 0.587673 2.02985 0.720153L8.99985 7.69015L15.9698 0.720153C16.0385 0.646466 16.1213 0.587364 16.2133 0.546372C16.3053 0.50538 16.4046 0.483339 16.5053 0.481562C16.606 0.479785 16.7061 0.49831 16.7994 0.536031C16.8928 0.573752 16.9777 0.629896 17.0489 0.701115C17.1201 0.772334 17.1762 0.857168 17.214 0.950556C17.2517 1.04394 17.2702 1.14397 17.2684 1.24468C17.2667 1.34538 17.2446 1.44469 17.2036 1.53669C17.1626 1.62869 17.1035 1.71149 17.0298 1.78015L9.52985 9.28015Z" fill="#6D4AFF"/>
</svg>
`;
	const searchIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M7.75 15.25C6.26664 15.25 4.8166 14.8101 3.58323 13.986C2.34986 13.1619 1.38856 11.9906 0.820907 10.6201C0.25325 9.24968 0.104725 7.74168 0.394114 6.28683C0.683503 4.83197 1.39781 3.4956 2.4467 2.4467C3.4956 1.39781 4.83197 0.683503 6.28683 0.394114C7.74168 0.104725 9.24968 0.25325 10.6201 0.820907C11.9906 1.38856 13.1619 2.34986 13.986 3.58323C14.8101 4.8166 15.25 6.26664 15.25 7.75C15.25 8.73492 15.056 9.71019 14.6791 10.6201C14.3022 11.5301 13.7497 12.3569 13.0533 13.0533C12.3569 13.7497 11.5301 14.3022 10.6201 14.6791C9.71019 15.056 8.73492 15.25 7.75 15.25ZM7.75 1.75C6.56332 1.75 5.40328 2.1019 4.41658 2.76119C3.42989 3.42047 2.66085 4.35755 2.20673 5.4539C1.7526 6.55026 1.63378 7.75666 1.86529 8.92055C2.0968 10.0844 2.66825 11.1535 3.50736 11.9926C4.34648 12.8318 5.41558 13.4032 6.57946 13.6347C7.74335 13.8662 8.94975 13.7474 10.0461 13.2933C11.1425 12.8392 12.0795 12.0701 12.7388 11.0834C13.3981 10.0967 13.75 8.93669 13.75 7.75C13.75 6.1587 13.1179 4.63258 11.9926 3.50736C10.8674 2.38214 9.3413 1.75 7.75 1.75Z" fill="white"/>
<path d="M19.0001 19.7501C18.9014 19.7507 18.8036 19.7318 18.7122 19.6945C18.6208 19.6571 18.5377 19.6021 18.4676 19.5326L12.4676 13.5326C12.3977 13.4627 12.3422 13.3797 12.3044 13.2883C12.2665 13.197 12.2471 13.099 12.2471 13.0001C12.2471 12.9012 12.2665 12.8033 12.3044 12.712C12.3422 12.6206 12.3977 12.5376 12.4676 12.4676C12.5376 12.3977 12.6206 12.3422 12.712 12.3044C12.8033 12.2665 12.9012 12.2471 13.0001 12.2471C13.099 12.2471 13.197 12.2665 13.2883 12.3044C13.3797 12.3422 13.4627 12.3977 13.5326 12.4676L19.5326 18.4676C19.6029 18.5374 19.6587 18.6203 19.6968 18.7117C19.7349 18.8031 19.7545 18.9011 19.7545 19.0001C19.7545 19.0991 19.7349 19.1972 19.6968 19.2886C19.6587 19.38 19.6029 19.4629 19.5326 19.5326C19.4626 19.6021 19.3794 19.6571 19.2881 19.6945C19.1967 19.7318 19.0988 19.7507 19.0001 19.7501Z" fill="white"/>
</svg>
`;
	const inputSearchIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M7.75 15.75C6.26664 15.75 4.8166 15.3101 3.58323 14.486C2.34986 13.6619 1.38856 12.4906 0.820907 11.1201C0.25325 9.74968 0.104725 8.24168 0.394114 6.78683C0.683503 5.33197 1.39781 3.9956 2.4467 2.9467C3.4956 1.89781 4.83197 1.1835 6.28683 0.894114C7.74168 0.604725 9.24968 0.75325 10.6201 1.32091C11.9906 1.88856 13.1619 2.84986 13.986 4.08323C14.8101 5.3166 15.25 6.76664 15.25 8.25C15.25 9.23492 15.056 10.2102 14.6791 11.1201C14.3022 12.0301 13.7497 12.8569 13.0533 13.5533C12.3569 14.2497 11.5301 14.8022 10.6201 15.1791C9.71019 15.556 8.73492 15.75 7.75 15.75ZM7.75 2.25C6.56332 2.25 5.40328 2.6019 4.41658 3.26119C3.42989 3.92047 2.66085 4.85755 2.20673 5.9539C1.7526 7.05026 1.63378 8.25666 1.86529 9.42055C2.0968 10.5844 2.66825 11.6535 3.50736 12.4926C4.34648 13.3318 5.41558 13.9032 6.57946 14.1347C7.74335 14.3662 8.94975 14.2474 10.0461 13.7933C11.1425 13.3392 12.0795 12.5701 12.7388 11.5834C13.3981 10.5967 13.75 9.43669 13.75 8.25C13.75 6.6587 13.1179 5.13258 11.9926 4.00736C10.8674 2.88214 9.3413 2.25 7.75 2.25Z" fill="#372580"/>
<path d="M19.0001 20.2501C18.9014 20.2507 18.8036 20.2318 18.7122 20.1945C18.6208 20.1571 18.5377 20.1021 18.4676 20.0326L12.4676 14.0326C12.3977 13.9627 12.3422 13.8797 12.3044 13.7883C12.2665 13.697 12.2471 13.599 12.2471 13.5001C12.2471 13.4012 12.2665 13.3033 12.3044 13.212C12.3422 13.1206 12.3977 13.0376 12.4676 12.9676C12.5376 12.8977 12.6206 12.8422 12.712 12.8044C12.8033 12.7665 12.9012 12.7471 13.0001 12.7471C13.099 12.7471 13.197 12.7665 13.2883 12.8044C13.3797 12.8422 13.4627 12.8977 13.5326 12.9676L19.5326 18.9676C19.6029 19.0374 19.6587 19.1203 19.6968 19.2117C19.7349 19.3031 19.7545 19.4011 19.7545 19.5001C19.7545 19.5991 19.7349 19.6972 19.6968 19.7886C19.6587 19.88 19.6029 19.9629 19.5326 20.0326C19.4626 20.1021 19.3794 20.1571 19.2881 20.1945C19.1967 20.2318 19.0988 20.2507 19.0001 20.2501Z" fill="#372580"/>
</svg>
`;
	const checkIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9158 4.62625C20.0813 4.73659 20.1962 4.90814 20.2352 5.10317C20.2742 5.29821 20.2342 5.50075 20.1238 5.66625L11.1238 19.1662C11.0623 19.2585 10.981 19.3359 10.8859 19.393C10.7908 19.45 10.6842 19.4853 10.5738 19.4962C10.4634 19.5071 10.352 19.4934 10.2476 19.456C10.1431 19.4187 10.0483 19.3587 9.96985 19.2802L3.96985 13.2802C3.83737 13.1381 3.76524 12.95 3.76867 12.7557C3.7721 12.5614 3.85081 12.376 3.98822 12.2386C4.12564 12.1012 4.31102 12.0225 4.50532 12.0191C4.69963 12.0156 4.88767 12.0878 5.02985 12.2202L10.3828 17.5732L18.8758 4.83325C18.9863 4.66793 19.158 4.55325 19.353 4.51443C19.548 4.47561 19.7505 4.51583 19.9158 4.62625Z" fill="#372580"/>
</svg>
`;

	const searchWrapper = (id) => {
	  const html = `
         <div class="${id}__searchBar">
            <input type="text" class="${id}__input" placeholder="Search"/>
            <span class="${id}__inputSearch">${inputSearchIcon}</span>
        </div>
    `;
	  return html.trim();
	};

	const countryWrapper = (id, countryData) => {
	  const html = `
         <div class="${id}__countriesWrapper">
          <div class="${id}__countriesBox">
            ${searchWrapper(id)}
            <div class="${id}__contriesConatiner">
              <div class="${id}__contriesLists">
                ${countryData
                  .map((country) => {
                    const { name, flag, servers } = country;
                    const serverText = servers === 1 ? 'server' : 'servers';
                    return `
                        <div class="${id}__countryItem" data-name="${name}" data-flag="${flag}">
                            <div class="${id}__countryImage">
                                <img src="${flag}"/>
                            </div>
                            <div class="${id}__countryName">${name}</div>
                            <div class="${id}__countryServers">
                              ${servers} <span class="${id}__serverText">${serverText}</span>
                            </div>
                            <div class="${id}__countryChecked">${checkIcon}</div>
                        </div>
                    `;
                  }).join('\n')}
              </div>
            </div>
          </div>
        </div>
    `;
	  return html.trim();
	};

	const vpnLocationsWrapper = (id, countryData) => {
	  const html = `
        <div class="${id}__vpnLocationsWrapper bg-purple-900">
            <div class="${id}__vpnLocationsContainer">
                <h3 class="${id}__title">See all Proton VPN locations</h3>
                <div class="${id}__selectedCountryDropdown">
                    <div class="${id}__defaultDropdownWrapper">
                        <span class="${id}__flagIcon"></span>
                        <span class="${id}__searchIcon">${searchIcon}</span>
                        <span class="${id}__text">Select one of 115+ countries</span>
                        <span class="${id}__icon">${dropdownArrow}</span>
                    </div>
                </div>

               ${countryWrapper(id, countryData)}
            </div>
        </div>
    `;
	  return html.trim();
	};

	const renderCountryList = (id, countryData, container) => {
	    container.innerHTML = countryData
	        .map((country) => {
	            const { name, flag, servers } = country;
	            const serverText = servers === 1 ? 'server' : 'servers';
	            return `
                <div class="${id}__countryItem" data-name="${name}" data-flag="${flag}">
                    <div class="${id}__countryImage">
                        <img src="${flag}"/>
                    </div>
                    <div class="${id}__countryName">${name}</div>
                    <div class="${id}__countryServers">
                        ${servers} <span class="${id}__serverText">${serverText}</span>
                    </div>
                    <div class="${id}__countryChecked">${checkIcon}</div>
                </div>
            `;
	        })
	        .join('');
	};

	const filterCountries = (id, countryData) => {
	    const searchInput = document.querySelector(`.${id}__input`);
	    const countryContainer = document.querySelector(`.${id}__contriesLists`);
	    if (!searchInput || !countryContainer) return;
	    searchInput.addEventListener('input', () => {
	        const searchValue = searchInput.value.toLowerCase().trim();
	        const filteredCountries = countryData.filter((country) =>
	            country.name.toLowerCase().includes(searchValue));
	        renderCountryList(id, filteredCountries, countryContainer);
	    });
	};

	const { ID } = shared$1;
	window._conv_q = window._conv_q || [];
	const init = () => {
	  const targetPoint = document.querySelector(
	    '.bg-purple-900.text-white[data-testid="grid-section"]'
	  );
	  const targetSelector = `.${ID}__header`;
	  const vpnServerDescHTML = `<p class="${ID}__vpnServerDesc dtc-text-white">
  Proton VPN has one of the world’s fastest and most extensive networks, with servers on every continent for truly global connectivity.
  </p>`;
	  const reapplyChanges = () => {
		const vpnServerTitleElem = document.querySelector('.bg-purple-900.text-white h1.dtc-text-white');
	    if (!document.querySelector(targetSelector)) {
	      const headerElem = document.querySelector('header');
	      headerElem.insertAdjacentHTML('beforebegin', header(ID));
	    }
	    vpnServerTitleElem.textContent = 'Proton VPN server list and locations';
	    if (!document.querySelector(`.${ID}__vpnServerDesc`)) {
	      vpnServerTitleElem.insertAdjacentHTML('afterend', vpnServerDescHTML);
	    }
	  };

	  observeDOM('body', () => {
	    reapplyChanges();
	  });

	  if (!document.querySelector(`.${ID}__vpnLocationsWrapper`)) {
	    targetPoint.insertAdjacentHTML('afterend', vpnLocationsWrapper(ID, countryData));
	  }
	  filterCountries(ID, countryData);
	};
	var activate = () => {
	  setup();
	  init();
	  document.body.addEventListener('click', (event) => {
	    const { target } = event;
	    clickHandler(ID, target);
	  });
	};

	pollerLite(['header', '.bg-purple-900.text-white[data-testid="grid-section"]'], activate);

})();