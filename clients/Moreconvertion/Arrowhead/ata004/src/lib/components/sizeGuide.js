const sizeGuide = (ID) => {
  const htmlStr = `
    <div class="${ID}__sizeGuideContainer">
      <div class="sizeGuideHeader">Size Guidelines</div>
        <div class="sizeGuideDetails">
          <div class="sizeGuideFitProfile">
            <span class='fitProfile'>Fit profile:</span>
            <p class='productTitle'>carrier joggers</p>
            <span class='tagLine'>True to Size with a Slim Athletic Fit</span>
          </div>
          <div class="sizeGuideLineHeader">
            <span>Size guidelines</span>
          </div>
          <div class="sizeGuideImg">
            <img src='https://more-conversions.s3.amazonaws.com/jogger-sizeguide.png'/>
          </div>
          <div class="productImg">
            <img src='https://more-conversions.s3.amazonaws.com/jogger-img1.png'/>
          </div>
          <div class="info">
            <hr/>
            <span>Please note that the waistbands are highly flexible and will  stretch to accommodate your holstered handgun. Do not include the size of your gun when calculating your waist measurement to choose a size.</span>
            <hr/>
            <span>Joggers taper at the ankle and  run shorter than traditional pants.
            For a loose fit, consider ordering up a size.</span>
          </div>
        </div>
      </div>
    </div>
    `;
  return htmlStr;
};

export default sizeGuide;
