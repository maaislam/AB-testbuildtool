const shortBenefitCard = (id, data) => {
    const { title, description, icon } = data;

    const htmlStr = `
    <div class="${id}__card flex flex-col space-y-4 lg:space-y-6" id="section-:r7R6:">
            
            <div class="${id}__contents flex h-full flex-col space-y-2 justify-between text-purple-800">
                <div>
                    <div class="space-y-2">
                        <div class="${id}__redirectLink flex items-center gap-3 justify-start">
                            <span class='${id}__icon'>${icon}</span>
                            <p class="${id}__title text-xl xl:text-2xl text-purple-800 font-serif">${title}</p>
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
        </div>
    `;

    return htmlStr;
};

export default shortBenefitCard;
