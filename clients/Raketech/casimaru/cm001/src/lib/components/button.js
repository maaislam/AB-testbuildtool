export const button = (id) => {
  const html = `
    <div class="${id}__buttonWrapper">
        <a class="btn btn--yellow btn--cubic ${id}__button" href="" target="_blank" rel="nofollow noopener">
            <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                    カジノへGo
                </font>
            </font>
        </a>
    </div>     
  `;
  return html;
};
