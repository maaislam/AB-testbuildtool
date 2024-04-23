export const sellingPoints = (id, data) => {
  const html = `
        <div class="${id}__sellingPoints">
            <ul class="${id}__sellingPoints-list">
                ${data
                  .map((item) => {
                    return `<li class="${id}__sellingPoints-list-item ${item.id}">${item.title}</li>`;
                  })
                  .join('\n')}
            </ul>
        </div>
    `;

  return html;
};
