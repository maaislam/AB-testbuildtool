const usp = (id, data) => {
    const { title, icon } = data;

    const htmlStr = `<div class='${id}__usp'>
        <div class='usp-icon'>${icon}</div>
        <p>${title}</p>
    </div>`;

    return htmlStr;
};
export default usp;
