import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

const validPaths = [
  '//techhub.dice.com/2017-contact-us-v2.html?QA=true',
  '//techhub.dice.com/2017-contact-us.html?QA=true',
  '//techhub.dice.com/2018-SR-contact-us.html?QA=true',
  '//techhub.dice.com/2018-WS-contact-us.html?QA=true',
  '//techhub.dice.com/2019-homepagebannertest.html?QA=true',
  '//techhub.dice.com/2019-homepagebannertest.html?fe-dice62=true&QA=true',
  '//techhub.dice.com/Dice-Contact-Us---RcrPkg_2020v3.html?QA=true',
  '//www.dice.com/hiring/contact-us/post-jobs?QA=true',
  '//www.dice.com/hiring/contact-us/source-talent?QA=true'
];
console.log('🚀 ~ validPaths:', validPaths);

if (!ieChecks) {
  pollerLite(['body', 'header'], activate);
}
//techhub.dice.com/2017-contact-us-v2.html?QA=true
//techhub.dice.com/2017-contact-us.html?QA=true
//techhub.dice.com/2018-SR-contact-us.html?QA=true
//techhub.dice.com/2018-WS-contact-us.html?QA=true
//techhub.dice.com/2019-homepagebannertest.html?QA=true
//techhub.dice.com/2019-homepagebannertest.html?fe-dice62=true&QA=true
//techhub.dice.com/Dice-Contact-Us---RcrPkg_2020v3.html?QA=true
//www.dice.com/hiring/contact-us/post-jobs?QA=true
//www.dice.com/hiring/contact-us/source-talent?QA=true
