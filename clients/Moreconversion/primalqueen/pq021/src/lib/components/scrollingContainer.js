import { roundIcon } from '../assets/icons';

const scrollingContainer = (id) => {
  const html = `
    <div class="${id}__scrolling-text-container scrolling-text-container">
        <div class="scrolling-text-inner" style="--marquee-speed: 20s; --direction:scroll-left" role="marquee">
            <div class="scrolling-text">
                <div class="scrolling-text-item">${roundIcon}MORE BALANCED HORMONES</div>
                <div class="scrolling-text-item">${roundIcon}LIFT IN ENERGY</div>
                <div class="scrolling-text-item">${roundIcon}REDUCTION IN IRON DEFICIENCY</div>
                <div class="scrolling-text-item">${roundIcon}HEALTHIER IMMUNE SYSTEM</div>
            </div>
            <div class="scrolling-text">
                <div class="scrolling-text-item">${roundIcon}MORE BALANCED HORMONES</div>
                <div class="scrolling-text-item">${roundIcon}LIFT IN ENERGY</div>
                <div class="scrolling-text-item">${roundIcon}REDUCTION IN IRON DEFICIENCY</div>
                <div class="scrolling-text-item">${roundIcon}HEALTHIER IMMUNE SYSTEM</div>
            </div>
            <div class="scrolling-text">
                <div class="scrolling-text-item">${roundIcon}MORE BALANCED HORMONES</div>
                <div class="scrolling-text-item">${roundIcon}LIFT IN ENERGY</div>
                <div class="scrolling-text-item">${roundIcon}REDUCTION IN IRON DEFICIENCY</div>
                <div class="scrolling-text-item">${roundIcon}HEALTHIER IMMUNE SYSTEM</div>
            </div>
        </div>
    </div>
  
  `;
  return html.trim();
};

export default scrollingContainer;
