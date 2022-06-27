import shared from '../shared/shared';
import { getProducts } from './products';


const { ID } = shared;
const {id: productId, selectedVariant} = window.product

const updatedVar = {
  option1: selectedVariant.option1,
  option2: selectedVariant.option2,
  option3: selectedVariant.option3
}


export const makeSlider = async (variants)=>{
     
  const refNode = document.querySelectorAll('.product-description')[1];
    const makeSlide = async()=>{
      const updatedProds = await getProducts({productId, selectedVariant: updatedVar})
      let divPosition = 0
      const updatedSlider = updatedProds.map(({title, featured_image, name, price}, index)=>{
        if(index === 0){
          divPosition = index
        }else{
          divPosition += 381
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

    document.querySelector(`.${ID}-products--container .flickity-slider`).innerHTML = updatedSlider

    }

    const getUpdate = (selector, attribute, option)=>{
      Array.from(selector).forEach((inp)=>{
          inp.addEventListener('change', (event)=>{
            if(attribute === 'value'){
              updatedVar[option] = event.target[attribute]
            }else{
              updatedVar[option] = event.target.dataset.value
            }
            makeSlide()
          })
      })
    
    }

    
  
    const slideContainer = variants.map(({title, featured_image, name, price})=>{
      var prodName = name.split('|')[0];
      return `<div class="product">
                <img class="product-img" src="${featured_image.src}"/>
               <div class="product-info">
               <p class="prod_title">${prodName}</p>
               <p class="product-info__subtitle">${title}</p>
               <p class="product-info__price">&#8364;${price}</p>
               </div>
              </div>`
    }).join('\n')
  
    const prodHTML = `<div class="all-products"> 
                      <h2 class="main-title">Passt dazu</h2> 
                      <p class="main-subtitle">Mach dein outfit komplete</p> 
                      <div class="${ID}-products--container">${slideContainer}</div> 
                    </div>`
  
                    refNode.insertAdjacentHTML('afterend', prodHTML)
  
    let elem = document.querySelector(`.${ID}-products--container`);


    const initFlicky = (element) => {
      let flkty = new window.Flickity( element, {
        groupCells: 2,
          cellAlign: 'left',
          initialIndex: 0,
          contain:true,
          percentPosition: false,
          pageDots: false,
          draggable: false,
        });
  }

    initFlicky(elem)

    const [size, quantity] = document.querySelectorAll('.SizeSwatchList')
    const optionsSize = size.querySelectorAll('li input')
    const optionsQuantity = quantity.querySelectorAll('li input')
    const optionsColor = document.querySelectorAll('.color-options__swatches ul li input')

    getUpdate(optionsColor, 'value', 'option1')
    getUpdate(optionsSize, 'value', 'option2')
    getUpdate(optionsQuantity, 'data-value', 'option3')
  }