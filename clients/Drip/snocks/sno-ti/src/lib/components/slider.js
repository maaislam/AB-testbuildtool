import shared from '../shared/shared';

const { ID } = shared;

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
  }