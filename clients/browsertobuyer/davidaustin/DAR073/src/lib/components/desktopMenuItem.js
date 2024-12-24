const desktopMenuItem = (id, categoryItem, data) => {
  const html = `
        <ul class="w-grid flex flex-col gap-xs ${id}__item">
            <li>
                <a href="${categoryItem.link ? categoryItem.link : '#'}"
                class="block text-xl text-links mb-xxs">${categoryItem.title}</a>
            </li>
            ${data
              .map((item) => {
                return `
                    <li>
                      
                        <a href="${
                          item.href
                        }" class="block text-xl hover:text-links hover:underline">
                             ${
                               item.colorCode
                                 ? `<span style="--swatch-colour:${item.colorCode};${
                                     item.swatchImage
                                       ? `--swatch-image:url(${item.swatchImage})`
                                       : ''
                                   }" class="${id}__color"></span>`
                                 : ''
                             }
                            
                            ${item.title}      
                        </a>
                    </li>
                `;
              })
              .join('\n')}
        </ul>
    `;

  return html.trim();
};

export default desktopMenuItem;
