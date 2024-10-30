const vaccineDescription = (id, info) => {
  const html = `
    <div class="${id}__vaccineDescriptionWrapper">
        <div class="${id}__vaccineDescriptionContainer o-wrapper">
            <div class="${id}__imageWrapper">
    
            </div>
            <div class="${id}__infoWrapper">
                <div class="${id}__infoContainer">
                    <h2 class="${id}__title">Why choose CityDoc?</h2>
                    <p class="${id}__subtitle">Specialising in a personalised approach to travel health, our clinic ensures you receive the vaccinations and care you need promptly. Our focus on convenience and comprehensive services makes us a preferred choice for local and traveling patients&nbspalike.</p>
                    <ul class="${id}__info-list">
                        ${info.map((item) => `<li class="${id}__c-usp">${item}</li>`).join('\n')}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  `;
  return html.trim();
};
export default vaccineDescription;
