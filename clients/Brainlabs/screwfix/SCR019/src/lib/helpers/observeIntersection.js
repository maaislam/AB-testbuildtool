const obsIntersection = (target, threshold, callback) => {
  const isMobile = () => window.matchMedia('(max-width: 640px)').matches;
  const rootMarg = isMobile() ? '-200px 0px -200px 0px' : '0px 0px 0px 0px';
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    },
    {
      threshold,
      rootMargin: rootMarg
    }
  );
  if (!target) {
    return;
  }

  observer?.observe(target);
};
export default obsIntersection;
