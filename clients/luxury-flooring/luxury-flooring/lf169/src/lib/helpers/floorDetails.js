import { floorMeasurements, floorSpecifications } from '../data/data';

const floorDetails = (id) => {
    const htmlStr = `<div class='${id}__floorDetailsSection'>
        
        <div class='${id}__floorDetails product-details'>
            <div class='${id}__floorMeasurement product-detail-col'>
                <div class='${id}__floorDetailsTitle'>About this floor</div>
                <div class='${id}__floorMeasurementCol'>
                    <h4>Measurements</h4>
                    ${floorMeasurements?.map((floorMeasurement) => {
                        return `
                        <div>
                            <span class='${id}__measurementTitle'>${Object.keys(floorMeasurement)}</span>
                            <span class='${id}__measurementValue'>${Object.values(floorMeasurement)}</span>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <div class='${id}__floorSpecification product-detail-col'>
                <div class='${id}__floorSpecificationCol'>
                    <h4>Specifications</h4>
                    ${floorSpecifications?.map((floorSpecification) => {
                        return `
                        <div>
                            <span class='${id}__specificationTitle'>${Object.keys(floorSpecification)}</span>
                            <span class='${id}__specificationValue'>${Object.values(floorSpecification)}</span>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <div class="product-detail-col">
                <div class="${id}__roomPreview room-preview">
                    <img src="https://www.luxuryflooringandfurnishings.co.uk/media/pdp/preview.png" width="353" height="353" loading="lazy" alt="room preview">
                    <div class="${id}__roomPreviewBtn room-preview-text">See this floor in your home</div>
                </div>
            </div>
        </div>
    </div>`;

    return htmlStr;
};
export default floorDetails;
