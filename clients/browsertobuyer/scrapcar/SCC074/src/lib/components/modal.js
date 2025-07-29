import { blackTooltipIcon, crossIcon } from '../assets/icons';

const modal = (id) => {
  const html = `
    <div class="modal fade ${id}__modal custom-modal"
        id="form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered"
            role="document">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h5 class="modal-title"
                        id="exampleModalLabel">Certified Scrap Buyer</h5>
                    <button type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">${crossIcon}</span>
                    </button>
                </div>
                <div class="modal-body">
                   <p>Buyers we hold in the highest regard.</p>
                   <ul>
                    <li>
                        <span class="only-text">95% Positive Feedback.</span>
                        <span class="only-icon">
                            ${blackTooltipIcon}
                            <span class="tooltiptext tooltip-bottom">An in-depth analysis of their customer reviews.</span>
                        </span>
                    </li>
                    <li>
                        <span class="only-text">Site visited and inspection made.</span>
                        <span class="only-icon">
                            ${blackTooltipIcon}
                            <span class="tooltiptext tooltip-bottom">All certified buyers have been visited by a member of the Scrap Car Comparison team on-site</span>
                        </span>
                    </li>
                    <li>
                       <span class="only-text">Service Level Agreements.</span>
                       <span class="only-icon">
                            ${blackTooltipIcon}
                            <span class="tooltiptext tooltip-bottom">Each of our certified buyers have had their collections monitored for 6 months.</span>
                       </span>
                    </li>
                   </ul>
                </div>
                
            </div>
        </div>
    </div>
    `;
  return html.trim();
};

export default modal;
