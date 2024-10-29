import appoinmentItem from './appoinmentItem';
import button from './button';

const appointment = (id, data) => {
  const html = `
    <div class="${id}__appointmentWrapper">
      <div class="o-wrapper ${id}__appointmentContainer">
        <div class="${id}__appointment-header">What happens at my appointment?</div>
        <div class="${id}__appointment-list">
          ${data.map((item) => appoinmentItem(id, item)).join('\n')}
        </div>
        ${button(id)}
      </div>
    </div>
  `;
  return html.trim();
};

export default appointment;
