import { tickIcon } from '../assets/icons';

const wrapper = (id) => {
  const html = `
    <div class="${id}__wrapper clinical-study-section">
        <div class="${id}__container container">
            <h2>
                Breakthrough Placebo-Controlled
                <span class="highlight">Clinical Study</span> On Primal Queen
            </h2>

            <div class="trial-info">
                <span class="trial-item"><span class="trial-icon">${tickIcon}</span><span class="trial-text">100 women</span></span>
                <span class="trial-item"><span class="trial-icon">${tickIcon}</span><span class="trial-text">Tracked across 3 full cycles</span></span>
                <span class="trial-item"><span class="trial-icon">${tickIcon}</span><span class="trial-text">Placebo controlled trial</span></span>
            </div>

            <div class="chart-summary">
                <div class="chart-summary-container">
                    <div class="chart-info">
                        <div class="summary-title">What Changed After 12 Weeks of Primal Queen?</div>
                        <a target="_blank" href="https://cdn.shopify.com/s/files/1/0805/3971/3813/files/Primal_Queen_and_Its_Impact_on_PMS_Symptom_Relief_-_White_Paper.pdf?v=1746205631" class="cta-button">See Full Clinical Study</a>
                    </div>
                    <div class="chart-image">
                        <img class="desktop-image" src="https://cdn-3.convertexperiments.com/uf/10042057/10049555/group-1376156281_6814fa15d6c0a.png"/>
                        <img class="mobile-image" src="https://cdn-3.convertexperiments.com/uf/10042057/10049555/frame-2147224398_6814ff481249a.png"/>
                    </div>
                </div>
            </div>

            <div class="results">
                <div class="result-box">
                    <span class="result-item">+36.7<span>%</span></span>
                    <span class="divider"></span>
                    <small>All-Day Energy</small>
                </div>
                <div class="result-box highlight">
                     <span class="result-item">+83<span>%</span></span>
                    <span class="divider"></span>
                    <small>Satisfaction With Menstrual Cycle</small>
                </div>
                <div class="result-box">
                    <span class="result-item">+40.6<span>%</span></span>
                    <span class="divider"></span>
                    <small>Hormonal Balance</small>
                </div>
            </div>
            <a target="_blank" href="https://cdn.shopify.com/s/files/1/0805/3971/3813/files/Primal_Queen_and_Its_Impact_on_PMS_Symptom_Relief_-_White_Paper.pdf?v=1746205631" class="cta-button mobile-btn">See Full Clinical Study</a>
        </div>
    </div>

  `;
  return html.trim();
};

export default wrapper;
