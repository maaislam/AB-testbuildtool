const optionItem = (id, { icon, title }) => {
  const htmlStr = `
<li class="${title.includes('Kiwi') ? `${id}__hide-mobile` : ''}">
    <div class="${id}__checkbox-label radio-box " data-option="${title}">
        <div class="image-wrapper">
            <img src="${icon}" alt="${title}" width="${
    title.includes('Mobile') ? 28 : 45
  }" height="45">
        </div>   
        <strong>${title}</strong> 
    </div>
</li>`;

  return htmlStr.trim();
};
export default optionItem;
