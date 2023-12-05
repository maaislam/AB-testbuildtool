export const messageStr = (ID) => {
  const html = `
    <div class="row text-center ${ID}__row">
        <div class="col-12" >
            <p>If you don’t like it, get your money back -- no question ask</p>
        </div>
    </div>
    `;

  return html.trim();
};
