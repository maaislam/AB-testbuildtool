import redemSection from './redemSection';

const footerWrapper = (id, data) => {
  const html = `
    <div class="footer-wrapper">
        <div class="footer-container">
            <ul class="footer-menu-list">
                ${data
                  .map((item) => {
                    return `<li class="footer-menu-item" data-id="${item.id}">${item.name}</li>`;
                  })
                  .join('\n')}
            </ul>
            ${redemSection(id)}
        </div>
    </div>
    `;
  return html.trim();
};

export default footerWrapper;
