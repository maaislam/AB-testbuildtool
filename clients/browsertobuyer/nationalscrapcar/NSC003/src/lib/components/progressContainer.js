import { carIcon, trustPilotIcon } from '../assets/icons';

const progressContainer = (id) => {
  const html = `
        <div class="${id}__decoy decoy_loading_container">
            <div class="decoy_loader_parent">
                <div class="decoy_loader_background"></div>
                <div class="decoy_loader_foreground animated"></div>
            </div>
            <div class="decoy_loader_screen">
                <div class="screen screen1">
                    <h1 class="screen_title">Getting your best price from our panel of nationwide dealers</h1>
                    <div class="screen_box">
                        <p class="screen_review_title">Got a good deal and the process including payment and delivery was straightforward.</p>
                    </div>
                </div>
                <div class="screen screen2">
                    <h1 class="screen_title">We’ve taken almost 40,000 tonnes of cars & vans off the roads and paid out over £17 million</h1>
                    <div class="screen_box">
                        <div class="image-wrapper">
                          ${carIcon}
                          
                        </div>  
                    </div>
                </div>
                <div class="decoy_loader_footer">
                    <div class="image-wrapper">
                        ${trustPilotIcon}
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default progressContainer;
