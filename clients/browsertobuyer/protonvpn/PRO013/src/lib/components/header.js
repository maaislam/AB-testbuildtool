import nav from './nav';
import protonLogo from './protonLogo';
import sideBarMenu from './sidebarMenu';

const header = (id) => {
    const htmlStr = `<div class="header ${id}__header">
        <div class="container flex h-12 items-center gap-5 duration-150 ease-linear md:h-16 xl:gap-8">
            <div class="flex flex-grow justify-between xl:justify-start">
                ${protonLogo(id)}
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
export default header;
