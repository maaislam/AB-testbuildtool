import { discoverIcon } from '../assets/icon';

const modal = (ID) => {
  const htmlStr = `
        <div class="${ID}__modalContainer">
            <div class="${ID}__modalWrapper">
                <div class="${ID}__icon">
                ${discoverIcon}
                </div>
                <h1 class="${ID}__header">Get discovered today!</h1>
                <p class="${ID}__subHeader">Make your profile visible and be discovered by employers with opportunities</p>
                <p class="${ID}__subHeader">that match your skills and experience!</p>
                <p class="${ID}__subHeader">Rest assured, your information is secure.
                    <a href="https://www.dice.com/support/candidate/candidate-profile/profile---private-email.html" target="_blank">Learn more</a>
                </p>
                <div class="${ID}__formWrapper">
                    <div class="form__group">
                        <div class="form__radio-group">
                            <input type="radio" name="profileVisibility" id="yes" class="form__radio-input" checked="checked">
                            <label class="form__label-radio" for="yes" >
                                <span class="form__radio-button"></span> Yes, make my profile visible
                            </label>
                        </div>
                        <div class="form__radio-group">
                            <input type="radio" name="profileVisibility" id="maybe" class="form__radio-input">
                            <label class="form__label-radio" for="maybe" >
                                <span class="form__radio-button"></span> Maybe later
                            </label>
                        </div>
                    </div>
                </div> 
                <button class="${ID}__continueCta"><span>Continue</span></button>   
                <span class="${ID}__crossIcon">&#x2715;</span> 
            </div>       
        </div>
    `;

  return htmlStr;
};
export default modal;
