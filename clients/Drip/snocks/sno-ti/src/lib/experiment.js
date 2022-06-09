import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { slider } from './components/slider';
import {getRecommendation} from './helpers/recommendation'

const { ID, VARIATION } = shared;

const setUniqueClass = ()=>{
  document.querySelector('body').classList.add(`${ID}`)
}


export default async () => {
  try {
    setup();

    console.log(ID);
    // -----------------------------
    // If control, bail out from here
    // -----------------------------
    if (VARIATION == 'control') {
      return;
    }
    setUniqueClass()
    const {id: productId, selectedVariant} = window.product
  
    const filteredProducts = await getRecommendation({productId, selectedVariant})
  
  
    slider(filteredProducts)
  } catch (error) {
    console.error(error)
  }

};
