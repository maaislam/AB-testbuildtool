import { summerIcon } from '../assets/icons';
import discountBadge from './discountBadge';

const saleCard = (id) => {
    const htmlStr = `
        <div class="card ${id}__saleCard">
            <div class="sale-box-container">
                <div class="sale-box-content">
                    <div class="sale-box">
                        ${summerIcon}
                        <div class="designed_icon">
                            <h2>Sale</h2>
                        </div>
                        <div class="built_icon">
                            <h3>SAVE UP TO 70%</h3>
                            <p>ON SELECTED LINES</p>
                        </div>
                        <div class="actions">
                            <a href="https://www.luxuryflooringandfurnishings.co.uk/sale.html" title="Shop the sale >">
                                <span class="shop-sale-btn">
                                    <span class="shop-sale-btn-text">Shop the sale</span>
                                    <span class="shop-sale-btn-icon">
                                        <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1F1F1F" stroke-width="0.00024000000000000003">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5859 6.34314L12.0002 4.92892L19.0712 12L12.0002 19.0711L10.5859 17.6568L16.2428 12L10.5859 6.34314Z" fill="#000000"></path> 
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                ${discountBadge(id)}
            </div>
            <div class="offer_end">
                <p>HURRY! OFFERS END FRIDAY 16TH AUGUST</p>
            </div>
        </div>
    `;
    return htmlStr;
};
export default saleCard;
