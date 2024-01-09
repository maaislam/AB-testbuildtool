import casinoStr from './casionoStr';
import casinoData from '../data/casinoData';

const heroBanner = (ID) => {
  const html = `
    <section class="section section_top ${ID}__heroBanner">
    <div class="container">
      <div class="row">
        <div class="col-12 ${ID}__section_1">
          <p class="text ${ID}__first_text">La Fuente #1 Para Todo Sobre Tragaperras</p>
          <div class="${ID}__heading_Box">
          <h1 class="heading heading_hero ${ID}__heading_hero">Bienvenido</h1>
          <h1 class="heading heading_hero ${ID}__heading_hero">A Slotjava!</h1>
          </div>
          <p class="text">
            ¡Accede a 1000s de demos de tragaperras, reseñas confiables, guías informativas y los últimos bonos!
          </p>
          <div class="button-list">
            <a class="button button_hero button-list__button" href="/tragamonedas-gratis/"
              >Jugar slots gratis</a
            >
            <a class="button button_secondary button-list__button" href="/nuevos-casinos-online/"
              >Mejores casinos online</a
            >
          </div>
        </div>
  
        <div class="col-12 ${ID}__section_2">
            ${casinoStr(ID, casinoData)}
        </div>
      </div>
    </div>
  </section>
    `;

  return html.trim();
};

export default heroBanner;
