const timerWrapper = (id) => {
  const html = `
    <div class="${id}__timer-wrapper">
      <div class="timer-text">DEAL ENDING IN:</div>
      <div class="timer-label">
        <div class="timer-days">
            <div class="timer-days-box timer-box">00</div>
            <div class="timer-days-text timer-text">Days</div>
        </div>
        <div class="timer-hours">
            <div class="timer-hours-box timer-box">00</div>
            <div class="timer-hours-text timer-text">Hours</div>
        </div>
        <div class="timer-minutes">
            <div class="timer-minutes-box timer-box">00</div>
            <div class="timer-minutes-text timer-text">Minutes</div>
        </div>
        <div class="timer-seconds">
            <div class="timer-seconds-box timer-box">00</div>
            <div class="timer-seconds-text timer-text">Seconds</div>
        </div>
      </div>
      </div>
    </div>
  `;
  return html;
};

export default timerWrapper;
