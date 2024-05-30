const activateLoader = (id) => {
    const htmlStr = `<div class="${id}__loaderWrapper">
    <div class="${id}__loader lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>`;

    const attachPoint = document.querySelector('.gallery-placeholder');
    attachPoint.insertAdjacentHTML('afterend', htmlStr);
};
export default activateLoader;
