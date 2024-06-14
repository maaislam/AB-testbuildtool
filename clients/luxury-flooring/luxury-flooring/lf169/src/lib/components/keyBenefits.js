const keyBenefits = (id, data) => {
    const htmlStr = `
        <div class="${id}__benefits">
            <h2 class='${id}__benefits-title'>Why you'll love it</h2>
            ${data.map((item) => {
                return `
                    <p class='${id}__benefit'>${item.benifit}</p>
                `;
            }).join('')}
        </div>
    `;

    return htmlStr;
};
export default keyBenefits;
