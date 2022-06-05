/**
 * @fileoverview The triggers file contains all activation conditions for the experiment.
 * This is the first file to be evaluated.
 */
import activate from './lib/experiment'
import { pollerLite } from '../../../../../util'

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent)
const isPDP = location.pathname.indexOf('/product') !== -1
if (!ieChecks && isPDP) {
  pollerLite(['body', '#judgeme_product_reviews'], activate)
}
