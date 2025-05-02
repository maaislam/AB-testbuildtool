import { symbol } from '../assets/icons';

const promoBanner = (id) => {
  const html = `
    <div class="${id}__promoBanner stat-card">
        <div class="stat-content">
            <div class="stat-number">83%</div>
            <span>${symbol}</span>    
        </div>
        <div class="stat-text">reported increase in satisfaction<br>with their menstrual cycle</div>
    </div>
  `;
  return html.trim();
};

export default promoBanner;
