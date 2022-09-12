//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);

  var waitForEl = function (selector, callback) {
    let count = 0;
    if (document.querySelector(selector) != null) {
        callback();
    } else if (count < 100) {
        setTimeout(() => {
            waitForEl(selector, callback, ++count);
        }, 100);
    }
};

const dropdownItems = [
	{
 icon: 'proGaming', title: 'Gaming PCs', href: 'https://www.scan.co.uk/3xs/custom/gaming'
},
	{
icon: 'watercooled', title: 'Watercooled PCs', href: 'https://www.scan.co.uk/3xs/custom/gaming/watercooled-overclocked-pc#anc'
},
	{
icon: 'homeOffice', title: 'Home & Office PCs', href: 'https://www.scan.co.uk/3xs/custom/home-and-office'
},
	{
icon: 'proAudio', title: 'Audio PCs', href: 'https://www.scan.co.uk/3xs/custom/daw-digital-audio-workstation-pcs'
},
	{
icon: 'proVideo', title: 'Video Editing PCs', href: 'https://www.scan.co.uk/3xs/custom/hd-4k-video-editing-pcs-laptops'
},
	{
icon: 'proGraphics', title: 'Graphics PCs', href: 'https://www.scan.co.uk/3xs/custom/cad-graphics-workstations'
},
	{
icon: 'customLaptop', title: 'Custom Laptops', href: 'https://www.scan.co.uk/3xs/custom/laptop'
},

	{
icon: 'deepLearning', title: 'Deep Learning', href: 'https://www.scan.co.uk/3xs/enterprise/deep-learning'
}

	];
const dropdownItemComponent = [];
waitForEl('#mainMenu .menuLevel1', () => {
	document.querySelector('#mainMenu .menuLevel1 .systemsTab a').href = 'javascript:void(0);';
	for (i in dropdownItems) {
		var component = '<a class="scan-102-3x-menu-item"' + `href=${dropdownItems[i].href}  ><span class="icon ${dropdownItems[i].icon}"></span><span class="title">${dropdownItems[i].title}</span></a>`;
		dropdownItemComponent.push(component);
	}
	console.log(dropdownItemComponent);
	var component = `<div class="scan-102-3x scan-102-3x-none"><div class="scan-102-3x-dropdown"> <div class="scan-102-3x-custom-build"><p>Custom build your pc</p></div> <div class="scan-102-3x-menu">${dropdownItemComponent.join('\n')}</div>` + '<div class="scan-102-3x-cta-container"><a class="scan-102-3-view-all" href="https://www.scan.co.uk/3xs">View all</a></div> ' + '</div> </div>';
	document.querySelector('#mainMenu .menuLevel1 > ul').insertAdjacentHTML('afterend', component);
	document.querySelector('#mainMenu .menuLevel1 .systemsTab').addEventListener('mouseenter', () => {
		document.querySelector('#mainMenu .menuLevel1 .scan-102-3x').classList.remove('scan-102-3x-none');
	});
	document.querySelector('#mainMenu .menuLevel1 .systemsTab').addEventListener('mouseout', () => {
		document.querySelector('#mainMenu .menuLevel1 .scan-102-3x').classList.add('scan-102-3x-none');
	});

	$(document).on('mouseover', '', (e) => {
    if (e.target.closest('.scan-102-3x')) {
        $('.scan-102-3x').removeClass('scan-102-3x-none');
    } else {
        $('.scan-102-3x').addClass('scan-102-3x-none');
    }
});
});
};
