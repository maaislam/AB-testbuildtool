const card = (id, item) => {
  const htmlStr = `<div class="${id}__card">
        <div class="${id}__image">
            <img loading="eager"
                    src="${item.image}" 
                    class="lazyautosizes lazyloaded" data-sizes="auto">
        </div>
        <div class="card-content">
            <h5 class='${id}__cardTitle'>${item.title}</h5>
            <p class='${id}__cardDescription'>${item.description}</p>
        </div>
    </div>`;

  return htmlStr;
};

export default card;
