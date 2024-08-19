const stepThree = (id) => {
  const html = `
         <div class="${id}__validateUserModal-container-content-step-3 ${id}__step" data-attr='3'>
                <h2>Ops!</h2>
                <p class="${id}__firstMsg">We´re excited to bring you the feature you´re looking for, but it´s not quite
                    ready yet.
                    Rest assured, your data has not been saved, and your privacy is important to us.</p>
                <p class="${id}__thirdMsg">Thank you for your patience,</p>
                <p class="${id}__forthMsg">and we look forward to enhancing your experience soon!</p>
                <div class="${id}__questions">
                    <p>Got burning questions or rad suggestions?</p>
                    <a href="mailto: kontakt@tvmatchen.nu">Contact Us</a>
                </div>
            </div>
    `;
  return html.trim();
};

export default stepThree;
