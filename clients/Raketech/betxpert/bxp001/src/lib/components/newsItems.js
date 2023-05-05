import newsItem from './newsItem';

const newsItems = (id, newsFeed) => {
  const htmlStr = `   
    <div class="${id}__newsitems card-block">
        <div class="${id}__toprow">
            <h1>Seneste nyheder</h1>
        </div>
        <div class="${id}__newsitems-wrapper">
            ${newsFeed.map((item) => newsItem(id, item)).join('\n')}
        </div>
        <a href="/artikler" class="${id}__learnmore seeallnews">Flere Nyheder</a>
    </div>
    `;

  return htmlStr.trim();
};

export default newsItems;
