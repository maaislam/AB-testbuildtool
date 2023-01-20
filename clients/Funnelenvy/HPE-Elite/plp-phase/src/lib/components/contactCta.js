const contactCta = (id) => {
  const htmlStr = `
  <span class="${id}__contactcommercial add-to-cart-icon t-inline-block">
    <a target="_blank" href="https://b2b.hpe.com/navigation/openContactPDF?fileName=Portail%20Matinfo%205%20Lot%204_Organisation%20HPE.pdf">Contactez votre  équipe commerciable</a>
  </span>`;
  return htmlStr.trim();
};

export default contactCta;
