/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run after scrolling
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */
function scrollStop(target, callback, refresh = 60) {
  //Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  //Setup scrolling variable
  let isScrolling;

  //Listen for scroll events
  target.addEventListener(
    'scroll',
    () => {
      //Clear our timeout throughout the scroll
      clearTimeout(isScrolling);

      //Set a timeout to run after scrolling ends
      isScrolling = setTimeout(callback, refresh);
    },
    false
  );
}

export default scrollStop;
