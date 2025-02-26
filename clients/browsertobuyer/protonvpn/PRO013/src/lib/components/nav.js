const nav = (id) => {
    const htmlStr = `
    <nav class="nav">
        <ul class="flex flex-wrap gap-x-4 gap-y-1">
            <li>
                <button id="whyProtonBtn" class="${id}__whyProton font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Why Proton VPN</button>
                <div id="whyProtonPopOver" class="${id}__popOver absolute left-0 mt-2 hidden w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-200 z-50">
                    <ul class="space-y-3">
                        <li>
                            <a href="#" class="block text-lg font-semibold text-gray-900 hover:text-purple-600">Why do I need a VPN?</a>
                            <p class="text-gray-600 text-sm">Find out how a VPN can help you</p>
                        </li>
                        <li>
                            <a href="#" class="block text-lg font-semibold text-gray-900 hover:text-purple-600">All Features</a>
                            <p class="text-gray-600 text-sm">Learn how our advanced security and privacy features allow you to browse the web with peace of mind</p>
                        </li>
                        <li>
                            <a href="#" class="block text-lg font-semibold text-gray-900 hover:text-purple-600">VPN for Streaming</a>
                            <p class="text-gray-600 text-sm">Watch what you want, when you want, from wherever you want with Proton VPN</p>
                        </li>
                        <li>
                            <a href="#" class="block text-lg font-semibold text-gray-900 hover:text-purple-600">Why Proton VPN</a>
                            <p class="text-gray-600 text-sm">See how we compare with other VPN providers</p>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="/pricing" 
                    class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Pricing</a>
            </li>
            <li>
                <a href="/download" 
                    class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Download</a>
            </li>
            <li>
                <a href="/resources" 
                    class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Resources</a>
            </li>
            <li>
                <a href="/business" 
                    class="font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                >Business VPN</a>
            </li>
        </ul>
    </nav>`;

    return htmlStr;
};
export default nav;
