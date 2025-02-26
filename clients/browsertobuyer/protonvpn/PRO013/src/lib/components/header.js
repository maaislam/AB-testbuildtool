import nav from './nav';

const header = (id) => {
    const htmlStr = `<header class="header ${id}__header">
        <div class="container flex h-12 items-center gap-5 duration-150 ease-linear md:h-16 xl:gap-8">
            <div class="flex flex-grow justify-center sm:justify-start">
                <div class="flex h-7 flex-none xl:w-40 ">
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

                ${nav(id)}
                <div class="flex items-center xl:hidden">
                    <button data-testid="hamburger-menu" type="button" class="text-gray-900 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                        <span class="sr-only">Open menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-7 w-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>`;

    return htmlStr;
};
export default header;
