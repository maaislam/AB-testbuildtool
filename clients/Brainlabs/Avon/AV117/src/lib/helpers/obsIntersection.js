export const obsIntersection = (target, callback, config) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //if (entry.intersectionRatio > 0 && entry.isIntersecting && entry.boundingClientRect.y > 0) {

      //}
      callback(entry);
    });
  }, config);
  if (!target) {
    return;
  }

  observer?.observe(target);
};
