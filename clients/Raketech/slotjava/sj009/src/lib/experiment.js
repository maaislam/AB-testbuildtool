import setup from './services/setup';
import shared from './shared/shared';
import heroSection from './components/heroSection';
import { pollerLite } from './helpers/utils';
import initSwiper from './helpers/initSwiper';

const { ID, VARIATION } = shared;

const slideInfo = [
  {
    contentImg: 'https://img.cacaniqueisonline.com/wp-content/uploads/2020/10/cleopatra-igt_new.jpg?fit=max&h=180&w=235',
    bgImage: 'https://via.placeholder.com/300x200',
    title: 'Cleopatra Slot',
    text: 'A lenda da mulher mais famosa da história continua... Esse mistério aguarda você no caça-níquel Cleopatra, bem aqui.',
    btnFirstTxt: 'JOGUE Cleopatra AGORA',
    btnFirstLink: 'https://www.google.com',
    btnSecondTxt: 'JOGUE SLOTS ONLINE DE GRAÇA',
    btnSecondLink: 'https://www.google.com',
    order: VARIATION === '1' ? 1 : VARIATION === '2' ? 2 : 3,
  },
  {
    contentImg: 'https://img.cacaniqueisonline.com/wp-content/uploads/2020/10/cleopatra-igt_new.jpg?fit=max&h=180&w=235',
    bgImage: 'https://via.placeholder.com/300x200',
    title: 'Bônus de Cassino',
    text: 'Aproveite ao máximo sua experiência com bônus de boas-vindas, rodadas grátis e promoções',
    btnFirstTxt: 'Explore Todos os bônus',
    btnFirstLink: 'https://www.google.com',
    btnSecondTxt: 'Ver Jogadas Grátis',
    btnSecondLink: 'https://www.google.com',
    order: VARIATION === '1' ? 2 : VARIATION === '2' ? 3 : 1,
  },
  {
    contentImg: 'https://img.cacaniqueisonline.com/wp-content/uploads/2020/10/cleopatra-igt_new.jpg?fit=max&h=180&w=235',
    bgImage: 'https://via.placeholder.com/300x200',
    title: 'KTO Cassino:',
    text: 'R$ 200 de Bônus de boas-vindas! Descubra tudo o que eles têm a oferecer em nossa análise.',
    btnFirstTxt: 'Leia mais sobre KTO',
    btnFirstLink: 'https://www.google.com',
    btnSecondTxt: 'Explore Todos os Cassinos',
    btnSecondLink: 'https://www.google.com',
    order: VARIATION === '1' ? 3 : VARIATION === '2' ? 1 : 2,
  },

];

export default () => {
  setup(); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  pollerLite(
    ['.section.section_top'],
    () => {
      !document.querySelector(`.${ID}__hero`) && document.querySelector('.section.section_top').insertAdjacentHTML('afterend', heroSection(ID, slideInfo));
      initSwiper(ID);
    },
  );
};
