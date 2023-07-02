const gameNameElem = (name) => `
      <p>DOVE GIOCARE A <span class="${name.length > 11 ? 'newline' : ''}">"${name}"</span></p>  `;
export default gameNameElem;
