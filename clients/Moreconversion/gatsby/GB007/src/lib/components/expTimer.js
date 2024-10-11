const expTimer = (id) => {
  const html = `
    <div
     class="essential_countdown_annoucement_bar_wrapper countdown_annoucement_bar_wrapper_cl935p4rn6772951qvq9l69rcgp top_page ${id}__timer" >
    <div>
        <p class="countdown_annoucement_bar_title_cl935p4rn6772951qvq9l69rcgp h2">Black Friday in October - 50% OFF -
            Ends In:</p>
        <p class="countdown_annoucement_bar_subheading_cl935p4rn6772951qvq9l69rcgp"></p>
    </div>
    <div class="${id}__mainDiv" style="opacity:0;">
        <div class="countdown_wrapper_cl935p4rn6772951qvq9l69rcgp essential_countdown_timer notranslate"><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp">00</span><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp">:</span><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp">00</span><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp">:</span><span class="countdown_time_cl935p4rn6772951qvq9l69rcgp" id="${id}__minutes">00</span><span
                  class="countdown_time_cl935p4rn6772951qvq9l69rcgp">:</span><span class="countdown_time_cl935p4rn6772951qvq9l69rcgp" id="${id}__seconds">00</span>
            <div class="countdown_legend_cl935p4rn6772951qvq9l69rcgp">Days</div>
            <div class="countdown_legend_cl935p4rn6772951qvq9l69rcgp">Hrs</div>
            <div class="countdown_legend_cl935p4rn6772951qvq9l69rcgp">Mins</div>
            <div class="countdown_legend_cl935p4rn6772951qvq9l69rcgp last">Secs</div>
        </div>
    </div>
</div>
  
  `;
  return html.trim();
};

export default expTimer;
