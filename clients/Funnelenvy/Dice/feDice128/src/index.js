import activate from './lib/experiment';
import { addCss, pollerLite } from './lib/helpers/utils';

addCss('feDice128', 'https://seds.pilot.design-dev.dhiaws.com/dhi-snake-eyes@0.14.18/dist/dhi-snake-eyes/dhi-snake-eyes.css');
pollerLite(['.bm_we_know_section', () => typeof window.ga === 'function'], activate);
