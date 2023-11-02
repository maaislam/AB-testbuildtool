const progressBar = (id, progressWidth) => {
  const htmlStr = `<div class='${id}__discountProgress'>
      <div class="${id}__discountProgress-bar" style='width:${progressWidth}%'></div>
    </div>`;

  return htmlStr;
};

export default progressBar;
