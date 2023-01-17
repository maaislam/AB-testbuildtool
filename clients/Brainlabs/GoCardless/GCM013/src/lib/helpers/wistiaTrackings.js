import gaTracking from '../services/gaTracking';

/*eslint-disable no-underscore-dangle */
const wistiaTrackings = (wID) => {
  //const WISTIA_ID = variation === 'control' ? '4c570et3gk' : wistiaId();

  const trackingPoints = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  let counter;
  window._wq = window._wq || [];
  window._wq.push({
    id: wID,
    onReady: (video) => {
      counter = 1;

      video.bind('play', () => {
        if (counter === 1) {
          gaTracking('user starts the video');
        }
        if (counter > 1) {
          gaTracking('User rewatches the video');
        }
        counter += 1;
      });

      video.bind('pause', () => {
        const percentWatched = Math.round(video.percentWatched() * 100);
        gaTracking(`user pauses the video after watching ${percentWatched}%`);
      });
      video.bind('enterfullscreen', () => {
        gaTracking('user goes fullscreen');
      });
      video.bind('cancelfullscreen', () => {
        gaTracking('user exits fullscreen');
      });
      video.bind('percentwatchedchanged', (percent) => {
        const trackingPointmatched = trackingPoints.filter(
          (trackingPoint) => Math.ceil(percent * 100) % trackingPoint <= 2
        );
        //console.log(trackingPointmatched);
        if (trackingPointmatched.length > 0) {
          gaTracking(
            `user has seen ${trackingPointmatched[trackingPointmatched.length - 1]}% of the video`
          );
        }
      });
    }
  });
};

export default wistiaTrackings;
