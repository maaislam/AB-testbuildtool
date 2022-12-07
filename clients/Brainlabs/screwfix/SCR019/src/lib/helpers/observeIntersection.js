const obsIntersection = (target, threshold, callback) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    },
    {
      threshold,
      rootMargin: '-200px 0px -200px 0px'
    }
  );
  if (!target) {
    return;
  }

  observer?.observe(target);
};
export default obsIntersection;
