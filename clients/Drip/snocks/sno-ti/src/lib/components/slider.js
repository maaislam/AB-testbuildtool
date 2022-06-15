import shared from '../shared/shared';
import { getRecommendation } from '../helpers/recommendation';

const { ID } = shared;
const {id: productId, selectedVariant} = window.product

const changedVariants = {
  option1: selectedVariant.option1,
  option2: selectedVariant.option2,
  option3: selectedVariant.option3
}

const initFlicky = (element) => {
    let flkty = new window.Flickity( element, {
        cellAlign: 'center',
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        draggable: false,
        // leftToRight: true,
        percentPosition: false,
      });
}



export const slider = async (variants)=>{
  
    const productWrapper = document.querySelector(`.${ID} .Product__Wrapper`)

    const reRenderSlide = async()=>{
      const filteredProducts = await getRecommendation({productId, selectedVariant: changedVariants})
      let divPosition = 0
      const renderedSlider = filteredProducts.map(({title, featured_image, name, price}, index)=>{
        if(index === 0){
          divPosition = index
        }else{
          divPosition += 315
        }
        return `<div class="product" style="position: absolute; left: ${divPosition}px">
                  <img class="product-img" src="${featured_image.src}"/>
                 <div class="product-info">
                 <p class="product-info__title">${name.split('|')[0]}</p>
                 <p class="product-info__subtitle">${title}</p>
                 <p class="product-info__price">&#8364;${price}</p>
                 </div>
                </div>`
      }).join('\n')

    document.querySelector(`.${ID}-products--container .flickity-slider`).innerHTML = renderedSlider

    }

    const getChangedVariants = (selector, attribute, option)=>{
      Array.from(selector).forEach((inp)=>{
          inp.addEventListener('change', (event)=>{
            if(attribute === 'value'){
              changedVariants[option] = event.target[attribute]
            }else{
              changedVariants[option] = event.target.dataset.value
            }
            
            console.log('target', event)
            console.log(changedVariants)

            reRenderSlide()
          })
      })
    
    }
  
    const varientsDiv = variants.map(({title, featured_image, name, price})=>{
      return `<div class="product">
                <img class="product-img" src="${featured_image.src}"/>
               <div class="product-info">
               <p class="product-info__title">${name.split('|')[0]}</p>
               <p class="product-info__subtitle">${title}</p>
               <p class="product-info__price">&#8364;${price}</p>
               </div>
              </div>`
    }).join('\n')
  
    const slider = `<div class="${ID}-products"> 
                      <h2 class="${ID}-products__title" >Passt dazu</h2> 
                      <p class="${ID}-products__suntitle">Mach dein outfit komplete</p> 
                      <div class="${ID}-products--container">${varientsDiv}</div> 
                    </div>`
  
    productWrapper.insertAdjacentHTML('afterend', slider)
  
    let elem = document.querySelector(`.${ID}-products--container`);

    initFlicky(elem)
  
    const nextBtn = document.querySelector('.flickity-prev-next-button.next')
    nextBtn.style.right = 0
    nextBtn.style.top = '30%'
    const prevBtn = document.querySelector('.flickity-prev-next-button.previous')
    prevBtn.style.left = 0
    prevBtn.style.top = '30%'


    const [size, quantity] = document.querySelectorAll('.SizeSwatchList')
    const sizeSwitcher = size.querySelectorAll('li input')
    // const quantitySwitcher = quantity.querySelectorAll('li input')
    const colorSwitcher = document.querySelectorAll('.color-options__swatches ul li input')

    getChangedVariants(colorSwitcher, 'value', 'option1')
    getChangedVariants(sizeSwitcher, 'value', 'option2')
    // getChangedVariants(quantitySwitcher, 'data-value', 'option3')
  }