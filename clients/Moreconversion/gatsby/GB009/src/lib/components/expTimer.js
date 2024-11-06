const expTimer = (id) => {
  const html = `
    <div
     class="essential_countdown_annoucement_bar_wrapper countdown_annoucement_bar_wrapper_cl935p4rn6772951qvq9l69rcgp top_page ${id}__timer" >
    <div>
        <p class="countdown_annoucement_bar_title_cl935p4rn6772951qvq9l69rcgp h2 ${id}__title">
          Black Friday in October – 50% OFF - Ends In:
        </p>
        <p class="countdown_annoucement_bar_subheading_cl935p4rn6772951qvq9l69rcgp"></p>
    </div>
    <div class="${id}__mainDiv" style="opacity:0;">
        <div class="countdown_wrapper_cl935p4rn6772951qvq9l69rcgp essential_countdown_timer notranslate"><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp ${id}__countdownTime">00</span><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp ${id}__countdownDivider">:</span><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp ${id}__countdownTime">00</span><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp ${id}__countdownDivider">:</span><span class="countdown_time_cl935p4rn6772951qvq9l69rcgp ${id}__countdownTime" id="${id}__minutes">00</span><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp ${id}__countdownDivider">:</span><span class="countdown_time_cl935p4rn6772951qvq9l69rcgp ${id}__countdownTime" id="${id}__seconds">00</span>
            <div class="countdown_legend_cl935p4rn6772951qvq9l69rcgp ${id}__countdownLegend">Days</div>
            <div class="countdown_legend_cl935p4rn6772951qvq9l69rcgp ${id}__countdownLegend">Hrs</div>
            <div class="countdown_legend_cl935p4rn6772951qvq9l69rcgp ${id}__countdownLegend">Mins</div>
            <div class="countdown_legend_cl935p4rn6772951qvq9l69rcgp last ${id}__countdownLegend">Secs</div>
        </div>
    </div>
</div>
  
  `;
  return html.trim();
};

export default expTimer;
