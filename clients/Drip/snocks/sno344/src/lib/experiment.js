//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { observeDOM, pollerLite } from '../../../../../../globalUtil/util';
import { animatedBtn, forMultipleItems, forSingleItem} from './components/txtAndBtn';
import { getCartData } from './helpers/cartData';
import { isCartDrawer, isCartPage, thingsToPollFor } from './helpers/utils';
import shared from './shared/shared';
import { getProductTitle, matchTitle, wordingBubble } from './wordingUpsellBubble';

const { ID, VARIATION } = shared;

const init = (data) => {

    const qtySelector = document.querySelector('.QuantitySelector input')?.getAttribute('value');
    const matchedObj = wordingBubble.find(product => product.productTitle === document.querySelector(`.CartItem__Title.Heading`).innerText);
   
    if(isCartDrawer){
        if (qtySelector == 1 && !document.querySelector(`.${ID}_speech_bubble_container`)) {
            document.querySelector(`.CartItem__Meta .${ID}_speech_bubble_container`)?.remove();    
            document.querySelector(`.CartItem__Actions .${ID}_speech_bubble_container`)?.remove();                

                console.log("one text");
                document.querySelector('.CartItem__Meta').insertAdjacentHTML("beforeend", forSingleItem(ID, matchedObj.text, matchedObj.count));
                document.querySelector('.CartItem__Actions').insertAdjacentHTML("beforeend", forSingleItem(ID, matchedObj.text, matchedObj.count));
                document.querySelector('.QuantitySelector__Button.Link.Link--primary:last-child').insertAdjacentHTML("beforeend", animatedBtn(ID));
                document.querySelector('.QuantitySelector__Button.Link.Link--primary:last-child').classList.add(`${ID}_show-arrow`);
            
           
        } else if (qtySelector == 2) {
            document.querySelector(`.CartItem__Meta .${ID}_speech_bubble_container`)?.remove();
            document.querySelector(`.CartItem__Actions .${ID}_speech_bubble_container`)?.remove();                

            console.log("another text");
            document.querySelector('.CartItem__Meta').insertAdjacentHTML("beforeend", forMultipleItems(ID, matchedObj.text, matchedObj.count));
            document.querySelector('.CartItem__Actions').insertAdjacentHTML("beforeend", forMultipleItems(ID, matchedObj.text, matchedObj.count));
            document.querySelector('.QuantitySelector__Button.Link.Link--primary:last-child').insertAdjacentHTML("beforeend", animatedBtn(ID));
                document.querySelector('.QuantitySelector__Button.Link.Link--primary:last-child').classList.add(`${ID}_show-arrow`);

        } else {
            console.log("Show no speech bubble.");
        }
    };

    if(isCartPage){
        console.log('cart page test')
        if (qtySelector == 1 && !document.querySelector(`.${ID}_speech_bubble_container`)) {
            console.log('in if condition')
            document.querySelector(`.CartItem__LinePriceList.Heading .${ID}_speech_bubble_container`)?.remove();    
            // document.querySelector(`.CartItem__Actions .${ID}_speech_bubble_container`)?.remove();                

                console.log("one text");
                document.querySelector('.CartItem__LinePriceList.Heading').insertAdjacentHTML("beforeend", forSingleItem(ID, matchedObj.text, matchedObj.count));
                document.querySelector('.QuantitySelector__Button.Link.Link--primary:last-child').insertAdjacentHTML("beforeend", animatedBtn(ID));
                document.querySelector('.QuantitySelector__Button.Link.Link--primary:last-child').classList.add(`${ID}_show-arrow`);
            
           
        } else if (qtySelector == 2) {
            document.querySelector(`.CartItem__LinePriceList.Heading .${ID}_speech_bubble_container`)?.remove();    
            // document.querySelector(`.CartItem__Actions .${ID}_speech_bubble_container`)?.remove();                

                console.log("one text");
                document.querySelector('.CartItem__LinePriceList.Heading').insertAdjacentHTML("beforeend", forMultipleItems(ID, matchedObj.text, matchedObj.count));
                document.querySelector('.QuantitySelector__Button.Link.Link--primary:last-child').insertAdjacentHTML("beforeend", animatedBtn(ID));
                document.querySelector('.QuantitySelector__Button.Link.Link--primary:last-child').classList.add(`${ID}_show-arrow`);
            
        } else {
            console.log("Show no speech bubble.");
        }
    }
    
     
    
    console.log('Variation running')
}


export default () => {

    pollerLite(thingsToPollFor, () => {
        isCartPage && getCartData(init);

        
            // init(data);
            // console.log('In the pollerlite')
            // const observerConfig = {
            //     attributes: true,
            //     attributeOldValue:true,
            //     childList: true,
            //     subtree: true,
            // }
            // const observerCallback = (mutation)=>{
            //     const {attributeName, oldValue, target} = mutation;
            //     if(attributeName === 'aria-hidden' && oldValue=='true' && target.matches('#sidebar-cart')){
                
            //         console.log('hey cart is open')
    
            //         getCartData(init)
            //     }
            // }

            // observeDOM('body', observerCallback, observerConfig)

            
            // observeDOM('.Cart__ItemList', getCartData(init));

            document.body.addEventListener("click", function(e){

                const target = e.target;
                const targetMatched = (stringToMatch) => target.matches(stringToMatch)||target.closest(stringToMatch);
                if(targetMatched('[data-drawer-id="sidebar-cart"]') && document.getElementById('sidebar-cart').getAttribute('aria-hidden') === 'false' ){
                // console.log('cart is open');
                    getCartData(init);
                } else if(targetMatched('.QuantitySelector__Button')){
                    const currentInput = target.closest('.QuantitySelector').querySelector('input')
                    const currentQuantity = currentInput.value;
                    const drawer = target.closest('form');
                    console.log(currentQuantity);
                    let timer;
                    timer= setInterval(() => {
                    const newQuantity = document.querySelector('.QuantitySelector>input').value;
                    
                        console.log(newQuantity)
                        if(newQuantity !== currentQuantity){
                        console.log(newQuantity);
                        getCartData(init);
                        clearInterval(timer);
                        }
                    }, 25);
                    } else if(targetMatched('#ka-atc')){
                        let timer;
                        timer= setInterval(() => {
                            
                        if(document.getElementById('sidebar-cart').getAttribute('aria-hidden') === 'false'){
                        getCartData(init);
                        clearInterval(timer);
                        }
                    }, 25);
                    } else if(targetMatched('.CartItem__Remove')){
                        const noOfItems = document.querySelectorAll('CartItemWrapper').length
                                let timer;
                                timer= setInterval(() => {
                                
                                if(document.querySelectorAll('.CartItemWrapper')?.length === 1 ){
                                    getCartData(init);
                                    clearInterval(timer);
                                }
                            }, 25);
                            }
                        })
                        
                    
                // })
        })
   

};