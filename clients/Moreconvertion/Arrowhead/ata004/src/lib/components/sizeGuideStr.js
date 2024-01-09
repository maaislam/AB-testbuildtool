export const sizeGuideStr = (ID) => {
  return `
        <div class="${ID}__sizeGuideContainer">
        <div class="sizeGuideHeader">Size Guidelines</div>
        <div class="div sizeGuideDetails">
          <div class="sizeGuideFitProfile">
            <h3>Fit profile:</h3>
            <h4>carrier joggers</h4>
            <h5>True to Size with a Slim Athletic Fit</h5>
          </div>
          <div class="sizeGuideLineHeader">
            <span>Size guidelines</span>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col">Measurement</th>
                <th scope="col">Waist Size</th>
                <th scope="col">Jogger Inseam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">S</th>
                <td>27”-30”</td>
                <td>27 1/4”</td>
              </tr>
              <tr>
                <th scope="row">M</th>
                <td>30”-33”</td>
                <td>28 7/8”</td>
              </tr>
              <tr>
                <th scope="row">L</th>
                <td>33”-35”</td>
                <td>29 1/2”</td>
              </tr>
              <tr>
                <th scope="row">XL</th>
                <td>35”-38”</td>
                <td>30 1/8”</td>
              </tr>
              <tr>
                <th scope="row">2XL</th>
                <td>48”-42”</td>
                <td>30 3/4”</td>
              </tr>
              <tr>
                <th scope="row">3XL</th>
                <td>42”-46”</td>
                <td>30 3/4”</td>
              </tr>
            </tbody>
          </table>
          <div class="sizeGuideImageBox"></div>
          <div class="sizeGuideTextContainer">
            <hr/>
            <p>Please note that the waistbands are highly flexible and will  stretch to accommodate your holstered handgun. Do not include the size of your gun when calculating your waist measurement to choose a size.</p>
            <hr/>
            <p>Joggers taper at the ankle and  run shorter than traditional pants.
            For a loose fit, consider ordering up a size.</p>
          </div>
        </div>
        </div>
    `.trim();
};
