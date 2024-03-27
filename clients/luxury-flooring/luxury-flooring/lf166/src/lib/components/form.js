export const form = (ID) => {
  const html = `
    <form class="${ID}__preOrderForm">
        <div class="${ID}__preOrderForm-form-field">
            <label for="${ID}__email" class="${ID}__preOrderForm-label" data-symbol='true'>Email</label>
            <input required type="email" id="${ID}__email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="${ID}__preOrderForm-input">
        </div>
        <div class="${ID}__preOrderForm-form-field">
            <label for="${ID}__number" class="${ID}__preOrderForm-label">Phone number</label>
            <input type="tel" id="${ID}__number" class="${ID}__preOrderForm-input">
        </div>
        <div class="${ID}__preOrderForm-form-field">
            <label for="${ID}__m2" class="${ID}__preOrderForm-label">How many m2 do you require?</label>
            <input type="text" id="${ID}__m2" class="${ID}__preOrderForm-input">
        </div>
        <div class="${ID}__preOrderForm-form-field">
            <label for="${ID}__delivery" class="${ID}__preOrderForm-label">When do you require delivery?</label>
            <input type="text" id="${ID}__delivery" class="${ID}__preOrderForm-input">
        </div>
        <div class="${ID}__preOrderForm-form-field">
            <button type="submit" class="${ID}__preOrderForm-submit action primary tocart">Submit pre-order request</button>
        </div>
       
    </form>
    `;

  return html.trim();
};
