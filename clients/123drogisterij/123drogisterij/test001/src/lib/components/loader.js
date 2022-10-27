const loader = (id) => {
  const htmlStr = `<div class=" ${id}_loader fa-3x">
    <i class="fas fa-spinner fa-spin"></i></div>`;

  return htmlStr.trim();
};

export default loader;
