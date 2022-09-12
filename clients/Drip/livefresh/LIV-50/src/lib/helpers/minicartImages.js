import { imageSets } from './imageSets';

export const minicartImages = () => {
    let imageCount = 0;
    let check = false;
    document.querySelectorAll('.CartItemWrapper').forEach((item, index, array) => {
        if (item.querySelector('.CartItem__Title a').textContent === 'Klassische Saftkur  - 5 Tage') {
            check = true;
            item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
            item.querySelector('img').setAttribute('src', imageSets.Tage_5.imageURL);
            item.querySelector('img').onload = () => {
                console.log('test opacity custom');
             document.querySelector('#sidebar-cart').classList.add('test-opacity');
            };
        } else if (item.querySelector('.CartItem__Title a').textContent === 'Klassische Saftkur  - 3 Tage') {
            check = true;
            item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
            item.querySelector('img').setAttribute('src', imageSets.Tage_3.imageURL);
            item.querySelector('img').onload = () => {
                console.log('test opacity custom');
             document.querySelector('#sidebar-cart').classList.add('test-opacity');
            };
        } else if (item.querySelector('.CartItem__Title a').textContent === 'Klassische Saftkur  - 7 Tage') {
            check = true;
            item.querySelector('img').classList.add('LIV-50__image-mini-saftkur');
            item.querySelector('img').setAttribute('src', imageSets.Tage_7.imageURL);
            item.querySelector('img').onload = () => {
                console.log('test opacity custom');
             document.querySelector('#sidebar-cart').classList.add('test-opacity');
            };
        }
        imageCount += 1;
        if (imageCount === array.length) {
            console.log('test opacity');
            if(check === false){
                document.querySelector('#sidebar-cart').classList.add('test-opacity');
            }
        }
    });
};
