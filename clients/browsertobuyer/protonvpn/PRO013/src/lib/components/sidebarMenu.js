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

export default sideBarMenu;
