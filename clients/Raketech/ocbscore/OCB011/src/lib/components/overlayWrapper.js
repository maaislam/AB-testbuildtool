const overlayWrapper = (id) => {
  const html = `
        <div class="${id}__overlayWrapper">
            <img alt="Background image" fetchpriority="high" decoding="async" data-nimg="fill" class="mui-1vqsmte" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw" srcset="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Focb_pattern.53a37f2e.png&amp;w=640&amp;q=75 640w, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Focb_pattern.53a37f2e.png&amp;w=750&amp;q=75 750w, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Focb_pattern.53a37f2e.png&amp;w=828&amp;q=75 828w, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Focb_pattern.53a37f2e.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Focb_pattern.53a37f2e.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Focb_pattern.53a37f2e.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Focb_pattern.53a37f2e.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Focb_pattern.53a37f2e.png&amp;w=3840&amp;q=75 3840w" src="/_next/static/media/ocb_pattern.53a37f2e.png">
            <div class="MuiBox-root mui-1ivnllj ${id}__overlay"></div>
        </div>
    `;
  return html.trim();
};

export default overlayWrapper;
