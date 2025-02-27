const sideBarMenu = (id) => {
    const htmlStr = `
    <div class="${id}__sideBarMenuOverlay hidden fixed inset-0 z-menu bg-gray-900 opacity-50" aria-hidden="true"></div>
    <div class="${id}__sideBarMenu fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-md flex-col bg-white transform translate-x-full transition-transform duration-300 ease-in-out">
        <div class="flex h-12 items-center justify-between border-b border-gray-200 px-4 md:px-8 xl:px-16">
            <a href="/" aria-current="page" class="mb-1 flex h-7 flex-none">
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
            <ul class="flex h-full flex-grow flex-col gap-2 overflow-y-auto overflow-x-hidden pe-4 ps-8 md:pe-8 xl:pe-16">
                <li>
                    <button class="${id}__whyProtonBtn w-full py-4 font-semibold text-left flex items-center justify-between text-lg text-purple-800 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                        <span>Why Proton VPN</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </button>
                </li>
                <li>
                    <a href="/pricing"
                        class="w-full py-4 font-semibold text-left flex items-center justify-between text-lg text-purple-800 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="/Devices"
                        class="w-full py-4 font-semibold text-left flex items-center justify-between text-lg text-purple-800 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                        Devices
                    </a>
                </li>
                <li>
                    <a href="/Locations"
                        class="w-full py-4 font-semibold text-left flex items-center justify-between text-lg text-purple-800 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                        Locations
                    </a>
                </li>
            </ul>
        </nav>
        <!-- Submenu for Why Proton VPN -->
        <div id="whyProtonSubMenu" class="fixed bottom-0 right-0 top-0 z-50 block w-full max-w-md bg-white transform translate-x-full transition-transform duration-300 ease-in-out">
            <div class="flex h-12 items-center px-4 md:px-8 xl:px-16">
                <button id="closeWhyProtonSubMenu" type="button" class="flex items-center text-purple-800 hover:text-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                    <span class="ml-2 text-lg font-semibold">Back / Why Proton VPN</span>
                </button>
            </div>
            <nav class="p-6 space-y-4">
                <div>
                    <h2 class="text-lg font-semibold text-gray-900">What is a VPN?</h2>
                    <p class="text-gray-600 text-sm">Find out what a VPN is, how it works, and when to use one.</p>
                </div>
                <div>
                    <h2 class="text-lg font-semibold text-gray-900">Why Proton VPN?</h2>
                    <p class="text-gray-600 text-sm">No logs, no ads, open-source and independently audited.</p>
                </div>
            </nav>
        </div>
    </div>
    `;

    return htmlStr;
};

export default sideBarMenu;
