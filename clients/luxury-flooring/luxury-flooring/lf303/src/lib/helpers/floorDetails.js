import {
  accordionData,
  floorMeasurements,
  floorSpecifications,
  productDescData
} from '../data/data';
import { tooltip } from '../components/tooltip';
import { accordionWrapper } from '../components/accordionWrapper';
import { productDesWrapper } from '../components/productDesWrapper';

const floorDetails = (id) => {
  const videoSource =
    'https://www.luxuryflooringandfurnishings.co.uk/media/videos/2024-06-25/roomvo_video_v2.mp4';

  const htmlStr = `<div class='${id}__floorDetailsSection'>
        
        <div class='${id}__floorDetails product-details'>
            <div class='${id}__floorMeasurement product-detail-col'>
                <div class='${id}__floorDetailsTitle'>About this floor</div>
                <div class='${id}__floorMeasurementCol'>
                    <h4>Measurements</h4>
                    ${floorMeasurements
                      ?.map((floorMeasurement) => {
                        return `
                        <div>
                            <span class='${id}__measurementTitle'>${Object.keys(
                          floorMeasurement
                        )}</span>
                            <span class='${id}__measurementValue'>${Object.values(
                          floorMeasurement
                        )}</span>
                        </div>
                        `;
                      })
                      .join('')}
                </div>
            </div>
            <div class='${id}__floorSpecification product-detail-col ${id}__floorSpecification-last-child'>
                <div class='${id}__floorSpecificationCol'>
                    <h4>Specifications</h4>
                    ${floorSpecifications
                      ?.map((floorSpecification) => {
                        const { isTooltip } = floorSpecification;
                        return `
                        <div>
                            <span class='${id}__specificationTitle'>${
                          Object.keys(floorSpecification)[0]
                        }</span>
                            <span class='${id}__specificationValue'>${
                          Object.values(floorSpecification)[0]
                        }</span>

                        ${isTooltip ? tooltip() : ''}
                        </div>
                        `;
                      })
                      .join('')}
                </div>
            </div>
            <div class="product-detail-col ${id}__product-detail-col-desktop">
                <div class="${id}__roomPreview room-preview">
                    <video loop muted width="640" height="480">
                        <source type="video/mp4" src="${videoSource}">
                    </video>
                    <div class="${id}__roomPreviewBtn room-preview-text">See this floor in your home</div>
                </div>
            </div>
        </div>

        ${accordionWrapper(id, accordionData)}
        ${productDesWrapper(id, productDescData)}
        <div class="product-detail-col ${id}__product-detail-col-mobile">
            <div class="${id}__roomPreview room-preview">
                <video loop muted width="640" height="480">
                    <source type="video/mp4" src="${videoSource}">
                </video>
                <div class="${id}__roomPreviewBtn room-preview-text">See this floor in your home</div>
            </div>
        </div>
    </div>`;

  return htmlStr;
};
export default floorDetails;
