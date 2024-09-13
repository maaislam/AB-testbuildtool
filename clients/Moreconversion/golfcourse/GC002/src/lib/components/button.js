import { arrow } from '../assets/icons';

const button = (id, variation) => {
  const htmlV1 = `
    <a class="${id}__buttonV1" href="/a/search?q=&options%5Bprefix%5D=last">
        7,000+ Golf Courses Maps
        ${arrow}
    </a>
  `;
  const htmlV2 = `
    <div class="${id}__buttonsWrapper">
        <a href="/collections/all" class="${id}__button">
            Shop All Courses
        </a>
        <a href="/products/custom-golf-course-map-design" class="${id}__button">
            Custom Course
        </a>
    </div>
   
  `;
  return variation === '1' ? htmlV1 : htmlV2;
};

export default button;
