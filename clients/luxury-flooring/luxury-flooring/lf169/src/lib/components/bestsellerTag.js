export const bestsellerTag = (id) => {
  const html = `
        <div class="flockr-base flockr-b-1 flockr-c-p ${id}__bestsellerTag">
            <div id="flockr-balloon-"
                class="flockr-base flockr-balloon flockr-quantity_orders flockr-QP ">
                <div class="flockr-base flockr-glp"></div>
                <div class="flockr-base flockr-mes">
                    <div class="flockr-dt">
                        <strong>Bestseller!</strong>
                        <span class="flockr-unit"></span>
                        Selling fast in this category
                    </div>
                </div>
            </div>
        </div>
     `;

  return html;
};
