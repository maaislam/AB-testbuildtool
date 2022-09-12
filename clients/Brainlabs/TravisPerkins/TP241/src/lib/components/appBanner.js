import { getMobileOperatingSystem } from '../helpers/utils';

const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<path d="M14.7676 13.6913C14.8403 13.7615 14.8983 13.8455 14.9382 13.9384C14.9781 14.0313 14.9991 14.1312 15 14.2322C15.0008 14.3333 14.9816 14.4335 14.9433 14.5271C14.905 14.6206 14.8485 14.7056 14.7771 14.7771C14.7056 14.8485 14.6206 14.905 14.5271 14.9433C14.4335 14.9816 14.3333 15.0008 14.2322 15C14.1312 14.9991 14.0313 14.9781 13.9384 14.9382C13.8455 14.8983 13.7615 14.8403 13.6913 14.7676L7.5 8.57629L1.30867 14.7676C1.23845 14.8403 1.15446 14.8983 1.06159 14.9382C0.968729 14.9781 0.868849 14.9991 0.767781 15C0.666714 15.0008 0.566484 14.9816 0.472939 14.9433C0.379394 14.905 0.294409 14.8485 0.222941 14.7771C0.151473 14.7056 0.0949538 14.6206 0.0566817 14.5271C0.0184095 14.4335 -0.000849508 14.3333 2.87389e-05 14.2322C0.000906986 14.1312 0.0219048 14.0313 0.0617968 13.9384C0.101689 13.8455 0.159676 13.7615 0.232376 13.6913L6.42371 7.5L0.232376 1.30867C0.0937228 1.16511 0.0170014 0.972835 0.0187357 0.77326C0.0204699 0.573684 0.100521 0.382774 0.241647 0.241647C0.382774 0.100521 0.573684 0.0204699 0.77326 0.0187357C0.972835 0.0170014 1.16511 0.0937228 1.30867 0.232376L7.5 6.42371L13.6913 0.232376C13.7615 0.159676 13.8455 0.101689 13.9384 0.0617968C14.0313 0.0219048 14.1312 0.000906986 14.2322 2.87389e-05C14.3333 -0.000849508 14.4335 0.0184095 14.5271 0.0566817C14.6206 0.0949538 14.7056 0.151473 14.7771 0.222941C14.8485 0.294409 14.905 0.379394 14.9433 0.472939C14.9816 0.566484 15.0008 0.666714 15 0.767781C14.9991 0.868849 14.9781 0.968729 14.9382 1.06159C14.8983 1.15446 14.8403 1.23845 14.7676 1.30867L8.57629 7.5L14.7676 13.6913Z" fill="white"/>
</svg>`;

const storeUrlConfig = {
  ios: 'http://apps.apple.com/gb/app/travis-perkins/id1511514158',
  android:
    'https://play.google.com/store/apps/details?id=com.travisperkins.tradeapp&hl=en_US&gl=GB',
  unknown: 'https://play.google.com/store/apps/details?id=com.travisperkins.tradeapp&hl=en_US&gl=GB'
};

const appBanner = (id) => {
  const htmlStr = `
  <div class ="${id}__appbanner-wrapper">
    <div class="${id}__appbanner">
        <div class="${id}__appbanner--close">${closeIcon}</div>
        <div class="${id}__appbanner--titleblock">
            <div class="logo"><img src="http://sb.monetate.net/img/1/581/4259979.png" alt="logo" /></div>
            <div class="title">
                <ul>
                    <li>Save Time,</li>
                    <li>Work Smarter.</li>
                </ul>
            </div>
        </div>
        <a href="${
          storeUrlConfig[getMobileOperatingSystem()]
        }" class="${id}__appbanner--getapp">Get the app</a>
    </div>
    </div>`;

  return htmlStr;
};

export default appBanner;
