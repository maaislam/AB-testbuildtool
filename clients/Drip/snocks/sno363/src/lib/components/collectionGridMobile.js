const collectionGridMobile = (id, category, imgCollection) => {
    const htmlStr = `<div class="${id}__collection-grid-wrapper-mobile-${category}">
    <div class="${id}__collection-grid-main">
<div class="${id}__collection-grid">
    <div class="${id}__collection-img">
    <a href="${imgCollection.socken.href}" class="collection-card">
    <img src="${imgCollection.socken.imgURL}" class="collection-image">
    <div class="collection-image-title">${imgCollection.socken.title}</div>
        </div>
    </a>
        </div>
<div class="${id}__collection-grid">
    <div class="${id}__collection-img">
    <a href="${imgCollection.unterhosen.href}" class="collection-card">
    <img src="${imgCollection.unterhosen.imgURL}" class="collection-image">
    <div class="collection-image-title">${imgCollection.unterhosen.title}</div>
        </div>
    </a>
        
    </div>
    <div class="${id}__collection-grid">
    <div class="${id}__collection-img">
    <a href="${imgCollection.shirts.href}" class="collection-card">
    <img src="${imgCollection.shirts.imgURL}" class="collection-image">
    <div class="collection-image-title">${imgCollection.shirts.title}</div>
        </div>
    </a>
    <div class="${id}__collection-img">
    <a href="${imgCollection.sportbekleidung.href}" class="collection-card">
    <img src="${imgCollection.sportbekleidung.imgURL}" class="collection-image">
    <div class="collection-image-title">${imgCollection.sportbekleidung.title}</div>
    </div>
        </a>
        </div>
    <div class="${id}__collection-grid">
    <div class="${id}__collection-img">
    <a href="${imgCollection.winterkollektion.href}" class="collection-card">
    <img src="${imgCollection.winterkollektion.imgURL}" class="collection-image">
    <div class="collection-image-title">${imgCollection.winterkollektion.title}</div>
    </div>
        </a>
    <div class="${id}__collection-img">
    <a href="${imgCollection.bundles.href}" class="collection-card">
    <img src="${imgCollection.bundles.imgURL}" class="collection-image">
    <div class="collection-image-title">${imgCollection.bundles.title}</div>
    </div>
        </a>
</div>
    </div>
</div>`;

return htmlStr;
};

export default collectionGridMobile;
