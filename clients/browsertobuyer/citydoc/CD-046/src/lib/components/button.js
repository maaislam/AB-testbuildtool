const button = (id) => {
  const html = `
        <div class="${id}__buttonWrapper">
            <a href="/booking-journey/" title="Make a booking" class="${id}__button">
            Book Appointment
            </a>
        </div>
    `;
  return html.trim();
};

export default button;
