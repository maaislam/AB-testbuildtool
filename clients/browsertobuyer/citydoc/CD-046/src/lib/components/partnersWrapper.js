const partnersWrapper = (id, images) => {
  const html = `
    <div class="${id}__clinic-footer__partners">
        ${images
          .map((item) => {
            return `
                <div class="${id}_image">
                    <img src="${item}"/>
                </div>
            `;
          })
          .join('\n')}
    </div>
  `;
  return html.trim();
};
export default partnersWrapper;
