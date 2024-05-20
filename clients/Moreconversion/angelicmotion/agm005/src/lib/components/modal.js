import cards from './cards';

const modal = (id, data) => {
    const htmlStr = `
        <div class="${id}__modal">
            <div class="${id}__modal-overlay"></div>
            <div class="${id}__modal-container">
                <div class="header">
                    <div class="title">Select Four Hoodies</div>
                    <div class="close">&times;</div>
                </div>
                
                <div class="content">
                    ${cards(id, data)}
                </div>
            </div>
        </div>
    `;
    return htmlStr;
};
export default modal;
