const stockAvailability = (id) => {
    const htmlStr = `<div class="${id}__stockAvailability">
    <input name="template--16320716046417__product-grid" type="radio"
        id="custom-filter-stockAvailability" class="peer" hidden=""
        data-dropdown="">
    <div
        class="w-grid ${id}__stockAvailabilityContents tablet:min-w-grid tablet:flex-1 no-js:hidden h-full border border-border hover:border-border-active peer-checked:border-border-active transition-colors peer-checked:[&amp;>div]:max-h-visual peer-checked:[&amp;>div]:opacity-100 peer-checked:[&amp;_svg]:-rotate-90">
        <label for="custom-filter-stockAvailability"
            class="p-[10px] tablet:py-[7px] cursor-pointer flex items-center justify-between gap-xxs">
            <div class="pointer-events-none whitespace-nowrap overflow-hidden text-ellipsis">
                <div class="flex items-center gap-xxs">Stock availability</div>
            </div>
            <svg
                class="shrink-0 pointer-events-none rotate-90 text-links transition-transform origin-center max-w-full"
                role="presentation" width="9" height="16" viewBox="0 0 9 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m.96.89-.85.848L6.334 7.96.111 14.183l.848.848L7.182 8.81l.85-.848H8.03l.001-.002-.848-.848h-.001z"
                    fill="currentColor"></path>
            </svg>
        </label>
        <div class="z-30 absolute top-full h-1 w-full bg-background opacity-0"></div>
        <div class="z-20 absolute top-full -left-1 -right-1 overflow-hidden max-h-0 tablet:w-grid [--columns:1] tablet:left-[calc(-100%-var(--spacing-sm)-1px)]">
            <div class="bg-background p-sm overflow-y-auto ${id}__filterWrapper">
                <ul class="flex flex-col gap-[10px]">
                    <li>
                        <label class="flex items-center gap-[10px] cursor-pointer group">
                            <input form="FilterForm-template--16320716046417__product-grid" type="checkbox" name="filter.p.m.custom.availability" value="Bare Root - In Stock" id="Filter-Stock Availability-1" class="hidden peer" data-track-filter="{&quot;filter_name&quot;:&quot;Bare Root - In Stock&quot;,&quot;filter_category&quot;:&quot;Stock Availability&quot;}">
                            <span class="
                                
                        checkbox appearance-none outline-none transition-colors border border-border relative overflow-hidden shrink-0
                        supports-hover:group-hover:border-border-active peer-checked:border-border-active peer-checked:text-links
                        supports-hover:group-hover:after:opacity-100 peer-checked:after:opacity-100 after:transition-colors
                    

                                swatch-bare-root-in-stock
                            " style=""></span>
                            <span class="peer-checked:text-links">Bare Root - In Stock</span>
                            <span class="bg-putty-dark rounded-full px-[4px] py-[2px] text-sm tracking-normal ml-auto text-grey peer-checked:text-grey-dark">351</span>
                        </label>
                    </li>
                    <li>
                        <label class="flex items-center gap-[10px] cursor-pointer group">
                            <input form="FilterForm-template--16320716046417__product-grid" type="checkbox" name="filter.p.m.custom.availability" value="In Stock" id="Filter-Stock Availability-2" class="hidden peer" data-track-filter="{&quot;filter_name&quot;:&quot;In Stock&quot;,&quot;filter_category&quot;:&quot;Stock Availability&quot;}">
                            <span class="
                                
                        checkbox appearance-none outline-none transition-colors border border-border relative overflow-hidden shrink-0
                        supports-hover:group-hover:border-border-active peer-checked:border-border-active peer-checked:text-links
                        supports-hover:group-hover:after:opacity-100 peer-checked:after:opacity-100 after:transition-colors
                    

                                swatch-in-stock
                            " style=""></span>
                            <span class="peer-checked:text-links">In Stock</span>
                            <span class="bg-putty-dark rounded-full px-[4px] py-[2px] text-sm tracking-normal ml-auto text-grey peer-checked:text-grey-dark">353</span>
                        </label>
                    </li>
                    <li>
                        <label class="flex items-center gap-[10px] cursor-pointer group">
                            <input form="FilterForm-template--16320716046417__product-grid" type="checkbox" name="filter.p.m.custom.availability" value="Potted Rose - In Stock" id="Filter-Stock Availability-3" class="hidden peer" data-track-filter="{&quot;filter_name&quot;:&quot;Potted Rose - In Stock&quot;,&quot;filter_category&quot;:&quot;Stock Availability&quot;}">
                            <span class="
                                
                        checkbox appearance-none outline-none transition-colors border border-border relative overflow-hidden shrink-0
                        supports-hover:group-hover:border-border-active peer-checked:border-border-active peer-checked:text-links
                        supports-hover:group-hover:after:opacity-100 peer-checked:after:opacity-100 after:transition-colors
                    

                                swatch-potted-rose-in-stock
                            " style=""></span>
                            <span class="peer-checked:text-links">Potted Rose - In Stock</span>
                            <span class="bg-putty-dark rounded-full px-[4px] py-[2px] text-sm tracking-normal ml-auto text-grey peer-checked:text-grey-dark">113</span>
                        </label>
                    </li>
                </ul>
                <button form="FilterForm-template--16320716046417__product-grid" type="submit" data-role="button" class="appearance-none outline-none rounded-none transition-colors inline-flex items-center justify-center gap-[10px] button-primary py-[12px] px-lg border text-caps-lg border-button-border text-button-text bg-button-background supports-hover:hover:border-button-border-hover supports-hover:hover:text-button-text-hover supports-hover:hover:bg-button-background-hover flex-1 w-full mt-sm">
                    Apply
                </button>
            </div>
        </div>
    </div>
</div>`;

    return htmlStr;
};
export default stockAvailability;
