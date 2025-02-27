import { openSidebar, closeSidebar, openSubMenu, closeSubMenu } from '../helpers/utils';

const clickHandler = (id, target) => {
    if (target.closest('#whyProtonBtn')) {
        const popover = document.getElementById('whyProtonPopOver');
        const overlay = document.getElementById('popoverOverlay');
        const isHidden = popover.classList.contains('hidden');

        overlay.classList.toggle('hidden', !isHidden);
        popover.classList.toggle('hidden');
    } else if (target.closest('#popoverOverlay')) {
        const popover = document.getElementById('whyProtonPopOver');
        const overlay = target.closest('#popoverOverlay');

        popover.classList.add('hidden');
        overlay.classList.add('hidden');
    } else if (target.closest(`.${id}__hamburgerBtn`)) {
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
    }
};
export default clickHandler;
