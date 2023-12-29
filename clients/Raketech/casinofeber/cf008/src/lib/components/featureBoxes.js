import featureBox from './featureBox';

const featureBoxes = (id, data, index) => {
    const htmlStr = `
    <ul class='${id}__featureBoxes'>
        ${data?.map((product) => featureBox(id, product, index)).join('')}
    </ul>`;
    return htmlStr;
};

export default featureBoxes;
