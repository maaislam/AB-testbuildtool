const popover = (id) => {
    const htmlStr = `
      <div id="whyProtonPopOver" class="${id}__popOver hidden">
          <ul>
              <li>
                  <a class="${id}__whyVpnLink block p-4 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <div class="${id}__vpnText font-semibold">Why do I need a VPN?</div>
                      <p class="text-sm text-body">Find out how a VPN can help you</p>
                  </a>
              </li>
              <li>
                  <a class="${id}__featuresLink block p-4 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <div class="${id}__vpnText font-semibold">All Features</div>
                      <p class="text-sm text-body">Learn how our advanced security and privacy features allow you to browse the web with peace of mind</p>
                  </a>
              </li>
              <li>
                  <a class="${id}__streamingLink block p-4 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <div class="${id}__vpnText font-semibold">VPN for Streaming</div>
                      <p class="text-sm text-body">Watch what you want, when you want, from wherever you want with Proton VPN</p>
                  </a>
              </li>
              <li>
                  <a class="${id}__whyProtonVpnLink block p-4 text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25">
                      <div class="${id}__vpnText font-semibold">Why Proton VPN</div>
                      <p class="text-sm text-body">See how we compare with other VPN providers</p>
                  </a>
              </li>
          </ul>
      </div>`;

    return htmlStr;
};
export default popover;
