/*eslint-disable no-underscore-dangle */
const wistiaTrackings = (fireEvent, shared) => {
  const WISTIA_ID = 'pb0x2kjuf3';
  window._wq = window._wq || [];
  window._wq.push({
    id: WISTIA_ID,
    onReady: (video) => {
      video.bind('pause', () => {
        const percentWatched = Math.round(video.percentWatched() * 100);
        fireEvent(`user pauses the video after watching ${percentWatched}%`, shared);
      });
      video.bind('enterfullscreen', () => {
        fireEvent('user goes fullscreen', shared);
      });
      video.bind('cancelfullscreen', () => {
        fireEvent('user exits fullscreen', shared);
      });
      video.bind('percentwatchedchanged', (percent) => {
        fireEvent(`user has seen ${Math.round(percent * 100)}% of the video`, shared);
      });
    }
  });
};

export default wistiaTrackings;
