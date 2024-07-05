const stepThree = (id) => {
  const html = `
         <div class="${id}__validateUserModal-container-content-step-3 ${id}__step" data-attr='3'>
                <h2>Ops!</h2>
                <p class="${id}__firstMsg">We´re excited to bring you the feature you´re looking for, but it´s not quite
                    ready yet.
                    Rest assured, your data has not been saved, and your privacy is important to us.</p>
                <p class="${id}__secondMsg">Want a heads-up when this feature drops? Share your email below</p>
                <form class="${id}__form-three">
                    <div class="${id}__form-field ${id}__email">
                        <input id="email"
                            type="email"
                            name="email"
                            placeholder="Email address">
                    </div>
                    <div class="legal__rule">
                        <div class="toggle--checkbox">
                            <label class="toggle__agree">
                                <input type="checkbox"
                                    class="checkbox">
                                <span class="control-indicator"></span>
                                <span class="toggle__button">I agree. <a href="/page/anvandarvillkor/">Term and Conditions</a> applies</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit"
                            class="${id}__submitBtn">Submit</button>
                </form>
                <p class="${id}__thirdMsg">Thank you for your patience,</p>
                <p class="${id}__forthMsg">and we look forward to enhancing your experience soon!</p>
            </div>
    `;
  return html.trim();
};

export default stepThree;
