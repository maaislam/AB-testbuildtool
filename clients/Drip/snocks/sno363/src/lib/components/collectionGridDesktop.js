const collectionGridDesktop = (id, category, imgCollection) => {
    const htmlStr = `<div class="${id}__collection-grid-wrapper-desktop-${category}">
    <div class="${id}__collection-grid-main">
<div class="${id}__collection-grid">
    <div class="${id}__collection-img">
        <a href="${imgCollection.socken.href}" class="${id}__collection-card">
        <img src="${imgCollection.socken.imgURL}" class="collection-image">
    <div class="collection-image-title">${imgCollection.socken.title}</div>
</a>
        </div>
    <div class="${id}__collection-img">
    <a href="${imgCollection.unterhosen.href}" class="${id}__collection-card">
    <img src="${imgCollection.unterhosen.imgURL}" class="collection-image">
    <div class="collection-image-title">${imgCollection.unterhosen.title}</div>
</a>
        </div>
    <div class="${id}__collection-img">
    <a href="${imgCollection.shirts.href}" class="${id}__collection-card">
    <img src="${imgCollection.shirts.imgURL}" class="collection-image">
    <div class="collection-image-title">${imgCollection.shirts.title}</div>
    </a>
        </div>

</div>
<div class="${id}__collection-grid">
    <div class="${id}__collection-img">
        <a href="${imgCollection.sportbekleidung.href}" class="${id}__collection-card">
        <img src="${imgCollection.sportbekleidung.imgURL}" class="collection-image">
        <div class="collection-image-title">${imgCollection.sportbekleidung.title}</div>
    </a>
        </div>
    <div class="${id}__collection-img">
        <a href="${imgCollection.winterkollektion.href}" class="${id}__collection-card">
        <img src="${imgCollection.winterkollektion.imgURL}" class="collection-image">
        <div class="collection-image-title">${imgCollection.winterkollektion.title}</div>
    </a>
        </div>
    <div class="${id}__collection-img">
        <a href="${imgCollection.bundles.href}" class="${id}__collection-card">
        <img src="${imgCollection.bundles.imgURL}" class="collection-image">
        <div class="collection-image-title">${imgCollection.bundles.title}</div>
    </a>
        </div>
    </div>
</div>
</div>`;

return htmlStr;
};

export default collectionGridDesktop;
