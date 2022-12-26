const initaialScan = (id) => {
  const scanCount = sessionStorage.getItem(`${id}__count`);
  const fullname = sessionStorage.getItem(`${id}__fullname`);
  const currentlocation = sessionStorage.getItem(`${id}__currentlocation`);

  const htmsStr = `
    <div class="${id}__initialscandata">
        <p class="bold"><span class="highlight">${scanCount}</span>+ records</p>
        <p class="small">found for ${fullname}, ${currentlocation} </p>
    </div>`;

  return htmsStr.trim();
};
export default initaialScan;
