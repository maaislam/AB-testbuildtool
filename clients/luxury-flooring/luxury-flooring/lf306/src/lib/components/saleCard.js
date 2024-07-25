import { summerIcon } from '../assets/icons';

const saleCard = (id) => {
    const htmlStr = `
        <div class="card ${id}__saleCard">
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
                    <span>Shop the sale &gt;</span>
                </a>
            </div>
            <div class="offer_end">
                <p>HURRY! OFFERS END FRIDAY 16TH AUGUST</p>
            </div>
        </div>
    `;
    return htmlStr;
};
export default saleCard;
