const securityFeatureCard = (id, data) => {
    const { title, description, btnText, imgUrl } = data;

    const htmlStr = `
    <div class="${id}__card flex flex-col space-y-4 lg:space-y-6" id="section-:r7R6:">
            <div class="justify-start">
                <div class="${id}__redirectLink">
                    <picture class="w-full rounded-lg aspect-16/10 object-cover">
                        <source sizes="(min-width: 800px) 800px, 100vw"
                            srcset="${imgUrl}">
                            
                            <img
                            src="${imgUrl}"
                            alt="${title}" loading="lazy" decoding="async"
                            class="w-full rounded-lg aspect-16/10 object-cover opacity-0 transition-opacity opacity-100">
                            
                            <script>(function (image) { image.addEventListener('load', () => image.classList.add('opacity-100')); })(document.currentScript.previousElementSibling)</script>
                    </picture>
                </div>
            </div>
            <div class="${id}__contents flex h-full flex-col space-y-2 justify-between text-purple-800">
                <div>
                    <div class="space-y-2">
                        <div class="flex items-center gap-4 justify-start">
                            <p class="${id}__redirectLink ${id}__title text-xl xl:text-2xl text-purple-800 font-serif">${title}</p>
                        </div>
                        <div class="${id}__descriptionWrapper space-y-4 text-start">
                            <div
                                class="list-style list-style-type-check list-style-size-7 list-style-color-purple500 list-style-margin-1">
                                <p class='${id}__description'>${description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='${id}__linkWrapper'>
                <div class="${id}__linkBtn ${id}__redirectLink">
                    <span>${btnText}</span>
                    <span class='${id}__arrowIcon'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 3.01562L10.5 8.01563L5.5 13.0156" stroke="#6D4AFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    `;

    return htmlStr;
};

export default securityFeatureCard;
