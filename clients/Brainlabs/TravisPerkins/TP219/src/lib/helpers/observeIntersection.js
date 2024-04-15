const obsIntersection = (target, threshold, callback) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    },
    {
      threshold
    }
  );
  if (!target) {
    return;
  }

  observer?.observe(target);
};
export default obsIntersection;
