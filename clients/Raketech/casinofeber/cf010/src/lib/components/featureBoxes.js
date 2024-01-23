import featureBox from './featureBox';

const featureBoxes = (id, data) => {
    const htmlStr = `
    <ul class='${id}__featureBoxes'>
        ${data?.map((product) => featureBox(id, product)).join('')}
    </ul>`;
    return htmlStr;
};

export default featureBoxes;
