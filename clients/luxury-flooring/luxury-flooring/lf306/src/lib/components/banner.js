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
                        <img src="https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/lf306/25.07.2024_18.10.37_REC.png" alt="Before">
                        <span class="text">Before</span>
                    </div>
                    <div class="after">
                        <img src="https://abtest-luxuryflooring-salyenz.s3.us-west-2.amazonaws.com/lf306/25.07.2024_18.10.58_REC.png" alt="After">
                        <span class="text">After</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    return htmlStr;
};
export default banner;
