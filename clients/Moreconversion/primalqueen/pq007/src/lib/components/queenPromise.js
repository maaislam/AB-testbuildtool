import redem from './redem';

const queenPromise = (ID) => {
  const html = `
        <div class="queen_promise_section ${ID}__queen_promise_section">
        <div class="container">

            <div class="${ID}__header">
                <p class="queen_promise_heading">Primal Queen Promise</p>
                ${redem(ID)}
            
            </div>
            
            <ul class="promise_row">
                <li>
                    <img src="//primalqueen.com/cdn/shop/files/promise_icon1_8b08e67b-3583-4207-828f-fd9be614dcd4_85x85.png?v=16519973737616957694" width="85" height="85" alt="icon">
                    <p>Grass Fed</p>
                </li>
                <li>
                    <img src="//primalqueen.com/cdn/shop/files/promise_icon2_78d44297-46ed-4990-a56e-6e9e92dce9a9_85x85.png?v=5122036932068749156" width="85" height="85" alt="icon">
                    <p>Pasture Raised</p>
                </li>
                <li>
                    <img src="//primalqueen.com/cdn/shop/files/promise_icon3_3f2c1ea7-5110-442f-a2e3-5eec72ff8f2d_85x85.png?v=880650795564248433" width="85" height="85" alt="icon">
                    <p>No Hormones</p>
                </li>
                <li>
                    <img src="//primalqueen.com/cdn/shop/files/promise_icon4_04c86663-2747-44ef-bc50-e06c23a0e193_85x85.png?v=187529915123564151" width="85" height="85" alt="icon">
                    <p>No Antibiotics</p>
                </li>
                <li>
                    <img src="//primalqueen.com/cdn/shop/files/promise_icon5_5c78aa90-692f-4bc1-8fda-af6eed081e35_85x85.png?v=10901498226620764846" width="85" height="85" alt="icon">
                    <p>Gluten Free</p>
                </li>
                <li>
                    <img src="//primalqueen.com/cdn/shop/files/promise_icon6_7c291151-3191-4e0a-90c5-2336de456860_85x85.png?v=1031697505739269910" width="85" height="85" alt="icon">
                    <p>Non-GMO</p>
                </li>
            </ul>
        </div>
    </div>
    
    `;

  return html.trim();
};

export default queenPromise;
