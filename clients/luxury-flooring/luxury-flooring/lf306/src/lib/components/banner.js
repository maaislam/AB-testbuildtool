import saleCard from './saleCard';

const banner = (id) => {
    const htmlStr = `
        <div class="${id}__banner">
            <div class="${id}__saleBanner">
                ${saleCard(id)}
            </div>
            <div class="image-section">
                <div class="before-after">
                    <div class="before">
                        <img src="before.jpg" alt="Before">
                        <span>Before</span>
                    </div>
                    <div class="after">
                        <img src="after.jpg" alt="After">
                        <span>After</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    return htmlStr;
};
export default banner;
