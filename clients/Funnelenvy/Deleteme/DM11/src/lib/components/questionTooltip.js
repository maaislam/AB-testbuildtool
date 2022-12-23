const questionTooltip = (id) => {
  const htmlStr = `
        <div class="${id}__questiontooltip ${id}__hide">
            <div class="${id}__questiontooltip--text">
                <p class="small">
                    Search scan results may vary from sites found on a typical DeleteMe Privacy report. 
                </p>
            </div>
        </div>`;

  return htmlStr.trim();
};

export default questionTooltip;
