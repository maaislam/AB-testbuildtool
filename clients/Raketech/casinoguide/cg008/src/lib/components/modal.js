import modalStageOne from './modalStageOne';

const modal = (id) => {
  const htmlStr = `
    <div class="${id}__modal ${id}__hide">
         ${modalStageOne(id)}
    </div>`;
  return htmlStr;
};
export default modal;
