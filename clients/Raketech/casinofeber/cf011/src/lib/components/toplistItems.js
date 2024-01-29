import toplistItem from './toplistItem';

const toplistItems = (id, firstThreeCasinos) => {
    const htmlStr = `<div class='${id}__toplistItems swiper-wrapper'>
        ${firstThreeCasinos.map((casino, index) => toplistItem(id, casino, index)).join('')}
    </div>`;
    return htmlStr;
};
export default toplistItems;
