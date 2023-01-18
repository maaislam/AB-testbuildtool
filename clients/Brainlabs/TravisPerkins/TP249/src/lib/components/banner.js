const banner = (id) => {
  const imageSrc =
    'https://sb.monetate.net/img/1/c/thumbnail/2908/6.11.eJwNyNEKgyAUBuB3-a_FkzU38WXGagcVzKQdaxC9e1198B2InEIU-OHZKdSVt8T7e1qK8P_e0nJWaGuGRxSpnug36nkpLB9hfUNpDmTIOkMPazvnjK4lQGFPX4nw_as_L-bdINE.Y-OJgTtK3GcKwtfTzIsAy8qzosaHNzdFWRNe6rwLNY0/272x360.png';
  const htmlStr = `
    <div class="${id}__banner">
        <div class="${id}__banner--left" style="background-image:url(${imageSrc})">
            <img width=0 src="${imageSrc}" alt="door visualiser" />
        </div>
        <div class="${id}__banner--right">
            <h2 class="${id}__banner--title">Door Visualiser</h2>
            <p class="${id}__banner--body">Want to see how this product will look in a living room or kitchen? Take a look
                with the handy new Door Visualiser.
            </p>
            <a href="https://travisperkins.doorvisualiser.com/"
                
                class="${id}__banner--link">Visualise now</a>
        </div>
    </div>
  `;

  return htmlStr.trim();
};

export default banner;
