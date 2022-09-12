const modalStructure = (id) => {
  return `
  <div class="${id}__modal modal">
  <div class="modal__dialog"><a
         class="${id}__modal__close"><span>Close</span></a>
      <div class="modal__content modal__content--consent">
         <div class="${id}__modalImage">
            <img src="https://res.cloudinary.com/conversion-rate-experts/image/upload/w_auto,dpr_auto,c_scale,f_auto,q_auto/Photo-of-the-hardcover-in-slipcase.jpg"/>
         </div>
         <div class="${id}__modalParagraph lead">
         Thank you for reading our article. Please let us give you a free copy of our best-selling book Making Websites Win, where you will find everything about how we work and what we have learned about:
         </div>
        <ul class="checklist">
            <li>What successful web businesses do differently (and others get wrong).</li>
            <li>How to easily identify your website’s biggest opportunities.</li>
            <li>A step-by-step guide to apply The CRE Methodology™ to dramatically increase your sales.</li>
            <li>A treasure trove of proven solutions for growing businesses.</li>
        </ul>
        <div class="${id}__modalParagraph">
        We value the people who read our blog, so this is a way we can give something valuable back to you.
        </div>
        <p style="cursor: pointer;" class="${id}__modalLink"><a class="button button--block button--primary"
       href="/free-book/"
       data-no-instant=""
       style="cursor: pointer;">Get your free copy of our best-selling book</a></p>
      </div>
  </div>
</div>
    
    `;
};

export default modalStructure;
