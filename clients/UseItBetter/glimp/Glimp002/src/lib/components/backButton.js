const backButton = (id) => {
  const htmlStr = `<button class="${id}__btnBack">
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81 5l3.97-3.78a.69.69 0 000-1.01.777.777 0 00-1.06 0L.22 4.494a.69.69 0 000 1.01l4.5 4.286a.777.777 0 001.06 0 .69.69 0 000-1.01L1.81 5z" fill="#333"></path>
    </svg> <span>Back</span> </button>`;
  return htmlStr;
};

export default backButton;
