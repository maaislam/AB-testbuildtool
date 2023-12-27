import featureBox from './featureBox';

const featureBoxes = (id, data) => {
    const htmlStr = `
    <div class='${id}__featureBoxes'>
        ${data?.map((product) => featureBox(id, product)).join('')}
    </div>`;
    return htmlStr;
};

export default featureBoxes;
