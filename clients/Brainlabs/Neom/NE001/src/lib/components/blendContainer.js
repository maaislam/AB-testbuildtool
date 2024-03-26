export const blendContainer = (ID) => {
  const html = `
        <div class="${ID}__blendContainer">
            <div class="${ID}__blendContainer-wrapper">
                <div class="${ID}__blendContainer-img">
                    <img src="https://img.creator-prod.zmags.com/assets/images/5f918709705c696d1b453e24.jpeg?im=Resize,width=768" alt="AN OIL BLEND FOR
                    EVERY MOMENT" />
                </div>
                <div class="${ID}__blendContainer-info">
                    <h1 class="${ID}__blendContainer-title">AN OIL BLEND FOR</br>EVERY MOMENT</h1>
                    <p class="${ID}__blendContainer-subtitle">Expertly blended with the purest ingredients and infused with 100% natural fragrances to help boost your wellbeing.</p>
                    <a class="${ID}__blendContainerCTA" href="https://neomwellbeing.com/collections/essential-oil-blends" target="_blank">SHOP NOW</a>
                </div>
            </div>   
        </div>
    `;

  return html.trim();
};
