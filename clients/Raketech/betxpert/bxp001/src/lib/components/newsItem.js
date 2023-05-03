const newsItem = (id, data) => {
  const { title, image, newsLink, commentCount } = data;

  const htmlStr = `
    
    <a href="${newsLink}" class="${id}__newsitem">
        <div class="${id}__newsitem-image" style="background-image:url(${image})"> 
        </div>
        <div class="${id}__newsitem-content">
            <div class="title">${title}</div>
            <div class="comment">
                <span class="commnet-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.7998 0.891113C1.24752 0.891113 0.799805 1.33883 0.799805 1.89111V7.90827C0.799805 8.08645 1.01523 8.17568 1.14123 8.04969L2.00691 7.18401C2.19445 6.99647 2.4488 6.89111 2.71402 6.89111H7.7998C8.35209 6.89111 8.7998 6.4434 8.7998 5.89111V1.89111C8.7998 1.33883 8.35209 0.891113 7.7998 0.891113H1.7998Z" fill="#6E6E6E"/>
                    </svg>
                </span>
                <span class="comment-count">${commentCount} 
                    commnet${commentCount > 1 ? 's' : ''}</span>
            </div>
        </div>
    </a>
    `;
  return htmlStr.trim();
};

export default newsItem;
