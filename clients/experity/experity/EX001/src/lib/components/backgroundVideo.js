const backgroundVideo = (id) => {
  const html = `
        <video 
            class="${id}__hero-video" 
            autoplay 
            muted
            loop
            playsinline 
            preload="metadata" 
            aria-label="Promotional background video"
          >
            <source src="https://abtestvideos.s3.ap-southeast-2.amazonaws.com/%231010.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="${id}__video-overlay"></div>
    `;
  return html.trim();
};

export default backgroundVideo;
