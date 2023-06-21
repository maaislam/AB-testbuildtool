const difficutyFilter = (id, data) => {
  const { name } = data;
  const joinedName = name.split(' ').join('-');
  const htmlStr = `
      <div class="${id}__difficulty-wrapper">
          <input 
            type="radio" 
            id="${id}__difficulty-${joinedName}" 
            name="${id}__difficulty" 
            data-filter="difficulty"
            value="${name}" 
            ${name.includes('medium') ? 'checked' : ''}>
          <label for="${id}__difficulty-${joinedName}">
              <div class="radio-text">
                <span>${name}</span>
              </div>
          </label>       
      </div>`;

  return htmlStr;
};

export default difficutyFilter;
