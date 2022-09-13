const levelCoverChildSelect = (id) => {
  const htmlStr = `
    <div class="${id}__levelcoversubs ${id}__hide">
        <div class="${id}__levelcoversubs--title">Select how long you would like to have this cover for.</div>
        <div class="${id}__levelcoversubs--agegroups">
            <span class="${id}__agegroup"
                data-agegroup="LevelToAgeSixtyFive">To age 65</span>
            <span class="${id}__agegroup"
                data-agegroup="LevelToAgeSeventy">To age 75</span>
            <span class="${id}__agegroup"
                data-agegroup="LevelToAgeEighty">To age 80</span>
        </div>
    </div>`;
  return htmlStr.trim();
};

export default levelCoverChildSelect;
