const obsIntersection = (target, threshold, callback) => {
  //console.log(target);
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
