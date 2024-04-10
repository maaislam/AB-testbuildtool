const obsIntersection = (target, threshold, callback) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        //if (entry.intersectionRatio > 0 && entry.isIntersecting && entry.boundingClientRect.y > 0) {

        //}
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
