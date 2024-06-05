const volumnPill = (id, icon, text) => {
    const htmlStr = `<div class="${id}__volumnPillBtn ${id}__hide">
        <span class="${id}__volumnPillBtn-icon">${icon}</span>
        <div class="${id}__volumnPillBtn-text">${text}</div>
    </div>`;
    return htmlStr;
};

export default volumnPill;
