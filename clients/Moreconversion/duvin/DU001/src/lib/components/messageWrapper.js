import message from './message';
import { progressBarV2 } from './progressBar';

const messageWrapper = (id, progressWidth, deductedPrice, isThresholdMet, VARIATION) => {
  const html = `
    <div class="shopify-section shopify-section-group-group-header announcement-bar ${id}__announcement-bar">
        <section class="marquee"
                style="--marqueeBg:#fffcb2;--marqueeColor:#000000">
            <bullet-marquee bullet-reverse="false"
                            bullet-speed="27"
                            bullet-pause="true"
                            bullet-image="false"
                            style="--bullet-speed: 42.251s;">

                    ${
                      VARIATION === '1'
                        ? `${message(id, isThresholdMet, deductedPrice)}`
                        : `${progressBarV2(id, progressWidth, deductedPrice, isThresholdMet)}`
                    }
                    
            </bullet-marquee>
        </section>
    </div>
  `;
  return html.trim();
};

export default messageWrapper;
