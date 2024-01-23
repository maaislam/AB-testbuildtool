import { descoverIcon } from '../assets/icon';

const modalStr = (ID) => {
  const html = `
        <div class="${ID}__modalContainer">
            <div class="${ID}__modalWrapper">
                <div class="${ID}__icon">
                ${descoverIcon}
                </div>
                <h1 class="${ID}__header">Get discovered today!</h1>
                <p class="${ID}__subHeader">Make your profile visible and be discovered by employers with opportunities</p>
                <p class="${ID}__subHeader">that match your skills and experience!</p>
                <p class="${ID}__subHeader">Rest assured, your information is secure.<a href="/">Learn more</a></p>   
                <form action="#" class="${ID}__formWrapper">
                    <div class="form__group">
                        <div class="form__radio-group">
                            <input type="radio" name="size" id="small" class="form__radio-input">
                            <label class="form__label-radio" for="small" >
                            <span class="form__radio-button"></span> Yes, make my profile visible
                            </label>
                        </div>
                        <div class="form__radio-group">
                            <input type="radio" name="size" id="large" class="form__radio-input">
                            <label class="form__label-radio" for="large" >
                            <span class="form__radio-button"></span> Maybe later
                            </label>
                        </div>
                    </div>
                </form> 
                <button class="${ID}__continueCta"><span>Continue</span></button>   
                <span class="${ID}__crossIcon">&#x2715;</span> 
            </div>       
        </div>
    `;

  return html.trim();
};
export default modalStr;
