import { swish, trustly } from './icons';

const addCard = (id) => {
  const htmlStr = `
    <div class="${id}_card-container">
        <div class="${id}_card-container-infos">
            <div class="${id}_card-container-infos-icon">
                <a href="/till/jalla-casino/" target="_blank" rel="nofollow" class="${id}__casino-logo"
                ><img
                    src="/wp-content/uploads/2020/03/jalla-casino-1.png"
                    alt="Jalla casino logo"
                    width="130"
                    height="77"
                    style="display: block; object-fit: contain"
                /></a>
            </div>
            <div class="${id}_card-container-infos-texts">
                <div class="${id}_card-container-infos-texts-box">
                    <div class="${id}_card-container-infos-texts-box-icon">
                        ${swish}
                        <p>Swish</p>
                    </div>
                    <div class="${id}_card-container-infos-texts-box-icon">
                        ${trustly}
                        <p>Trustly</p>
                    </div>
                </div>
                <p>200 freespins på + Ancient Fortunes Poseidon Megaways</p>
                <a href="/till/jalla-casino/" target="_blank" rel="nofollow" class="cta__1q8ve ${id}__casino-cta">Besök Casinot</a>
            </div>
        </div>
        <div class="tc__17EP- row">
            <li>
                Reklamlänk |<a href="/tc/jallacasino/" rel="nofollow" target="_blank"
                >Villkor gäller</a
                >| 18+ år | Spela ansvarsfull | Regler &amp; villkor gäller |
            </li>
            <li>
                <a href="https://stodlinjen.se/" rel="nofollow" target="_blank"
                >Stödlinjen.se</a
                >|<a href="https://www.spelpaus.se/" rel="nofollow" target="_blank"
                >spelpaus.se</a
                >||<a href="https://www.spelpaus.se/" rel="nofollow" target="_blank"
                >Spela ansvarsfullt</a
                >|<a href="https://stodlinjen.se/" rel="nofollow" target="_blank"
                >Stödlinjen.se</a
                >
            </li>
        </div>
    </div>`;

  //   if (!document.querySelector(`.${id}_card-container`)) {
  //     document
  //       .querySelector('.sidebar__3SWUh .ctaWrapper__18skR')
  //       .insertAdjacentHTML('beforebegin', htmlStr);

  return htmlStr;
};

export default addCard;
