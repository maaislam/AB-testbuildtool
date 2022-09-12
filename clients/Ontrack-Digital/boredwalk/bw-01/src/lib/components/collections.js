import shared from '../shared/shared'
import { v1, v2 } from "../data"


const {ID, VARIATION} = shared

const variationData = ()=>{
    if(VARIATION === '01'){
        return v1
    }else if(VARIATION === '02'){
        return v2
    }
        return null
    
}

const collectionComponent = variationData()?.map(({collectionName, src,href})=>{
    return `<a class="collection-item" href="${href}">
                <div class="item-text">
                    <h1>${collectionName}</h1>
                    <p>shop now</p>
                </div>
                <img src="${src}"/>
            </a>`
}).join('\n')

const components = `<div class="${ID}-collection">${collectionComponent}</div>`

export const collectionSection = (selector)=>{
    const heroStart = document.querySelector(selector)
  heroStart.insertAdjacentHTML("afterend", components);
}