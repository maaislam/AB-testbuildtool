export const forSingleItem = (id, text, count) => {
    const htmlStr = `<div class="${id}_speech_bubble_container">
    <div class="${id}_bubble_txt_wrapper">
        <div class="${id}_bubble_txt_header">Schon gewusst?</div>
        <div class="${id}_bubble_txt">
        <p>Kaufe 2 oder 3 ${text} und spare bis zu <strong>${count}</strong></p></div>
    </div>
    </div>`;

    return htmlStr;
}

export const forMultipleItems = (id, text, count) => {
    const htmlStr = `<div class="${id}_speech_bubble_container">
    <div class="${id}_bubble_txt_wrapper">
        <div class="${id}_bubble_txt_header">Schon gewusst?</div>
        <div class="${id}_bubble_txt">
        <p>Kaufe 3 ${text} und spare bis zu <strong>${count}</strong></p></div>
    </div>
    </div>`;

    return htmlStr;
}

export const animatedBtn = (id) => {
    const btn = ` 
    <div class="${id}_btn_outer_circle"></div>
    <div class="${id}_btn_inner_circle"></div>`;

    return btn;
}